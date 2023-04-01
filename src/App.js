import "./App.scss";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutMe from "./component/AboutMe/AboutMe";
import Header from "./component/Header/Header";
import Contact from "./component/Contact/Contact";
import Project from "./component/Projects/Project";
import HeroPage from "./component/HeroPage/HeroPage";
import ToTopButton from "./component/ToTop/ToTopButton";

function App() {
  return (
    // <Router>
    //   <>
    //     <Header />

    //     <Switch>
    //       <Route exact path="/">
    //         <Home />
    //       </Route> */}
    //       {/* <Route exact path="contact">
    //         <Contact />
    //       </Route>
    //       <Route exact path="prjects">
    //         <Project />
    //       </Route>
    //       <Route exact path="aboutme">
    //         <AboutMe />
    //       </Route>
    //     </Switch>
    //     <HeroPage />
    //     <AboutMe />
    //     <Project />
    //     <Contact />
    //   </>
    // </Router>
    <>
      <Header />
      <HeroPage />
      <AboutMe />
      <Project />
      <Contact />
      <ToTopButton />
    </>
  );
}

export default App;
