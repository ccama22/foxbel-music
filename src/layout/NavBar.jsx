import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import user from "../assets/images/user.svg";
import { StorageSharp } from "@mui/icons-material";

export const NavBar = () => {
  const [anchorEl, setAnchoEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchoEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchoEl(null);
  };
  return (
    <div className="navbar_container">
      <div className="search">
        <input type="text" placeholder="Buscar" />
        <SearchIcon style={{ color: "#BDBDBD" }} />
      </div>
      <div className="account">
        <img src={user} alt="logo usuario" style={{ color: "#E86060" }} />
        <p>Francisco M.</p>
      </div>
      <div className="nav_select">
        <StorageSharp className="icon_storage" />
      </div>
    </div>
  );
};
