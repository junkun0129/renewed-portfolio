import * as React from "react";
import { Component, useEffect } from "react";
import blackFrame from "/black-frame.png";
import ore from "/ore.jpg";
import { motion, useTransform, useMotionValue } from "framer-motion";
import kumo from "/kumo.png";
import kumo2 from "/kumo2.png";
import kumo3 from "/kumo3.png";
import cloud1 from "/cloud.png";
import cloud2 from "/cloud2.png";
import { Theme, createTheme, useMediaQuery } from "@mui/material";
import useMousePosition from "../hooks/useMousePosition";
import { useRenderTransform } from "../hooks/useRenderTranform";
type type = {
  style?: React.CSSProperties;
};
const Title = React.forwardRef(
  ({ style }: type, ref: React.Ref<HTMLDivElement>) => {
    const md = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
    const sm = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

    return (
      <>
        <div
          style={{
            ...style,
          }}
          ref={ref}
        >
          <motion.div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* clouds */}

            <motion.div
              style={{
                height: "50%",
                width: "30%",
                backgroundImage: `url(${kumo3})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                position: "absolute",
                left: "-10%",
                top: "10%",
              }}
              animate={{ x: [10, -10, 10] }}
              transition={{
                delay: 0.2,
                duration: 4,
                repeat: 1000,
                repeatType: "mirror",
                times: [0, 0.5, 1],
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              style={{
                height: "10%",
                width: "10%",
                backgroundImage: `url(${cloud1})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                position: "absolute",
                top: "20%",
                zIndex: "100",
              }}
              // whileHover={{ x: "50%" }}
              animate={{ y: [10, -10, 10], x: 30 }}
              transition={{
                duration: 4,
                repeat: 1000,
                repeatType: "mirror",
                times: [0, 0.5, 1],
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              style={{
                height: "70%",
                width: "50%",
                backgroundImage: `url(${kumo})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                position: "absolute",
                right: "-25%",
                top: "-20%",
              }}
              animate={{ x: [10, -10, 10] }}
              transition={{
                delay: 0.6,
                duration: 4,
                repeat: 1000,
                repeatType: "mirror",
                times: [0, 0.5, 1],
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              style={{
                height: "50%",
                width: "30%",
                backgroundImage: `url(${kumo2})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                position: "absolute",
                bottom: "-20%",
                left: "-10%",
              }}
              animate={{ x: [10, -10, 10] }}
              transition={{
                delay: 1.2,
                duration: 4,
                repeat: 1000,
                repeatType: "mirror",
                times: [0, 0.5, 1],
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              style={{
                height: "15%",
                width: "15%",
                backgroundImage: `url(${cloud2})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                position: "absolute",
                bottom: "10%",
              }}
              animate={{ y: [10, -10, 10], x: 10 }}
              transition={{
                delay: 0.5,
                duration: 4,
                repeat: 1000,
                repeatType: "mirror",
                times: [0, 0.5, 1],
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              style={{
                height: "40%",
                width: "20%",
                backgroundImage: `url(${kumo3})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                position: "absolute",
                bottom: "-15%",
                right: "5%",
              }}
              animate={{ x: [10, -10, 10] }}
              transition={{
                delay: 0.2,
                duration: 4,
                repeat: 1000,
                repeatType: "mirror",
                times: [0, 0.5, 1],
                ease: "easeInOut",
              }}
            ></motion.div>

            {/* picture and introduce sentence */}
            {sm && (
              <div
                style={{
                  width: "40%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  marginLeft: md ? "10%" : "10%",
                  marginTop: md ? "3%" : "15%",
                  marginRight: md ? "0%" : "10%",
                }}
              >
                <div
                  style={{
                    width: md ? "42%" : "40%",
                    height: "49%",
                    backgroundImage: `url(${ore})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    position: "absolute",
                    marginTop: md ? "-1%" : "-5%",
                    marginRight: "30%",
                  }}
                ></div>
                <div
                  style={{
                    backgroundImage: `url(${blackFrame})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    width: "50%",
                    height: "57%",
                    position: "absolute",
                    marginRight: "30%",
                  }}
                ></div>
              </div>
            )}
            <div
              style={{
                width: "50%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: sm ? "-15%" : "0%",
                marginTop: sm ? "3%" : "30%",
              }}
            >
              <div
                style={{
                  width: sm ? "100%" : "150%",
                  display: "flex",
                  fontSize: sm ? "2.1rem" : "1.2rem",
                  left: 100,
                  top: 200,
                  marginLeft: sm ? "0%" : "40%",
                }}
              >
                Hi, I'm Jumpei Iwatani
              </div>
              <div
                style={{
                  width: sm ? "100%" : "150%",

                  display: "flex",
                  fontSize: sm ? "3rem" : "2.5rem",
                  left: sm ? 100 : 2000,
                  top: 200,
                  marginLeft: sm ? "0%" : "50%",
                  marginTop: sm ? "0%" : "10%",
                }}
              >
                Full-Stack developer
              </div>
              <motion.div
                style={{
                  fontSize: sm ? "1.9rem" : "1.2rem",
                  left: 100,
                  top: 300,
                  marginTop: sm ? "0%" : "10%",
                  marginLeft: sm ? "0%" : "20%",

                  width: sm ? "100%" : "100%",
                }}
              >
                with a passion for inventing
              </motion.div>
            </div>
          </motion.div>
          {!sm && (
            <div
              style={{
                width: "100%",
                height: "300px",
                marginTop: "20%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "40%",
                  height: "59%",
                  backgroundImage: `url(${ore})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  position: "absolute",
                }}
              ></div>
              <div
                style={{
                  backgroundImage: `url(${blackFrame})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "50%",
                  height: "68%",
                  position: "absolute",
                  right: "25%",
                  top: "14%",
                }}
              ></div>
            </div>
          )}
        </div>
      </>
    );
  }
);

export default Title;
