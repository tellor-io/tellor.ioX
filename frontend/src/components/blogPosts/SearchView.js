import React from "react";
//Redux
import { useSelector } from "react-redux";
//React Router
import { Link } from "react-router-dom";
//Helpers
import { titleFormatter } from "./blogPostsHelpers";

function SearchView({ searchBar }) {
  //Redux State
  const blogPostsFromRedux = useSelector((state) => state.strapiData.blogPosts);

  return (
    <div className="BlogPosts">
      <div className="posts">
        {blogPostsFromRedux
          .filter((post) => post.title.includes(searchBar.search))
          .map((post) => {
            return (
              <Link
                className="posts__innerDivs"
                key={post.id}
                to={{
                  pathname: `/blog/${post.postUrl}`,
                  state: {
                    post: post,
                  },
                }}
              >
                <img
                  src={"https://strapi.tellor.io" + post.blogImage.url}
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

export default SearchView;
