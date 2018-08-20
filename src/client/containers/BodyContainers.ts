import { connect } from 'react-redux';
import Containers from '../Components/Container';
import {setShowContactDetails} from "../actions/BodyActions";
import {Dispatch} from "redux";
// import {BodyActions} from '../actions/BodyActions';
// import sampleReducer from "../reducers/Reducers";


const mapStateToProps = (state : any, ownProps: any) => ({
  timeSlots: state.timeSlots,
  showContactDetails: false,
});

const mapDispatchToProps = (dispatch : Dispatch, ownProps:any) => ({

  // const actions = {
  //   savePerson: (person: Person) => dispatch(savePerson(person))
  // }
  // return actions;
  actions : {
    showAppointmentDetails: () => dispatch(setShowContactDetails(true)),
    handleModalClick: () => dispatch(setShowContactDetails(true)),
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Containers);