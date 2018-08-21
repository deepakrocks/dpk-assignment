"use strict";
// import { fetchTimeSlot } from '../services/TimeSlotService';
Object.defineProperty(exports, "__esModule", { value: true });
exports.SET_TIME_SLOTS = 'SET_TIME_SLOTS';
exports.SET_TIME = 'SET_NAME';
exports.SET_AVAILABLE_STATUS = 'SET_AVAILABLE_STATUS';
exports.SET_SHOW_CONTACT_DETAILS = 'SET_SHOW_CONTACT_DETAILS';
exports.SET_SELECTED_APPOINTMENT = 'SET_SELECTED_APPOINTMENT';
// export interface AppointmentTimeState {
//   type: string;
//   time: any;
// }
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
function setShowContactDetails(showContactDetails) {
    return {
        showContactDetails: showContactDetails,
        type: exports.SET_SHOW_CONTACT_DETAILS,
    };
}
exports.setShowContactDetails = setShowContactDetails;
;
function setSelectedAppointment(selectedAppointment) {
    return {
        selectedAppointment: selectedAppointment,
        type: exports.SET_SELECTED_APPOINTMENT,
    };
}
exports.setSelectedAppointment = setSelectedAppointment;
;
//# sourceMappingURL=BodyActions.js.map