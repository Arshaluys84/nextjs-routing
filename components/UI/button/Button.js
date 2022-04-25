import React from "react";
import Link from "next/link";

import styles from "./Button.module.css";

const Button = ({ children, link, onClick }) => {

  if (link) {
    return (
      <Link href={link}>
        <a className={styles.button}>{children}</a>
      </Link>

    );
  } else {
    return (
      <button className={styles.button} onClick={onClick}>
        
        {children}
      </button>
    );
  }
};

export default Button;
