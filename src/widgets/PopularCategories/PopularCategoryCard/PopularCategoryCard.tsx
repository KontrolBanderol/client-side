import css from "./PopularCategoryCard.module.scss"
import Image from "next/image"
import Link from "next/link"
import arrowRightSmall from "@/../public/arrow-right-small.svg"
import { cn } from "@/lib/utils"
type ICategoriesCardProps = {
   icon: string
   name: string
   description: string
   link: string
   textLink: string
}

export default function PopularCategoryCard({
   name,
   description,
   icon,
   link,
   textLink,
}: ICategoriesCardProps) {
   return (
      <article className={cn(css.wrapper)}>
         <Image
            alt='Icon'
            src={"/categoryIcons/" + icon}
            width={24}
            height={24}
            className={css.icon}
         />
         <div className={css.descriptionContainer}>
            <div>
               <div>
                  <h3 className='dark:text-dark-text-primary'>{name}</h3>
                  <p className='dark:text-dark-text-primary'>{description}</p>
               </div>
            </div>
            <Link href={link} className='text-primary'>
               {textLink}
               <Image
                  alt='arrow icon'
                  src={arrowRightSmall}
                  width={24}
                  height={24}
                  id={css.arrow}
               />
            </Link>
         </div>
      </article>
   )
}
