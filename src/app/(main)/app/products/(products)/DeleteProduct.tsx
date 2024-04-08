"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

type Props = {
  id: string;
};
export default function DeleteProduct({ id }: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger>Удалить</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Вы точно хотите удалить товар?</AlertDialogTitle>
          <AlertDialogDescription>
            Это действие нельзя отменить. Товар и его данные навсегда удалятся с
            наших серверов, действуйте с осторожностью.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Отмена</AlertDialogCancel>
          <AlertDialogAction
            asChild
            onClick={() => console.log(id, " Deleted")}
          >
            <Button variant="destructive">Удалить</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
