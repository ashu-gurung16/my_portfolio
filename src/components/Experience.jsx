import { Chrono } from "react-chrono";
import transition from "../transition";

const ex_item = [
  {
    title: "Apr 2023 - May 2023",
    cardTitle: "Basic Python Development",
    cardSubtitle: "GiftAbled Foundation",
    cardDetailedText: "Basic python",
  },
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
      </div>
    </>
  );
};

export default transition(Experience);
