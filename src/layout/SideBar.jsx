import { useState } from "react";
import { StorageSharp } from "@mui/icons-material";
import { menuItemLibrary, menuItemPlaylist } from "../helpers/SidebarData";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="sidebar" style={{ width: isOpen ? "300px" : "50px" }}>
      <div className="top_section">
        <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
          My shop
        </h1>
        <div style={{ marginLeft: isOpen ? "80px" : "0px" }} className="bars">
          <StorageSharp onClick={toggle} />
        </div>
      </div>
      <div style={{ display: isOpen ? "block" : "none" }}>
        <p className="my_library">Mi libreria</p>
        {menuItemLibrary.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={(navData) =>
              navData.isActive ? "link active" : "link no_active"
            }
            end
          >
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
        <p className="my_playlist">Playlist</p>
      </div>
    </div>
  );
};
