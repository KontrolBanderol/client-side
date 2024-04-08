import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
   CardFooter,
} from "@/components/ui/card"

type Props = {
   title: string
   description?: string
   x_chunk: string
   children: React.ReactNode
   footer?: React.ReactNode
   className?: string
}

export default function Cards({
   title,
   description,
   x_chunk,
   children,
   footer,
   className,
}: Props) {
   return (
      <Card className={className} x-chunk={x_chunk}>
         <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
         </CardHeader>
         <CardContent>{children}</CardContent>
         <CardFooter className='justify-center border-t p-4'>
            {footer}
         </CardFooter>
      </Card>
   )
}
