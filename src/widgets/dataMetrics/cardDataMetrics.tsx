import css from "./cardDataMetrics.module.scss"
type QueryResult = {
   data: IDataMetricsEntry
   isLoading: boolean
}

type IDataMetricsEntry = {
   quantity: string
   category: string
}

export default function CardDataMetrics() {
   const isLoading = false
   const data: IDataMetricsEntry[] = [
      {
         quantity: "350.11к",
         category: "посылки (всего)",
      },
      {
         quantity: "102.11к",
         category: "посылки (24h)",
      },
      {
         quantity: "15.45к",
         category: "пользователи",
      },
      {
         quantity: "250.15к",
         category: "подарки",
      },
      {
         quantity: "1.11м",
         category: "доставки",
      },
      {
         quantity: "115.15к",
         category: "товары",
      },
      {
         quantity: "105.15к",
         category: "предложения",
      },
      {
         quantity: "2.15к",
         category: "созданные",
      },
      {
         quantity: "$0.000215",
         category: "цена PRP",
      },
      {
         quantity: "$201.95к",
         category: "выручка платформы (всего)",
      },
      {
         quantity: "$151.68к",
         category: "оплаченные стейкеры (всего)",
      },
   ]
   return (
      <div className={css.groupBtn}>
         {data ? (
            data.map((item: IDataMetricsEntry) => (
               <div
                  className={
                     css.cardWrapper +
                     " dark:bg-dark-bg-second border dark:border-dark-main-100"
                  }
                  key={item.quantity}
               >
                  <p className={css.title + " dark:text-dark-text-100"}>
                     {isLoading ? <p>Загрузка...</p> : item.quantity}
                  </p>
                  <p className={css.description + " dark:text-dark-text-90"}>
                     {isLoading ? <p>Загрузка...</p> : item.category}
                  </p>
               </div>
            ))
         ) : (
            <p>Загрузка</p>
         )}
      </div>
   )
}
