import {takeEvery, put, call, select} from "redux-saga/effects";
import {SagaActionTypes} from "../SagaActionTypes";
import {IAxios} from "../../../services/axios";
import {getRacerTable} from "./actions";
import {IDrivers} from "../../../interfaces/drivers";
import {AppStateActions} from "../../redux/appStateSlice";
import {LINKS} from "../../../config";
import {DriversStateActions} from "../../redux/driversStateSlice";

export function* workerGetRacers({payload}: ReturnType<typeof getRacerTable>) {
    try {
        type result =
            | IResult
            | {
                  error: string;
                  message: string;
              };
        const {limit, offset} = payload;
        const res: result = yield call(IAxios.get, {
            url: `${LINKS.getRacers}?limit=${limit}&offset=${offset}`,
            sender: "workerGetRacers"
        }) as any;
        if ("MRData" in res) {
            yield put(
                DriversStateActions._setDrivers(res.MRData.DriverTable.Drivers)
            );
        } else if (res.error) {
            yield put(AppStateActions._setError(res.error));
        }
    } catch (error) {
        console.error(`workerGetRacers: ${error}`);
    }
}

export function* watchRacers() {
    yield takeEvery(SagaActionTypes.GET_RACER_TABLE, workerGetRacers);
}

export interface IResult {
    MRData: {
        xmlns: string;
        series: string;
        url: string;
        limit: string;
        offset: string;
        total: string;
        DriverTable: {
            Drivers: Array<IDrivers>;
        };
    };
}
