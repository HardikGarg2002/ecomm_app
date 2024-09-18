import { IProduct } from "./product";

export interface INavigation {
  _id?: string;
  label: string;
  url: string;
  list?: INavigationList[];
}

export interface INavigationList {
  _id?: string;
  label: string;
  url?: string;
  item: INavigationItem[];
}

export interface INavigationItem {
  _id?: string;
  label: string;
  url: string;
}

// src/types/navigation.ts (or wherever you prefer to place it)
export type RootStackParamList = {
  ProductDetail: { product: IProduct };
  MainTabs: any;
  ProductListing: { categorySlug: any };
  // Other routes can be added here
};
