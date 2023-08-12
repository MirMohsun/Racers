import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IDrivers} from "../../interfaces/drivers";

export interface IAppStateSlice {
    drivers: Array<IDrivers> | [];
    currentDriver: IDrivers | {};
}

const initialState: IAppStateSlice = {
    drivers: [],
    currentDriver: {}
};

const DriversStateSlice = createSlice({
    name: "DriversState",
    initialState,
    reducers: {
        _setDrivers(state, action: PayloadAction<Array<IDrivers>>) {
            state.drivers = state.drivers.concat(action.payload);
        },
        _setCurrentDriver(state, action: PayloadAction<IDrivers>) {
            state.currentDriver = action.payload;
        }
    }
});

export const DriversStateActions = DriversStateSlice.actions;
export default DriversStateSlice.reducer;
