import React, { useEffect, useState } from "react";
import Post from "./Post/Post";
import axios from "axios";

import { Grid, CircularProgress } from "@mui/material";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const [users, setUsers] = useState([]);

  const [data, setData] = useState([]);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/users");
        setUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchPosts = async () => {
      try {
        const response = await axios.get("/posts");
        setPosts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    const fetchComments = async () => {
      try {
        const response = await axios.get("/comments");
        setComments(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUsers();
    fetchPosts();
    fetchComments();
  }, []);

  useEffect(() => {
    if (posts.length && users.length && comments.length) {
      const mappedArray = posts.map((post) => {
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
      console.log(mappedArray);
      setData(mappedArray);
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
