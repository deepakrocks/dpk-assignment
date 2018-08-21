"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BodyActions_1 = require("../actions/BodyActions");
var initialState = {
    timeSlots: [
        { timeSlot: '9 am ',
            name: '',
            available: true,
            phNumber: '', },
        { timeSlot: '10 am ',
            name: '',
            available: true,
            phNumber: '', },
        { timeSlot: '11 am ',
            name: '',
            available: true,
            phNumber: '', },
        { timeSlot: '12 pm ',
            name: '',
            available: true,
            phNumber: '', },
        { timeSlot: '1 pm ',
            name: '',
            available: true,
            phNumber: '', },
        { timeSlot: '2 pm ',
            name: '',
            available: true,
            phNumber: '', },
        { timeSlot: '3 pm ',
            name: '',
            available: true,
            phNumber: '', },
        { timeSlot: '4 pm ',
            name: '',
            available: true,
            phNumber: '', },
        { timeSlot: '5 pm ',
            name: '',
            available: true,
            phNumber: '', },
    ],
    showContactDetails: false,
    selectedAppointment: '',
};
function sampleReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case BodyActions_1.SET_TIME_SLOTS:
            return Object.assign({}, state, { timeSlots: action.timeSlots });
        case BodyActions_1.SET_SHOW_CONTACT_DETAILS:
            return Object.assign({}, state, { showContactDetails: action.showContactDetails });
        case BodyActions_1.SET_AVAILABLE_STATUS:
            return Object.assign({}, state, {
                showContactDetails: true,
            });
        default:
            return state;
    }
}
exports.default = sampleReducer;
//# sourceMappingURL=Reducers.js.map