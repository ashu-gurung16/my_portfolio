import transition from "../transition";
import { ReactTyped } from "react-typed";
import Pdf from "../assets/document/Resume.pdf";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";

const skill = [
  "Programmer",
  "Backend developer",
  "Fullstack developer",
  "Frontend developer",
  "Desgin tool",
];

const Home = () => {
  const email = "ashuto.gurung16@gmail.com";
  const subject = "I'm interested in hiring you.";
  const body = "Hi, I'd like to discuss a potential opportunity with you.";
  return (
    <>
      <div className="home_container">
        <div id="home_bg_image">
          <div className="detail_container">
            <div className="item-1">
              <h1 id="name_headling">I'm Ashutosh Gurung.</h1>
            </div>
            <div className="item-2">
              <div id="cat_img"></div>
              <h3 id="tea_headling">Having a nice chai!</h3>
            </div>
            <div className="item-3">
              <h2 id="role_job">
                {"<"}{" "}
                <ReactTyped
                  strings={skill}
                  typeSpeed={100}
                  loop
                  backSpeed={20}
                  cursorChar="|"
                  showCursor={true}
                />
                {" />"}
              </h2>
            </div>
            <div className="item-4">
              <a
                id="hire_me_link"
                href={`mailto:${email}?subject=${encodeURIComponent(
                  subject
                )}&body=${encodeURIComponent(body)}`}
              >
                Hire me
              </a>
              <a id="resume_link" href={Pdf} target="_blank" rel="noreferrer">
                Resume
              </a>
            </div>
            <div className="item-5">
              <a
                href="https://gam.onl/nes/super-mario-bros.html#game"
                target="_blank"
                id="video_link"
              >
                <VideogameAssetIcon fontSize="large" />
              </a>
              <p id="home_pg">
                👈🏻Do you want to play mario? Here's the left link!
                <br /> Enjoy it!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default transition(Home);
