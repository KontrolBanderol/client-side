"use client";
import Image from "next/image";
import Link from "next/link";
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";
import Firework from "@/components/ui/firework";
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Breadcrumbs from "@/shared/breadcrumbs/Breadcrumbs";
import exportToExcel from "@/lib/exportToExcel";
import Row from "./Row";
import { ProductsResponse } from "./devdata";
const breadcrumbs = [
  { title: "Главная", link: "/app/dashboard" },
  { title: "Товары", link: "/app/products" },
];
export default function Products() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 pt-[56px]">
      <Firework />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Breadcrumbs data={breadcrumbs} />
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="active">В пути</TabsTrigger>
                <TabsTrigger value="draft">В ПВЗ</TabsTrigger>
                <TabsTrigger value="archived" className="hidden sm:flex">
                  Доставлены
                </TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Сортировка
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Сортировать по</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Активности
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Статусу</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Еще</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 gap-1"
                  onClick={() => exportToExcel(ProductsResponse)}
                >
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Экспортировать XLSX
                  </span>
                </Button>
                <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <Link
                    href={"/app/products/add"}
                    className="sr-only sm:not-sr-only sm:whitespace-nowrap"
                  >
                    Добавить товар
                  </Link>
                </Button>
              </div>
            </div>
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Товары</CardTitle>
                  <CardDescription>
                    Управляйте своими товарами и просматривайте показатели их
                    продаж.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Изображение</span>
                        </TableHead>
                        <TableHead>Наименование</TableHead>
                        <TableHead>Категория</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Цена
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Всего продано (дописать)
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Дата добавления (узнать у бека)
                        </TableHead>
                        <TableHead>
                          <span className="sr-only">Управление</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {ProductsResponse.map((item) => (
                        <Row
                          key={item.id}
                          id={item.id}
                          name={item.name}
                          category={item.category}
                          description={item.description}
                          icon={item.icon}
                          price={item.price}
                          size={item.size}
                          weight={item.weight}
                        />
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Показано <strong>{ProductsResponse.length}</strong> товаров
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
