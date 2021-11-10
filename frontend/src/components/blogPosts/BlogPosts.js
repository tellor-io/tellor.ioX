import React, { useState, useEffect } from "react";
import "./BlogPosts.scss";
//Helpers
import { reverseData } from "./blogPostsHelpers";
//Assets
import dropdown from "../../assets/dropdown.svg";
import searchIcon from "../../assets/search.svg";
//Redux
import { useSelector } from "react-redux";
//Components
import RegularView from "./RegularView.js";
import SearchView from "./SearchView.js";

//Context
export const BlogContext = React.createContext();
//Initial Form State
const initialSearchState = {
  search: "",
};

function BlogPosts() {
  //Component State
  const [searchBar, setSearchBar] = useState(initialSearchState);
  const [hero, setHero] = useState([]);
  const [subhero, setSubhero] = useState([]);
  const [posts, setPosts] = useState([]);
  const [reversed, setReversed] = useState([]);
  const [blogLength, setBlogLength] = useState(1);
  //
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  const [orderDirection, setOrderDirection] = useState(true);
  const [loadMoreClicks, setLoadMoreClicks] = useState(1);
  const [loadMoreButton, setLoadMoreButton] = useState(true);
  //Redux State
  const blogPostsFromRedux = useSelector((state) => state.strapiData.blogPosts);
  //Context
  const blogContext = {
    orderDirection: orderDirection,
    reversed: reversed,
    hero: hero,
    subhero: subhero,
    posts: posts,
  };

  //useEffect for creating reversed blog array on component render
  useEffect(() => {
    setReversed(reverseData("order", blogPostsFromRedux));
    return () => {
      setReversed([]);
    };
  }, []);

  //useEffect to handle blog order direction
  useEffect(() => {
    if (orderDirection) {
      setHero([blogPostsFromRedux[0]]);
      setSubhero([blogPostsFromRedux[1], blogPostsFromRedux[2]]);
      setPosts(blogPostsFromRedux.slice(3, 6));
      setBlogLength(blogPostsFromRedux.length);
      setLoadMoreClicks(1);
      setLoadMoreButton(true);
    } else if (!orderDirection) {
      setHero([reversed[0]]);
      setSubhero([reversed[1], reversed[2]]);
      setPosts(reversed.slice(3, 6));
      setBlogLength(reversed.length);
      setLoadMoreClicks(1);
      setLoadMoreButton(true);
    }
    return () => {
      setHero([]);
      setSubhero([]);
      setPosts([]);
      setBlogLength(0);
      setLoadMoreClicks(1);
      setLoadMoreButton(true);
    };
  }, [orderDirection]);

  const handleSearch = () => {
    setToggleSearchBar(!toggleSearchBar);
  };

  const handleSearchChange = (e) => {
    setSearchBar({
      search: e.target.value,
    });
  };

  const handleLoadMore = () => {
    setLoadMoreClicks(loadMoreClicks + 1);
    let loads = Math.ceil((blogLength - 6) / 6);
    let loadAmount = 6 + 6 * loadMoreClicks;
    if (loadMoreClicks <= loads && orderDirection) {
      setPosts(blogPostsFromRedux.slice(3, loadAmount));
      if (loadMoreClicks === loads) {
        setLoadMoreButton(false);
      }
    } else if (loadMoreClicks <= loads && !orderDirection) {
      setPosts(reversed.slice(3, loadAmount));
      if (loadMoreClicks === loads) {
        setLoadMoreButton(false);
      }
    }
  };

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
          <img src={searchIcon} onClick={handleSearch} alt="search icon" />
          <input
            style={{
              display: toggleSearchBar ? "block" : "none",
            }}
            type="text"
            name="searchBar"
            placeholder="Search for a blog"
            onChange={handleSearchChange}
            value={searchBar.search}
          />
        </div>
      </div>
      {searchBar.search.length > 0 ? (
        <SearchView searchBar={searchBar} />
      ) : (
        <BlogContext.Provider value={blogContext}>
          <RegularView />
        </BlogContext.Provider>
      )}
      <div className="LoadMore__Container">
        <div className="LoadMore__Button" onClick={() => handleLoadMore()}>
          <h4>{loadMoreButton ? "load more" : "that's all folks!"}</h4>
        </div>
      </div>
    </div>
  );
}

export default BlogPosts;
