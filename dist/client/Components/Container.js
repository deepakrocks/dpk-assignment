"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// import AppointmentTime from "./AptmntTime";
var SharedElements_1 = require("./SharedElements");
var styled_components_1 = require("styled-components");
// import AppointmentTimeContainers from "../containers/AppointmentTimeContainers";
// import AppointmentTime from "./AptmntTime";
var AppointmentTimeContainers_1 = require("../containers/AppointmentTimeContainers");
var ContainerDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height : 100%;\n  margin: 20px;\n  background : #777777;\n"], ["\n  height : 100%;\n  margin: 20px;\n  background : #777777;\n"])));
var Container = function (props) {
    console.log('props', props);
    return (React.createElement(ContainerDiv, null,
        React.createElement(SharedElements_1.FlexColumn, null,
            React.createElement("div", { style: { float: 'left', margin: '20px' } }, " Available slots"),
            React.createElement(SharedElements_1.FlexRow, null,
                React.createElement(AppointmentTimeContainers_1.default, null)))));
    // }
};
exports.default = Container;
var templateObject_1;
//# sourceMappingURL=Container.js.map