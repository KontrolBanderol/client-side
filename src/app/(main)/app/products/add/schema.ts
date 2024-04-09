import { ZodType, z } from "zod"

interface FormData {
   name: string
   description: string
   price: number
   weight: number
   category: string
   width: number
   height: number
   length: number
   images: File[] // Изменяем тип изображений на File[]
}

export const formSchema: ZodType<FormData> = z.object({
   name: z.string().min(1, {
      message: "Поле названия обязательно для заполнения!",
   }),
   description: z.string().min(1, {
      message: "Поле описания обязательно для заполнения!",
   }),
   price: z.number().min(1, {
      message: "Поле стоимости обязательно для заполнения!",
   }),
   weight: z.number().min(1, {
      message: "Поле массы обязательно для заполнения",
   }),
   category: z.string().min(1, {
      message: "Поле категории обязательно для заполнения",
   }),
   width: z.number().min(1, {
      message: "Поле ширины обязательно для заполнения",
   }),
   height: z.number().min(1, {
      message: "Поле высоты обязательно для заполнения",
   }),
   length: z.number().min(1, {
      message: "Поле длины обязательно для заполнения",
   }),
   images: z.array(z.any()).min(1, {
      message: "Необходимо загрузить хотя-бы одну фотографию товара",
   }),
})
