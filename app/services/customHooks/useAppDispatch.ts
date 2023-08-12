import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {AppStateActions} from "../../modules/redux/appStateSlice";
import {DriversStateActions} from "../../modules/redux/driversStateSlice";

const allActions = {
    ...AppStateActions,
    ...DriversStateActions
};

export const useAppDispatch = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActions, dispatch);
};
