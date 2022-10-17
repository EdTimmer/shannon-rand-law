// import { Switch, Route, HashRouter } from 'react-router-dom';

import { AppStyles } from './App.css.js';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import ServicesComponent from './pages/ServicesComponent';
import Contact from './pages/Contact';

const App = () => (
  <AppStyles>
    <Home />
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
