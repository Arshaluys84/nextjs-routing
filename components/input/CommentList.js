import classes from "./CommentList.module.css";

function CommentList({ comments }) {
  return (
    <ul className={classes.comments}>
      {comments.map((i) => (
        <li key={i._id}>
          <p>{i.text}</p>
          <div>
            By <address>{i.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
