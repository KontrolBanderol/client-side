"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import Logotype from "@/shared/Logotype";
import NavBar from "@/shared/NavBar";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={cn(
        `flex flex-row justify-between w-screen fixed backdrop-blur-md border-b top-0 transition-all`,
        isScrolled ? "top-[-100px]" : ""
      )}
    >
      <div className="flex flex-row justify-between px-4 py-2 w-screen">
        <Logotype />
        <NavBar />
        <div className="flex flex-row gap-3">
          <Button>Войти</Button>
          <Button variant={"secondary"}>Зарегистрироваться</Button>
        </div>
      </div>
    </div>
  );
}
