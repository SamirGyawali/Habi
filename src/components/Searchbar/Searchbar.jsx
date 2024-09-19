import React from "react";
import { useState } from "react";
import "./Searchbar.scss";

const types = ["Rent", "Buy"];

function Searchbar() {
  const [query, setQuery] = useState({
    type: "Rent",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });
  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div className="searchbar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form action="">
        <input type="text" name="location" placeholder="City location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={99999}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={99999}
          placeholder="Max Price"
        />
        <button type="submit">
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}
export default Searchbar;
