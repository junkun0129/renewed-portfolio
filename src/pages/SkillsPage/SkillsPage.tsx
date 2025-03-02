import { motion } from "framer-motion";
import reactImg from "/react.png";
import React from "react";
import { Theme, useMediaQuery } from "@mui/material";
import Wave from "../../components/Wave";
import Boat from "../../components/Boat";
import { introduces, skillsData } from "./constant";
import { useAppContext } from "../../providers/AppProvider";
import InitialWave from "../../components/InitialWave";

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
              {Object.entries(introduces).map(([key, value], index) => (
                <FloatingText
                  key={key}
                  text={`${key}: ${value}`}
                  delay={index * 4} // 遅延を少し長めに
                  initialXPosition={-200}
                />
              ))}
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

type FloatingTextProps = {
  text: string;
  delay: number;
  initialXPosition: number;
};
function FloatingText({ text, delay, initialXPosition }: FloatingTextProps) {
  const { size } = useAppContext();

  return (
    <motion.div
      className="absolute whitespace-nowrap text-2xl font-japanese pointer-events-none"
      style={{
        y: Math.random() * 400 - 200, // より広い範囲でランダムな垂直位置
      }}
      initial={{
        x: -200, // 画面外左から開始
        opacity: 0,
      }}
      animate={{
        x: size.screenWidth + 200, // 画面外右まで移動
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 20,
        delay,
        repeat: Infinity,
        ease: "linear",
        opacity: {
          duration: 20,
          times: [0, 0.1, 0.9, 1],
        },
      }}
    >
      {text}
    </motion.div>
  );
}
