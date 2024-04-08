"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/hooks/useAuth";
import { LogOut } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Profile() {
  const { isSignedIn } = useAuth();

  return (
    <>
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
    </>
  );
}
