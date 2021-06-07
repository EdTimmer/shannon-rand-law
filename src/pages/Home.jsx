import { HomeStyles, TopRow, MiddleRow } from './Home.css';
import Logo from '../components/Logo/Logo';
import Navigation from '../components/Navigation/Navigation';
import Headshot from '../components/Headshot/Headshot';
import Slogan from '../components/Slogan/Slogan';
import Button from '../components/Button/Button';
import Greeting from '../components/Greeting/Greeting';

const Home = () => (
  <div>    
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
    <Greeting />
  </div>
)

export default Home;