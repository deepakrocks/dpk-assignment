import { connect } from 'react-redux';
import Containers from '../Components/Container';
import {setShowContactDetails, setSelectedAppointment, AppointmentDetails} from "../actions/BodyActions";
import {Dispatch} from "redux";

const mapStateToProps = (state : any, ownProps: any) => ({
  timeSlots: state.timeSlots,
  showContactDetails: false,
  selectedAppointment: null,
});

const mapDispatchToProps = (dispatch : Dispatch, ownProps:any) => ({

 actions : {
    showAppointmentDetails: () => dispatch(setShowContactDetails(true)),
    handleModalClick: () => dispatch(setShowContactDetails(false)),
    setSelectedAppointment: (appointment : AppointmentDetails) => dispatch(setSelectedAppointment(appointment)),
  }

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Containers);