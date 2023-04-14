import { useState } from "react";

// Components
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Project from "./components/Project";
import projectData from "./components/projectData";

// Style
import GlobalStyles from "./components/GlobalStyle";

// Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const [projectInfo, setProjectData] = useState(projectData());

  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <AnimatePresence mode="wait">
        <Portfolio projectInfo={projectInfo} />
      </AnimatePresence>
    </div>
  );
}

export default App;
