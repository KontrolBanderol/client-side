"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logotype from "@/shared/Logotype";
import { useRegistrationMutation } from "@/lib/redux/features/authApi";
import { useRouter } from "next/navigation";
import { formSchema } from "./signup-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { setToken } from "@/lib/cookie";
import { z } from "zod";
import { useAuth } from "@/lib/hooks/useAuth";
import RedirectIfAuthenticated from "@/lib/RedirectIfAuthenticated";
import spaceBarParcer from "@/lib/spaceBarParcer";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
export default function SignUp() {
  // Серверные функции
  const [registration, { isLoading }] = useRegistrationMutation();
  const router = useRouter();
  const { updateAuthInfo } = useAuth();
  // Задаем форму
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      fullname: "",
      username: "",
    },
  });

  // Собираем информацию с форм
  const signup = async (data: z.infer<typeof formSchema>) => {
    const payload = {
      username: data.username,
      password: data.password,
      fullname: data.fullname,
      email: data.email,
    };
    return registration(payload).unwrap();
  };

  // Главная функция
  const handleClick = (data: z.infer<typeof formSchema>) => {
    toast.promise(signup(data), {
      loading: "Создаем новый аккаунт...",
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
                Создать аккаунт
              </h1>
              <p className="text-balance text-muted-foreground">
                Создайте аккаунт чтобы получить все возможности сервиса
              </p>
            </div>
            <div className="grid gap-4">
              <Form {...form}>
                <form
                  className="grid gap-4"
                  onSubmit={form.handleSubmit(handleClick)}
                >
                  <div className="grid gap-2">
                    <Label htmlFor="fullname">Отображаемое имя</Label>
                    <FormField
                      control={form.control}
                      name="fullname"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormControl>
                              <Input
                                id="fullname"
                                type="text"
                                placeholder={
                                  "Дедлайн Вчера / Сергиенко Родион Алексеевич"
                                }
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        );
                      }}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="username">Логин</Label>

                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormControl>
                              <Input
                                id="username"
                                type="text"
                                placeholder={"deadline-vchera"}
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
                    <Label htmlFor="email">Электронная почта</Label>
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
                                placeholder={"deadline@vchera.ru"}
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
                                placeholder={"qwerty12Q!"}
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
                    Создать аккаунт
                  </Button>
                </form>
              </Form>
            </div>
            <div className="mt-4 text-center text-sm">
              Уже есть аккаунт?{" "}
              <Link href="/signin" className="underline">
                Войти
              </Link>
            </div>
          </div>
        </div>
      </div>
    </RedirectIfAuthenticated>
  );
}
