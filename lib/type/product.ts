export interface IProduct {
  _id: string;
  title: string;
  slug: string;
  brand_category: string;
  breadcrumb_category: string;
  sku: string;
  sales_discontinuation_date: string;
  details: string;
  care_instructions: string;
  delivery_info: string;
  add_ons: string[];
  variants: string[];
  also_bought: string[];
  features?: {
    FLAVOUR: string[];
    INGREDIENT: string[];
    SIZE: string[];
    CAKE_TYPE: string[];
    PRICE_RANGE: string[];
    SERVING_SIZE: string[];
    OCCASION: string[];
    MESSAGE_BOX: string[];
    PHOTO_UPLOAD: string[];
    WEIGHT: string[];
  };
  variant_products: variant_product[];
  default_price: number;
  list_price: number;
  display_tags: string[];
  inventory: {
    quantity_on_hand: string;
    quantity_available: string;
  };
  images: string[];
  videos: string[];
}

export enum FeatureKey {
  FLAVOUR = "FLAVOUR",
  INGREDIENT = "INGREDIENT",
  SIZE = "SIZE",
  CAKE_TYPE = "CAKE_TYPE",
  PRICE_RANGE = "PRICE_RANGE",
  SERVING_SIZE = "SERVING_SIZE",
  OCCASION = "OCCASION",
  MESSAGE_BOX = "MESSAGE_BOX",
  PHOTO_UPLOAD = "PHOTO_UPLOAD",
  WEIGHT = "WEIGHT",
}

export interface variant_product {
  product_id: string;
  features: [
    {
      slug: string;
      value: string;
    }
  ];
}
export interface FeatureObject {
  [key: string]: string | undefined;
}

export interface IProductsWithMeta {
  products: IProduct[];
  meta: Meta;
}

export interface Meta {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
