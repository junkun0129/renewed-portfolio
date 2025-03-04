import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

type TextAnimationProps = {
  delay: number; // 全体の開始遅延（秒）
  text: string;
  top: number;
};

type AnimatedLetterProps = {
  letter: string;
  baseDelay: number;
  trigger: number; // ループ開始時に更新される
};

const AnimatedLetter = ({
  letter,
  baseDelay,
  trigger,
}: AnimatedLetterProps) => {
  const controls = useAnimation();

  useEffect(() => {
    // trigger の更新ごとに、初期状態にリセットしてからフェードイン開始
    async function runAnimation() {
      await controls.set({ opacity: 0, y: 10 });
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { delay: baseDelay, duration: 0.5, ease: "easeOut" },
      });
    }
    runAnimation();
  }, [trigger, baseDelay, controls]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={controls}
      style={{ display: "inline-block" }}
    >
      {letter}
    </motion.span>
  );
};

const TextAnimation = ({ text, delay, top }: TextAnimationProps) => {
  const parentControls = useAnimation();
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    async function sequence() {
      while (true) {
        // ① 親の位置を開始位置にリセット
        await parentControls.set({ x: "-10vw" });
        // ② 各文字のフェードインを再実行するためトリガーを更新
        setTrigger((prev) => prev + 1);
        // ③ 文字のフェードイン完了まで待機（必要に応じて調整、ここでは0.8秒）
        await new Promise((resolve) => setTimeout(resolve, 800));
        // ④ 親が左から右へ流れるアニメーションを実行
        await parentControls.start({
          x: "100vw",
          transition: { duration: 15, ease: "linear", delay },
        });
        // ループが1サイクル完了
      }
    }
    sequence();
  }, [parentControls, delay]);

  return (
    <motion.div
      animate={parentControls}
      className="absolute"
      style={{
        display: "flex",
        gap: "4px",
        top,
        fontSize: "2rem",
        fontFamily: "'Yu Mincho', 'Noto Serif JP', serif",
        color: "#2d2d2d",
        textShadow: "2px 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      {text.split("").map((char, index) => (
        <AnimatedLetter
          key={`${trigger}-${index}`}
          letter={char}
          // 文字ごとの遅延：親の delay に加え、各文字毎にずらす
          baseDelay={delay + index * 0.3}
          trigger={trigger}
        />
      ))}
    </motion.div>
  );
};

export default TextAnimation;
