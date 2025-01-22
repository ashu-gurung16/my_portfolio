import transition from "../transition";
import GitHubIconLink from "./GitHubIconLink";
import LinkedInIconLink from "./LinkedInIconLink";

const About = () => {
  return (
    <div id="about_page">
      <div id="about_bg_img">
        <div className="about_container">
          <div id="about_item-1">
            <h1 id="about_heading">About me</h1>
            <p id="about_paragraph">
              Hello there! I am Ashutosh Dev, a problem-solver at heart, I build
              web solutions that are scalable, efficient, and tailored to user
              needs.
            </p>
          </div>
          <div id="about_item-2">
            <div id="ashu_img"></div>
          </div>
          <div id="about_item-3">
            <LinkedInIconLink />
            <GitHubIconLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default transition(About);
