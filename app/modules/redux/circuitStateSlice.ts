import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IRace} from "../../interfaces/race";

export interface IAppStateSlice {
    races: Array<IRace> | [];
}

const initialState: IAppStateSlice = {
    races: []
};

const RaceStateSlice = createSlice({
    name: "RaceState",
    initialState,
    reducers: {
        _setRace(state, action: PayloadAction<Array<IRace>>) {
            state.races = action.payload;
        }
    }
});

export const RaceStateActions = RaceStateSlice.actions;
export default RaceStateSlice.reducer;
