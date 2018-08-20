import { connect } from 'react-redux';
import AppointmentTime from '../Components/AptmntTime';
// import { setShowContactDetails} from '../actions/AppointmentTimeActions';


const mapStateToProps = (state : any,) => (
{
  timeSlots: state.timeSlots,
  showContactDetails: state.showContactDetails,
});

const mapDispatchToProps = (dispatch: any) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppointmentTime);