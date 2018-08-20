"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BodyActions_1 = require("../actions/BodyActions");
var initialState = {
    timeSlots: [
        { timeSlot: '9 am ',
            name: '',
            available: false,
            phNumber: '', },
        { timeSlot: '10 am ',
            name: '',
            available: false,
            phNumber: '', },
        { timeSlot: '11 am ',
            name: '',
            available: false,
            phNumber: '', },
        { timeSlot: '12 pm ',
            name: '',
            available: false,
            phNumber: '', },
        { timeSlot: '1 pm ',
            name: '',
            available: false,
            phNumber: '', },
        { timeSlot: '2 pm ',
            name: '',
            available: false,
            phNumber: '', },
        { timeSlot: '3 pm ',
            name: '',
            available: false,
            phNumber: '', },
        { timeSlot: '4 pm ',
            name: '',
            available: false,
            phNumber: '', },
        { timeSlot: '5 pm ',
            name: '',
            available: false,
            phNumber: '', },
    ],
};
function sampleReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case BodyActions_1.SET_TIME_SLOTS:
            return Object.assign({}, state, { name: action.timeSlots });
        default:
            return state;
    }
}
exports.default = sampleReducer;
//# sourceMappingURL=Reducers.js.map