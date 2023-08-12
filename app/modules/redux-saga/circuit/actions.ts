import {SagaActionTypes} from "../SagaActionTypes";

export const getCircuitTable = (payload: {racerName: string}) => {
    return {type: SagaActionTypes.GET_CIRCUIT_TABLE, payload};
};
