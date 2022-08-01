import ItemType from "./Item.type";

type HomeType = {
  apiVersion: string;
  error: string | null;
  message: string;
  paginate: boolean;
  result: {
    items: ItemType[];
    meta: {
      paginateHelper: object | null;
      favoriteCurrencies: null | object;
      prices: {
        buy : number
        sell : number
      }
    };
  };
  success: boolean;
};

export default HomeType;
