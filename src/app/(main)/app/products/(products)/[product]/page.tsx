import Breadcrumbs from "@/shared/breadcrumbs/Breadcrumbs"
import Page from "@/shared/containers/Page"
export default function ProductItem({
   params,
}: {
   params: { product: string }
}) {
   const breadcrumb_data = [
      { link: "/app", title: "Главная" },
      { link: "/app/products", title: "Продукты" },
      { link: "", title: `${params.product}` },
   ]
   return (
      <Page>
         <Breadcrumbs data={breadcrumb_data} />
         <div>Это продукт: {params.product}</div>
      </Page>
   )
}
