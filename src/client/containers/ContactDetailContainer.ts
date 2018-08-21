import { connect } from 'react-redux';
// @ts-ignore
import ContactDetails from '../Components/ContactDetails';
import {
  AppointmentDetails,
  saveModal,
  saveSeletedAppointment, saveValidationError,
  setShowContactDetails
} from "../actions/BodyActions";
// import { setShowContactDetails} from '../actions/AppointmentTimeActions';


const mapStateToProps = (state : any,) => (
  {
    selectedAppointment: state.selectedAppointment,
    timeSlots: state.timeSlots,
    phoneNumber : '',
    userName : '',
    validationError :state.validationError,
  });

const mapDispatchToProps = (dispatch: any) => ({
  saveModal: (updatedTimeSlots : AppointmentDetails[]) => dispatch(saveModal(updatedTimeSlots)),
  showAppointmentDetails: () => dispatch(setShowContactDetails(false)),
  saveSeletedAppointment : (appointment: AppointmentDetails) => dispatch(saveSeletedAppointment(appointment)),
  saveValidationError :(validationError: string) => dispatch(saveValidationError(validationError)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactDetails);