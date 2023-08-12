import {SagaActionTypes} from "../SagaActionTypes";

export const getRacerTable = (payload: {limit: number; offset: number}) => {
    return {type: SagaActionTypes.GET_RACER_TABLE, payload};
};
