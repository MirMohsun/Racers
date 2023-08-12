import React, {FC} from "react";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import {ROUTES} from "./routes";
import {HomeView} from "../../views/HomeView";
import {RacerView} from "../../views/RacerView";
import {RaceTableView} from "../../views/RaceTable";
import {CircuitView} from "../../views/CircuitView";

const Stack = createStackNavigator();

const navigationOptions = () => {
    const screenOptions = {
        headerShown: false,
        gestureEnabled: false,
        ...TransitionPresets.ScaleFromCenterAndroid
    };
    return screenOptions;
};

export const StackHome: FC = () => {
    return (
        <Stack.Navigator
            initialRouteName={ROUTES.Home}
            screenOptions={navigationOptions}>
            <Stack.Screen name={ROUTES.Home} component={HomeView} />
            <Stack.Screen name={ROUTES.Racer} component={RacerView} />
            <Stack.Screen name={ROUTES.RaceTable} component={RaceTableView} />
            <Stack.Screen name={ROUTES.CircuitInfo} component={CircuitView} />
        </Stack.Navigator>
    );
};
