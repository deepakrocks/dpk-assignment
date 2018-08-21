import { connect } from 'react-redux';
import AppointmentTime from '../Components/AptmntTime';
import {AppointmentDetails, setSelectedAppointment, setShowContactDetails} from "../actions/BodyActions";
// import { setShowContactDetails} from '../actions/AppointmentTimeActions';


const mapStateToProps = (state : any,) => (
{
  timeSlots: state.timeSlots,
  showContactDetails: state.showContactDetails,
  selectedAppointment: state.selectedAppointment,

});

const mapDispatchToProps = (dispatch: any) => ({
  showAppointmentDetails: () => dispatch(setShowContactDetails(true)),
  handleModalClick: () => dispatch(setShowContactDetails(false)),
  setSelectedAppointment: (appointment : AppointmentDetails) => dispatch(setSelectedAppointment(appointment)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppointmentTime);