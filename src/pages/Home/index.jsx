import { Container, CenterSection, FirstRow, SecondRow, PhoneAndNavWrapper, LogoWrapper } from './Home.css';
import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation';
import Slogan from '../../components/Slogan/Slogan';
import Phone from '../../components/Phone/Phone';

const Home = () => (
  <Container>    
    <CenterSection>
      <FirstRow>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        
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