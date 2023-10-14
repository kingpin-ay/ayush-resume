import { useState } from "react";
import style from "./Navbar.module.css";
import { motion } from "framer-motion";
import {
  animationDuration,
  delayTimes,
} from "../../static/animationParameters";

const Navbar = (props: Props) => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <motion.nav
      className={style.container}
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
      animate="visible"
      transition={{
        delay: delayTimes.defalutPageDelays.navbarDelay,
        duration: animationDuration.defaultAnimationDuration,
      }}
    >
      <ul className={style.navigationList}>
        {props.navigationData.map((eachLinkData, index) => (
          <li
            key={index}
            onClick={() => {
              setActiveLink(index);
            }}
          >
            <a
              className={activeLink == index ? style.activeLink : ``}
              href={eachLinkData.id}
            >
              {eachLinkData.title}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

type Props = {
  navigationData: { id: string; title: string }[];
};

export default Navbar;
