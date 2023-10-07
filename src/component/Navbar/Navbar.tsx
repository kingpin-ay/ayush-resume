import { useState } from "react";
import style from "./Navbar.module.css";
import { motion } from "framer-motion";

const navigationData = [
  {
    title: "Home",
    id: "#home",
  },
  {
    title: "About",
    id: "#about",
  },
  {
    title: "Contacts",
    id: "#contacts",
  },
  {
    title: "Blog",
    id: "#blog",
  },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <motion.nav
      className={style.container}
      initial={{ scale: 2, y: -100 }}
      animate={{ scale: 1, y: 0 }}
    >
      <ul className={style.navigationList}>
        {navigationData.map((eachLinkData, index) => (
          <li
            key={index}
            onClick={() => {
              setActiveLink(index);
            }}
          >
            <a
              style={activeLink === index ?{
                color: "rgb(254, 234, 250)",
                borderBottom: "1px solid rgb(254, 234, 250)"
              } : {}}
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

export default Navbar;
