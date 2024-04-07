"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import Logotype from "@/shared/Logotype";
import NavBar from "@/shared/NavBar";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);
  return (
    <div
      className={cn(
        `flex flex-row items-center justify-between w-screen fixed backdrop-blur-md border-b top-0 transition-all`,
        !visible ? "top-[-100px]" : "top-0"
      )}
    >
      <div className="flex flex-row justify-between px-4 py-2 w-screen">
        <Logotype />
        <NavBar />
        <div className="flex flex-row gap-3">
          <Button>
            <Link href={"/signin"}>Войти</Link>
          </Button>
          <Button variant={"secondary"}>
            <Link href={"/signup"}>Зарегистрироваться</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
