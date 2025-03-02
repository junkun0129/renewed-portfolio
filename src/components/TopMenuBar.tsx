import * as React from "react";
import { Component, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import chou1 from "/tyouchin1.png";
import chou2 from "/tyouchin2.png";
import chou3 from "/tyouchin3.png";
import chou4 from "/tyouchin4.png";
import chou1Dark from "/tyouchin1-dark.png";
import chou2Dark from "/tyouchin2-dark.png";
import chou3Dark from "/tyouchin3-dark.png";
import chou4Dark from "/tyouchin4-dark.png";
import styles from "./ProccessBar.module.scss";
import { Theme, useMediaQuery } from "@mui/material";
type PropsType = {
  activeNum: number;
  className: string;
};
const menuItems = [
  {
    light: chou1,
    dark: chou1Dark,
    name: "Home",
  },
  {
    light: chou2,
    dark: chou2Dark,
    name: "Skill",
  },
  {
    light: chou3,
    dark: chou3Dark,
    name: "Project",
  },
  {
    light: chou4,
    dark: chou4Dark,
    name: "Contact",
  },
];
function TopMenuBar({ activeNum, className }: PropsType) {
  const flameAnimation = useAnimationControls();
  const menuRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  React.useEffect(() => {
    if (menuRefs.current[activeNum]) {
      const activeElement = menuRefs.current[activeNum];
      const rect = activeElement?.getBoundingClientRect();
      if (rect) {
        flameAnimation.start({
          x: rect.left + rect.width / 2 - 45,
          y: 10,
          transition: { duration: 0.5 },
        });
      }
    }
    // console.log(window.innerWidth);
  }, [activeNum]);
  return (
    <>
      {!sm && (
        <div
          style={{
            width: "100vw",
            height: "15vh",
            position: "fixed",
            backgroundImage: "url(/washi.jpg)",
            backgroundSize: "cover",
            zIndex: "10",
          }}
        ></div>
      )}
      <div className={className + " flex justify-center w-full mt-3"}>
        {sm && (
          <motion.div
            className={"flame"}
            animate={flameAnimation}
            transition={{ duration: 1 }}
          ></motion.div>
        )}

        {menuItems.map((item, i) => {
          return (
            <div className="h-full w-full flex">
              <motion.div
                key={i + item.name}
                ref={(el) => (menuRefs.current[i] = el)}
                style={{
                  backgroundImage: `url(${item.dark})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "90px",
                  height: "90px",
                }}
                initial={{ scale: 0.5 }}
                animate={activeNum === i ? { scale: 1 } : { scale: 0.7 }}
              >
                <motion.div
                  className="w-full h-full relative bg-contain bg-no-repeat"
                  style={{ backgroundImage: `url(${item.light})` }}
                  animate={activeNum === i ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                ></motion.div>
              </motion.div>
              <motion.div
                animate={
                  activeNum === i
                    ? { marginLeft: 0, fontSize: "1.6rem" }
                    : { marginLeft: -20, fontSize: "1rem" }
                }
                className="ml-0 flex items-center"
              >
                {item.name}
              </motion.div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TopMenuBar;
