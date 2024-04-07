import { z, ZodType } from "zod";

type FormData = {
  email: string;
};

export const formSchema: ZodType<FormData> = z.object({
  email: z
    .string()
    .email("Введите корректный Е-мейл")
    .min(1, { message: "хуйня" }),
});
