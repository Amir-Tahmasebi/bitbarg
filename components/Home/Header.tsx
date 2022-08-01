import styles from "./Home.module.scss";

type HeaderProps = {
  count : number
}

export default function Header({count} : HeaderProps) {
  return (
    <div className={styles.header}>
      <h1>قیمت لحظه‌ای</h1>
      <p>{count} ارز دیجیتال</p>
    </div>
  );
}
