import About from "./Pages/About/About";
import Blog from "./Pages/Blog";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home/Home";
import Navbar from "./component/Navbar/Navbar";


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

const ToolsLogo: { url: string; altText: string }[] = [
  {
    url: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-48.png",
    altText: "React Logo",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    altText: "Typescript Logo",
  },
  {
    url: "https://cdn3.iconfinder.com/data/icons/teenyicons-outline-vol-2/15/nextjs-48.png",
    altText: "Next Js Logo",
  },
  {
    url: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-48.png",
    altText: "Github Logo",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg",
    altText: "Solidity Logo",
  },
  {
    url: "https://static-00.iconduck.com/assets.00/apps-neovim-icon-512x512-w4ecv3uh.png",
    altText: "Neovim Logo",
  },
  {
    url: "https://static-00.iconduck.com/assets.00/apps-alacritty-icon-512x512-be0xnta9.png",
    altText: "Alacritty Logo",
  },
  {
    url: "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_docker-48.png",
    altText: "Docker Logo",
  },
  

];

const firstName: string = "Ayush";
const profession: string = "Full Stack BlockChain Developer";
const expertise: string[] = [
  "Html",
  "Css",
  "JavaScript",
  "TypeScript",
  "Solidty",
  "python",
  "Node",
  "Nestjs",
];
const myField: string = "BlockChain";
const myApproach : {workPrinciple : string , approach: string} = {
  workPrinciple: "Consistency",
  approach: "Divide-and-conquer"
}



function App() {
  return (
    <>
      <Navbar navigationData={navigationData} />
      <Home
        myApproach={myApproach}
        firstName={firstName}
        profession={profession}
        expertise={expertise}
        myField={myField}
        usedToolsLogo={ToolsLogo}
      />
      <About />
      <Contacts />
      <Blog />
    </>
  );
}

export default App;
