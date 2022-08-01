import Footer from "../Footer";
import Header from "./../Header";
import styles from "./Layout.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <section className={styles.layout_container}>
      <div className={styles.layout_wrapper}>
        <Header />
        <section>{children}</section>
        <Footer />
      </div>
    </section>
  );
}
