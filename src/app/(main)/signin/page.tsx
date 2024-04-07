"use client";
import Image from "next/image";
import Link from "next/link";
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

import { formSchema } from "./signin-schema";
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

import { useLoginMutation } from "@/lib/redux/features/authApi";
import Logotype from "@/shared/Logotype";
import { useRouter } from "next/navigation";
import { setToken } from "@/lib/cookie";
import { useAuth } from "@/lib/hooks/useAuth";

export default function SignInPage() {
  // Серверные функции
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();
  const { updateAuthInfo } = useAuth();
  // Задаем форму
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  // Собираем информацию с форм
  const signin = async (data: z.infer<typeof formSchema>) => {
    const payload = {
      login: data.login,
      password: data.password,
    };
    return login(payload).unwrap();
  };

  // Главная функция
  const handleClick = (data: z.infer<typeof formSchema>) => {
    toast.promise(signin(data), {
      loading: "Входим в аккаунт...",
      success: (response) => {
        form.reset();
        setToken(
          response.result.tokens.accessToken,
          response.result.tokens.refreshToken
        );
        updateAuthInfo(response.result.userModel, true);
        router.push("/app");
        return `Рады вас видеть ${response.result.userModel.fullname}`;
      },
      error: "Проверьте корректность введенных данных",
    });
  };
  return (
    <Form {...form}>
      <form
        className="w-screen h-screen lg:grid lg:min-h-[600px] lg:grid-cols-1 xl:min-h-[800px]"
        onSubmit={form.handleSubmit(handleClick)}
      >
        <div className="flex items-center justify-center py-12 h-full">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold flex justify-center gap-3 mr-3">
                <Logotype />
                Войти
              </h1>
              <p className="text-balance text-muted-foreground">
                Войдите в аккаунт чтобы получить все возможности сервиса
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="login">Логин</Label>
                <FormField
                  control={form.control}
                  name="login"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormControl>
                          <Input
                            id="login"
                            type="text"
                            placeholder="deadlinevchera"
                            {...field}
                            onKeyDown={spaceBarParcer}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    );
                  }}
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Пароль</Label>
                </div>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormControl>
                          <Input
                            id="password"
                            type="password"
                            placeholder="qwerty12Q!"
                            {...field}
                            onKeyDown={spaceBarParcer}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    );
                  }}
                />
                <Dialog>
                  <DialogTrigger className="ml-auto inline-block text-sm underline">
                    Проблемы со входом?
                  </DialogTrigger>
                  <Card className="w-full max-w-sm hidden">
                    <DialogContent>
                      <CardHeader>
                        <CardTitle className="text-2xl">
                          Проблемы со входом?
                        </CardTitle>
                        <CardDescription>
                          Введите свою электронную почту и мы поможем
                          восстановить данные от аккаунта
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="email">Электронная почта</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                          />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Восстановить данные</Button>
                      </CardFooter>
                    </DialogContent>
                  </Card>
                </Dialog>
              </div>
              <Button type="submit" className="w-full">
                Войти
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Нет аккаунта?{" "}
              <Link href="/signup" className="underline">
                Зарегистрируйтесь
              </Link>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
