import React, { useState, useEffect, useRef, useCallback } from "react";
import "./BlogPosts.scss";
import {
  sortDataByProperty,
  dateFormatter,
  reverseData,
} from "./blogPostsHelpers";
import dropdown from "../../assets/dropdown.svg";
import search from "../../assets/search.svg";

function BlogPosts() {
  const heroRef = useRef();
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [hero, setHero] = useState([]);
  const [subhero, setSubhero] = useState([]);
  const [blogLength, setBlogLength] = useState(0);
  const [orderDirection, setOrderDirection] = useState(true);
  const [toggleSearchBar, setToggleSearchBar] = useState(false);

  const handleSearch = () => {
    setToggleSearchBar(!toggleSearchBar);
  };

  useEffect(() => {
    const credentials = {
      email: "jsamaniego@tellor.io",
      password: "wgZ8ucu6fDGhrnZ",
    };

    fetch("https://tellorstrapi.herokuapp.com/admin/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((res) => res.json())
      .then((res) => {
        fetch("https://tellorstrapi.herokuapp.com/blog-posts", {
          headers: {
            Authorization: `Bearer ${res.data.token}`,
          },
        })
          .then((res) => res.json())
          .then((postsData) => console.log(postsData))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));

    fetch("http://localhost:1337/blog-posts/")
      .then((res) => res.json())
      .then((postsData) => {
        sortDataByProperty("publishDate", postsData);
        let order = 0;
        let array = [];
        postsData.map((post) => {
          post.publishDate = dateFormatter(post.publishDate);
          post.order = order;
          order++;
        });

        console.log("regular", postsData);
        const reversed = postsData.sort((a, b) => b - a);
        console.log("reversed", reversed);

        setAllPosts(postsData);
        array.push(postsData[1]);
        array.push(postsData[2]);
        setBlogLength(postsData.length);
        setHero([postsData[0]]);
        setSubhero(array);
        setPosts(postsData.slice(3));
      });
    return () => {
      setPosts([]);
      setSubhero([]);
      setHero([]);
      setBlogLength(0);
    };
  }, []);

  useEffect(() => {
    console.log(allPosts);
    if (orderDirection) {
      setHero([allPosts[0]]);
      setSubhero([allPosts[1], allPosts[2]]);
      setPosts(allPosts.slice(3));
    } else {
      let arrayToUse = [];
      let reversed = reverseData("order", allPosts);
      let newHero = reversed[0];
      arrayToUse.push(reversed[1]);
      arrayToUse.push(reversed[2]);
      setSubhero(arrayToUse);
      setPosts(reversed.slice(3));
      setHero([newHero]);
    }
  }, [orderDirection]);

  //   function useUpdateEffect(callback, dependencies) {
  //     const firstRenderRef = useRef(true);

  //     useEffect(() => {
  //       if (firstRenderRef.current) {
  //         firstRenderRef.current = false;
  //         return;
  //       }
  //       return callback();
  //     }, dependencies); //eslint-disable-line
  //   }

  //useUpdateEffect(() => alert(count), [count]);

  //   console.log("posts", posts);
  //   console.log("hero", hero);
  //   console.log("subhero", subhero);
  //   console.log(blogLength);

  console.log(allPosts);

  return (
    <div className="BlogPosts__Container">
      <div className="filters">
        <div
          className="dropdown"
          onClick={() => {
            setOrderDirection(!orderDirection);
          }}
        >
          <img src={dropdown} alt="dropdown arrow" />
          <h3>{orderDirection ? "newest to oldest" : "oldest to newest"}</h3>
        </div>
        <div className="search">
          <img src={search} onClick={handleSearch} alt="search icon" />
          <input
            style={{
              display: toggleSearchBar ? "block" : "none",
            }}
            type="text"
          />
        </div>
      </div>
      <div className="BlogPosts">
        {hero[0] &&
          hero.map((post) => {
            return (
              <div className="hero" ref={heroRef} key={post.id}>
                <img
                  src={
                    "http://localhost:1337" + post.blogImage.formats.medium.url
                  }
                  alt={post.blogImage.name}
                />
                <h5>{post.publishDate}</h5>
                <h1>{post.title}</h1>
              </div>
            );
          })}
        <div className="subhero">
          {subhero[0] &&
            subhero.map((post) => {
              return (
                <div className="subhero__innerDivs" key={post.id}>
                  <img
                    src={
                      "http://localhost:1337" +
                      post.blogImage.formats.medium.url
                    }
                    alt={post.blogImage.name}
                  />
                  <h5>{post.publishDate}</h5>
                  <h1>{post.title}</h1>
                </div>
              );
            })}
        </div>
        <div className="posts">
          {posts[0] &&
            posts.map((post) => {
              return (
                <div className="posts__innerDivs" key={post.id}>
                  <img
                    src={
                      "http://localhost:1337" +
                      post.blogImage.formats.medium.url
                    }
                    alt={post.blogImage.name}
                  />
                  <h5>{post.publishDate}</h5>
                  <h1>{post.title}</h1>
                </div>
              );
            })}
        </div>
      </div>
      <div className="Load__More">
        <h4>Load More Posts</h4>
      </div>
    </div>
  );
}

export default BlogPosts;
