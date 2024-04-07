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

import { useForm } from "react-hook-form";
import spaceBarParcer from "@/lib/spaceBarParcer";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLoginMutation } from "@/lib/redux/features/authApi";
import Logotype from "@/shared/Logotype";
import { useRouter } from "next/navigation";
import { setToken } from "@/lib/cookie";
import { useAuth } from "@/lib/hooks/useAuth";
import RedirectIfAuthenticated from "@/lib/RedirectIfAuthenticated";
import ForgotPassword from "./ForgotPassword";

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
    <RedirectIfAuthenticated>
      <div className="w-screen h-screen lg:grid lg:min-h-[600px] lg:grid-cols-1 xl:min-h-[800px]">
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
            </div>{" "}
            <Form {...form}>
              <form
                className="grid gap-4"
                onSubmit={form.handleSubmit(handleClick)}
              >
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
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  Войти
                </Button>
              </form>
            </Form>
            <ForgotPassword />
            <div className="mt-4 text-center text-sm">
              Нет аккаунта?{" "}
              <Link href="/signup" className="underline">
                Зарегистрируйтесь
              </Link>
            </div>
          </div>
        </div>
      </div>
    </RedirectIfAuthenticated>
  );
}
