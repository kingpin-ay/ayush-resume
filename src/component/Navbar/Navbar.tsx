import { useState } from "react";
import style from "./Navbar.module.css";
import { motion } from "framer-motion";
import { delayTimes } from "../../static/animationParameters";
import ReavealAnimation from "../../animationLayouts/RevealAnimation";

const Navbar = (props: Props) => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <ReavealAnimation delay={delayTimes.defalutPageDelays.navbarDelay}>
      <motion.nav className={style.container}>
        <ul className={style.navigationList}>
          {props.navigationData.map((eachLinkData, index) => (
            <li
              key={index}
              onClick={() => {
                setActiveLink(index);
              }}
            >
              <a
                style={
                  activeLink === index
                    ? {
                        color: "rgb(254, 234, 250)",
                        borderBottom: "1px solid rgb(254, 234, 250)",
                      }
                    : {}
                }
                href={eachLinkData.id}
              >
                {eachLinkData.title}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </ReavealAnimation>
  );
};

type Props = {
  navigationData: { id: string; title: string }[];
};

export default Navbar;
