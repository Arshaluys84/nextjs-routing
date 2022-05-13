import { useState, useEffect, useContext } from "react";

import CommentList from "./CommentList";
import NewComment from "./NewComment";
import classes from "./Comments.module.css";
import NotificationContext from "../../store/notificationContext";

function Comments({ eventId }) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const notificationCtx = useContext(NotificationContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (showComments && !loading) {
      fetch(`/api/comments/${eventId}`)
        .then((resp) => resp.json())
        .then((data) => {
          const filteredData = data.comments.filter(
            (i) => i.eventId === eventId
          );
          setComments(filteredData);
          console.log(data.comments.filter((i) => i.eventId === eventId));
        });
    }
  }, [showComments, eventId, loading]);
  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    setLoading(true);
    notificationCtx.showNotificaton({
      message: "Comments are pending",
      status: "pending",
      title: "Pending",
    });
    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
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
        setLoading(false);
      })
      .catch((error) => {
        notificationCtx.showNotificaton({
          message: error,
          status: "error",
          title: "Error",
        });
      });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !loading && <CommentList comments={comments} />}
      {showComments && loading && <p>loading.......</p>}
    </section>
  );
}

export default Comments;
