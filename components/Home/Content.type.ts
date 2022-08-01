import { ParamsType } from "../../hooks/useCurrencies";
import ItemType from "../../type/Item.type";

type ContentType = {
  currencies: {
    items: ItemType[];
    meta: {
      paginateHelper: object | null;
      favoriteCurrencies: object | null;
      prices: {
        buy : number
        sell : number
      }
    };
  };
  labels:string[]
  activeType : number
  fetchMoreData: (params : ParamsType) => void
};

export default ContentType;
