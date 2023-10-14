import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { delayTimes, animationDuration } from "../static/animationParameters";

const ReavealAnimation = ({ children, delay, display }: Props) => {
  const referenceToTheMainDiv = useRef(null);
  const isInView = useInView(referenceToTheMainDiv, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <div
      ref={referenceToTheMainDiv}
      style={{
        position: "relative",
        overflow: "hidden",
        display: display ? "none" : "",
      }}
    >
      <motion.div
        variants={{
          hidden: {
            y: 75,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          delay: delay ? delay : delayTimes.defaultDelayAfterScroll,
          duration: animationDuration.defaultAnimationDuration,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%" | null;
  delay?: number;
  display?: boolean;
}

export default ReavealAnimation;
