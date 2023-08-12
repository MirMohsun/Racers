import {useNavigation} from "@react-navigation/native";
import React, {FC, useMemo, memo} from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {ArrowIcon} from "../../assets/svg/arrowIcon";
import {getStyle} from "./styles";

interface Props {
    title: React.ReactNode;
    isMain?: boolean;
    isInverted?: boolean;
    isBackHidden?: boolean;
    rightButton?: React.ReactNode;
    leftButton?: React.ReactNode;
    onBackPress?: () => void;
    onRightPress?: () => void;
}

export const MainHeader: FC<Props> = memo(
    ({
        title,
        isBackHidden,
        isInverted,
        isMain,
        rightButton,
        onBackPress,
        onRightPress,
        leftButton
    }: Props) => {
        const navigation = useNavigation();
        const styles = useMemo(() => getStyle(), []);

        const backHandler = () => {
            onBackPress ? onBackPress() : navigation.goBack();
        };

        return (
            <View style={styles.container}>
                {!isMain && !isBackHidden ? (
                    <TouchableOpacity
                        onPress={backHandler}
                        style={{...styles.backButton, left: 0}}>
                        {leftButton ? leftButton : <ArrowIcon color={"gray"} />}
                    </TouchableOpacity>
                ) : null}
                <Text
                    numberOfLines={1}
                    style={{
                        ...styles.title
                    }}>
                    {!isMain ? title : "meet"}
                    <Text style={isMain && {}}>{!isMain ? "" : "app"}</Text>
                </Text>
                {rightButton ? (
                    <TouchableOpacity
                        disabled={!onRightPress}
                        onPress={onRightPress}
                        style={{...styles.backButton, right: 0}}>
                        {rightButton}
                    </TouchableOpacity>
                ) : null}
            </View>
        );
    }
);
