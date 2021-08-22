// import { Switch, Route, HashRouter } from 'react-router-dom';

import { AppStyles } from './App.css.js';
import Home from './pages/Home';
import About from './pages/About';
import HeadRow from './components/HeadRow';
// import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ServicesComponent from './pages/ServicesComponent';
import Contact from './pages/Contact';

const App = () => (
  <AppStyles>
    {/* <HeadRow /> */}
    {/* <Navigation /> */}
    <Home />
    {/* <HashRouter>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
    </HashRouter> */}
    <div id="about">
      <About />
    </div>

    <div id="services">
      <ServicesComponent />
    </div>

    <div id="contact">
      <Contact />
    </div>

    <Footer />
  </AppStyles>
);

export default App;
