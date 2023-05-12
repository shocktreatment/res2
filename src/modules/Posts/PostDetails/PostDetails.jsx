import s from "./postDetails.module.scss";

const PostDetails = ({ title, body }) => {
  return (
    <div className={s.box}>
      <h3 className={s.title}>{title}</h3>
      <p className={s.body}>{body}</p>
    </div>
  );
};

export default PostDetails;
