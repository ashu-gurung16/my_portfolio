import React, { useState } from "react";
import transition from "../transition";
import MangaImg from "../assets/image/allManga.jpg";
import GameImg from "../assets/image/allGame.jpg";
import ProgImg from "../assets/image/allLanguage.jpg";
import ResearchImg from "../assets/image/allResearch.jpg";

const Hobbies = () => {
  const [showMangaBg, setMangeBg] = useState(false);
  const [showGameBg, setGameBg] = useState(false);
  const [showProgBg, setProgBg] = useState(false);
  const [showResearchBg, setResearchBg] = useState(false);

  return (
    <>
      <div className="hobbies_container">
        <div
          className="hob_card"
          onMouseEnter={() => setMangeBg(true)}
          onMouseLeave={() => setMangeBg(false)}
        >
          <img
            className="hob_img"
            src={MangaImg}
            alt="Manga image"
            style={{ opacity: showMangaBg ? 1 : 0 }}
          />
          <h1 id="hob_headling">Manga</h1>
        </div>
        <div
          className="hob_card"
          onMouseEnter={() => setGameBg(true)}
          onMouseLeave={() => setGameBg(false)}
        >
          <img
            className="hob_img"
            src={GameImg}
            alt="Manga image"
            style={{ opacity: showGameBg ? 1 : 0 }}
          />
          <h1 id="hob_headling">Video Game</h1>
        </div>
        <div
          className="hob_card"
          onMouseEnter={() => setProgBg(true)}
          onMouseLeave={() => setProgBg(false)}
        >
          <img
            className="hob_img"
            src={ProgImg}
            alt="Manga image"
            style={{ opacity: showProgBg ? 1 : 0 }}
          />
          <h1 id="hob_headling">Programming Language</h1>
        </div>
        <div
          className="hob_card"
          onMouseEnter={() => setResearchBg(true)}
          onMouseLeave={() => setResearchBg(false)}
        >
          <img
            className="hob_img"
            src={ResearchImg}
            alt="Research image"
            style={{ opacity: showResearchBg ? 1 : 0 }}
          />
          <h1 id="hob_headling">Research</h1>
        </div>
      </div>
    </>
  );
};

export default transition(Hobbies);
