"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var history_1 = require("history");
var redux_1 = require("redux");
var Reducers_1 = require("../reducers/Reducers");
var connected_react_router_1 = require("connected-react-router");
var redux_thunk_1 = require("redux-thunk");
exports.history = history_1.createBrowserHistory();
function configureStoreDev(initialState) {
    // add support for Redux dev tools
    var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
    var store = redux_1.createStore(connected_react_router_1.connectRouter(exports.history)(Reducers_1.default), initialState, composeEnhancers(redux_1.applyMiddleware(connected_react_router_1.routerMiddleware(exports.history), redux_thunk_1.default)));
    if (module.hot) {
        // tslint:disable-next-line
        module.hot.accept('../reducers', function () {
            var nextReducer = require('../reducers/index');
            store.replaceReducer(nextReducer);
        });
    }
    return store;
}
var configureStore = configureStoreDev;
exports.default = configureStore;
//# sourceMappingURL=ConfigureStore.js.map