import Link from "next/link"
import { CircleUser, Menu, Package2, Search } from "lucide-react"
import Page from "@/shared/containers/Page"
import { Button } from "@/components/ui/button"
import Cards from "@/shared/card/Card"
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Settings() {
   return (
      <Page>
         <div className='flex min-h-screen w-full flex-col'>
            <header className='sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6'>
               <Sheet>
                  <SheetTrigger asChild>
                     <Button
                        variant='outline'
                        size='icon'
                        className='shrink-0 md:hidden'
                     >
                        <Menu className='h-5 w-5' />
                        <span className='sr-only'>Toggle navigation menu</span>
                     </Button>
                  </SheetTrigger>
                  <SheetContent side='left'>
                     <nav className='grid gap-6 text-lg font-medium'>
                        <Link
                           href='#'
                           className='flex items-center gap-2 text-lg font-semibold'
                        >
                           <Package2 className='h-6 w-6' />
                           <span className='sr-only'>Acme Inc</span>
                        </Link>
                        <Link
                           href='#'
                           className='text-muted-foreground hover:text-foreground'
                        >
                           Dashboard
                        </Link>
                        <Link
                           href='#'
                           className='text-muted-foreground hover:text-foreground'
                        >
                           Orders
                        </Link>
                        <Link
                           href='#'
                           className='text-muted-foreground hover:text-foreground'
                        >
                           Products
                        </Link>
                        <Link
                           href='#'
                           className='text-muted-foreground hover:text-foreground'
                        >
                           Customers
                        </Link>
                        <Link href='#' className='hover:text-foreground'>
                           Settings
                        </Link>
                     </nav>
                  </SheetContent>
               </Sheet>
            </header>
            <main className='flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10'>
               <div className='mx-auto grid w-full max-w-6xl gap-2'>
                  <h1 className='text-3xl font-semibold'>Settings</h1>
               </div>
               <div className='mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]'>
                  <nav
                     className='grid gap-4 text-sm text-muted-foreground'
                     x-chunk='dashboard-04-chunk-0'
                  >
                     <Link href='#' className='font-semibold text-primary'>
                        Основные
                     </Link>
                     <Link href='#'>Integrations</Link>
                     <Link href='#'>Support</Link>
                     <Link href='#'>Organizations</Link>
                     <Link href='#'>Advanced</Link>
                  </nav>
                  <div className='grid gap-6'>
                     <Card x-chunk='dashboard-04-chunk-1'>
                        <CardHeader>
                           <CardTitle>Населённые пункты</CardTitle>
                           <CardDescription>
                              Укажите список населённых пунктов в которых
                              располагается склад и/или пункт выдачи.
                           </CardDescription>
                        </CardHeader>
                        <CardContent>
                           <form className='flex flex-col gap-3'>
                              <Input placeholder='Населённый пункт' />
                              <Input placeholder='Название пункта выдачи, или склада' />
                           </form>
                        </CardContent>
                        <CardFooter className='border-t px-6 py-4 flex flex-col gap-3 items-start'>
                           <CardDescription>
                              В одном населённом пункте может быть и склад и
                              пункт выдачи
                           </CardDescription>
                           <Button>Добавить</Button>
                        </CardFooter>
                     </Card>
                  </div>
               </div>
            </main>
         </div>
      </Page>
   )
}
