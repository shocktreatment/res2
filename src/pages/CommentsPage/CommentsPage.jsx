import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getPostCommentsById } from "../../shared/servers/posts-api";

const CommentsPage = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const featchComments = async () => {
      try {
        const result = await getPostCommentsById(id);
        setComments(result);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    featchComments();
  }, [id]);

  const elements = comments.map(({ name, body, id }) => (
    <li key={id}>
      <h3>{name}</h3>
      <p>{body}</p>
    </li>
  ));

  return <ol>{elements}</ol>;
};
export default CommentsPage;
