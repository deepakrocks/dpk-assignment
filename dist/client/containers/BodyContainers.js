"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var Container_1 = require("../Components/Container");
// import {BodyActions} from '../actions/BodyActions';
// import sampleReducer from "../reducers/Reducers";
var mapStateToProps = function (state) { return ({
    timeSlots: state.sampleReducer.timeSlots,
}); };
var mapDispatchToProps = function () { return ({}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Container_1.default);
//# sourceMappingURL=BodyContainers.js.map