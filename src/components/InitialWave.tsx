import { motion } from "framer-motion";
import waveimage from "/nami2.png";
import { useAppContext } from "../providers/AppProvider";
import { useEffect, useState } from "react";

type WaveProps = {};

function InitialWave({}: WaveProps) {
  const { size } = useAppContext();

  return (
    <motion.div
      initial={{ opacity: 1 }}
      className="absolute w-full h-full top-0"
    >
      <div className="relative w-full h-full">
        <motion.div
          className="bg-contain h-full w-full absolute"
          style={{
            backgroundImage: `url(${waveimage})`,
          }}
          animate={{
            x: size.screenWidth,
          }}
          transition={{
            duration: 10,
            ease: "linear",
          }}
        ></motion.div>
      </div>
    </motion.div>
  );
}

export default InitialWave;
