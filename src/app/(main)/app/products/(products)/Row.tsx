import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableCell, TableRow } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import DeleteProduct from "./DeleteProduct";
import { cn } from "@/lib/utils";
import Link from "next/link";
type Props = {
  id: string;
  name: string;
  description: string;
  category: {
    id: string;
    name: string;
  } | null;
  icon: string | null;
  size: string;
  weight: number;
  price: number;
};
export default function Row({
  id,
  name,
  description,
  category,
  icon,
  size,
  weight,
  price,
}: Props) {
  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="Product image"
          className="aspect-square rounded-md object-cover"
          height="64"
          src={icon ? icon : "/placeholder.svg"}
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell>
        <Badge variant="outline">{category?.name}</Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">{price}₽</TableCell>
      <TableCell className="hidden md:table-cell">{}</TableCell>
      <TableCell className="hidden md:table-cell">
        2023-07-12 10:42 AM
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Показать меню</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Управление</DropdownMenuLabel>
            <Link href={`/app/products/${id}/edit`}>
              <DropdownMenuItem>Изменить</DropdownMenuItem>
            </Link>
            <div
              className={cn(
                "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
              )}
            >
              <DeleteProduct id={id} />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
