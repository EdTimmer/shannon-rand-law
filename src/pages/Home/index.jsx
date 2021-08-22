import { Container, CenterSection, FirstRow, SecondRow, PhoneAndNavWrapper } from './Home.css';
import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation';
import Slogan from '../../components/Slogan/Slogan';
import Button from '../../components/Button/Button';
import Greeting from '../../components/Greeting/Greeting';
import Phone from '../../components/Phone/Phone';
// import Logo from '../../components/Logo/Logo';

const Home = () => (
  <Container>    
    <CenterSection>
      <FirstRow>
        <Logo />
        <PhoneAndNavWrapper>
          <Phone /> 
          <Navigation />
        </PhoneAndNavWrapper>
      </FirstRow>
      
      <SecondRow>
        <Slogan />        
      </SecondRow>
    </CenterSection>
  </Container>
)

export default Home;