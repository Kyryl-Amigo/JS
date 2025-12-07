export interface Laptop {
  id: number;
  brand: string;     // виробник (Apple, Asus...)
  model: string;     // модель
  cpu: string;       // процесор
  ramGb: number;     // RAM у ГБ
  ssdGb: number;     // SSD у ГБ
  price: number;     // ціна в грн
  inStock: boolean;  // чи є в наявності
}
