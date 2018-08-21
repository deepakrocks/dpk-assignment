"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var AptmntTime_1 = require("../Components/AptmntTime");
var BodyActions_1 = require("../actions/BodyActions");
// import { setShowContactDetails} from '../actions/AppointmentTimeActions';
var mapStateToProps = function (state) { return ({
    timeSlots: state.timeSlots,
    showContactDetails: state.showContactDetails,
    selectedAppointment: state.selectedAppointment,
}); };
var mapDispatchToProps = function (dispatch) { return ({
    showAppointmentDetails: function () { return dispatch(BodyActions_1.setShowContactDetails(true)); },
    handleModalClick: function () { return dispatch(BodyActions_1.setShowContactDetails(true)); },
    setSelectedAppointment: function (appointment) { return dispatch(BodyActions_1.setSelectedAppointment(appointment)); },
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(AptmntTime_1.default);
//# sourceMappingURL=AppointmentTimeContainers.js.map