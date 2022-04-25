import { useRef } from "react";
import { MOCKDATAMONTHS, MOCKDATAYEARS } from "../../pages/mockData";

import Button from "../UI/button/Button";

import styles from "./EventsSearch.module.css";

const EventsSearch = ({ onSearch }) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let enteredYear = yearInputRef.current.value;
    let enteredMonth = monthInputRef.current.value;
    onSearch(enteredYear, enteredMonth);
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            {Object.values(MOCKDATAYEARS).map((v) => (
              <option key={v.id} value={v.value}>
                {v.value}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            {Object.values(MOCKDATAMONTHS).map((v) => (
              <option key={v.id} value={v.id}>
                {v.value}
              </option>
            ))}
          </select>
        </div>
        <Button>Find Event</Button>
      </div>
    </form>
  );
};

export default EventsSearch;
