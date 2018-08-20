"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var react_router_redux_1 = require("react-router-redux");
var Reducers_1 = require("./Reducers");
exports.default = redux_1.combineReducers({
    sampleReducer: Reducers_1.default,
    routing: react_router_redux_1.routerReducer,
});
//# sourceMappingURL=index.js.map