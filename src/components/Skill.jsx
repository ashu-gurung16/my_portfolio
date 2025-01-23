import { motion, useSpring } from "framer-motion";
import transition from "../transition";
import {
  DiBootstrap,
  DiCss3,
  DiGithubBadge,
  DiHtml5,
  DiJavascript1,
  DiMongodb,
  DiMysql,
  DiNodejsSmall,
  DiNpm,
  DiPostgresql,
} from "react-icons/di";
import { AiOutlineDotNet } from "react-icons/ai";
import { SiCplusplus, SiExpress } from "react-icons/si";
import { useState } from "react";

const skill_item = [
  {
    title: <SiCplusplus size={100} />,
    name: "C++",
  },
  {
    title: <DiHtml5 size={100} />,
    name: "HTML",
  },
  {
    title: <DiCss3 size={100} />,
    name: "CSS",
  },
  {
    title: <DiBootstrap size={100} />,
    name: "Bootstrap",
  },
  {
    title: <DiJavascript1 size={100} />,
    name: "JavaScript",
  },
  {
    title: <DiNodejsSmall size={100} />,
    name: "Node.js",
  },
  {
    title: <SiExpress size={100} />,
    name: "Express.js",
  },
  {
    title: <DiMysql size={100} />,
    name: "MySQL",
  },
  {
    title: <DiPostgresql size={100} />,
    name: "PostgreSQL",
  },
  {
    title: <DiGithubBadge size={100} />,
    name: "GitHub",
  },
  {
    title: <DiNpm size={100} />,
    name: "NPM",
  },
  {
    title: <DiMongodb size={100} />,
    name: "MongoDB",
  },
];

const Skill = () => {
  const spring = {
    stiffnedd: 150,
    damping: 15,
    mass: 0.1,
  };

  const mousePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const [nameSkill, setSkill] = useState("");
  const [isHover, setHover] = useState(false);

  return (
    <>
      <div className="skill_container">
        <div className="skill_card">
          {skill_item.map((item) => {
            return (
              <div
                className="skill_icon"
                onMouseMove={(e) => {
                  const { clientX, clientY } = e;
                  setSkill(item.name);
                  setHover(true);
                  mousePos.x.set(clientX);
                  mousePos.y.set(clientY);
                }}
                onMouseLeave={() => {
                  setSkill("");
                  setHover(false);
                }}
              >
                {item.title}
              </div>
            );
          })}
          {isHover && (
            <motion.div
              className="skill_hover"
              style={{ y: mousePos.y, x: mousePos.x }}
            >
              {nameSkill}
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default transition(Skill);
