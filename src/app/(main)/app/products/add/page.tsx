"use client"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"
import { ChevronLeft, Upload } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import {
   Form,
   FormControl,
   FormField,
   FormItem,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import Breadcrumbs from "@/shared/breadcrumbs/Breadcrumbs"
import Page from "@/shared/containers/Page"
import Cards from "@/shared/card/Card"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { formSchema } from "./schema"
import { ChangeEvent, useEffect, useState } from "react"

type FieldErrors = {
   [key: string]: any | undefined
}

export default function Add() {
   const breadcrumb_data = [
      { link: "/app", title: "Главная" },
      { link: "/app/products", title: "Продукты" },
      { link: "", title: "Добавить продукт" },
   ]

   const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (files) {
         const fileList = Array.from(files)
         form.setValue("images", fileList)
      }
   }

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         name: "",
         description: "",
         price: 0,
         weight: 0,
         height: 0,
         width: 0,
         length: 0,
         category: "",
         images: [],
      },
   })

   type FormValues = {
      name: string
      description: string
      price: number
      weight: number
      height: number
      width: number
      length: number
      category: string
      images: FileList
   }

   const onSubmit = (data: FormValues) => {
      const payload = {
         name: data.name,
         description: data.description,
         price: data.price,
         weight: data.weight,
         size: `${data.width} ${data.height} ${data.length}`,
         category: data.category,
         images: data.images,
      }
      console.log("Payload:", payload)
      form.reset()
      toast.success("Товар успешно добавлен!")
   }

   const [isErrorsShown, setIsErrorsShown] = useState<boolean>(false)
   const errors: FieldErrors = form.formState.errors

   useEffect(() => {
      if (!isErrorsShown) return
      for (const field in errors) {
         const errorMessage = errors[field]?.message
         if (errorMessage) {
            toast.error(errorMessage, { position: "bottom-right" })
         }
      }
      setIsErrorsShown(false)
   }, [isErrorsShown, errors])

   return (
      <Page>
         <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14 pt-[56px]'>
            <header className='sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
               <Breadcrumbs data={breadcrumb_data} />
            </header>
            <Form {...form}>
               <form
                  //@ts-ignore
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'
               >
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
                           Добавить продукт
                        </h1>
                        <Badge variant='outline' className='ml-auto sm:ml-0'>
                           На склад
                        </Badge>
                        <div className='hidden items-center gap-2 md:ml-auto md:flex'>
                           <Button
                              onClick={() => form.reset()}
                              variant='outline'
                              size='sm'
                           >
                              Очистить
                           </Button>
                           <Button
                              onClick={() => {
                                 setIsErrorsShown(true)
                                 form.handleSubmit(data => {
                                    //@ts-ignore
                                    onSubmit(data)
                                 })()
                              }}
                              type='submit'
                              size='sm'
                           >
                              Сохранить
                           </Button>
                        </div>
                     </div>
                     <div className='grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8'>
                        <div className='grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8'>
                           <Cards
                              title='Детали продукта'
                              description='Введите название, и описание продукта, который
                                 хотите добавить'
                              x_chunk='dashboard-07-chunk-0'
                           >
                              <div className='grid gap-6'>
                                 <div className='grid gap-3'>
                                    <Label htmlFor='name'>Название</Label>
                                    <FormField
                                       control={form.control}
                                       name='name'
                                       render={({ field }) => (
                                          <FormItem>
                                             <FormControl>
                                                <Input
                                                   id='name'
                                                   type='text'
                                                   className='w-full'
                                                   placeholder='Беспроводная мышь Logitech'
                                                   {...field}
                                                />
                                             </FormControl>
                                          </FormItem>
                                       )}
                                    />
                                 </div>
                                 <div className='grid gap-3'>
                                    <Label htmlFor='description'>
                                       Описание
                                    </Label>
                                    <FormField
                                       control={form.control}
                                       name='description'
                                       render={({ field }) => (
                                          <FormItem>
                                             <FormControl>
                                                <Textarea
                                                   id='description'
                                                   className='min-h-32'
                                                   placeholder='Беспроводная игровая мышь G304 с поддержкой технологии LIGHTSPEED и отличными рабочими характеристиками создана по последнему слову техники и предлагается по доступной цене.'
                                                   {...field}
                                                />
                                             </FormControl>
                                          </FormItem>
                                       )}
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
                                          <FormField
                                             control={form.control}
                                             name='price'
                                             render={({ field }) => (
                                                <FormItem>
                                                   <FormControl>
                                                      <Input
                                                         id='price'
                                                         type='number'
                                                         placeholder='Стоимость'
                                                         {...field}
                                                         onChange={e => {
                                                            const value =
                                                               parseInt(
                                                                  e.target
                                                                     .value,
                                                                  10
                                                               )
                                                            field.onChange(
                                                               value
                                                            )
                                                         }}
                                                      />
                                                   </FormControl>
                                                </FormItem>
                                             )}
                                          />
                                       </TableCell>
                                       <TableCell>
                                          <Label
                                             htmlFor='price-1'
                                             className='sr-only'
                                          >
                                             Масса
                                          </Label>
                                          <FormField
                                             control={form.control}
                                             name='weight'
                                             render={({ field }) => (
                                                <FormItem>
                                                   <FormControl>
                                                      <Input
                                                         id='weight'
                                                         type='number'
                                                         placeholder='Масса'
                                                         {...field}
                                                         onChange={e => {
                                                            const value =
                                                               parseInt(
                                                                  e.target
                                                                     .value,
                                                                  10
                                                               )
                                                            field.onChange(
                                                               value
                                                            )
                                                         }}
                                                      />
                                                   </FormControl>
                                                </FormItem>
                                             )}
                                          />
                                       </TableCell>
                                       <TableCell>
                                          <div className='flex gap-2'>
                                             <FormField
                                                control={form.control}
                                                name='width'
                                                render={({ field }) => (
                                                   <FormItem>
                                                      <FormControl>
                                                         <Input
                                                            id='width'
                                                            type='number'
                                                            placeholder='Ш'
                                                            {...field}
                                                            onChange={e => {
                                                               const value =
                                                                  parseInt(
                                                                     e.target
                                                                        .value,
                                                                     10
                                                                  )
                                                               field.onChange(
                                                                  value
                                                               )
                                                            }}
                                                         />
                                                      </FormControl>
                                                   </FormItem>
                                                )}
                                             />
                                             <FormField
                                                control={form.control}
                                                name='height'
                                                render={({ field }) => (
                                                   <FormItem>
                                                      <FormControl>
                                                         <Input
                                                            id='height'
                                                            type='number'
                                                            placeholder='В'
                                                            {...field}
                                                            onChange={e => {
                                                               const value =
                                                                  parseInt(
                                                                     e.target
                                                                        .value,
                                                                     10
                                                                  )
                                                               field.onChange(
                                                                  value
                                                               )
                                                            }}
                                                         />
                                                      </FormControl>
                                                   </FormItem>
                                                )}
                                             />
                                             <FormField
                                                control={form.control}
                                                name='length'
                                                render={({ field }) => (
                                                   <FormItem>
                                                      <FormControl>
                                                         <Input
                                                            id='length'
                                                            type='number'
                                                            placeholder='Д'
                                                            {...field}
                                                            onChange={e => {
                                                               const value =
                                                                  parseInt(
                                                                     e.target
                                                                        .value,
                                                                     10
                                                                  )
                                                               field.onChange(
                                                                  value
                                                               )
                                                            }}
                                                         />
                                                      </FormControl>
                                                   </FormItem>
                                                )}
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
                                    <FormField
                                       control={form.control}
                                       name='category'
                                       render={({ field }) => (
                                          <FormItem>
                                             <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                             >
                                                <FormControl>
                                                   <SelectTrigger
                                                      id='category'
                                                      aria-label='Select category'
                                                   >
                                                      <SelectValue placeholder='Выберите категорию' />
                                                   </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                   <SelectItem value='Одежда'>
                                                      Одежда
                                                   </SelectItem>
                                                   <SelectItem value='Электроника'>
                                                      Электроника
                                                   </SelectItem>
                                                   <SelectItem value='Аксессуары'>
                                                      Аксессуары
                                                   </SelectItem>
                                                </SelectContent>
                                             </Select>
                                          </FormItem>
                                       )}
                                    />
                                 </div>
                              </div>
                           </Cards>
                        </div>
                        <div className='grid auto-rows-max items-start gap-4 lg:gap-8'>
                           {/* <Cards
                              title='Выберите склад'
                              description='Выберите склад из доступного списка'
                              x_chunk='dashboard-07-chunk-3'
                           >
                              <div className='grid gap-6'>
                                 <div className='grid gap-3'>
                                    <Label htmlFor='store'>Склад</Label>
                                    <FormField
                                       control={form.control}
                                       name='store'
                                       render={({ field }) => (
                                          <FormItem>
                                             <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                             >
                                                <FormControl>
                                                   <SelectTrigger
                                                      id='store'
                                                      aria-label='Выберите склад'
                                                   >
                                                      <SelectValue placeholder='Выберите склад' />
                                                   </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                   <SelectItem value='Kemerovo'>
                                                      Склад - Кемерово
                                                   </SelectItem>
                                                   <SelectItem value='Yaschino'>
                                                      Склад - Яшкино
                                                   </SelectItem>
                                                   <SelectItem value='Ansherka'>
                                                      Склад - Анжеро-Судженск
                                                   </SelectItem>
                                                </SelectContent>
                                             </Select>
                                          </FormItem>
                                       )}
                                    />
                                 </div>
                              </div>
                           </Cards> */}
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
                                    <label className='flex aspect-square w-full items-center justify-center rounded-md border border-dashed cursor-pointer'>
                                       <Upload className='h-4 w-4 text-muted-foreground' />
                                       <span className='sr-only'>
                                          Загрузить
                                       </span>
                                       <input
                                          type='file'
                                          multiple
                                          accept='image/jpeg, image/png, image/jpg'
                                          onChange={handleImageUpload}
                                          style={{ display: "none" }}
                                       />
                                    </label>
                                 </div>
                              </div>
                           </Cards>
                        </div>
                     </div>
                     <div className='flex items-center justify-center gap-2 md:hidden'>
                        <Button
                           onClick={() => form.reset()}
                           variant='outline'
                           size='sm'
                        >
                           Очистить
                        </Button>
                        <Button
                           onClick={() => {
                              setIsErrorsShown(true)
                              form.handleSubmit(data => {
                                 //@ts-ignore
                                 onSubmit(data)
                              })()
                           }}
                           type='submit'
                           size='sm'
                        >
                           Сохранить
                        </Button>
                     </div>
                  </div>
               </form>
            </Form>
         </div>
      </Page>
   )
}
