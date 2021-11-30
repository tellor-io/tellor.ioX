import React from "react";
import "./BlogPost.scss";
import { useLocation, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

function BlogPost() {
  //Makes page load at top
  window.scrollTo(0, 0);
  //Component State
  const location = useLocation();
  let post = location.state.post;
  if (post.title.includes(":")) {
    let titles = post.title.split(":");
    post.title = titles[0];
    post.subtitle = titles[1];
  }

  return (
    <div className="BlogPost__Container">
      <Link className="Go__Back" to="/blog">
        view all blog posts
      </Link>
      <img
        src={"https://strapi.tellor.io" + post.blogImage.url}
        alt="blog image"
      />
      <h1>{post.title}</h1>
      <h2>{post.subtitle ? post.subtitle : null}</h2>
      <h5>{post.publishDate}</h5>
      <ReactMarkdown
        className="Blog__Body"
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
      >
        {post.postData}
      </ReactMarkdown>
      <div className="Blog__Footer">
        <h5>{`Written by the Tellor Core on ${post.publishDate}`}</h5>
        <Link to="/" className="Go__Home">
          visit tellor.io
        </Link>
      </div>
    </div>
  );
}

export default BlogPost;
