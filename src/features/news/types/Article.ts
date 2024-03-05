export interface IArticlesResponse {
  total: number;
  current_count: number;
  limit: number;
  offset: number;
  items: Array<IArticle>;
}

export interface IArticle {
  price: string;
  title: string;
  images: Array<IImage>;
  categories: Array<ICategory>;
  quantity: number;
}

export interface ICategory {
  title: string;
}

export interface IImage {
  thumbnail: string;
  large: string;
}
