import React, { useEffect, useState } from "react";
import Post from "./Post/Post";
import axios from "axios";
import { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import { UserContext } from "../../context/UserContext";
import { CommentContext } from "../../context/CommentContext";

import { Grid, CircularProgress } from "@mui/material";

const Posts = () => {
  const { posts, isLoading: postsLoading } = useContext(PostContext);
  const { users, isLoading: usersLoading } = useContext(UserContext);
  const { comments, isLoading: commentsLoading } = useContext(CommentContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (posts.length && users.length && comments.length) {
      const processedData = posts.map((post) => {
        const userInfo = users.find((user) => user.id === post.userId);
        const commentData = comments.filter(
          (comment) => comment.postId === post.id
        );
        return {
          ...post,
          username: userInfo ? userInfo.username : "Unknown",
          postComments: commentData,
        };
      });
      setData(processedData);
    }
  }, [posts, users, comments]);

  return !data.length ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {data.map((post) => (
        <Grid item xs={12} key={post.id}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
