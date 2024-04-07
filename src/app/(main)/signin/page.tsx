import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function SignIn() {
  return (
    <>
      <div className="w-screen h-screen lg:grid lg:min-h-[600px] lg:grid-cols-1 xl:min-h-[800px]">
        <div className="flex items-center justify-center py-12 h-full">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold flex justify-center gap-3 mr-3">
                <Image
                  src="/logo-dark.svg"
                  alt="Image"
                  width="960"
                  height="540"
                  className="h-[36px] w-[36px] object-fill"
                />
                Войти
              </h1>
              <p className="text-balance text-muted-foreground">
                Войдите в аккаунт чтобы получить все возможности сервиса
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="login">Логин</Label>
                <Input
                  id="login"
                  type="text"
                  placeholder="deadlinevchera"
                  required
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Пароль</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="qwerty12Q!"
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
      </div>
    </>
  );
}
