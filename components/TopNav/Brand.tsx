import { Grid, Button } from "@mui/material";
import Image from "next/image";
import bitbargLogo from "./../../public/bitbarg-logo.svg";
import styles from "./TopNav.module.scss";

export default function Brand() {
  return (
    <Grid item className={styles.top_brand}>
      <Button variant="contained">ورود / ثبت نام</Button>
      <Image src={bitbargLogo} alt="" />
    </Grid>
  );
}
