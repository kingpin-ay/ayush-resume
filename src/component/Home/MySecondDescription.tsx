import ReavealAnimation from "../../animationLayouts/RevealAnimation";
import style from "./MySecondDescription.module.css";

const MySecondDescription = (props: Props) => {
  return (
    <ReavealAnimation
      delay={props.delay}
      display={props.display ? true : false}
    >
      <p className={style.aboutSection}>
        I believe in the power of{" "}
        <span className={style.myWorkText}>
          {props.myApproach.workPrinciple}
        </span>
        . With a keen eye for detail and a knack for problem-solving, I approach
        every project with
        <span className={style.expertise}> {props.myApproach.approach}</span>.
        My goal is not just to meet your expectations but to exceed them,
        crafting experiences that leave a lasting impact.
      </p>
    </ReavealAnimation>
  );
};

type Props = {
  myApproach: { workPrinciple: string; approach: string };
  display?: boolean;
  delay: number;
};

export default MySecondDescription;
