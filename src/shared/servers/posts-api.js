import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
  params: {
    _limit: 8,
  },
});

export const getPosts = async (quantity, _page = 1) => {
  const { data } = await instance.get("/", {
    params: {
      q: quantity,
      _page,
    },
  });
  return data;
};

export const getAllPost = async () => {
  const { data } = await instance("/");
  return data;
};

export const getPostById = async (id) => {
  const { data } = await instance.get(`/${id}`);
  return data;
};

export const getPostCommentsById = async (id) => {
  const { data } = await instance.get(`/${id}/comments`);
  return data;
};