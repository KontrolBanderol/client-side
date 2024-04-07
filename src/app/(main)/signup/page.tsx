import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function SignUp() {
  return (
    <div className="w-full h-screen lg:grid lg:min-h-[600px] lg:grid-cols-1 xl:min-h-[800px]">
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
              Создать аккаунт
            </h1>
            <p className="text-balance text-muted-foreground">
              Создайте аккаунт чтобы получить все возможности сервиса
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="fullname">Отображаемое имя</Label>
              <Input
                id="fullname"
                type="text"
                placeholder={"Дедлайн Вчера / Сергиенко Родион Алексеевич"}
                required
              />
            </div>

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
              <Label htmlFor="email">Электронная почта</Label>
              <Input
                id="email"
                type="email"
                placeholder="deadline-vchera@gmail.com"
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
            </div>
            <Button type="submit" className="w-full">
              Создать аккаунт
            </Button>
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
  );
}
