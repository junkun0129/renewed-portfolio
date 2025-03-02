import { useState, useRef, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import { Theme, useMediaQuery } from "@mui/material";
import "./index.css";
import Title from "./pages/Title";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import ProjectMobile from "./pages/ProjectMobile";
import TopMenuBar from "./components/TopMenuBar";
import { CONTENT_HEIGHT } from "./constant";
import { useAppContext } from "./providers/AppProvider";

const AnimatedTitle = motion.create(Title);
const AnimatedSkills = motion.create(SkillsPage);
const AnimatedProject = motion.create(Project);
const AnimatedContact = motion.create(Contact);
const AnimatedProjectMobile = motion.create(ProjectMobile);

function App() {
  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const { size, setSize } = useAppContext();
  const mobileScroll = useRef(null);
  useEffect(() => {
    if (sm) {
    }
  }, [sm]);

  useEffect(() => {
    const controlScreenSize = () => {
      setSize({
        screenHeight: window.innerHeight,
        screenWidth: window.innerWidth,
      });
    };
    controlScreenSize();
    window.addEventListener("resize", controlScreenSize);
    return () => window.removeEventListener("resize", controlScreenSize);
  }, []);

  const { scrollY } = useScroll({
    container: mobileScroll,
  });
  const [state, setState] = useState(0);

  useMotionValueEvent(scrollY, "change", () => {
    if (scrollY.get() < 1000) {
      setState(0);
    } else if (1000 < scrollY.get() && scrollY.get() < 2000) {
      setState(1);
    } else if (2000 < scrollY.get() && scrollY.get() < 3000) {
      setState(2);
    } else if (3000 < scrollY.get() && scrollY.get() < 4000) {
      setState(3);
    }
  });

  return (
    <>
      <div
        style={{
          fontFamily: "washi",
          height: `${CONTENT_HEIGHT}px`,
        }}
      >
        <TopMenuBar activeNum={state} className={"fixed z-10"}></TopMenuBar>
        <motion.div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundImage: "url(/washi.jpg)",
            position: "fixed",
            overflow: sm ? "none" : "scroll",
          }}
          {...(!sm && { ref: mobileScroll })}
        >
          {sm ? (
            <div>
              <AnimatedTitle
                animate={state !== 0 ? { y: -1000 } : { y: 0 }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                }}
              ></AnimatedTitle>
              <AnimatedSkills
                animate={state !== 1 ? { y: -1000 } : { y: 0 }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                }}
              ></AnimatedSkills>
              <AnimatedProject
                animate={
                  state !== 2
                    ? {
                        y: -1000,
                      }
                    : {
                        y: 0,
                      }
                }
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                }}
              ></AnimatedProject>
              <AnimatedContact
                animate={
                  state !== 3
                    ? {
                        y: -1000,
                      }
                    : {
                        y: 0,
                      }
                }
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                }}
              ></AnimatedContact>
            </div>
          ) : (
            <div>
              <AnimatedTitle style={{ marginTop: "30%" }}></AnimatedTitle>
              <AnimatedSkills style={{ height: "650px" }}></AnimatedSkills>
              <AnimatedProjectMobile
                style={{ width: "100%", height: "100%" }}
              ></AnimatedProjectMobile>
              <AnimatedContact
                style={{ width: "100%", height: "400px" }}
              ></AnimatedContact>
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
}

export default App;
