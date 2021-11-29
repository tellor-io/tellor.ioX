import React, { useContext } from "react";
import "./BlogPosts.scss";
//Context
import { BlogContext } from "./BlogPosts";
//React Router
import { Link } from "react-router-dom";
//Helpers
import { titleFormatter } from "./blogPostsHelpers";

function RegularView() {
  const blogContext = useContext(BlogContext);

  return (
    <div className="BlogPosts">
      <div className="topRow">
      {blogContext.hero[0] &&
        blogContext.hero.map((post) => {
          return (
            <Link
              key={post.id}
              className="hero"
              to={{
                pathname: `/blog/${post.postUrl}`,
                state: {
                  post: post,
                },
              }}
            >
              <div className="hero__imgholder">
                <img
                  src={"http://167.172.156.209:1337" + post.blogImage.url}
                  alt={post.blogImage.name}
                />
              </div>
              <h5>{post.publishDate}</h5>
              <h1>{titleFormatter(post.title)}</h1>
            </Link>
          );
        })}
      <div className="subhero">
        {blogContext.subhero[0] &&
          blogContext.subhero.map((post) => {
            return (
              <Link
                key={post.id}
                className="subhero__innerDivs"
                to={{
                  pathname: `/blog/${post.postUrl}`,
                  state: {
                    post: post,
                  },
                }}
              >
                <div className="subhero__innerDivs__imgholder">
                  <img
                    src={"http://167.172.156.209:1337" + post.blogImage.url}
                    alt={post.blogImage.name}
                  />
                </div>
                <h5>{post.publishDate}</h5>
                <h1>{titleFormatter(post.title)}</h1>
              </Link>
            );
          })}
      </div>
      </div>
      <div className="posts">
        {blogContext.posts[0] &&
          blogContext.posts.map((post) => {
            return (
              <Link
                key={post.id}
                className="posts__innerDivs"
                to={{
                  pathname: `/blog/${post.postUrl}`,
                  state: {
                    post: post,
                  },
                }}
              >
                <img
                  src={"http://167.172.156.209:1337" + post.blogImage.url}
                  alt={post.blogImage.name}
                />
                <h5>{post.publishDate}</h5>
                <h1>{titleFormatter(post.title)}</h1>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default RegularView;
