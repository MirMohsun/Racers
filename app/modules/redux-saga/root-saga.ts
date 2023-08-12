import {all, spawn} from "redux-saga/effects";
import {watchRacers} from "./racers";
import {watchCircuit} from "./circuit";

export default function* rootSaga() {
    try {
        yield all([spawn(watchRacers)]);
        yield all([spawn(watchCircuit)]);
    } catch (error) {
        console.error("rootSaga", error);
    }
}
