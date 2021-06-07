import { Switch, Route } from 'react-router-dom';

import { AppStyles } from './App.css.js';
import Home from './pages/Home';

const App = () => (
  <AppStyles>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </AppStyles>
);

export default App;
