"use client"
import Page from "@/shared/containers/Page"
import { useRouter } from "next/navigation"

export default function App() {
   const router = useRouter()

   return router.push("/app/dashboard")
}
