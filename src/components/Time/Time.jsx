import styles from "./Time.module.css"
import {useCurrentDate} from "./useCurrentDate";


function formattedDate() {
  const fDate = new Date().toLocaleString("pl-PL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return fDate;
}

function Time() {
  const date = useCurrentDate();

  return (

    <p className={styles.clock}>Dzisiaj jest: {formattedDate(date)}</p>

  );
}

export default Time;
