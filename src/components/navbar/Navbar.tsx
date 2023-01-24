import React from "react";
import styles from "../../styles/Navbar.module.css";
import logo from "../../assets/dimensionalimg.png";
import SearchBar from "./SearchBar";

// import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <nav className={styles.navParent}>
      <div>
        <img src={logo} alt="" />
        <h1>Dimensional</h1>
      </div>
      <SearchBar />
    </nav>
  );
}

export default Navbar;
