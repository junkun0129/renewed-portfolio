import * as React from "react";
import { Component, useState, useEffect, useCallback } from "react";
import { motion, useAnimationControls } from "framer-motion";

import { TextField, Theme, useMediaQuery } from "@mui/material";
import tama from "/tama.png";
import tama2 from "/tama3.png";
const backendserver = import.meta.env.VITE_MAIL_SERVER_URL || "";
type type = {
  style?: React.CSSProperties;
};
const Contact = React.forwardRef(
  ({ style }: type, ref: React.Ref<HTMLDivElement>) => {
    const [emailinfo, setEmailInfo] = useState({
      name: "",
      email: "",
      subject: "",
      text: "",
    });
    const [isStatus, setIsStatus] = useState("send message");
    const [isSent, setIsSent] = useState(false);
    const [animeon, setAnimeon] = useState(false);
    const sentLetterControll = useAnimationControls();

    useEffect(() => {}, [emailinfo]);
    const submitEmail = () => {
      console.log("oij");
      console.log(emailinfo);
      fetch(`${backendserver}/email/submit`, {
        method: "POST",
        body: JSON.stringify(emailinfo),
        headers: { "Content-Type": "application/json" },
      }).then(async (res) => {
        if (!res.ok) {
          console.log("error");
        } else {
          console.log(res, "sent");
          setIsSent(true);
        }
      });
    };
    const sm = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
    const md = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

    useEffect(() => {
      if (isSent) {
        console.log(";lkj &");

        setIsStatus("sent !!");
        sentLetterControll
          .start({
            rotate: 1,
            transition: {
              duration: 2,
            },
          })
          .then(() => {
            setIsStatus("send message");
            setIsSent(false);
            setEmailInfo({ name: "", email: "", subject: "", text: "" });
          });
      }
    }, [isSent]);

    // Call the callback function somewhere in your component to execute its contents

    return (
      <>
        <motion.div
          style={{
            ...style,
          }}
          ref={ref}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "90%",
                left: "-20%",
                top: "30%",
                backgroundImage: `url(${tama})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "90%",
                right: "-80%",
                bottom: "30%",
                backgroundImage: `url(${tama2})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              style={{
                width: sm ? "50%" : "70%",
                height: sm ? "50%" : "70%",
                display: "flex",
                flexDirection: "column",
                marginTop: "4%",
                zIndex: 10,
              }}
            >
              {sm ? (
                <div
                  style={{
                    height: "20%",
                    width: "100%",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      onChange={(e) =>
                        setEmailInfo((pre) => {
                          return {
                            ...pre,
                            name: e.target.value,
                          };
                        })
                      }
                      value={emailinfo.name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "95%",
                        height: "80%",
                        background: "rgb(240, 240, 240,0.4)",
                        borderRadius: "10px",
                        border: "2px solid black",
                        fontSize: "1.2rem",
                        fontFamily: "serif",
                      }}
                      placeholder="name"
                      type="text"
                    />
                  </div>
                  <div
                    style={{
                      width: "50%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      onChange={(e) =>
                        setEmailInfo((pre) => {
                          return {
                            ...pre,
                            email: e.target.value,
                          };
                        })
                      }
                      value={emailinfo.email}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "95%",
                        height: "80%",
                        background: "rgb(240, 240, 240,0.4)",
                        borderRadius: "10px",
                        fontSize: "1.2rem",
                        fontFamily: "serif",
                      }}
                      placeholder="email"
                      type="text"
                    />
                  </div>
                </div>
              ) : (
                // mobile screen
                <>
                  <div
                    style={{
                      width: "100%",
                      height: "30%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      onChange={(e) =>
                        setEmailInfo((pre) => {
                          return {
                            ...pre,
                            name: e.target.value,
                          };
                        })
                      }
                      value={emailinfo.name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "95%",
                        height: "80%",
                        background: "rgb(240, 240, 240,0.4)",
                        borderRadius: "10px",
                        border: "2px solid black",
                        fontSize: "1.2rem",
                        fontFamily: "serif",
                      }}
                      placeholder="name"
                      type="text"
                    />
                  </div>

                  <div
                    style={{
                      width: "100%",
                      height: "30%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      onChange={(e) =>
                        setEmailInfo((pre) => {
                          return {
                            ...pre,
                            email: e.target.value,
                          };
                        })
                      }
                      value={emailinfo.email}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "95%",
                        height: "80%",
                        background: "rgb(240, 240, 240,0.4)",
                        borderRadius: "10px",
                        fontSize: "1.2rem",
                        fontFamily: "serif",
                      }}
                      placeholder="email"
                      type="text"
                    />
                  </div>
                </>
              )}
              <div
                style={{
                  width: "100%",
                  height: sm ? "20%" : "30%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  onChange={(e) =>
                    setEmailInfo((pre) => {
                      return {
                        ...pre,
                        subject: e.target.value,
                      };
                    })
                  }
                  value={emailinfo.subject}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "97.5%",
                    height: "80%",
                    background: "rgb(240, 240, 240,0.4)",
                    borderRadius: "10px",
                    fontSize: "1.2rem",
                    fontFamily: "serif",
                  }}
                  type="text"
                  placeholder="subject"
                />
              </div>
              <div
                style={{
                  width: "100%",
                  height: sm ? "60%" : "70%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <textarea
                  onChange={(e) =>
                    setEmailInfo((pre) => {
                      return {
                        ...pre,
                        text: e.target.value,
                      };
                    })
                  }
                  value={emailinfo.text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "97.5%",
                    height: "90%",
                    background: "rgb(240, 240, 240,0.4)",
                    borderRadius: "10px",
                    border: "solid black 2px",
                    fontSize: "1.1rem",
                    fontFamily: "serif",
                  }}
                />
              </div>
            </div>
            <motion.div
              style={{
                marginTop: sm ? "1%" : "6%",
                width: sm ? "20%" : "50%",
                height: "10%",
                display: "flex",
                justifyContent: "center",
                position: "relative",
                // border: "solid 3px black",
              }}
              onHoverStart={(e) => setAnimeon(true)}
              onHoverEnd={(e) => setAnimeon(false)}
            >
              <motion.button
                animate={sentLetterControll}
                transition={{
                  repeat: 1000,
                  repeatType: "mirror",
                  times: [0.1, 0.9, 1],
                  duration: 1.5,
                }}
                style={{
                  all: "unset",
                  fontSize: sm ? "1.5rem" : "1.1rem",
                  width: sm ? "70%" : "60%",
                  // border: "black solid 3px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={submitEmail}
              >
                {isStatus}
              </motion.button>

              <motion.div
                style={{
                  backgroundImage: `url(/ougi.png)`,
                  position: "absolute",
                  width: "10%",
                  height: "100%",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  right: md ? "0%" : "-10%",
                }}
                animate={animeon ? { rotate: [-10, 0, 10] } : {}}
                transition={{
                  repeat: 1000,
                  repeatType: "mirror",
                  times: [0.1, 0.5, 1],
                  duration: 1,
                }}
              ></motion.div>
              <motion.div
                animate={animeon ? { rotate: [-10, 0, 10] } : {}}
                transition={{
                  repeat: 1000,
                  repeatType: "mirror",
                  times: [0.1, 0.5, 1],
                  duration: 1,
                }}
                style={{
                  backgroundImage: `url(/ougi.png)`,
                  position: "absolute",
                  width: "10%",
                  height: "100%",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  left: md ? "0%" : "-10%",
                }}
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
      </>
    );
  }
);
export default Contact;
