import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";

const Post = () => {
  return (
    <Card>
      <Box>
        <Typography variant="h6">username</Typography>
      </Box>
      <Typography variant="h5" gutterBottom>
        Post Title
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Post Message
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <CommentIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
