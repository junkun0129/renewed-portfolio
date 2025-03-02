import { motion } from "framer-motion";
import waveimage from "/nami2.png";
import { useAppContext } from "../providers/AppProvider";

type WaveProps = {
  delay: number;
  initialXPosition?: number;
};

function Wave({ delay, initialXPosition = 0 }: WaveProps) {
  const { size } = useAppContext();
  if (!initialXPosition) return;
  return (
    <motion.div className="absolute w-full h-full top-0">
      <div className="relative w-full h-full">
        <motion.div
          className="bg-contain h-full w-full absolute"
          style={{
            x: initialXPosition,
            backgroundImage: `url(${waveimage})`,
          }}
          initial={{ x: initialXPosition }}
          animate={{
            x: size.screenWidth,
          }}
          transition={{
            duration: 20,
            delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        ></motion.div>
      </div>
    </motion.div>
  );
}

export default Wave;
