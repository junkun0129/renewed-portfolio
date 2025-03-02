import * as React from "react";
import { Component, useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { motion } from "framer-motion";
import reactImg from "/react.png";
import { Tooltip, IconButton, Link, useMediaQuery, Theme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Tama from "/tama2.png";
import Kumo from "/cloud2.png";
import { projects } from "../data/projectData";
type type = {
  style?: React.CSSProperties;
};

// const projects = ["IwataniQuest", "whitleblower", "nanika"];

const Project = React.forwardRef(
  ({ style }: type, ref: React.Ref<HTMLDivElement>) => {
    const [projectState, setProjectState] = useState(
      projects.map((project, i) => {
        if (i === 0) {
          return { name: project.name, show: true };
        }
        return { name: project.name, show: false };
      })
    );
    const [nameIconPosition, setNameIconPosition] = useState({
      length:
        projectState[projectState.findIndex((one) => one.show === true)].name
          .length,
      positionIndex: projectState.findIndex((one) => one.show === true),
    });

    useEffect(() => {
      console.log(nameIconPosition, "project");
    }, [nameIconPosition]);

    const handleHoverStart = (projectName: string, index: number) => {
      setProjectState((pre) => {
        return [
          ...pre.slice(0, index),
          { name: projectName, show: true },
          ...pre.slice(index + 1),
        ];
      });

      setProjectState(
        projectState.map((project, i) => {
          if (i !== index) {
            return { name: projects[i].name, show: false };
          } else {
            return { name: projects[i].name, show: true };
          }
        })
      );
    };
    const handleHoverEnd = (projectName: string, index: number) => {
      // setProjectState((pre) => {
      //   return [
      //     ...pre.slice(0, index),
      //     { name: projectName, show: false },
      //     ...pre.slice(index + 1),
      //   ];
      // });
    };
    const sm = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

    return (
      <>
        <motion.div style={{ ...style }} ref={ref}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "50%",
                height: "100%",
                fontSize: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "25%",
                  height: "20%",
                  left: "-10%",
                  top: "20%",
                  backgroundImage: `url(${Kumo})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  zIndex: 10,
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  width: "10%",
                  height: "20%",
                  right: "4%",
                  top: "65%",
                  backgroundImage: `url(${Kumo})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  zIndex: 10,
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  width: "15%",
                  height: "20%",
                  left: "10%",
                  bottom: "-5%",
                  backgroundImage: `url(${Kumo})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  zIndex: 10,
                }}
              ></div>
              <div
                style={{
                  width: "70%",
                  height: "60%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around",
                  // background: "rgb(240, 240, 240,0.4)",
                  overflow: "scroll",
                  fontSize: "1.4rem",
                  position: "relative",
                }}
              >
                <motion.div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "20%",
                    marginTop: "2%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "gray",
                    zIndex: "-1",
                    backgroundImage: `url(/wahu-frames-set.png)`,
                    backgroundPosition: "contain",
                  }}
                  animate={{
                    top: `${
                      (nameIconPosition.positionIndex * 100) /
                      projectState.length
                    }%`,
                  }}
                >
                  <div
                    style={{
                      width: "28%",
                      height: "50%",
                      marginTop: "5%",
                      backgroundImage: "url(/project-name-decoration.png)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <motion.div
                    animate={{ width: `${nameIconPosition.length * 2}%` }}
                  ></motion.div>
                  <div
                    style={{
                      width: "28%",
                      height: "50%",
                      marginTop: "-5%",
                      backgroundImage:
                        "url(/project-name-decoration-rotated.png)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </motion.div>
                {projectState.map((project, i) => {
                  return (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <motion.div
                        onHoverStart={() => {
                          handleHoverStart(project.name, i);
                          setNameIconPosition({
                            length: project.name.length,
                            positionIndex: i,
                          });
                        }}
                        onHoverEnd={() => handleHoverEnd(project.name, i)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {project.name}
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              style={{
                width: "50%",
                height: "100%",
                fontSize: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "15%",
                position: "relative",
              }}
            >
              <motion.div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "30%",
                  right: "-90%",
                  bottom: "0%",
                  backgroundImage: `url(${Tama})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  zIndex: 10,
                }}
                animate={{ y: [10, -10, 10] }}
                transition={{
                  delay: 0.2,
                  duration: 3,
                  repeat: 1000,
                  repeatType: "mirror",
                  times: [0, 0.5, 1],
                  ease: "circOut",
                }}
              ></motion.div>
              {/* <div
              style={{
                position: "absolute",
                width: "100%",
                height: "30%",
                backgroundImage: `url(${Frame})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                zIndex: 10,
              }}
            ></div> */}
              <div
                style={{
                  width: "100%",
                  height: "80%",
                  display: "flex",
                  position: "relative",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                {projectState.map((project, i) => {
                  return (
                    <motion.div
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        opacity: 0,
                      }}
                      animate={
                        project.show
                          ? {
                              opacity: 1,
                            }
                          : { opacity: 0 }
                      }
                    >
                      {/* {project.name} */}
                      <Carousel
                        sx={{
                          width: "100%",
                          height: "100%",
                          position: "relative",
                          marginTop: "15%",
                          marginRight: "-10%",
                        }}
                        stopAutoPlayOnHover={false}
                        height={550}
                      >
                        {projects[i].showcase.map((element) => {
                          return (
                            <div
                              style={{
                                width: "100%",
                                height: "100%",
                                position: "relative",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                              }}
                            >
                              <div
                                style={{
                                  width: "90%",
                                  height: "35%",
                                  backgroundImage: `url(${element.url})`,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                  position: "relative",
                                  // backgroundColor: "blue",
                                  paddingTop: "12%",
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    bottom: "0",
                                    right: "2%",
                                    zIndex: "10",
                                  }}
                                >
                                  <Tooltip title={"go to App"}>
                                    <IconButton>
                                      <Link
                                        href={projects[i].appUrl}
                                        color="inherit"
                                      >
                                        <ExitToAppIcon fontSize="large" />
                                      </Link>
                                    </IconButton>
                                  </Tooltip>
                                  <Tooltip title={"go to Github"}>
                                    <IconButton>
                                      <Link
                                        href={projects[i].gitUrl}
                                        color="inherit"
                                      >
                                        <GitHubIcon fontSize="large" />
                                      </Link>
                                    </IconButton>
                                  </Tooltip>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  flexWrap: "wrap",
                                  width: "94%",
                                  height: "30%",
                                  fontSize: "1.2rem",
                                  padding: "1rem",
                                  marginTop: "5%",
                                  background: "rgb(240, 240, 240,0.7)",
                                }}
                              >
                                <div>{element.text}</div>
                              </div>
                            </div>
                          );
                        })}
                      </Carousel>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </>
    );
  }
);

export default Project;
