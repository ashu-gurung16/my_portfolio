import { Chrono } from "react-chrono";
import transition from "../transition";
import TimelineMob from "./TimelineMob";
import Timeline from "@mui/lab/Timeline";

const ex_item = [
  {
    title: "Oct 2023 - Jun 2024",
    cardTitle: "Java Full Stack Web Development",
    cardSubtitle: "WinVinaya Foundation",
    cardDetailedText:
      "Java, MySQL, HTML, CSS, JS, Bootstrap (Framework), Node.js, Express.js, English, Soft Skills",
  },
  {
    title: "Sep 2024 - Nov 2024",
    cardTitle: "Web Development",
    cardSubtitle: "Udemy",
    cardDetailedText:
      "HTML, CSS, JS, Bootstrap (Framework), Node.js, Express.js, EJS, GitHub, APIs, SQL, PostgreSQL, Authentication and Security, React.js",
  },
  {
    title: "Nov 2024 - July 2025",
    cardTitle: "React (incl. Next.js) course",
    cardSubtitle: "Udemy",
    cardDetailedText: "JS, React.js, and Next.js",
  },
  {
    title: "May 2025 - June 2025",
    cardTitle: "NodeJS course",
    cardSubtitle: "Udemy",
    cardDetailedText: "NodeJS, ExpressJS, MVC, SQL, MongoDB, Mongoose, Authentication, Validation, Error Handling, REST APIs, Socket.io, GraphQL, Testing Node.js, TypeScript, Deno",
  },
];

const Experience = () => {
  return (
    <>
      <div className="ex_container">
        <div className="ex_card">
          <Chrono
            items={ex_item}
            mode="HORIZONTAL"
            itemWidth={300}
            showSingle
            fontSizes={{
              cardSubtitle: "1.5rem",
              cardDetailedText: "1rem",
              cardTitle: "2.5rem",
              title: "1.5rem",
            }}
            cardHeight={250}
            cardWidth={1000}
            theme={{
              primary: "#f0d699",
              secondary: "#011d09",
              cardBgColor: "#011d09",
              cardDetailsColor: "#f0d699",
              cardTitleColor: "#f0d699",
              cardSubtitleColor: "#f0d699",
              titleColor: "#f0d699",
              titleColorActive: "f0d699",
              toolbarBgColor: "#011d09",
              toolbarBtnBgColor: "#31511e",
              toolbarTextColor: "#f0d699",
            }}
          />
        </div>
        <div className="show-timeline">
          <Timeline position="alternate" className="display-timeline">
            Start
            {ex_item.map((items, index) => {
              return (
                <TimelineMob
                  key={index}
                  date={items.title}
                  course={items.cardTitle}
                  academy={items.cardSubtitle}
                />
              );
            })}
            Soon...🔨
          </Timeline>
        </div>
      </div>
    </>
  );
};

export default transition(Experience);
