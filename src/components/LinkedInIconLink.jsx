import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";

const LinkedInIconLink = () => {
  return (
    <>
      <IconButton
        component="a"
        id="about_icon"
        href="http://www.linkedin.com/in/ashutosh-gurung-a986b6309"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon fontSize="large" />
      </IconButton>
    </>
  );
};

export default LinkedInIconLink;
