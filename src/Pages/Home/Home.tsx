import { motion } from "framer-motion";
import style from "./Home.module.css";
import dp from "../../assets/DP.jpg";



const Home = () => {
  return (
    <motion.div id="home" className={style.container}>
      <motion.div className={style.banner}>
        <motion.img
          src={dp}
          alt="My Image"
          className={style.dpHolder}
          initial={{ y: 200, scale: 0 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ type: "spring", duration: 0.3 }}
        />
        <motion.h1
          className={style.title}
          initial={{ y: 200, scale: 0 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ type: "spring", delay: 0.2, duration: 0.3 }}
        >
          Welcome To <br />
          <span className={style.siteOwnerName}>Ayush</span>'s Website
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};



export default Home;
