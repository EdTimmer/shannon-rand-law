import { ServicesWrapper, ServiceHeader, ServiceText } from './ServicesComponent.css';
// import SectionHeader from '../../components/SectionHeader';

const ServicesComponent = () => (
 
  <ServicesWrapper>
    {/* <SectionHeader label='Services offered by Shannon Rand, Esq. Legal Services' /> */}
    <ServiceHeader>
      Child Support Expertise
    </ServiceHeader>
    <ServiceText>
      Do you need a child support order, or already have one that needs to be modified or enforced?  Do you already pay child support and are now facing the prospect of another child support order? Attorney Rand can assist you with this process in the most efficient manner.  Massachusetts uses Child Support Guidelines to determine appropriate child support orders, based on the income of the parties, the cost of daycare and health insurance, as well as the existence of prior orders of support.  Every four years, the Guidelines are reviewed, updated and amended.  The Guidelines provide judges with what is likely the most appropriate child support order.  However, there are times when it is appropriate for a judge to deviate from the guidelines due to specific facts of a case.  Attorney Rand is well versed in the nuances of child support orders.     

    </ServiceText>
    
    <ServiceHeader>
      Limited Assistance Representation (LAR)
    </ServiceHeader>
    <ServiceText>
      Can’t, or don’t want to, pay for full representation from beginning to end of your family law matter?  Shannon Rand, Esq. Legal Services offers Limited Representation services such as legal consultation and advice about your case; preparation of court documents; legal research and drafting of pleadings and legal memoranda.  LAR is a way of getting legal guidance when you are not in the market for full scale representation.  LAR makes legal services more accessible to the general public and can provide a level of understanding of the legal process and procedures that are often intimidating to non-lawyers.
    </ServiceText>
    
    <ServiceHeader>
      Mediation
    </ServiceHeader>
    <ServiceText>
      Attorney Rand is a trained Mediator and offers mediation in family law cases.  Mediation is a surprisingly effective way to resolve issues between parties, even when the parties have a hard time communicating with one another.  Mediators facilitate discussion so that the interests of both parties are able to be heard.  Mediation is also a great alternative to litigation because it allows for more tailored results based on the specific circumstances and goals of the participants.  It gives the parties more control over the outcome of their case, while limiting the financial and emotional toll of litigating high conflict divorce cases. 

    </ServiceText>    
  </ServicesWrapper>
);

export default ServicesComponent;