import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Contacts />
      <Blog />
    </>
  );
}

export default App;
