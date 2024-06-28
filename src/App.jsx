import Intro from "./Component/Intro/Intro";
import Navbar from "./Component/Navbar/Navbar";
import Skills from './Component/Skills/Skills'
import Works from './Component/Works/Works'
import Contact from './Component/Contact/Contact'



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
