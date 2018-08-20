"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var ContactDetails_1 = require("./ContactDetails");
var SharedElements_1 = require("./SharedElements");
// @ts-ignore
var react_modal_1 = require("react-modal");
var modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
var AppointmentDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var AppointmentTime = function (appointmentTimeSlotProps) {
    var time = appointmentTimeSlotProps.time, availableStatus = appointmentTimeSlotProps.availableStatus, showContactDetails = appointmentTimeSlotProps.showContactDetails, showAppointmentDetails = appointmentTimeSlotProps.showAppointmentDetails, handleModalClick = appointmentTimeSlotProps.handleModalClick;
    return (React.createElement(AppointmentDiv, null,
        React.createElement(SharedElements_1.StyledButton, { style: availableStatus ? { background: '#00FF00' } : { background: '#FF0000' }, onClick: showAppointmentDetails },
            time.appointmentTime,
            " "),
        React.createElement(react_modal_1.default, { isOpen: showContactDetails, contentLabel: "Minimal Modal Example", ariaHideApp: false, style: modalStyles },
            React.createElement(ContactDetails_1.default, { appointmentTime: time.appointmentTime, modalClosed: handleModalClick }))));
};
exports.default = AppointmentTime;
var templateObject_1;
//# sourceMappingURL=AptmntTime.js.map