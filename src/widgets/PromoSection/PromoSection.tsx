import css from "./PromoSection.module.scss"
import { Button } from "@/components/ui/button"
import AnimatedText from "./AnimatedText/AnimatedText"
import { cn } from "@/lib/utils"
import Link from "next/link"
export default function PromoSection() {
   return (
      <article className={css.wrapper}>
         <div className={css.title}>
            <h1>Управление доставками</h1>
            <AnimatedText />
         </div>
         <div className={css.promoContainer}>
            <div>
               <p className={cn("")}>
                  Эффективная доставка с {`"Контроль Бандероль"`}: управляйте,
                  растите, достигайте успеха
               </p>
            </div>
            <Link href={"/signin"}>
               <Button className={css.mainBtn} variant='default'>
                  Работать с КБ
               </Button>
               <Button className={css.hiddenBtn} variant='default'>
                  Работать с КБ
               </Button>
               <Button variant='default'>Сделать заказ</Button>
            </Link>
         </div>
      </article>
   )
}
