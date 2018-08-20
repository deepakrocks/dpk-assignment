"use strict";
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
var react_redux_1 = require("react-redux");
var react_router_1 = require("react-router");
var connected_react_router_1 = require("connected-react-router");
var react_hot_loader_1 = require("react-hot-loader");
var AppointmentContainers_1 = require("../containers/AppointmentContainers");
var ConfigureStore_1 = require("../store/ConfigureStore");
var store = ConfigureStore_1.default();
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(react_redux_1.Provider, { store: store },
            React.createElement(connected_react_router_1.ConnectedRouter, { history: ConfigureStore_1.history },
                React.createElement(react_router_1.Switch, null,
                    React.createElement(react_router_1.Route, { exact: true, path: "/", component: AppointmentContainers_1.default })))));
    };
    return App;
}(React.Component));
exports.default = react_hot_loader_1.hot(module)(App);
//# sourceMappingURL=App.js.map