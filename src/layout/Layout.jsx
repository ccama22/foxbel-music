import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";
export const Layout = () => {
  return (
    <>
      <div className="sidebar_container">
        <SideBar />
        <main>
          <div className="main_container">
            <NavBar />
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};
