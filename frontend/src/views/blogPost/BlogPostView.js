import React from "react";
import BlogPost from "../../components/blogPosts/BlogPost";

function BlogPostView() {
  //Makes page load at top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className="viewContainer">
      <BlogPost />
    </div>
  );
}

export default BlogPostView;
