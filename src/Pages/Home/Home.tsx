import style from "./Home.module.css";
import dp from "../../assets/dp.jpg";
import ReavealAnimation from "../../animationLayouts/RevealAnimation";

const Home = (props: Props) => {
  return (
    <div id="home" className={style.container}>
      <ReavealAnimation>
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
        <ReavealAnimation>
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
        <ReavealAnimation>
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
        <ReavealAnimation>
          <p className={style.aboutSection}>
            I believe in the power of{" "}
            <span className={style.myWorkText}>
              {props.myApproach.workPrinciple}
            </span>
            . With a keen eye for detail and a knack for problem-solving, I
            approach every project with
            <span className={style.expertise}>
              {" "}
              {props.myApproach.approach}
            </span>
            . My goal is not just to meet your expectations but to exceed them,
            crafting experiences that leave a lasting impact.
          </p>
        </ReavealAnimation>
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
