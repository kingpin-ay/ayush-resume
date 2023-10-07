import { useState } from "react";
import style from "./Navbar.module.css";
import { motion } from "framer-motion";


const Navbar = (props : Props) => {
  const [activeLink, setActiveLink] = useState(0);
 

  return (
    <motion.nav
      className={style.container}
      initial={{ scale: 2, y: -100 }}
      animate={{ scale: 1, y: 0 }}
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

type Props = {
  navigationData : { id : string , title: string }[];

}

export default Navbar;
