import React from "react";
import BlogPosts from "../../components/blogPosts/BlogPosts";

function Blog() {
  //Makes page load at top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className="viewContainer">
      <BlogPosts />
    </div>
  );
}

export default Blog;
