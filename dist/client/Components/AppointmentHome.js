"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// import Container from './Container'
var BodyContainers_1 = require("../containers/BodyContainers");
var HeaderContainer_1 = require("../containers/HeaderContainer");
var styled_components_1 = require("styled-components");
// import Header from './Header';
var React = require("react");
var AppDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-align: center;\n  height: 100%;\n  margin: 10px 10px;\n  background: green;"], ["\n  text-align: center;\n  height: 100%;\n  margin: 10px 10px;\n  background: green;"])));
var AppointmentHome = /** @class */ (function (_super) {
    __extends(AppointmentHome, _super);
    function AppointmentHome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppointmentHome.prototype.render = function () {
        return (React.createElement(AppDiv, null,
            React.createElement(HeaderContainer_1.default, null),
            React.createElement(BodyContainers_1.default, null)));
    };
    return AppointmentHome;
}(React.Component));
exports.default = AppointmentHome;
var templateObject_1;
//# sourceMappingURL=AppointmentHome.js.map