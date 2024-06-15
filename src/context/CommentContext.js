import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get("/comments");
        setComments(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, []);

  return (
    <CommentContext.Provider value={{ comments, isLoading }}>
      {children}
    </CommentContext.Provider>
  );
};
