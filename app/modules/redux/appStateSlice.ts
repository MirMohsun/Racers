import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IAppStateSlice {
    errorMessage: string;
}

const initialState: IAppStateSlice = {
    errorMessage: ""
};

const AppStateSlice = createSlice({
    name: "AppState",
    initialState,
    reducers: {
        _setError(state, action: PayloadAction<string>) {
            state.errorMessage = action.payload;
        }
    }
});

export const AppStateActions = AppStateSlice.actions;
export default AppStateSlice.reducer;
