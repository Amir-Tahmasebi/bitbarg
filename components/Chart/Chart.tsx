import { Line, LineChart } from "recharts";
import styles from "./Chart.module.scss";
import ChartProps from "./Chart.type";

export default function Charts({ data }: ChartProps) {
  const currentData = data.map((d) => ({ amt: d }))
  
  return (
    <div className={styles.custom_chart_container}>
      <LineChart width={100} height={75} data={currentData}>
        <Line type="monotone" dataKey="amt" stroke="#8884d8" strokeWidth={2} dot={false} />
      </LineChart>
    </div>
  );
}