
import About from "./Pages/About";
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


function App() {

  return (
    <>
      <Navbar navigationData={navigationData} />
      <Home />
      <About />
      <Contacts />
      <Blog />
    </>
  );
}

export default App;
