import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

import { getPosts } from "../../../shared/servers/posts-api";

import Form from "../PostsForm/PostsForm";
import ListOfPost from "../../../shared/components/toPosts/ListOfPost/ListOfPost";
import Modal from "../../../shared/components/toPosts/Modal/Modal";
import PostDetails from "../PostDetails/PostDetails";

import { Loading } from "../../../shared/components/toPosts/Loading/Loading";

import s from "./searchPosts.module.scss";

const SearchPosts = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [postDetails, setPostDetails] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  const page = searchParams.get("page");

  useEffect(() => {
    if (search) {
      const featchPosts = async () => {
        try {
          setIsLoading(true);
          const data = await getPosts(search, page);
          setItems((prevItems) => {
            return [...prevItems, ...data];
          });
        } catch (error) {
          setIsError(error.message);
        } finally {
          setIsLoading(false);
        }
      };

      featchPosts();
    }
  }, [search, page, setIsLoading, setIsError, setItems]);

  const onSubmit = useCallback(
    ({ search }) => {
      setSearchParams({ search, page: 1 });
      setItems([]);
    },
    [setSearchParams]
  );

  const loadMore = useCallback(() => {
    setSearchParams({ search, page: Number(page) + 1 });
  }, [setSearchParams, search, page]);

  const showPost = useCallback(({ title, body }) => {
    setPostDetails({
      title,
      body,
    });
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
    setPostDetails(null);
  }, []);

  return (
    <>
      <div className={s.box}>
        <Form onSubmit={onSubmit} />
      </div>

      {isError && <p>Sorry! Something goes wrong.</p>}

      <ListOfPost items={items} showPost={showPost} />
      
      {isLoading && <Loading />}

      {Boolean(items.length) && (
        <button type="button" className={s.loadMore} onClick={loadMore}>
          Load more
        </button>
      )}

      {showModal && (
        <Modal closeModal={closeModal}>
          <PostDetails {...postDetails} />
        </Modal>
      )}
    </>
  );
};

export default SearchPosts;
