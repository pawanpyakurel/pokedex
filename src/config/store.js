import { createStore, applyMiddleware, compose } from "redux";

import CreateSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import rootReducer from "../redux/reducer";
import rootSagas from "../sagas";

//creating middleware
const sagaMidedleware = CreateSagaMiddleware();
var middleware;

middleware = [sagaMidedleware];

if(process.env.NODE_ENV === 'development'){
  middleware.push(logger)
}

const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["pokemons"],
    stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let middleWares = [applyMiddleware(...middleware)]

if (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__)
  middleWares.push(window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(
    persistedReducer,
    {},
    compose(
        ...middleWares
    )
);

if( process.env.NODE_ENV !== 'development' )
    console.log = message => {}

const persistor = persistStore(store);

//run the saga
sagaMidedleware.run(rootSagas);
export { store, persistor };




