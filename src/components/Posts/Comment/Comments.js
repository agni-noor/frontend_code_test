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

const Comments = ({ comment }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h7"> {comment.name}</Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          {comment.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Comments;
