import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import Post from "../post/Post";

const Posts = () => {
  const activUser = useSelector((state) => state.activUser);
  const Postsss = useSelector((state) => state.Posts);
  const [allPosts, setAllPosts] = useState(Postsss);

  function deletPost(id) {
    setAllPosts([...allPosts.filter((post) => post.id != id)]);
  }

  return (
    <div>
      {allPosts.map((post) => (
        <Post post={post} deletPost={deletPost} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
