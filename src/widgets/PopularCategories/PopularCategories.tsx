import PopularCategoryCard from "./PopularCategoryCard/PopularCategoryCard"
import Illustration from "@/../public/categoryIcons/Illustration.jpg"
import Image from "next/image"
import HeaderLink from "@/shared/HeaderLink/HeaderLink"
import css from "./PopularCategories.module.scss"
type ICategoriesCardProps = {
   icon: string
   name: string
   description: string
   link: string
   textLink: string
}

const categories = [
   {
      icon: "webPage.svg",
      name: "Управление логистикой",
      description: "Оптимизируйте процессы доставки нашими инструментами.",
      textLink: "Найти решения",
      link: "/signin",
   },
   {
      icon: "videoIcon.svg",
      name: "Отслеживание грузов",
      description: "Отслеживайте местоположение грузов в реальном времени.",
      textLink: "Проверить статус",
      link: "/orders",
   },
   {
      icon: "penIcon.svg",
      name: "Маршрутизация",
      description: "Сократите время и затраты на доставку, оптимизировав маршруты.",
      textLink: "Оптимизировать маршрут",
      link: "/orders",
   },
   {
      icon: "desktopIcon.svg",
      name: "Аналитика и отчетность",
      description: "Получайте подробные отчеты и аналитику.",
      textLink: "Получить отчет",
      link: "/orders",
   },
]

export default function PopularCategories() {
   return (
      <section className={css.wrapper}>
         <div className={css.navContainer}>
            <HeaderLink
               title='Возможности сервиса'
               href='/categories'
               description='Подробнее'
               abbreviatedDescription='Подробнее'
            />
         </div>
         <div className={css.itemsContainer}>
            <div className={css.leftItems}>
               {categories.map((item: ICategoriesCardProps, key: number) => (
                  <PopularCategoryCard
                     icon={item.icon}
                     name={item.name}
                     description={item.description}
                     textLink={item.textLink}
                     link={item.link}
                     key={key}
                  />
               ))}
            </div>
            <div className={css.rightItems}>
               <Image
                  alt='Categoryes illustration'
                  src={Illustration}
                  width={430}
                  height={370}
               />
            </div>
         </div>
      </section>
   )
}
