import React from "react";
import { useState } from "react";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Comments from "../Comment/Comments";

const Post = ({ post }) => {
  const [expandPost, setExpandPost] = useState(false);

  const handleClick = () => {
    if (expandPost === false) {
      setExpandPost(true);
    } else {
      setExpandPost(false);
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{post.username}</Typography>
      </CardContent>
      <CardContent>
        <Typography align="center" variant="h5" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.body}
        </Typography>
      </CardContent>

      {expandPost ? (
        <CardContent>
          <Grid container alignItems="stretch" spacing={2}>
            {post.postComments.map((comment) => (
              <Grid item xs={12} key={comment.id}>
                <Comments comment={comment} />
              </Grid>
            ))}
          </Grid>
          <CardActions>
            <Button size="small">
              <ExpandLessIcon onClick={() => handleClick()} />
            </Button>
          </CardActions>
        </CardContent>
      ) : (
        <CardActions>
          <Button size="small">
            <CommentIcon onClick={() => handleClick()} />
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default Post;
