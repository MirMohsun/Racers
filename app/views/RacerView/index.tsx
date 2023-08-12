import React, {FC, useMemo, memo, useEffect} from "react";
import {StatusBar, View, Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {getStyle} from "./styles";
import {WebView} from "react-native-webview";
import {hideHeaderScript} from "../../services/helpers";
import {useAppSelector} from "../../services/customHooks/useAppSelector";
import {MainHeader} from "../../components/mainHeader";
import {useNavigation} from "@react-navigation/native";
import {ROUTES} from "../../modules/navigation/routes";
import {ArrowIcon} from "../../assets/svg/arrowIcon";

interface Props {}

export const RacerView: FC<Props> = memo(({}: Props) => {
    const styles = useMemo(() => getStyle(), []);
    const {currentDriver} = useAppSelector(state => state.DriversStateSlice);
    const navigation = useNavigation();

    const handleOnForwardArrow = () => {
        navigation.navigate(ROUTES.RaceTable);
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"transparent"} />
            <SafeAreaView>
                <MainHeader
                    title={`Racer ${currentDriver.givenName} ${currentDriver.familyName}`}
                    onRightPress={handleOnForwardArrow}
                    rightButton={<ArrowIcon color="gray" isReflected />}
                />
                <View style={styles.webViewContainer}>
                    <WebView
                        source={{
                            uri: currentDriver.url
                        }}
                        injectedJavaScript={hideHeaderScript}
                        style={{flex: 1}}
                        onError={syntheticEvent => {
                            const {nativeEvent} = syntheticEvent;
                            console.warn("WebView error:", nativeEvent);
                        }}
                    />
                </View>
            </SafeAreaView>
        </View>
    );
});
