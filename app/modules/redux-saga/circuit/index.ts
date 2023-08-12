import {takeEvery, put, call, select} from "redux-saga/effects";
import {SagaActionTypes} from "../SagaActionTypes";
import {IAxios} from "../../../services/axios";
import {IDrivers} from "../../../interfaces/drivers";
import {AppStateActions} from "../../redux/appStateSlice";
import {LINKS} from "../../../config";
import {DriversStateActions} from "../../redux/driversStateSlice";
import {getCircuitTable} from "./actions";
import {IRace} from "../../../interfaces/race";
import {RaceStateActions} from "../../redux/circuitStateSlice";

export function* workerGetCircuit({
    payload
}: ReturnType<typeof getCircuitTable>) {
    try {
        type result =
            | IResult
            | {
                  error: string;
                  message: string;
              };

        const {racerName} = payload;
        const res: result = yield call(IAxios.get, {
            url: `${LINKS.getCircuit}${racerName}/results.json`,
            sender: ""
        }) as any;
        if ("MRData" in res) {
            yield put(RaceStateActions._setRace(res.MRData.RaceTable.Races));
        } else if (res.error) {
            yield put(AppStateActions._setError(res.error));
        }
    } catch (error) {
        console.error(`workerGetCircuit: ${error}`);
    }
}

export function* watchCircuit() {
    yield takeEvery(SagaActionTypes.GET_CIRCUIT_TABLE, workerGetCircuit);
}

export interface IResult {
    MRData: {
        xmlns: string;
        series: string;
        url: string;
        limit: string;
        offset: string;
        total: string;
        RaceTable: {
            driverId: string;
            Races: Array<IRace>;
        };
    };
}
