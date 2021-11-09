import React from "react";
import { useLocation } from "react-router-dom";

function BlogPost() {
  const location = useLocation();
  const state = location.state.post;
  console.log(state);

  return (
    <div className="BlogPosts__Container">
      <h1>BlogPost!!!!</h1>
    </div>
  );
}

export default BlogPost;
