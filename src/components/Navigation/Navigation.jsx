import { NavigationStyled } from './Navigation.css.js';
import NavLink from '../NavLink/NavLink';
import Phone from '../Phone/Phone';

const Navigation = () => (
  <NavigationStyled>
    <NavLink label={'How We Help'} />
    <NavLink label={'About'} />
    <NavLink label={'Contact'} />
    <Phone />    
  </NavigationStyled>
)

export default Navigation;