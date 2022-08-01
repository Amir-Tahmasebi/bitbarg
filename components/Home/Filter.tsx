import { TextField, FormControl, MenuItem, Grid, Button } from "@mui/material";
import styles from "./Home.module.scss";
import { VscSearch as SearchIcon } from "react-icons/vsc";
import { useState } from "react";
import { debounce } from "lodash";
import { AiOutlineStar as StarIcon } from "react-icons/ai";
import RTL from "./../Theme/RTL";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FilterProps from "./Filter.type";

export default function Filter({
  getActiveType,
  activeType,
  fetchSearchData,
  applySort,
}: FilterProps) {
  const [sort, setSort] = useState<string>("0");

  const handleSerachData = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      fetchSearchData({ q: value });
    },
    1000
  );

  const handleSort = (e: SelectChangeEvent) => {
    const { value } = e.target;
    setSort(value);
    applySort({ sort: value });
  };

  return (
    <Grid container spacing={3} className={styles.filter_container}>
      <Grid item xs={4}>
        <FormControl fullWidth className={styles.search_items}>
          <TextField
            placeholder="جستجو"
            onChange={handleSerachData}
            sx={{ fontSize: 14 }}
          />
          <SearchIcon />
        </FormControl>
      </Grid>
      <Grid container item xs={4} justifyContent="center" alignItems="center">
        <Grid xs={6}>
          <Button className={styles.filter_btn} startIcon={<StarIcon />}>
            نشان شده ها
          </Button>
        </Grid>
        <Grid xs={6}>
          <RTL>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                onChange={handleSort}
                sx={{ fontSize: 14 }}
              >
                <MenuItem disabled value={"0"}>
                  ترتیب بر اساس
                </MenuItem>
                <MenuItem value={"1"}>کمترین قیمت</MenuItem>
                <MenuItem value={"2"}>بیشترین قیمت</MenuItem>
              </Select>
            </FormControl>
          </RTL>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <div className={styles.custom_btn_group}>
          <Button
            className={`${styles.custom_btn} ${
              activeType === 0 && styles.custom_active_btn
            }`}
            onClick={() => getActiveType(0)}
          >
            تومان
          </Button>
          <Button
            className={`${styles.custom_btn} ${
              activeType === 1 && styles.custom_active_btn
            }`}
            onClick={() => getActiveType(1)}
          >
            تتر
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}
