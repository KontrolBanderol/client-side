import { ZodType, z } from "zod"

interface FormData {
   settlement: string
   point: string
}

export const formSchema: ZodType<FormData> = z.object({
   settlement: z.string().min(1, {
      message: "Поле населённого пункта обязательно для заполнения!",
   }),
   point: z.string().min(1, {
      message: "Поле точки обязательно для заполнения!",
   }),
})
