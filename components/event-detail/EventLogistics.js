import Image from "next/image";
import AddressIcon from "../icons/AddressIcon";
import DateIcon from "../icons/DateIcon";

import LogisticsItem from "./LogisticsItem";

import styles from "./EventLogistics.module.css";

function EventLogistics({ date, address, image, imageAlt }) {
  const changedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <Image src={`/${image}`} alt={imageAlt} width={400} height={400} />
        {/* <img src={`/${image}`} alt={imageAlt} /> */}
      </div>
      <ul className={styles.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{changedDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
