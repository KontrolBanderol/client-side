"use client";
import Logotype from "@/shared/Logotype";
import Header from "@/widgets/Header/Header";
import Link from "next/link";
import DataAndMetrics from "@/widgets/dataMetrics";
import PromoSection from '@/widgets/PromoSection/PromoSection'
import PopularCategories from "@/widgets/PopularCategories/PopularCategories";
export default function Home() {
  return (
    <main>
      <PromoSection />
      <PopularCategories />
      <DataAndMetrics />
    </main>
  );
}
