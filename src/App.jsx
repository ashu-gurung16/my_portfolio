import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Greeting from "./components/Greeting";
import { AnimatePresence } from "framer-motion";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { darkTheme, lightTheme } from "./utils/Theme";
import { ThemeProvider, styled } from "styled-components";
import Skill from "./components/Skill";
import Hobbies from "./components/Hobbies";
import Project from "./components/Project";
import Contact from "./components/Contact";

const Main = styled.div`
  background-image: ${({ theme }) => theme.backgroundImage};
`;

function App() {
  const [loading, setLoading] = useState(true);
  const [isChangeTheme, setTheme] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <Greeting />
        </div>
      ) : (
        <>
          <ThemeProvider theme={isChangeTheme ? lightTheme : darkTheme}>
            <Main className="main-container">
              <h3 style={{ position: "absolute", right: 0, zIndex: 99 }}>
                Developed by Ashu Dev✨
              </h3>
              <Navbar isChangeTheme={isChangeTheme} setTheme={setTheme} />
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route index element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/skill" element={<Skill />} />
                  <Route path="/hobbies" element={<Hobbies />} />
                  <Route path="/project" element={<Project />} />
                  <Route path="/contactMe" element={<Contact />} />
                </Routes>
              </AnimatePresence>
            </Main>
          </ThemeProvider>
        </>
      )}
    </>
  );
}

export default App;
