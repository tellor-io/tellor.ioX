import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Blogpost() {
  const history = useHistory();
  const allBlogs = useSelector((state) => state.strapiData.blogPosts);
  const mostRecent = allBlogs[0];

  return (
    <div className="Blogpost" onClick={() => history.push("/blog")}>
      <div className="Blogpost__image">
        <img src={"http://167.172.156.209:1337" + mostRecent.blogImage.url} />
      </div>
      <div className="Blogpost__txt">
        <p>Blogpost</p>
        <h4>{mostRecent.title}</h4>
      </div>
    </div>
  );
}
