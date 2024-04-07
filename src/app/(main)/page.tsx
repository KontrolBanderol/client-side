"use client";

import Logotype from "@/shared/Logotype";
import Header from "@/widgets/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Logotype />
      <Header />
      <Link href={"/signin"}>Login</Link>
    </main>
  );
}
