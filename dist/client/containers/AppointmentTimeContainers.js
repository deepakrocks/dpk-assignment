"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var AptmntTime_1 = require("../Components/AptmntTime");
var AppointmentTimeActions_1 = require("../actions/AppointmentTimeActions");
var mapStateToProps = function (state) { return ({
    time: state.time,
    availableStatus: state.availableStatus,
    showContactDetails: state.showContactDetails,
}); };
var mapDispatchToProps = function (dispatch) { return ({
    showAppointmentDetails: function () { return dispatch(AppointmentTimeActions_1.setShowContactDetails(true)); },
    handleModalClick: function () { return dispatch(AppointmentTimeActions_1.setShowContactDetails(true)); },
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(AptmntTime_1.default);
//# sourceMappingURL=AppointmentTimeContainers.js.map