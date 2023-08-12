import {StyleSheet, Dimensions} from "react-native";
import {COLORS} from "../../config";

export const getStyle = () => {
    const {height} = Dimensions.get("window");
    const styles = StyleSheet.create({
        modalBack: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 16,
            backgroundColor: "rgba(0,0,0,0.5)"
        },
        modalWrapper: {
            width: "100%",
            paddingTop: 12,
            minHeight: 100,
            maxHeight: height - 200,
            paddingBottom: 16,
            marginHorizontal: 16,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center"
        },

        menuItem: {
            flexDirection: "row",
            alignItems: "center",
            borderBottomColor: "#DDDDDD",
            borderBottomWidth: 1,
            paddingVertical: 10,
            paddingHorizontal: 26
        },
        warningText: {
            fontSize: 14,
            lineHeight: 20,
            color: COLORS.red,
            textAlign: "center",
            marginHorizontal: 16,
            marginVertical: 16
        },
        mainButtonWrapper: {
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around"
        },
        mainButton: {
            width: 200
        },
        mainButtonCancel: {
            width: "40%",
            borderWidth: 1,
            borderColor: COLORS.teal,
            backgroundColor: COLORS.white
        },
        cancelText: {
            color: COLORS.teal
        },
        mainButtonSign: {
            width: "40%"
        }
    });
    return styles;
};
