import {configureStore, combineReducers, AnyAction} from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import createSagaMiddleware from "redux-saga";
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootSaga from "../redux-saga/root-saga";
import DriversStateSlice from "./driversStateSlice";
import RaceStateSlice from "./circuitStateSlice";
import AppStateActions from "./appStateSlice";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["DriversStateSlice", "AppStateActions"]
};

const appReducer = combineReducers({
    DriversStateSlice,
    RaceStateSlice,
    AppStateActions
});

export const resetState = () => ({
    type: "RESET_STATE"
});

const rootReducer = (state: any | undefined, action: AnyAction) => {
    if (action.type === "RESET_STATE") {
        state = undefined;
    }
    return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [sagaMiddleware]
});

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};

export type RootStateType = ReturnType<
    typeof store.getState | typeof persistor.getState
>;
export type AppDispatch = typeof store.dispatch;
