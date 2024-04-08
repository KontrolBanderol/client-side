"use client";
import { useAuth } from "@/lib/hooks/useAuth";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function Profile() {
  const { isSignedIn } = useAuth();
  const { setTheme } = useTheme();

  return (
    <div className="flex flex-row gap-3">
      {isSignedIn ? (
        <div className="flex flex-row gap-3">
          <Link href={"/app"}>
            <Button>Перейти в приложение</Button>
          </Link>
          <Link href={"/signin"}>
            <Button variant={"ghost"}>
              <LogOut />
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-row gap-3">
          <Link href={"/signin"}>
            <Button>Войти</Button>
          </Link>
          <Link href={"/signup"}>
            <Button variant={"secondary"}>Зарегистрироваться</Button>
          </Link>
        </div>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
