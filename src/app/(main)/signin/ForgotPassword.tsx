"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { formSchema } from "./forgot-password-schema";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import spaceBarParcer from "@/lib/spaceBarParcer";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForgotPasswordMutation } from "@/lib/redux/features/authApi";

export default function ForgotPassword() {
  // Серверные функции
  const [forgot, { isLoading }] = useForgotPasswordMutation();
  // Задаем форму
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // Собираем информацию с форм
  const forgotpasswordfunc = async (data: z.infer<typeof formSchema>) => {
    const payload = {
      email: data.email,
    };
    return forgot(payload).unwrap();
  };

  // Главная функция
  const handleClick = (data: z.infer<typeof formSchema>) => {
    toast.promise(forgotpasswordfunc(data), {
      loading: "Пробуем восстановить данные...",
      success: () => {
        form.reset();
        return `Письмо с восстановлением данных отправлено на почту`;
      },
      error: "Аккаунт с такими данными не найден",
    });
  };

  return (
    <Dialog>
      <DialogTrigger className="ml-auto inline-block text-sm underline">
        Проблемы со входом?
      </DialogTrigger>

      <Card className="w-full max-w-sm hidden">
        <DialogContent>
          <CardHeader>
            <CardTitle className="text-2xl">Проблемы со входом?</CardTitle>
            <CardDescription>
              Введите свою электронную почту и мы поможем восстановить данные от
              аккаунта
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Электронная почта</Label>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleClick)}
                  className="flex flex-col gap-4"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormControl>
                            <Input
                              id="email"
                              type="email"
                              placeholder="m@example.com"
                              {...field}
                              onKeyDown={spaceBarParcer}
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      );
                    }}
                  />
                  <Button className="w-full" disabled={isLoading} type="submit">
                    Восстановить данные
                  </Button>
                </form>
              </Form>
            </div>
          </CardContent>
        </DialogContent>
      </Card>
    </Dialog>
  );
}
