import css from './footer.module.scss'
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Logotype from '@/shared/Logotype'
import LinkedIn from "@/../public/FooterSocialIcons/LinkedIn.svg"
import Telegram from "@/../public/FooterSocialIcons/Telegram.svg"
import GitHub from "@/../public/FooterSocialIcons/GitHub.svg"
import Twitter from "@/../public/FooterSocialIcons/Twitter.svg"
import Mail from "@/../public/FooterSocialIcons/Mail.svg"
import coinMarket from "@/../public/FooterSocialIcons/coinMarket.svg"

type FooterLink = {
   text: string
   url: string
}

type FooterSection = {
   title: string
   links: FooterLink[]
}

const footerData: Record<string, FooterSection> = {
   orders: {
      title: "Заказы",
      links: [
         { text: "Link1", url: "/" },
         { text: "Link2", url: "/" },
         { text: "Link3", url: "/" },
         { text: "Link4", url: "/" },
         { text: "Link5", url: "/" },
         { text: "Link6", url: "/" }
      ]
   },
   experts: {
      title: "Специалисты",
      links: [
         { text: "Link1", url: "/" },
         { text: "Link2", url: "/" },
         { text: "Link3", url: "/" },
         { text: "Link4", url: "/" },
         { text: "Link5", url: "/" },
         { text: "Link6", url: "/" }
      ]
   },
   news: {
      title: "Новости",
      links: [
         { text: "Link1", url: "/" },
         { text: "Link2", url: "/" },
         { text: "Link3", url: "/" },
         { text: "Link4", url: "/" },
         { text: "Link5", url: "/" },
         { text: "Link6", url: "/" }
      ]
   },
   more: {
      title: "Ещё",
      links: [
         { text: "Link1", url: "/" },
         { text: "Link2", url: "/" },
         { text: "Link3", url: "/" },
         { text: "Link4", url: "/" },
         { text: "Link5", url: "/" },
         { text: "Link6", url: "/" }
      ]
   },
   inProgress: {
      title: "In Progress",
      links: [
         { text: "Link1", url: "/" },
         { text: "Link2", url: "/" },
         { text: "Link3", url: "/" },
         { text: "Link4", url: "/" },
         { text: "Link5", url: "/" },
         { text: "Link6", url: "/" }
      ]
   }
}

export default function Footer() {
   return (
      <footer
         className={cn(
            css.wrapper,
            "bg-light-main-bg-main dark:bg-dark-main-bg-main"
         )}
      >
         <div className={css.items}>
            {Object.values(footerData).map(section => (
               <div key={section.title} className={cn(css.item, "text-light-text-main-50")}>
                  <h3 className='text-light-text-main-100 dark:text-dark-text-main-100'>
                     {section.title}
                  </h3>
                  {section.links.map(link => (
                     <Link key={link.url} href={link.url}>
                        {link.text}
                     </Link>
                  ))}
               </div>
            ))}
         </div>
         <div className={cn(css.line, "bg-light-text-main-50")}></div>
         <div className={css.underfooter}>
            <Link href={"/"} className={css.logotype}>
               <Logotype />
            </Link>
            <div className={css.socialIcons}>
               <Link href={"/"}>
                  <Image
                     alt='LinkedIn icon'
                     src={LinkedIn}
                     width={30}
                     height={30}
                     className='hover:scale-105 transition-transform duration-75'
                  />
               </Link>
               <Link href={"/"}>
                  <Image
                     alt='Telegram icon'
                     src={Telegram}
                     width={30}
                     height={30}
                     className='hover:scale-105 transition-transform duration-75'
                  />
               </Link>
               <Link href={"/"}>
                  <Image
                     alt='GitHub icon'
                     src={GitHub}
                     width={30}
                     height={30}
                     className='hover:scale-105 transition-transform duration-75'
                  />
               </Link>
               <Link href={"/"}>
                  <Image
                     alt='Twitter icon'
                     src={Twitter}
                     width={30}
                     height={30}
                     className='hover:scale-105 transition-transform duration-75'
                  />
               </Link>
               <Link href={"/"}>
                  <Image
                     alt='Mail icon'
                     src={Mail}
                     width={30}
                     height={30}
                     className='hover:scale-105 transition-transform duration-75'
                  />
               </Link>
               <Link href={"/"}>
                  <Image
                     alt='coinMarket icon'
                     src={coinMarket}
                     width={30}
                     height={30}
                     className='hover:scale-105 transition-transform duration-75'
                  />
               </Link>
            </div>
         </div>
      </footer>
   )
}
