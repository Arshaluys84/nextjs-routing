import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import Button from "../components/UI/button/Button";
import styles from "../styles/Feedback.module.css";
import FeedbackList from "../components/feedback/FeedbackList";

const Feedback = () => {
  const [isSent, setIsSent] = useState(false);

  const router = useRouter();
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();
  const handleFeedback = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail, feedback: enteredFeedback }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsSent(true);
    setTimeout(() => {
      router.push("/feedbacks/FeedbackItems");
    }, 500);
  };

  return (
    <>
      {!isSent && (
        <>
          <form onSubmit={handleFeedback} className={styles.form}>
            <div className={styles.input}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                ref={emailInputRef}
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="feedback">Feedback</label>
              <textarea
                type="text"
                id="feedback"
                name="feedback"
                placeholder="feedback"
                rows="5"
                ref={feedbackInputRef}
              ></textarea>
            </div>
            <div>
              <Button>Add</Button>
            </div>
          </form>
        </>
      )}
      {isSent && (
        <div className={styles.success}>
          <p>Your feedback is sent. Thank you</p>
        </div>
      )}
    </>
  );
};

export default Feedback;
