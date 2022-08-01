import ContentProps from "./Content.type";
import styles from "./Home.module.scss";
import { BsStar as StarIcon } from "react-icons/bs";
import Image from "next/image";
import Chart from "../Chart";
import commafy from "../../services/commafy";
import tetherIcon from "./../../public/tether.svg";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

export default function Content({
  currencies,
  labels,
  activeType,
  fetchMoreData,
}: ContentProps) {

  const [page, setPage] = useState(1);

  const renderLabels = labels.map((label, index) => (
    <th key={index}>{label}</th>
  ));

  const handleFetchMoreData = () => {
    setPage((prev) => prev + 1);
    fetchMoreData({ page: page + 1 });
  };

  const renderData = currencies.items.map((item, index) => (
    <tr key={item.id}>
      <td>
        <StarIcon />
      </td>
      <td
        className={`${item.percent > 0 && "text-green"} ${
          item.percent < 0 && "text-red"
        }`}
      >
        {item.percent} %
      </td>
      <td>
        <Chart data={item.chart} />
      </td>
      {activeType === 0 ? (
        <td>
          {commafy(Math.floor(item.price * currencies.meta.prices.sell))}
          <span className="toman">تومان</span>
        </td>
      ) : (
        <td className="ltr">
          {commafy(item.quote)}
          <span className="usdt">USDT</span>
        </td>
      )}
      {activeType === 0 ? (
        <td>
          {commafy(Math.floor(item.price * currencies.meta.prices.buy))}
          <span className="toman">تومان</span>
        </td>
      ) : (
        <td>
          <div className={styles.tether_wrapper}>
            <span>{commafy(item.price)}</span>
            <Image src={tetherIcon} alt="" width={10} height={20} />
          </div>
        </td>
      )}

      <td>
        <div className={styles.coin_wrapper}>
          <div className={styles.coin_content}>
            <p>{item.enName}</p>
            <div>
              <span>{index + 1}</span>
              <span>{item.coin}</span>
            </div>
          </div>
          <Image src={item.icon} alt={item.enName} width={35} height={35} />
        </div>
      </td>
    </tr>
  ));

  return (
    <InfiniteScroll
      dataLength={currencies.items.length}
      next={handleFetchMoreData}
      hasMore={true}
      loader={<></>}
    >
      <table className={styles.table_container}>
        <tr>{renderLabels}</tr>

        {renderData}
      </table>
    </InfiniteScroll>

  );
}
