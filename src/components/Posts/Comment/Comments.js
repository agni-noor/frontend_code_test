import React from "react";

import { Card, CardContent, Typography } from "@mui/material";
import { styles } from "./styles";

const Comments = ({ comment }) => {
  return (
    <Card sx={styles.card}>
      <CardContent>
        <Typography variant="h7" sx={styles.username}>
          {comment.name}
        </Typography>

        <Typography
          sx={styles.commentbody}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {comment.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Comments;
