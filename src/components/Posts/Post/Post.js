import React from "react";
import { useState } from "react";
import { styles } from "./styles";
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
    <Card sx={styles.card}>
      <CardContent>
        <Typography sx={styles.username} variant="h6">
          {post.username}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography sx={styles.title} align="center" variant="h5" gutterBottom>
          {post.title}
        </Typography>
        <Typography sx={styles.postbody} variant="body2" component="p">
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
