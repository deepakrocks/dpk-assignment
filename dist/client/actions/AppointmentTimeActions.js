"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SET_TIME = 'SET_NAME';
exports.SET_AVAILABLE_STATUS = 'SET_AVAILABLE_STATUS';
exports.SET_SHOW_CONTACT_DETAILS = 'SET_SHOW_CONTACT_DETAILS';
function setTime(time) {
    return {
        time: time,
        type: exports.SET_TIME,
    };
}
exports.setTime = setTime;
function setAvailableStatus(availableStatus) {
    return {
        availableStatus: availableStatus,
        type: exports.SET_AVAILABLE_STATUS,
    };
}
exports.setAvailableStatus = setAvailableStatus;
function setShowContactDetails(availableStatus) {
    return {
        availableStatus: availableStatus,
        type: exports.SET_SHOW_CONTACT_DETAILS,
    };
}
exports.setShowContactDetails = setShowContactDetails;
;
// export function showAppointmentDetails (event:any) {
//   console.log('clicked' + event.target.value);
//   this.setState({showContactDetails: true,})
// };
//
// export function handleModalClick (saved: boolean) {
//   this.setState({
//     showContactDetails:false,
//     availableStatus: !saved,
//   });
// };
//# sourceMappingURL=AppointmentTimeActions.js.map