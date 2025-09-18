import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import Skills from "./components/Skills";
import Messages from "./components/Messages";
import Contact from "./components/Contact";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Projects />
      <Contact/>
      <Footer />
      {/* <Messages/> */}
    </ThemeProvider>
  );
}

export default App;
