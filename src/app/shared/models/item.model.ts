export interface Item {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
  image: string;      // тільки назва файлу, напр: "macbook-air.jpg"
  features: string[];
}
