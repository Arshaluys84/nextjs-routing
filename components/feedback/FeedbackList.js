import React, { useState } from "react";
import Button from "../UI/button/Button";

const FeedbackList = ({ feedbackList }) => {
  const [isMoreData, setIsMoreData] = useState(false);
  const [moreData, setMoreData] = useState({});

  const showDetailHandler = (id) => {
    const data = feedbackList.find((i) => i.fId === id);
    setIsMoreData(true);
    setMoreData(data);
    console.log(data);
  };
  return (
    <>
      {isMoreData && <p>{moreData.feedback}</p>}
      <ul>
        {feedbackList.map((i) => (
          <li key={i.fId}>
            {i.email}
            <Button onClick={() => showDetailHandler(i.fId)}>Show more</Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FeedbackList;
