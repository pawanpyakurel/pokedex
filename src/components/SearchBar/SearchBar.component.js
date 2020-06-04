import React,{useState} from "react";

import { FaSearch } from "react-icons/fa";
import {SearchBarWrapper} from "./SearchBar.styles";

const SearchBar = (props) => {
    const [searchingTerm, setSearchTerm] =useState ("");

    const handleSearch = e => {
      setSearchTerm(e.target.value);
      props.handleChange(e.target.value);
    };
    return (
      <SearchBarWrapper>
       <form className="form">
          <input
            type="text"
            name="search"
            placeholder="Search for Pokemon"
            className="form__input"
            value={searchingTerm}
            onChange={handleSearch}
          />
          <button className="form__icon">
            <div style ={{display: "flex", }}>
              <FaSearch size={25} />
            </div>
          </button>
        </form>
      </SearchBarWrapper>
  
    );
  };
  
export default SearchBar;