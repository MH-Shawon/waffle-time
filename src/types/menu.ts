// types/menu.ts
export type MenuItem = {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
};

export type MenuCategory = {
  id: string;
  name: string;
};

export type MenuItemsByCategory = {
  [key: string]: MenuItem[];
};
