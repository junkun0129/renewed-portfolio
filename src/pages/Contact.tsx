import * as React from "react";
import { motion } from "framer-motion";
import tama from "/tama.png"; // Image 1 (❍)
import tama2 from "/tama3.png"; // Image 2 (❍)
import ContactForm from "../components/ContactForm";
import { useState } from "react";

type Type = {
  style?: React.CSSProperties;
};

// アニメーション定義
const ballAnimation = {
  x: ["0%", "100%", "0%"], // Move horizontally
  y: ["0%", "80%", "0%"], // Bounce vertically
  rotate: [0, 720, 0], // Rotate for a complete spin
};

const sendingAnimation = {
  x: ["0%", "50%", "0%"], // Move horizontally with faster changes
  y: ["0%", "60%", "0%"], // Slightly reduced bounce height
  rotate: [0, 360, -360, 0], // Faster spinning for more fun
  scale: [1, 1.2, 1], // Slightly increase scale to show action
};

const successAnimation = {
  x: ["0%", "100%", "0%"], // Move horizontally
  y: ["0%", "100%", "0%"], // Bounce vertically
  rotate: [0, 720, 0], // Rotate for a complete spin
  scale: [1, 1.5, 1], // Slight scale increase for success effect
  opacity: [1, 0.8, 1], // Fading in and out for an "accomplished" feeling
};

const errorAnimation = {
  x: ["0%", "120%", "0%"], // Move horizontally
  y: ["0%", "90%", "0%"], // Bounce vertically
  rotate: [0, -720, 0], // Shake with negative rotation
  scale: [1, 0.8, 1], // Slightly shrink for error effect
  opacity: [1, 0.6, 1], // Slightly dim for the error state
};

const message = {
  ease: "メール送信",
  error: "メールの送信が失敗しました",
  success: "メールの送信が完了しました",
  sending: "・・・メール送信中・・・",
};

const { ease, error, success, sending } = message;

const Contact = React.forwardRef(
  ({ style }: Type, ref: React.Ref<HTMLDivElement>) => {
    const [status, setStatus] = useState<string>(ease);

    // メッセージの状態によってアニメーションを変更
    const getBallAnimation = () => {
      switch (status) {
        case sending:
          return sendingAnimation;
        case success:
          return successAnimation;
        case error:
          return errorAnimation;
        default:
          return ballAnimation;
      }
    };

    return (
      <motion.div
        style={{ ...style }}
        ref={ref}
        className="w-[100vw] h-[100vh] flex justify-center items-center relative"
      >
        {/* 背景ボールアニメーション */}
        <motion.img
          src={tama} // 1つ目のボール
          alt="Tama"
          className="absolute top-[20%] left-[10%]"
          style={{
            width: 100,
            height: 100,
          }}
          animate={getBallAnimation()} // 状態に応じてアニメーションを変更
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              ease: "easeInOut",
            },
            y: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
              ease: "easeInOut",
            },
            rotate: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
              ease: "easeInOut",
            },
          }}
        />

        {/* 2つ目のボールアニメーション */}
        <motion.img
          src={tama2} // 2つ目のボール
          alt="Tama2"
          className="absolute top-[20%] left-[5%]"
          style={{
            width: 120,
            height: 120,
          }}
          animate={getBallAnimation()} // 状態に応じてアニメーションを変更
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 4,
              ease: "easeInOut",
            },
            y: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              ease: "easeInOut",
            },
            rotate: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              ease: "easeInOut",
            },
          }}
        />

        {/* 右下のボールアニメーション */}
        <motion.img
          src={tama2} // 右下のボール
          alt="Tama2"
          className="absolute bottom-[20%] right-[10%]"
          style={{
            width: 120,
            height: 120,
          }}
          animate={getBallAnimation()} // 状態に応じてアニメーションを変更
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 4,
              ease: "easeInOut",
            },
            y: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              ease: "easeInOut",
            },
            rotate: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              ease: "easeInOut",
            },
          }}
        />

        {/* フォーム */}
        <div className="absolute z-10">
          <ContactForm
            setStatus={(status) => {
              setStatus(status); // 状態変更
            }}
          />
        </div>
      </motion.div>
    );
  }
);

export default Contact;
