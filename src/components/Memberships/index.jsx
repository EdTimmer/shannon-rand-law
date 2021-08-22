import { MembershipsWrapper, MembershipsHeader, MembershipsContent} from './Memberships.css';

const Memberships = () => (
  <MembershipsWrapper>
    <MembershipsHeader>
      Attorney Shannon Rand is a member of numerous bar associations and professional organizations:
    </MembershipsHeader>
    <MembershipsContent>
      <div>
        Massachusetts Bar Association
      </div>
      
      <div>
        Boston Bar Association
      </div>
      
      <div>
        Women’s Bar Association
      </div>
      
      <div>
        Attorney Mentoring Program through the Women’s Bar Foundation
      </div>
      
      <div>
        Essex County Bar Association
      </div>
      
      <div>
        Massachusetts Council on Family Mediation
      </div>
      
      <div>
        Massachusetts Association of Guardians ad Litem
      </div>
    </MembershipsContent>
  </MembershipsWrapper>
);

export default Memberships;