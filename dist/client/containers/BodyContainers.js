"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var Container_1 = require("../Components/Container");
var BodyActions_1 = require("../actions/BodyActions");
// import {BodyActions} from '../actions/BodyActions';
// import sampleReducer from "../reducers/Reducers";
var mapStateToProps = function (state, ownProps) { return ({
    timeSlots: state.timeSlots,
    showContactDetails: false,
    selectedAppointment: null,
}); };
var mapDispatchToProps = function (dispatch, ownProps) { return ({
    // const actions = {
    //   savePerson: (person: Person) => dispatch(savePerson(person))
    // }
    // return actions;
    actions: {
        showAppointmentDetails: function () { return dispatch(BodyActions_1.setShowContactDetails(true)); },
        handleModalClick: function () { return dispatch(BodyActions_1.setShowContactDetails(false)); },
        setSelectedAppointment: function (appointment) { return dispatch(BodyActions_1.setSelectedAppointment(appointment)); },
    }
    // return{
    //   showAppointmentDetails: () => dispatch(setShowContactDetails(true)),
    //   handleModalClick: () => dispatch(setShowContactDetails(true)),
    // },
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Container_1.default);
//# sourceMappingURL=BodyContainers.js.map