import { ContactWrapper, ContactHeader, ContactText, TypeHeader, LeftSection, RightSection, TopSection, HeaderAndText } from "./Contact.css";

const Contact = () => (
  <ContactWrapper>
    <TopSection>
      <ContactHeader>
        Contact Information
      </ContactHeader>
    </TopSection>

    <LeftSection>
      <TypeHeader>
        Address
      </TypeHeader>
      <ContactText>
        203 Washington St. #177
      </ContactText>
      <ContactText>
        Salem, MA 01970
      </ContactText>
    </LeftSection>
    <RightSection>
      <HeaderAndText>
        <TypeHeader>
          Phone:
        </TypeHeader>      
        <ContactText>
          978-219-4636
        </ContactText>
      </HeaderAndText>
      
      <HeaderAndText>
        <TypeHeader>
          Email:
        </TypeHeader>
        <ContactText>
          srand@srandlegal.com
        </ContactText>
      </HeaderAndText>
      
      <HeaderAndText>
        <TypeHeader>
          Web:
        </TypeHeader>
        <ContactText>
          srandlegal.com
        </ContactText>
      </HeaderAndText>
      

    </RightSection>
    
  </ContactWrapper>
);

export default Contact;