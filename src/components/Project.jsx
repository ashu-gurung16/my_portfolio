import React, { useState } from "react";
import transition from "../transition";
import ImageReveal from "./ImageReveal";
import aniTubeImg from "../assets/image/anitube.png";
import lslImg from "../assets/image/lsl.png";
import { AnimatePresence, useSpring } from "framer-motion";

const Project = () => {
  const [showHoverLSL, setHoverLSL] = useState(false);
  const [showGitLSL, setGitLSL] = useState(false);
  const [showLivLSL, setLivLSL] = useState(false);
  const [showHoverAniT, setHoverAniT] = useState(false);
  const [showGitAnit, setGitAnit] = useState(false);
  const [showLivAnit, setLivAnit] = useState(false);

  const spring = {
    stiffnedd: 150,
    damping: 15,
    mass: 0.1,
  };

  const mousePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  return (
    <>
      <div className="proj_container">
        <div className="proj_card">
          <div
            className="proj_hover"
            onMouseMove={(e) => {
              setHoverLSL(true);
              const { clientX, clientY } = e;
              mousePos.x.set(clientX);
              mousePos.y.set(clientY);
            }}
            onMouseLeave={() => setHoverLSL(false)}
          >
            <div className="proj_item">
              <h1 id="proj_headling">
                1. Learn Sign Learning project via C# .Net
              </h1>
            </div>
            <div className="proj_button">
              <div
                className="proj_link"
                onMouseEnter={() => setGitLSL(true)}
                onMouseLeave={() => setGitLSL(false)}
              >
                {!showGitLSL ? (
                  "GitHub"
                ) : (
                  <a
                    href="https://github.com/ashu-gurung16/Learn-Sign-Language-project-using-c-.Net-with-MySQL/tree/main"
                    target="_blank"
                    id="proj_git_link"
                  >
                    link
                  </a>
                )}
              </div>
              <div
                className="proj_no_link"
                onMouseEnter={() => setLivLSL(true)}
                onMouseLeave={() => setLivLSL(false)}
              >
                {!showLivLSL ? "Live" : "No link"}
              </div>
            </div>
            <AnimatePresence>
              {showHoverLSL && (
                <ImageReveal
                  imgSrc={lslImg}
                  alt="Learn sign language project image"
                  mousePos={mousePos}
                />
              )}
            </AnimatePresence>
          </div>

          <div
            className="proj_hover"
            onMouseMove={(e) => {
              setHoverAniT(true);
              const { clientX, clientY } = e;
              mousePos.x.set(clientX);
              mousePos.y.set(clientY);
            }}
            onMouseLeave={() => setHoverAniT(false)}
          >
            <div className="proj_item">
              <h1 id="proj_headling">
                2. AniTube (Video Streaming) project via MERN Stack
              </h1>
            </div>
            <div className="proj_button">
              <div
                className="proj_no_link"
                onMouseEnter={() => setGitAnit(true)}
                onMouseLeave={() => setGitAnit(false)}
              >
                {!showGitAnit ? "GitHub" : "No link"}
              </div>
              <div
                className="proj_no_link"
                onMouseEnter={() => setLivAnit(true)}
                onMouseLeave={() => setLivAnit(false)}
              >
                {!showLivAnit ? "Live" : "No link"}
              </div>
            </div>
            <AnimatePresence>
              {showHoverAniT && (
                <ImageReveal
                  imgSrc={aniTubeImg}
                  alt="AniTube project image"
                  mousePos={mousePos}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default transition(Project);
