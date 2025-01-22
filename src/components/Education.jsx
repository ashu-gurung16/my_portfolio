import { useState } from "react";
import transition from "../transition";
import EdModal from "./EdModal";
import { AnimatePresence } from "framer-motion";
import nishIcon from "/src/assets/image/nish.png";

const edList = [
  {
    name: "National Institute of Speech and Hearing",
    place: "Thirvuananthaparum",
    course: "B. Sc computer science (HI)",
    desc: "I completed study in degree. I can deeply analyse the coding and projects issue with logical, algorithm and research. My skills are C, C++, C#, ASP .Net, MySQL, React, Node.js, Express.js, MongoDB and API.",
    date: "2020-2024",
    img: nishIcon,
  },
];

const Education = () => {
  const [isSelect, setSelect] = useState(false);
  const [isTitle, setTitle] = useState(edList);

  return (
    <>
      <div className="ed_container">
        <div className="ed_card">
          {edList.map((item, index) => {
            return (
              <div
                key={index}
                className="ed_item_container"
                onClick={() => {
                  setSelect(true);
                  setTitle(item);
                }}
              >
                <div
                  id="ed_img"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>
                <div className="ed_item">
                  <h1>{item.name}</h1>
                  <h2 id="ed_course">{item.course}</h2>
                  <h2>{item.date}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <AnimatePresence>
        {isSelect && (
          <EdModal
            {...isTitle}
            onClose={() => {
              setSelect(false);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default transition(Education);
