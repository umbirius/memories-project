import React from "react";
import Post from "./Post/Post";

import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();
  return (
    // react fragment
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
