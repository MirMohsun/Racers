import {StyleSheet} from "react-native";

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1
        },
        itemContainer: {
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 8,
            marginVertical: 8,
            paddingHorizontal: 8
        },
        listContainer: {
            flexDirection: "column",
            marginTop: 10,
            marginHorizontal: 8
        },
        headerContainer: {
            width: "75%",
            height: 50,
            borderRadius: 24,
            borderWidth: 2,
            borderColor: "red",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center"
        },
        headerTitle: {
            fontSize: 20,
            fontWeight: "600",
            lineHeight: 24,
            letterSpacing: 0,
            textAlign: "left"
        }
    });
    return styles;
};
