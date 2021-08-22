import { ContactWrapper, ContactHeader, ContactText } from "./Contact.css";

const Contact = () => (
  <ContactWrapper>
    <ContactHeader>
      Contact Information
    </ContactHeader>
    <ContactText>
      <div>
        203 Washington St. #177
      </div>
      <div>
        Salem, MA 01970
      </div>
      <div>
        978-219-4636
      </div>
      <div>
        srand@srandlegal.com
      </div>
      <div>
        srandlegal.com
      </div>
    </ContactText>
  </ContactWrapper>
);

export default Contact;