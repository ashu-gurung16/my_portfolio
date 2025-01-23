import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { IoMenu } from "react-icons/io5";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Education",
    path: "/education",
  },
  {
    name: "Experience",
    path: "/experience",
  },
  {
    name: "Skill",
    path: "/skill",
  },
  {
    name: "Hobbies",
    path: "/hobbies",
  },
  {
    name: "Project",
    path: "/project",
  },
  {
    name: "Contact Me",
    path: "/contactMe",
  },
];

const Mobile = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {!showMenu ? (
        <div className="navIcon_menu" onClick={() => setShowMenu(true)}>
          <div className="navIcon_menu_hover">
            <IoMenu id="navIcon" />
          </div>
        </div>
      ) : (
        <div className="navbarMob">
          <div className="navbarMob_container">
            <div className="navbarMob_close" onClick={() => setShowMenu(false)}>
              <CloseIcon fontSize="large" />
            </div>
            <div className="navbarMob_menu">
              {links.map((link, index) => {
                return (
                  <Link
                    to={link.path}
                    key={index}
                    className={`${
                      link.path === location.pathname && "mobLinkHover"
                    }`}
                    id="mobLinkNav"
                    onClick={() => setShowMenu(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Mobile;
