import { z, ZodType } from "zod";

type FormData = {
  login: string;
  password: string;
};

export const formSchema: ZodType<FormData> = z.object({
  login: z.string().min(4, { message: "Логин обязателен к заполнению" }),

  password: z.string().min(4, { message: "Пароль обязателен к заполнению" }),
});
