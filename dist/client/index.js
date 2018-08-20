"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var App_1 = require("./Components/App");
var react_hot_loader_1 = require("react-hot-loader");
var react_dom_1 = require("react-dom");
require("./index.scss");
react_dom_1.render(React.createElement(react_hot_loader_1.AppContainer, null,
    React.createElement(App_1.default, null)), document.getElementById('root'));
if (module.hot) {
    module.hot.accept('./component/App', function () {
        var App = require('./components/App').default; // tslint:disable-line
        react_dom_1.render(React.createElement(react_hot_loader_1.AppContainer, null,
            React.createElement(App, null)), document.getElementById('app'));
    });
}
//# sourceMappingURL=index.js.map