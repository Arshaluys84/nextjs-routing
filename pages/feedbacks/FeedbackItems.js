import React, { useState } from "react";
import FeedbackList from "../../components/feedback/FeedbackList";
import { getFileData, getFilePath } from "../../pages/api/feedback";

import Button from "../../components/UI/button/Button";

const FeedbackItems = ({ fileData }) => {
  const [feedbackList, setFeedbackList] = useState(fileData);
  const [isOpen, setISOpen] = useState(false);
  const loadFeedbackhandler = () => {
    setISOpen(true);
    fetch("/api/feedback")
      .then((resp) => resp.json())
      .then((data) => {
        setFeedbackList(data.feedback);
        console.log(data.feedback);
      });
  };
  return (
    <div>
      <div>
        <Button onClick={loadFeedbackhandler}>Load feedbacks</Button>
        {isOpen && <FeedbackList feedbackList={feedbackList} />}
      </div>
    </div>
  );
};
export async function getStaticProps() {
  const filePath = getFilePath();
  const fileData = getFileData(filePath);
  return {
    props: {
      fileData,
    },
  };
}
export default FeedbackItems;
