import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import { RiMenu3Fill as MenuIcon } from "react-icons/ri";
import { list } from "./list";
import styles from "./TopNav.module.scss";


export default function Menu() {
  const renderList = list.map((item, index) => (
    <li key={index}>
      <Link href={item.href}>
        <a>{item.text}</a>
      </Link>
    </li>
  ));

  return (
    <Grid item>
      <ul className={styles.menu_wrapper}>
        <li>
          <MenuIcon />
          <Typography>منو</Typography>
        </li>
        {renderList}
      </ul>
    </Grid>
  );
}
