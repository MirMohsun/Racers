import React, {FC, useEffect, useRef} from "react";
import {
    createNavigationContainerRef,
    NavigationContainer
} from "@react-navigation/native";
import {StackHome} from "./stackNavigator";
import {useAppSelector} from "../../services/customHooks/useAppSelector";
import {GlobalModal, GlobalModalRefProps} from "../../components/globalModal";

const navigationRef = createNavigationContainerRef<any>();

export function navigateTo(name: string, params?: any) {
    navigationRef.isReady() && navigationRef.navigate(name, params);
}

export function navigateBack() {
    navigationRef.isReady() && navigationRef.goBack();
}

export const RootNavigation: FC = () => {
    const {errorMessage} = useAppSelector(state => state.AppStateActions);
    const globalModalRef = useRef<GlobalModalRefProps>(null);

    useEffect(() => {
        if (
            errorMessage &&
            errorMessage != "Not found" &&
            globalModalRef?.current
        ) {
            globalModalRef?.current?.onOpenPicker();
        }
    }, [errorMessage]);

    return (
        <NavigationContainer ref={navigationRef}>
            <GlobalModal ref={globalModalRef} {...{errorMessage}} />
            <StackHome />
        </NavigationContainer>
    );
};
