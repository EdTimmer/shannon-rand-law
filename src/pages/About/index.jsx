import Headshot from '../../components/Headshot/Headshot';
import { AboutWrapper, DescriptionWrapper, Header, TextWrapper, MembershipsWrapper, ImageContainer } from './About.css';
import Memberships from '../../components/Memberships';

const About = () => (
    <AboutWrapper>
      <ImageContainer>
        <Headshot />
      </ImageContainer>
      
      <DescriptionWrapper>
        <Header>About Attorney Shannon Rand</Header>
        <TextWrapper>Attorney Rand obtained her Bachelor’s Degree from Simmons University in Boston.  She earned her Juris Doctor Degree from Northeastern University School of Law in 1999.  She has been a civil litigator for over twenty years, handling primarily family law cases and specializing in child support matters involving the Department of Revenue, Child Support Enforcement Division.  
  Attorney Shannon Rand grew up in a diverse military community overseas and has demonstrated her ability to communicate well with clients from various cultures and communities.  She has made it a point to educate herself about the complexities of representing diverse clients  in the legal systems, and getting results for their benefit. 
  Attorney Rand is committed to helping her clients accomplish their goals without spending excessive amounts of money on unnecessary litigation and court appearances.  She is creative with out of the box thinking when it comes to problem solving and finding resolutions.
        </TextWrapper>
        <MembershipsWrapper>
          <Header>Attorney Shannon Rand is a member of numerous bar associations and professional organizations</Header>
          <Memberships />
        </MembershipsWrapper>
        
      </DescriptionWrapper>
    
  </AboutWrapper>  
)

export default About;