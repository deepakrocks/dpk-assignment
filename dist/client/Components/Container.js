"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var AptmntTime_1 = require("./AptmntTime");
var SharedElements_1 = require("./SharedElements");
var styled_components_1 = require("styled-components");
var ContainerDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height : 100%;\n  margin: 20px;\n  background : #777777;\n"], ["\n  height : 100%;\n  margin: 20px;\n  background : #777777;\n"])));
var Container = function (props) {
    var timeSlots = props.timeSlots;
    return (React.createElement(ContainerDiv, null,
        React.createElement(SharedElements_1.FlexColumn, null,
            React.createElement("div", { style: { float: 'left', margin: '20px' } }, " Available slots"),
            React.createElement(SharedElements_1.FlexRow, null, timeSlots.map(function (timeSlot, index) { return React.createElement(AptmntTime_1.default, { key: index, time: timeSlot }); })))));
    // }
};
exports.default = Container;
var templateObject_1;
//# sourceMappingURL=Container.js.map