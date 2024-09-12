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
