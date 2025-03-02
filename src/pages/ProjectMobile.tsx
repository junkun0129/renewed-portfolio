import { motion } from "framer-motion";
import * as React from "react";
import { Component } from "react";
import { projects } from "../data/projectData";
import Carousel from "react-material-ui-carousel";
import { IconButton, Link, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

type type = {
  style?: React.CSSProperties;
};
const ProjectMobile = React.forwardRef(
  ({ style }: type, ref: React.Ref<HTMLDivElement>) => {
    return (
      <>
        <div
          style={{
            ...style,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          ref={ref}
        >
          {projects.map((project, i) => {
            return (
              <>
                <div
                  style={{
                    backgroundImage: "url(/noren.png)",
                    backgroundSize: "contain",
                    color: "white",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "60%",
                    height: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {project.name}
                </div>
                <Carousel
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                  indicators={false}
                  stopAutoPlayOnHover={false}
                  height={450}
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
                            <Tooltip title={projects[i].appUrl}>
                              <IconButton aria-label="ddd">
                                <Link href={projects[i].appUrl} color="inherit">
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
                            fontSize: "0.9rem",
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
              </>
            );
          })}
        </div>
      </>
    );
  }
);

export default ProjectMobile;
