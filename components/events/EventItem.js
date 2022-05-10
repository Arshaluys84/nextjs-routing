import Image from "next/image";
import AddressIcon from "../icons/AddressIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import DateIcon from "../icons/DateIcon";

import Button from "../UI/button/Button";

import styles from "./EventItem.module.css";

const EventItem = ({ evt }) => {
  const date = new Date(evt.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <li className={styles.item}>
      {/* <img src={"/" + evt.image} alt={evt.title} /> */}
      <Image src={"/" + evt.image} alt={evt.title} width={250} height={160} />
      <div className={styles.content}>
        <div>
          <h2>{evt.title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{date}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{evt.location.replace(", ", "\n")}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={`/events/${evt.id}`}>
            <span>more</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
