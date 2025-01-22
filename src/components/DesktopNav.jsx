import { Link, useLocation } from "react-router";
import LightModeIcon from "@mui/icons-material/LightMode";
import BedtimeIcon from "@mui/icons-material/Bedtime";

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

const DesktopNav = ({ isChangeTheme, setTheme }) => {
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="navbar_menu">
          {links.map((link, index) => {
            return (
              <Link
                to={link.path}
                key={index}
                className={`${link.path === location.pathname && "linkHover"}`}
                id="linkNav"
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="theme_menu">
          <div className="theme" onClick={() => setTheme(!isChangeTheme)}>
            {isChangeTheme ? (
              <LightModeIcon fontSize="large" />
            ) : (
              <BedtimeIcon fontSize="large" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
