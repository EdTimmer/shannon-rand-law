import { HomeStyles, TopRow, MiddleRow } from './Home.css';
import Logo from '../components/Logo/Logo';
import Navigation from '../components/Navigation/Navigation';
import Headshot from '../components/Headshot/Headshot';
import Slogan from '../components/Slogan/Slogan';
import Button from '../components/Button/Button';

const Home = () => (
  <HomeStyles>
    <TopRow>
      <Logo />    
      <Navigation />      

    </TopRow>
    <MiddleRow>
      <Slogan />
      <Headshot />
    </MiddleRow>
    <Button />
  </HomeStyles>
)

export default Home;