// Components
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Project from "./components/Project";

// Style
import GlobalStyles from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Portfolio />
    </div>
  );
}

export default App;
