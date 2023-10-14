import ReavealAnimation from "../../animationLayouts/RevealAnimation";
import style from "./About.module.css";
import coverImage from "../../assets/aboutCover.jpg";

const About = () => {
  return (
    <div id="about" className={style.container}>
      <ReavealAnimation>
        <h1 className={style.mainSectionHeading}>About Me</h1>
      </ReavealAnimation>
      <ReavealAnimation>
        <div className={style.coverSection}>
          <img
            className={style.coverImage}
            src={coverImage}
            alt={
              "this is a about section cover image with laptop in the background"
            }
          />
          <p className={style.introductionTitle}>Ayush Mondal</p>
        </div>
      </ReavealAnimation>
      reprehenderit blanditiis deleniti vero ratione sint accusantium, veniam
      nihil sequi iure delectus eaque odio maxime, nesciunt error perferendis
      quis, totam temporibus assumenda quaerat. Vel, iusto accusantium quo
      soluta dolores mollitia illo veniam, maxime fugiat minima eos nam rem
      veritatis placeat aperiam. Sequi repellendus earum odit ut reiciendis
      maiores dignissimos nihil, adipisci illum at iste sed incidunt error
      ratione distinctio impedit provident cumque saepe nemo consequuntur,
      veritatis doloribus voluptatem nisi consequatur! Quos nisi aperiam sint
      ipsum quae laboriosam facere labore dolor, recusandae quidem ad
      perspiciatis veniam, cumque totam a distinctio? Minus nostrum temporibus
      magnam esse nihil tenetur natus perferendis quae incidunt praesentium?
      Suscipit veritatis quas sit similique unde explicabo temporibus aut
      numquam! Cumque facere dolor animi quae ipsam perferendis natus maiores,
      facilis voluptates, ex deleniti necessitatibus provident dolore, repellat
      id nesciunt laborum pariatur blanditiis minus a molestiae accusamus. Ab
      sequi, fugiat quo ipsa tenetur aut maiores assumenda nobis molestiae quam.
      Nobis sapiente esse aperiam quam eos deleniti praesentium. Voluptatem,
      voluptatum! Illum natus atque quia commodi aliquam quos quasi totam, eaque
      ullam, modi amet id assumenda veritatis quibusdam vero enim quam.
    </div>
  );
};

export default About;
