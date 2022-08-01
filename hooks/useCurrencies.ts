import { useState } from "react";
import client from "../services/client";
import CurrenciesType from "../type/Currencies.type";

const listLabels = [
  ["نشان کردن", "تغییرات", "نمودار", "قیمت فروش", "قیمت خرید", "ارز دیجیتال"],
  ["نشان کردن", "تغییرات", "نمودار", "ارزش بازار", "قیمت جهانی", "ارز دیجیتال"],
];

export type ParamsType = {
  page?: number;
  sort?: string;
  q?: string;
};

export const useCurrencies = (result: CurrenciesType) => {
  const [currencies, setCurrencies] = useState<CurrenciesType>(result);
  const [activeType, setActiveType] = useState<number>(0);
  const [labels, setLabels] = useState<string[]>(listLabels[activeType]);
  const [filterData, setFilterData] = useState({});

  const updateCurrencies = (params: ParamsType) => {

    setFilterData((prev) => ({ ...prev, ...params }));
    
    client
      .get("/currencies", { params : {...filterData, ...params} })
      .then((res) => res.data)
      .then((data) => {

        if (params.page) {
          setCurrencies((prev) => ({
            ...prev,
            items: [...prev.items, ...data.result.items],
          }));

        } else {
          setCurrencies(data.result);
        }
      });
  };

  const getActiveType = (value: number) => {
    setActiveType(value);
    setLabels(listLabels[value]);
  };


  return {
    activeType,
    currencies,
    labels,
    getActiveType,
    updateCurrencies
  };
};
