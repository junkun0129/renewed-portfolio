import { motion } from "framer-motion";
import reactImg from "/react.png";
import React from "react";
import { Theme, useMediaQuery } from "@mui/material";
import Wave from "../../components/Wave";
import Boat from "../../components/Boat";
import { introduces, skillsData } from "./constant";
import { useAppContext } from "../../providers/AppProvider";
import InitialWave from "../../components/InitialWave";
import TextAnimation from "../../components/TextAnimation";

type type = {
  style?: React.CSSProperties;
};
const SkillsPage = React.forwardRef(
  ({ style }: type, ref: React.Ref<HTMLDivElement>) => {
    const sm = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
    const { size } = useAppContext();

    return (
      <>
        <motion.div style={{ ...style }} ref={ref}>
          <div className="relative w-full h-full flex items-center">
            {sm && (
              <>
                <InitialWave />
                <Wave delay={0} initialXPosition={-size.screenWidth} />
                <Wave delay={10} initialXPosition={-size.screenWidth} />
              </>
            )}
            {/* Floating Texts */}
            <div className="absolute w-full h-full overflow-hidden">
              <div className="relative w-full h-full overflow-hidden">
                {introduces.map((item) => (
                  <TextAnimation
                    key={item.name}
                    delay={item.delay}
                    top={item.top}
                    text={`${item.name}: ${item.value}`}
                  />
                ))}
              </div>
            </div>
            {sm &&
              skillsData.map((skill, i) => {
                return <Boat key={i} {...skill}></Boat>;
              })}
          </div>
        </motion.div>
      </>
    );
  }
);

export default SkillsPage;
