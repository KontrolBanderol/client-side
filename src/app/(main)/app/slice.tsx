"use client"
import Link from "next/link"
import css from "./page.module.scss"
import Add from "./products/add/page"
import {
   Home,
   LineChart,
   Package,
   Package2,
   Settings,
   ShoppingCart,
   Users2,
} from "lucide-react"
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@/components/ui/tooltip"
import Page from "@/shared/containers/Page"
import { usePathname } from "next/navigation"

type Props = {
   children: React.ReactNode
}
export default function AppSlice({ children }: Props) {
   const pathname = usePathname()

   return (
      <div className='flex min-h-screen w-full flex-col bg-muted/40'>
         <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex pt-[56px]'>
            <div className='flex flex-col items-center gap-4 px-2 sm:py-5'>
               <div className='group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base'>
                  <Link href='app/acme-inc'>
                     <Package2 className='h-4 w-4 transition-all group-hover:scale-110' />
                     <span className='sr-only'>Acme Inc</span>
                  </Link>
               </div>
               <div>
                  <TooltipProvider>
                     <Tooltip>
                        <TooltipTrigger asChild>
                           <Link
                              href='/app/dashboard'
                              className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
                           >
                              <Home className='h-5 w-5' />
                              <span className='sr-only'>Dashboard</span>
                           </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>Dashboard</TooltipContent>
                     </Tooltip>
                  </TooltipProvider>
               </div>
               <div>
                  <TooltipProvider>
                     <Tooltip>
                        <TooltipTrigger asChild>
                           <Link
                              href='/app/orders'
                              className='flex h-9 w-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
                           >
                              <ShoppingCart className='h-5 w-5' />
                              <span className='sr-only'>Orders</span>
                           </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>Orders</TooltipContent>
                     </Tooltip>
                  </TooltipProvider>
               </div>
               <div>
                  <TooltipProvider>
                     <Tooltip>
                        <TooltipTrigger asChild>
                           <Link
                              href='/app/products/'
                              className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
                           >
                              <Package className='h-5 w-5' />
                              <span className='sr-only'>Products</span>
                           </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>Products</TooltipContent>
                     </Tooltip>
                  </TooltipProvider>
               </div>
               <div>
                  <TooltipProvider>
                     <Tooltip>
                        <TooltipTrigger asChild>
                           <Link
                              href='#'
                              className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
                           >
                              <Users2 className='h-5 w-5' />
                              <span className='sr-only'>Customers</span>
                           </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>Customers</TooltipContent>
                     </Tooltip>
                  </TooltipProvider>
               </div>
               <div>
                  <TooltipProvider>
                     <Tooltip>
                        <TooltipTrigger asChild>
                           <Link
                              href='#'
                              className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
                           >
                              <LineChart className='h-5 w-5' />
                              <span className='sr-only'>Analytics</span>
                           </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>Analytics</TooltipContent>
                     </Tooltip>
                  </TooltipProvider>
               </div>
               <nav className='mt-auto flex flex-col items-center gap-4 px-2 sm:py-5'>
                  <div>
                     <TooltipProvider>
                        <Tooltip>
                           <TooltipTrigger asChild>
                              <Link
                                 href='/app/settings'
                                 className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
                              >
                                 <Settings className='h-5 w-5' />
                                 <span className='sr-only'>Settings</span>
                              </Link>
                           </TooltipTrigger>
                           <TooltipContent side='right'>
                              Settings
                           </TooltipContent>
                        </Tooltip>
                     </TooltipProvider>
                  </div>
               </nav>
            </div>
         </aside>
         <div className={css.content}>{children}</div>
      </div>
   )
}
