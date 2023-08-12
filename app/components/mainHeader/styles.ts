import {StyleSheet} from "react-native";

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            width: "90%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center"
        },
        backButton: {
            height: 40,
            width: 40,
            position: "absolute",
            zIndex: 1,
            borderRadius: 20,
            paddingHorizontal: 16,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "gray"
        },
        title: {
            fontSize: 20,
            lineHeight: 24,
            marginHorizontal: 50,
            color: "gray"
        }
    });
    return styles;
};
