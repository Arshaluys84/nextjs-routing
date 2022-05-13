import { useRef, useContext, useState } from "react";
import NotificationContext from "../../store/notificationContext";
import classes from "./NewsletterRegistration.module.css";

function NewsletterRegistration() {
  const notificationCtx = useContext(NotificationContext);

  const emailInputRef = useRef();
  function registrationHandler(event) {
    event.preventDefault();
    notificationCtx.showNotificaton({
      message: "pending",
      status: "pending",
      title: "Email pending",
    });
    const enteredEmail = emailInputRef.current.value;

    fetch("/api/newsLetterRegistration", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (!resp.ok) {
          notificationCtx.showNotificaton({
            message: error,
            status: "error",
            title: "Error",
          });
          throw new Error(resp.message || "Something was wrong");
        }
        return resp.json();
      })
      .then((data) => {
        notificationCtx.showNotificaton({
          message: "your mail is sent",
          status: "success",
          title: "success",
        });
        console.log(data);
      })
      .catch((error) => {
        notificationCtx.showNotificaton({
          message: error.message || "Something was wrong ",
          status: "error",
          title: "Error",
        });
      });
    emailInputRef.current.value = "";
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            ref={emailInputRef}
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
