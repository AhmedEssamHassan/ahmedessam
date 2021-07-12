import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import ReactProjects from "./components/ReactProjects/ReactProjects";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App d-flex flex-column">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={ReactProjects} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
