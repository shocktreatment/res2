import { memo } from "react";
import { Link, useLocation } from "react-router-dom";

import PropTypes from "prop-types";

import s from "./list-of-post.module.scss";

const ListOfPost = ({ items }) => {
  const location = useLocation();

  const elements = items.map(({ id, title, body }) => (
    <Link
      key={id}
      className={s.link}
      to={`/posts/${id}`}
      state={{ from: location }}
    >
      <li className={s.item}>
        <h4>{title}</h4>
        <p>{body}</p>
      </li>
    </Link>
  ));
  return <ul className={s.list}>{elements}</ul>;
};

export default memo(ListOfPost);

ListOfPost.defaultProps = {
  item: [],
};

ListOfPost.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      body: PropTypes.string,
    })
  ),
};
