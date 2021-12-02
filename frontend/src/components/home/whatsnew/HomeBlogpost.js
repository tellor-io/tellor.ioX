import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./HomeBlogpost.scss";

export default function HomeBlogpost() {
  const history = useHistory();
  //Redux State
  const allBlogs = useSelector((state) => state.strapiData.blogPosts);
  //Component State
  const [mostRecent, setMostRecent] = useState({});

  useEffect(() => {
    if (allBlogs[0]) {
      if (allBlogs[0].title.length > 50) {
        allBlogs[0].shortTitle = allBlogs[0].title.substring(0, 50) + " ...";
      }
      setMostRecent(allBlogs[0]);
    }
    return () => {
      setMostRecent({});
    };
  }, [allBlogs]);

  return (
    <div className="HomeBlogpost" onClick={() => history.push("/blog")}>
      <div className="HomeBlogpost__image">
        <img
          src={
            Object.keys(mostRecent).length > 1
              ? "https://strapi.tellor.io" + mostRecent.blogImage.url
              : ""
          }
        />
        {/* <img src="https://i.pinimg.com/564x/77/a8/c0/77a8c06b4c278d029b45bc73cb6666af.jpg" /> */}
      </div>
      <div className="HomeBlogpost__txt">
        <p>Blogpost</p>
        <h4>
          {Object.keys(mostRecent).length > 1
            ? mostRecent.shortTitle
              ? mostRecent.shortTitle
              : mostRecent.title
            : ""}
        </h4>
      </div>
    </div>
  );
}
