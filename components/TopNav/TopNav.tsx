import { Grid } from "@mui/material";
import Brand from "./Brand";
import Menu from "./Menu";
import styles from "./TopNav.module.scss";

export default function TopNav() {
  return (
    <nav className={styles.top_nav_container}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Menu />
        <Brand />
      </Grid>
    </nav>
  );
}
