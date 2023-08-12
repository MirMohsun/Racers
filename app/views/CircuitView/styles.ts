import {StyleSheet} from "react-native";

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1
        },
        title: {
            fontSize: 20,
            fontWeight: "600",
            lineHeight: 24,
            letterSpacing: 0,
            textAlign: "left"
        },
        headerContainer: {
            width: "95%",
            height: 50,
            borderRadius: 24,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center"
        },
        webViewContainer: {
            width: "100%",
            height: "100%"
        }
    });
    return styles;
};
