import { BrowserRouter } from "react-router-dom";

import { NavigationWrapper, NavigationLink } from './Navigation.css.js';

const Navigation = () => (
  <NavigationWrapper>
    <BrowserRouter>
      <NavigationLink smooth to="/#about">
        About
      </NavigationLink>
    </BrowserRouter>  
    
    <BrowserRouter>
      <NavigationLink smooth to="/#services">
        Services
      </NavigationLink>
    </BrowserRouter> 
    
    <BrowserRouter>
      <NavigationLink smooth to="/#contact">
        Contact
      </NavigationLink>
    </BrowserRouter>   
  </NavigationWrapper>
)

export default Navigation;