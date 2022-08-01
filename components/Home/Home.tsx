import HomeProps from "./../../type/Home.type";
import styles from "./Home.module.scss";
import Header from "./Header";
import Filter from "./Filter";
import Content from "./Content";
import { useCurrencies } from "../../hooks/useCurrencies";
import CurrenciesType from "../../type/Currencies.type";

export default function Home(props: HomeProps) {
  const {
    activeType,
    currencies,
    labels,
    getActiveType,
    updateCurrencies
  } = useCurrencies(props.result as CurrenciesType);

  return (
    <section className={styles.home_container}>
      <Header count={currencies.items.length} />
      <Filter
        applySort={updateCurrencies}
        fetchSearchData={updateCurrencies}
        getActiveType={getActiveType}
        activeType={activeType}
      />
      <Content
        labels={labels}
        currencies={currencies}
        activeType={activeType}
        fetchMoreData={updateCurrencies}
      />
    </section>
  );
}
