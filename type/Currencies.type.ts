import ItemType from "./Item.type";

type CurrenciesType = {
  items: ItemType[];
  meta: {
    paginateHelper: object | null;
    favoriteCurrencies: object | null;
    prices: {
      buy: number;
      sell: number;
    };
  };
};

export default CurrenciesType;