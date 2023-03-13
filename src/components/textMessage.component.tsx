import { animated, useSpring } from "@react-spring/web";
import { easings } from "@react-spring/web";
import cx from "classnames";
import { useRef, useState } from "react";

export const TextMsg = ({ text }: { text: string }) => {
  const slideInAnimation = useSpring({
    from: {
      opacity: 0,
      transform: "translateX(-50px)",
    },
    to: {
      opacity: 1,
      transform: "translateX(0px)",
    },
    config: { easing: easings.easeOutCubic },
  });
  return (
    <animated.div className={cx("text-msg", "odd")} style={slideInAnimation}>
      {text}
    </animated.div>
  );
};

export const TextMsgInput = ({ onEnter }) => {
  const ref = useRef<HTMLDivElement>(null);
  const slideInAnimation = useSpring({
    from: {
      opacity: 0,
      transform: "translateX(50px) translateY(50px)",
      borderColor: "#7a7a7a",
    },
    to: {
      opacity: 0.9,
      transform: "translateX(0px)t translateY(50px)",
      borderColor: "#7a7a7a",
    },
    onResolve: () => {
      ref?.current?.focus();
    },
    delay: 3000,
    config: { easing: easings.easeOutCubic },
  });

  const slideUpAnimation = useSpring({
    transition: "0.7s",
    opacity: 1,
    transform: "translateY(0px)",
    borderColor: "#fdf6d7",
    config: {
      easing: easings.easeOutCubic,
    },
  });

  const [animation, setAnimation] = useState(slideInAnimation);
  return (
    <animated.div
      ref={ref}
      contentEditable={true}
      className={cx("text-msg", "even")}
      style={animation}
      onKeyDownCapture={(e) => {
        if (e.key == "Enter") {
          const element = e.target as HTMLElement;
          if (element.innerHTML) {
            e.currentTarget.contentEditable = false;
            setTimeout(() => {
              setAnimation(slideUpAnimation);
              onEnter(element.innerHTML);
            }, 300);
          }
        }
      }}
    />
  );
};
