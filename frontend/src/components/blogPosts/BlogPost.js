import React, { useEffect, useState } from "react";
import "./BlogPost.scss";
import { useLocation, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
//Helpers
import {
  sortDataByProperty,
  dateFormatter,
  urlFormatter,
} from "../../redux/thunks/strapiDataHelpers";

function BlogPost() {
  //Makes page load at top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  //Component State
  const [post, setPost] = useState({});
  const location = useLocation();

  //useEffect that handles when user is given
  //a url without first visiting tellor.io
  useEffect(() => {
    if (location.state) {
      let p = location.state.post;
      if (p.title.includes(":")) {
        let titles = p.title.split(":");
        p.title = titles[0];
        p.subtitle = titles[1];
      }
      setPost(p);
    } else if (!location.state && location.pathname) {
      let urlTitle = location.pathname.slice(6);
      fetch("https://strapi.tellor.io/blog-posts")
        .then((response) => response.json())
        .then((data) => {
          //data formatting
          let order = 0;
          let sorted = sortDataByProperty("publishDate", data);
          let final = sorted.map((post) => {
            post.order = order;
            post.publishDate = dateFormatter(post.publishDate);
            post.postUrl = urlFormatter(post.title);
            order++;
            return post;
          });
          let p = final.filter((post) => post.postUrl === urlTitle);
          setPost(p[0]);
        });
    }
    return () => {
      setPost({});
    };
  }, [location]);

  return (
    <div className="BlogPost__Container">
      <Link className="Go__Back" to="/blog">
        view all blog posts
      </Link>
      <img
        src={
          Object.keys(post).length > 1
            ? "https://strapi.tellor.io" + post.blogImage.url
            : ""
        }
        alt={
          Object.keys(post).length > 1 ? "blog image" : "Loading Blog Image..."
        }
      />
      <h1>{Object.keys(post).length > 1 ? post.title : ""}</h1>
      <h2>
        {Object.keys(post).length > 1
          ? post.subtitle
            ? post.subtitle
            : null
          : ""}
      </h2>
      <h5>{Object.keys(post).length > 1 ? post.publishDate : ""}</h5>
      <ReactMarkdown
        className="Blog__Body"
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
      >
        {Object.keys(post).length > 1 ? post.postData : ""}
      </ReactMarkdown>
      <div className="Blog__Footer">
        <h5>
          {Object.keys(post).length > 1
            ? `Written by the Tellor Core on ${post.publishDate}`
            : ""}
        </h5>
        <Link to="/" className="Go__Home">
          visit tellor.io
        </Link>
      </div>
    </div>
  );
}

export default BlogPost;
