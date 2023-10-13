import style from "./Home.module.css";
import dp from "../../assets/dp.jpg";
import { delayTimes } from "../../static/animationParameters";
import ReavealAnimation from "../../animationLayouts/RevealAnimation";
import MySecondDescription from "../../component/Home/MySecondDescription";
import { useEffect, useState } from "react";

const Home = (props: Props) => {
  const [isPhone, setIsPhone] = useState<boolean>();

  useEffect(() => {
    const currentWidth = window.innerWidth;
    setIsPhone(currentWidth <= 990 ? true : false);
  }, []);

  return (
    <div id="home" className={style.container}>
      <ReavealAnimation delay={delayTimes.defalutPageDelays.bannerDelay}>
        <div className={style.banner}>
          <img src={dp} alt="My Image" className={style.dpHolder} />
          <h1 className={style.title}>
            Welcome To <br />
            <span className={style.siteOwnerName}>{props.firstName}</span>'s
            Website
          </h1>
        </div>
      </ReavealAnimation>

      <div>
        <ReavealAnimation
          delay={delayTimes.defalutPageDelays.myDescriptionDelay}
        >
          <p className={style.aboutSection}>
            I am a passionate{" "}
            <span className={style.myWorkText}>{props.profession}</span> with a
            strong dedication to{" "}
            {props.expertise.map((eachExpertise, index) => (
              <>
                <span className={style.expertise} key={index}>
                  {eachExpertise}
                </span>
                {" ,"}
              </>
            ))}
            My journey in <span className={style.field}>{props.myField}</span>{" "}
            has been a thrilling ride, filled with creativity, innovation, and a
            relentless pursuit of excellence.
          </p>
        </ReavealAnimation>
        <ReavealAnimation
          delay={delayTimes.defalutPageDelays.usedToolsShowcaseDelay}
        >
          <div className={style.toolsContainer}>
            <section>
              <p>Tools That I use</p>
            </section>
            <div className={style.toolsImageContainer}>
              {props.usedToolsLogo.map((eachTool, index) => {
                return (
                  <div key={index}>
                    <img
                      className={style.toolImage}
                      src={eachTool.url}
                      alt={eachTool.altText}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </ReavealAnimation>
            
        {/* for phone view */}
        <MySecondDescription
          delay={delayTimes.defalutPageDelays.myDescriptionDelay__second}
          myApproach={props.myApproach}
          display={isPhone ? true : false}
        />

        {/* for computer view */}
        <MySecondDescription
          delay={delayTimes.defaultDelayAfterScroll}
          myApproach={props.myApproach}
          display={isPhone ? false : true}
        />
      </div>
    </div>
  );
};

type Props = {
  firstName: string;
  profession: string;
  expertise: string[];
  myField: string;
  usedToolsLogo: { url: string; altText: string }[];
  myApproach: { workPrinciple: string; approach: string };
};

export default Home;
