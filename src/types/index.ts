export interface Footer {
  id: number;
  label: string;
  href: string;
}

export interface Feature {
  id: number;
  label: string;
}

export interface Components {
  id: number;
  head: string;
  para: string;
}

export interface Card {
  id: number;
  label: string;
  href: string;
  img: string;
}
export interface Tag {
  id: number;
  href: string;
  label:string;
}
export interface PCard {
  id: number;
  head: string;
  para: string;
  href: string;
  img: string;
  tags: [];
}


export interface Product {
  id: number;
  name: string;
  price: number;
  imagePath: string;
}

export interface CartItem {
  product: Product;
  qty: number;
}
