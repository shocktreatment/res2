import { useState, useEffect, useCallback } from "react";
import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";

import { getPostById } from "../../shared/servers/posts-api";

import Button from "../../shared/components/Btn/Button";

import s from "./singlePostPage.module.scss";

const SinglePostPage = () => {
  const [post, setPost] = useState();
  const { id } = useParams();

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from || "/";

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const result = await getPostById(id);
        setPost(result);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchPost();
  }, [id]);

  const goBack = useCallback(() => {
    navigate(from);
  }, [navigate, from]);

  return (
    <div className={s.box}>
      <Button onClick={goBack}>Go back</Button>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>

      <Link
        to="/res2/comments"
        state={{ from }}
        style={{ color: "#085223e4", marginTop: "10px", display: "block" }}
      >
        Comments
      </Link>

      <Outlet />
    </div>
  );
};

export default SinglePostPage;
