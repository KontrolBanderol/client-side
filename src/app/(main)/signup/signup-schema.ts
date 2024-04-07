import { z, ZodType } from "zod";

type FormData = {
  fullname: string;
  username: string;
  email: string;
  password: string;
};

export const formSchema: ZodType<FormData> = z.object({
  fullname: z
    .string()
    .min(4)
    .max(50)
    .refine(
      (value: string) => !/[\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value),
      {
        message: "Поле не может содержать специальные символы и цифры",
      }
    ),
  username: z
    .string()
    .min(4)
    .max(30)
    .refine((value: string) => /^[A-Za-z0-9 .,'!&]+$/.test(value), {
      message:
        "Логин может состоять только из букв цифр и спец.символов",
    }),
  email: z.string().min(1).email(),
  password: z
    .string()
    .min(4)
    .max(20)
    .refine((value: string) => /[a-zA-Z]/.test(value), {
      message: "Password should contain at least one latin character.",
    })
    .refine((value: string) => /\d/.test(value), {
      message: "Password should contain at least one digit.",
    }),
});
