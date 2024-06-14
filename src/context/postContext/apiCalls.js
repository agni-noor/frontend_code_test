import axios from "axios";
import { getPostsStart, getPostsSuccess, getPostsFailure } from "./PostActions";

export const getPosts = async (dispatch) => {
  dispatch(getPostsStart());
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch(getPostsSuccess(res.data));
  } catch (err) {
    dispatch(getPostsFailure());
  }
};
