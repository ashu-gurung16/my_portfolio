import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";

const GitHubIconLink = () => {
  return (
    <>
      <IconButton
        id="about_icon"
        href="https://github.com/ashu-gurung16"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon fontSize="large" />
      </IconButton>
    </>
  );
};

export default GitHubIconLink;
