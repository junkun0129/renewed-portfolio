import kobune from "/kobune.png";
import maru from "/flag.png";
import frame from "/frame.png";
import { motion } from "framer-motion";

type type = {
  width: number;
  top: string;
  left: string;
  name: string;
  picture: string;
  delay: number;
};
function Hune({ width, top, left, name, picture, delay }: type) {
  return (
    <>
      <motion.div
        style={{
          position: "absolute",
          top,
          left,
          width,
          height: width / 2,
          //   backgroundColor: "red",
        }}
        animate={{
          y: [30, -30],
        }}
        transition={{
          duration: 2,
          repeat: 10000,
          repeatType: "mirror",
          delay,
        }}
      >
        <motion.div
          style={{ position: "relative", width: "100%", height: "100%" }}
          animate={{ rotate: [20, -5] }}
          transition={{
            repeat: 10000,
            repeatType: "mirror",
            duration: 2.5,
            delay,
          }}
        >
          <div
            style={{
              position: "absolute",
              backgroundImage: `url(${kobune})`,
              backgroundRepeat: "no-repeat",
              //   backgroundColor: "black",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              backgroundSize: "contain",
            }}
          ></div>

          {/* 丸と旗 */}
          <div className="absolute w-full h-full flex flex-col justify-center items-center -mt-10">
            <div
              className="flex text-white justify-center items-center bg-no-repeat bg-center mr-2"
              style={{
                backgroundImage: `url(${frame})`,
                height: "60%",
                width: `${name.length * 25}px`,
                backgroundSize: "70% 40%",
                transform: "rotate(-25deg)",
              }}
            >
              <div className={`w-[${name.length * 19}px]`}>{name}</div>
            </div>
            <div
              className={`w-[15%] h-[30%] ml-12 -mt-6 bg-orange-100 rounded-full flex justify-center items-center bg-no-repeat bg-contain`}
              style={{
                backgroundImage: `url(${maru})`,
              }}
            >
              <div
                className=" bg-contain bg-no-repeat bg-center w-[70%] h-[70%]"
                style={{
                  backgroundImage: `url(${picture})`,
                }}
              ></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Hune;
