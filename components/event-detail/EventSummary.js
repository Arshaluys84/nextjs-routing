import styles from "./EventSummary.module.css";

function EventSummary({ title }) {
  return (
    <section className={styles.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;
