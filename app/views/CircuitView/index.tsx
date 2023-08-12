import React, {FC, useMemo} from "react";
import {StatusBar, View, Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {getStyle} from "./styles";
import {WebView} from "react-native-webview";
import {hideHeaderScript} from "../../services/helpers";
import {MainHeader} from "../../components/mainHeader";

interface Props {
    route: {
        params: {url: any};
    };
}

export const CircuitView: FC<Props> = ({route}) => {
    const {url} = route.params;
    const styles = useMemo(() => getStyle(), []);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"transparent"} />
            <SafeAreaView>
                <MainHeader title={`Circuit`} />
                <View style={styles.webViewContainer}>
                    <WebView
                        source={{
                            uri: url
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
};
