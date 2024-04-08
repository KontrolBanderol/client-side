import Page from "@/shared/containers/Page"
import Image from "next/image"
import Link from "next/link"

import { ChevronLeft, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select"
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table"
import Breadcrumbs from "@/shared/breadcrumbs/Breadcrumbs"
import Cards from "@/shared/card/Card"
import { ProductsResponse } from "../../devdata"
import DeleteProduct from "../../DeleteProduct"
export default function ProductItem({
   params,
}: {
   params: { product: string }
}) {
   const breadcrumb_data = [
      { link: "/app", title: "Главная" },
      { link: "/app/products", title: "Продукты" },
      { link: `/app/products/${params.product}`, title: `${params.product}` },
      { link: "", title: "Редактировать продукт" },
   ]
   const response = ProductsResponse[2]
   const sizeArray = response.size.split(" ")
   return (
      <Page>
         <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14 pt-[56px]'>
            <header className='sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
               <Breadcrumbs data={breadcrumb_data} />
            </header>
            <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
               <div className='mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4'>
                  <div className='flex items-center gap-4'>
                     <Link href={"/app/products/"}>
                        <Button
                           variant='outline'
                           size='icon'
                           className='h-7 w-7'
                        >
                           <ChevronLeft className='h-4 w-4' />
                           <span className='sr-only'>Back</span>
                        </Button>
                     </Link>
                     <h1 className='flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0'>
                        Редактировать продукт
                     </h1>
                     <div className='hidden items-center gap-2 md:ml-auto md:flex'>
                        <DeleteProduct id={response.id}>
                           <div className='border flex items-center border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3'>
                              Удалить продукт
                           </div>
                        </DeleteProduct>
                        <Button size='sm'>Сохранить</Button>
                     </div>
                  </div>
                  <div className='grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8'>
                     <div className='grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8'>
                        <Cards
                           title='Детали продукта'
                           description='Введите новое название, и описание продукта'
                           x_chunk='dashboard-07-chunk-0'
                        >
                           <div className='grid gap-6'>
                              <div className='grid gap-3'>
                                 <Label htmlFor='name'>Название</Label>
                                 <Input
                                    id='name'
                                    type='text'
                                    className='w-full'
                                    placeholder='Беспроводная мышь Logitech'
                                    defaultValue={response.name}
                                 />
                              </div>
                              <div className='grid gap-3'>
                                 <Label htmlFor='description'>Описание</Label>
                                 <Textarea
                                    id='description'
                                    placeholder='Беспроводная игровая мышь G304 с поддержкой технологии LIGHTSPEED и отличными рабочими характеристиками создана по последнему слову техники и предлагается по доступной цене.'
                                    defaultValue={response.description}
                                    className='min-h-32'
                                 />
                              </div>
                           </div>
                        </Cards>
                        <Cards
                           title='Параметры'
                           description='Введите параметры продукта'
                           x_chunk='dashboard-07-chunk-1'
                        >
                           <Table>
                              <TableHeader>
                                 <TableRow>
                                    <TableHead className='w-[100px] sr-only'></TableHead>
                                    <TableHead>Стоимость (₽)</TableHead>
                                    <TableHead>Масса (кг)</TableHead>
                                    <TableHead className='w-[250px]'>
                                       Ширина / Высота / Длина (см)
                                    </TableHead>
                                 </TableRow>
                              </TableHeader>
                              <TableBody>
                                 <TableRow>
                                    <TableCell className='font-semibold sr-only'>
                                       GGPC-001
                                    </TableCell>
                                    <TableCell>
                                       <Label
                                          htmlFor='stock-1'
                                          className='sr-only'
                                       >
                                          Стоимость
                                       </Label>
                                       <Input
                                          id='stock-1'
                                          type='number'
                                          defaultValue={response.price}
                                       />
                                    </TableCell>
                                    <TableCell>
                                       <Label
                                          htmlFor='price-1'
                                          className='sr-only'
                                       >
                                          Масса
                                       </Label>
                                       <Input
                                          id='price-1'
                                          type='number'
                                          defaultValue={response.weight}
                                       />
                                    </TableCell>
                                    <TableCell>
                                       <div className='flex gap-2'>
                                          <Input
                                             type='number'
                                             placeholder='Ш'
                                             defaultValue={sizeArray[0]}
                                          />
                                          <Input
                                             type='number'
                                             placeholder='В'
                                             defaultValue={sizeArray[1]}
                                          />
                                          <Input
                                             type='number'
                                             placeholder='Д'
                                             defaultValue={sizeArray[2]}
                                          />
                                       </div>
                                    </TableCell>
                                 </TableRow>
                              </TableBody>
                           </Table>
                        </Cards>
                        <Cards
                           title='Категория продукта'
                           description='Выберите категорию и подкатегорию продукта из доступного списка'
                           x_chunk='dashboard-07-chunk-2'
                        >
                           <div className='grid gap-6 sm:grid-cols-1'>
                              <div className='grid gap-3'>
                                 <Label htmlFor='category'>Категория</Label>
                                 <Select>
                                    <SelectTrigger
                                       id='category'
                                       aria-label='Select category'
                                    >
                                       <SelectValue placeholder='Выберите категорию' />
                                    </SelectTrigger>
                                    <SelectContent>
                                       {response.category && (
                                          <SelectItem
                                             value={response.category.id}
                                             defaultValue={response.category.id}
                                          >
                                             {response.category.name}
                                          </SelectItem>
                                       )}
                                       <SelectItem value='clothing'>
                                          Одежда
                                       </SelectItem>
                                       <SelectItem value='electronics'>
                                          Электроника
                                       </SelectItem>
                                       <SelectItem value='accessories'>
                                          Аксессуары
                                       </SelectItem>
                                    </SelectContent>
                                 </Select>
                              </div>
                           </div>
                        </Cards>
                     </div>
                     <div className='grid auto-rows-max items-start gap-4 lg:gap-8'>
                        <Cards
                           title='Выберите склад'
                           description='Выберите склад из доступного списка'
                           x_chunk='dashboard-07-chunk-3'
                        >
                           <div className='grid gap-6'>
                              <div className='grid gap-3'>
                                 <Label htmlFor='status'>Склад</Label>
                                 <Select>
                                    <SelectTrigger
                                       id='status'
                                       aria-label='Select status'
                                    >
                                       <SelectValue placeholder='Выберите склад' />
                                    </SelectTrigger>
                                    <SelectContent>
                                       <SelectItem value='draft'>
                                          Склад - Кемерово
                                       </SelectItem>
                                       <SelectItem value='published'>
                                          Склад - Яшкино
                                       </SelectItem>
                                       <SelectItem value='archived'>
                                          Склад - Анжеро-Судженск
                                       </SelectItem>
                                    </SelectContent>
                                 </Select>
                              </div>
                           </div>
                        </Cards>
                        <Cards
                           title='Изображение продукта'
                           description='Загрузите до 4 изображений продукта'
                           x_chunk='dashboard-07-chunk-4'
                           className='overflow-hidden'
                        >
                           <div className='grid gap-2'>
                              <Image
                                 alt='Product image'
                                 className='aspect-square w-full rounded-md object-cover'
                                 height='300'
                                 src='/placeholder.svg'
                                 width='300'
                              />
                              <div className='grid grid-cols-3 gap-2'>
                                 <button>
                                    <Image
                                       alt='Product image'
                                       className='aspect-square w-full rounded-md object-cover'
                                       height='84'
                                       src='/placeholder.svg'
                                       width='84'
                                    />
                                 </button>
                                 <button>
                                    <Image
                                       alt='Product image'
                                       className='aspect-square w-full rounded-md object-cover'
                                       height='84'
                                       src='/placeholder.svg'
                                       width='84'
                                    />
                                 </button>
                                 <button className='flex aspect-square w-full items-center justify-center rounded-md border border-dashed'>
                                    <Upload className='h-4 w-4 text-muted-foreground' />
                                    <span className='sr-only'>Загрузить</span>
                                 </button>
                              </div>
                           </div>
                        </Cards>
                     </div>
                  </div>
                  <div className='flex items-center justify-center gap-2 md:hidden'>
                     <DeleteProduct id={response.id}>
                        <div className='border flex items-center border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3'>
                           Удалить продукт
                        </div>
                     </DeleteProduct>
                     <Button size='sm'>Сохранить</Button>
                  </div>
               </div>
            </main>
         </div>
      </Page>
   )
}
