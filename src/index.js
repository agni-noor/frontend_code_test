import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { PostProvider } from "./context/PostContext";
import { UserProvider } from "./context/UserContext";
import { CommentProvider } from "./context/CommentContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <PostProvider>
      <UserProvider>
        <CommentProvider>
          <App />
        </CommentProvider>
      </UserProvider>
    </PostProvider>
  </React.StrictMode>
);
