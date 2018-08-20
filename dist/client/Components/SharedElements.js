"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
exports.StyledButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 1rem 1rem;\n  width: 100px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size:15px;\n  color:#FFFFFF;\n  padding: 10px;\n  font-weight: 600;\n  box-shadow: 0 0 2px 0 rgba(0,0,0,.12), 0 1px 2px 0 rgba(0,0,0,.24);\n  border: none;\n  :disabled {\n    opacity: 0.5;\n    background: #777 !important;\n\n"], ["\n  margin: 1rem 1rem;\n  width: 100px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size:15px;\n  color:#FFFFFF;\n  padding: 10px;\n  font-weight: 600;\n  box-shadow: 0 0 2px 0 rgba(0,0,0,.12), 0 1px 2px 0 rgba(0,0,0,.24);\n  border: none;\n  :disabled {\n    opacity: 0.5;\n    background: #777 !important;\n\n"])));
exports.FlexRow = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  "], ["\n  display: flex;\n  flex-direction: row;\n  "])));
exports.FlexColumn = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  "], ["\n  display: flex;\n  flex-direction: column;\n  "])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=SharedElements.js.map