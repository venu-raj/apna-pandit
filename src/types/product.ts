export type Discount = {
  amount: number;
  percentage: number;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  srcUrl: string;
  gallery?: string[];
  price: number;
  discount: Discount;
  rating: number;
};

export type Review = {
  id: number;
  user: string;
  content: string;
  rating: number;
  date: string;
};
