import React,{useState} from "react";

import { FaSearch } from "react-icons/fa";
import {NavbarWrapper} from "./Navbar.styles";
import  {SearchModal} from "../SearchModal";

//assets
import Favicon from "../../assets/images/favicon.png";

const Navbar = () => {
    const [openSearchbar, setOpenSearchbar] =useState (false);
    const showSearchModal = () =>{
        setOpenSearchbar(true)
    }
    const closeSearchModal = () =>{
        setOpenSearchbar(false)
    }
    
    return (
        <>
            <NavbarWrapper>
                <div className="menu_icon"> 
                    <img src={Favicon} alt="logo"/>
                </div>
                <FaSearch 
                    color="#FFF"
                    size={35}
                    onClick={() => showSearchModal()}
                    height = "auto"
                />
            </NavbarWrapper>
            <SearchModal 
                visible={openSearchbar}
                hideModal={closeSearchModal}
            />
        </>
  
    );
  };
  
export default Navbar;