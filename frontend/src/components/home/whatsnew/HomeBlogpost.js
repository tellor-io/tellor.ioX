import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import './HomeBlogpost.scss'

export default function HomeBlogpost() {
  const history = useHistory();
  const allBlogs = useSelector((state) => state.strapiData.blogPosts);
  const mostRecent = allBlogs[0];

  return (
    
    <div className="HomeBlogpost" onClick={() => history.push("/blog")}>
      <div className="HomeBlogpost__image">
        <img src={"http://167.172.156.209:1337" + mostRecent.blogImage.url} />
        {/* <img src="https://i.pinimg.com/564x/77/a8/c0/77a8c06b4c278d029b45bc73cb6666af.jpg" /> */}
      </div>
      <div className="HomeBlogpost__txt">
        <p>Blogpost</p>
        <h4>{mostRecent.title}</h4>
      </div>
    </div>

  );
}
