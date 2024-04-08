type Products = {
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
export const ProductsResponse: Products[] = [
  {
    id: "6",
    name: "Шоколадный батончик",
    description: "Молочный шоколадный батончик",
    category: {
      id: "2",
      name: "Кондитерские изделия",
    },
    icon: null,
    size: "10 5 2",
    weight: 50,
    price: 7500,
  },
  {
    id: "7",
    name: "Белый хлеб",
    description: "Пшеничный хлеб белого сорта",
    category: {
      id: "3",
      name: "Хлебобулочные изделия",
    },
    icon: null,
    size: "15 10 8",
    weight: 400,
    price: 4500,
  },
  {
    id: "8",
    name: "Черничный маффин",
    description: "Маффин с черникой",
    category: {
      id: "4",
      name: "Выпечка",
    },
    icon: null,
    size: "10 10 8",
    weight: 100,
    price: 6000,
  },
  {
    id: "9",
    name: "Томатный суп",
    description: "Томатный суп",
    category: {
      id: "5",
      name: "Готовые блюда",
    },
    icon: null,
    size: "20 15 10",
    weight: 300,
    price: 8500,
  },
  {
    id: "10",
    name: "Жидкое мыло для рук",
    description: "Жидкое мыло для рук",
    category: {
      id: "6",
      name: "Товары для дома",
    },
    icon: null,
    size: "8 5 4",
    weight: 250,
    price: 3000,
  },
  {
    id: "11",
    name: "Хлопковая футболка",
    description: "Хлопковая футболка",
    category: {
      id: "7",
      name: "Одежда",
    },
    icon: null,
    size: "30 20 2",
    weight: 150,
    price: 12000,
  },
  {
    id: "12",
    name: "Настольная лампа",
    description: "Настольная лампа",
    category: {
      id: "8",
      name: "Техника и электроника",
    },
    icon: null,
    size: "15 15 30",
    weight: 700,
    price: 25000,
  },
  {
    id: "13",
    name: "Портативная колонка с Bluetooth",
    description: "Портативная колонка с Bluetooth",
    category: {
      id: "8",
      name: "Техника и электроника",
    },
    icon: null,
    size: "10 10 10",
    weight: 500,
    price: 40000,
  },
  {
    id: "14",
    name: "Футбольный мяч",
    description: "Футбольный мяч",
    category: {
      id: "9",
      name: "Спортивные товары",
    },
    icon: null,
    size: "22 22 22",
    weight: 450,
    price: 5000,
  },
];
