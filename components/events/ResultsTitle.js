import Button from "../UI/button/Button";

import styles from "./ResultsTitle.module.css";

function ResultsTitle({ date }) {
  const changedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={styles.title}>
      <h1>Events in {changedDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
