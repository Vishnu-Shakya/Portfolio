
import Intro from "./components/Intro/Intro.js";
import Navbar from "./components/Navbar/Navbar.js";
import Skills from "./components/Skills/Skills.js";
import Works from "./components/Works/Works.js"
import Contact from "./components/Contact/Contact.js";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Skills></Skills>
      <Works></Works>
      <Contact></Contact>

    </div>
  );
}

export default App;
