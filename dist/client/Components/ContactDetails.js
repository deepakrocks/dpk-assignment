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
var React = require("react");
var styled_components_1 = require("styled-components");
var SharedElements_1 = require("./SharedElements");
var StyledInput = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 1rem 1rem;\n  width: 200px;\n  height: 36px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size:15px;\n  padding-left : 10px;\n  opacity: 1;\n  color: #216099;\n  &::-webkit-input-placeholder {\n    color: #216099;\n    opacity: 0.5\n }\n"], ["\n  margin: 1rem 1rem;\n  width: 200px;\n  height: 36px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size:15px;\n  padding-left : 10px;\n  opacity: 1;\n  color: #216099;\n  &::-webkit-input-placeholder {\n    color: #216099;\n    opacity: 0.5\n }\n"])));
var nameError = 'Only letters is allowed';
var numberError = 'Only numbers is allowed';
var ContactDetails = /** @class */ (function (_super) {
    __extends(ContactDetails, _super);
    function ContactDetails(props) {
        var _this = _super.call(this, props) || this;
        _this.validateName = function (event) {
            var nameValue = event.target.value;
            // let commentErrorText = '';
            var error = '';
            if (!_this.validationCheck(nameValue, /^[a-zA-Z.]*$/)) {
                nameValue = _this.state.name;
                console.log('erroed name value', nameValue);
                error = _this.state.errorMessage.length === 0
                    ? nameError
                    : _this.state.errorMessage === nameError
                        ? nameError : nameError + ', ' + numberError;
            }
            _this.setState({ name: nameValue, errorMessage: error });
        };
        _this.validateNumber = function (event) {
            var phoneNo = event.target.value;
            // let commentErrorText = '';
            var error = '';
            if (!_this.validationCheck(phoneNo, /^[0-9]*$/)) {
                phoneNo = phoneNo.replace(/[^\d.]/gi, '');
                error = _this.state.errorMessage.length === 0
                    ? numberError
                    : _this.state.errorMessage === numberError
                        ? numberError : numberError + ', ' + nameError;
            }
            _this.setState({ phoneNumber: phoneNo, errorMessage: error });
        };
        _this.validationCheck = function (commentText, regex) {
            return (commentText.match(regex));
            // return (commentText.match(/^[0-9a-zA-Z.]*$/));
        };
        _this.save = function () {
            _this.props.modalClosed(true);
        };
        _this.close = function () {
            _this.props.modalClosed(false);
        };
        _this.disableCheck = function () {
            return _this.state.name.length === 0 || _this.state.phoneNumber.length < 10;
        };
        _this.state = {
            name: '',
            phoneNumber: '',
            errorMessage: '',
        };
        return _this;
    }
    ContactDetails.prototype.render = function () {
        var appointmentTime = this.props.appointmentTime;
        var _a = this.state, name = _a.name, phoneNumber = _a.phoneNumber;
        return (React.createElement("div", null,
            React.createElement("div", { style: { textAlign: 'center', color: '#216099' } },
                "Appointment Time: ",
                React.createElement("span", null, appointmentTime),
                " "),
            React.createElement(SharedElements_1.FlexRow, null,
                React.createElement(StyledInput, { placeholder: 'Enter Your Name', minLength: 1, maxLength: 30, type: 'text', value: name, onChange: this.validateName }),
                React.createElement(StyledInput, { placeholder: 'Enter Phone Number', minLength: 10, maxLength: 10, type: 'text', value: phoneNumber, onChange: this.validateNumber })),
            React.createElement("p", { style: { color: '#FF0000', marginLeft: '10px' } }, this.state.errorMessage),
            React.createElement(SharedElements_1.FlexRow, { style: { float: 'right' } },
                React.createElement(SharedElements_1.StyledButton, { style: { background: '#FFFFFF', color: '#216099' }, onClick: this.close }, " Cancel "),
                React.createElement(SharedElements_1.StyledButton, { style: { background: '#216099', color: '#FFFFFF' }, onClick: this.save, disabled: this.disableCheck() }, " Save "))));
    };
    return ContactDetails;
}(React.Component));
// @ts-ignore
exports.default = ContactDetails;
var templateObject_1;
//# sourceMappingURL=ContactDetails.js.map