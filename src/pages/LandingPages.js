import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./LandingPages.css"; // Create a CSS file for your styles

// Components
import Card from "../components/card";
import Modal from "../components/modal";
// import Detail from "./Detail";

export default function LandingPage() {
  const [data, setData] = useState(null);
  const [isLoaded, setisLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("Film");
  const [searchBarPosition, setSearchBarPosition] = useState("normal");

  // Modal
  const [modalShow, setModalShow] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    const fetchData = async (query) => {
      setIsLoading(true);
      try {
        const response = await axios.get("https://imdb8.p.rapidapi.com/auto-complete", {
          params: { q: query },
          headers: {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "X-RapidAPI-Key": "fa37ed6693msh773598a8bc13016p1dcdbdjsn5b7ece526693",
          },
        });
        if (response.status === 200) {
          setData(response.data);
          setisLoaded(true);
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    if (!isLoaded) {
      fetchData(query);
    }
  }, [isLoaded, query]);

  const onSearch = (e) => {
    if (e.key === "Enter") {
      setisLoaded(false);
      setQuery(e.target.value);
    }
  };

  const handleClick = (item) => {
    setModalShow(!modalShow);
    setModalItem(item);
  };

  const toggleSearchBar = () => {
    setSearchBarPosition(searchBarPosition === "normal" ? "slide-right" : "normal");
  };

  return (
    <main>
      <div className={`search-bar ${searchBarPosition}`}>
        <input type="text" placeholder="Search film by name" onKeyDown={(e) => onSearch(e)} />
        <div className="toggle-icon" onClick={toggleSearchBar}>
          {/* Add an icon for the toggle button */}
        </div>
      </div>
      {!data || isLoading ? (
        <p></p>
      ) : (
        <div className="card-container">
          {data.d.map((item, index) => (
            <Link to={`/detail/${item.id}`} key={index} className="card-link">
              <Card data={item} onClick={() => setModalShow(true)} />
            </Link>
          ))}
        </div>
      )}
      <Modal data={modalItem} isShow={modalShow} onCancel={() => setModalShow(false)} />
    </main>
  );
}
