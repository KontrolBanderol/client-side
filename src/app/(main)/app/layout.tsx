import { TabsContent } from "@/components/ui/tabs"
import AppSlice from "./slice"
import Add from "./products/add/page"
export default function AppLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return <AppSlice>{children}</AppSlice>
}
