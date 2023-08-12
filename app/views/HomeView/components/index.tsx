import React, {FC, useMemo, memo} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {getStyle} from "../styles";
import {useAppDispatch} from "../../../services/customHooks/useAppDispatch";
import {IDrivers} from "../../../interfaces/drivers";
import {useNavigation} from "@react-navigation/native";
import {ROUTES} from "../../../modules/navigation/routes";
import {StackNavigationProp} from "@react-navigation/stack";

interface Props {
    name: string;
    birthday: string;
    familyName: string;
    nationality: string;
    url: string;
    item: IDrivers;
}

export const ButtonComponent: FC<Props> = memo(
    ({name, birthday, familyName, nationality, url, item}: Props) => {
        const styles = useMemo(() => getStyle(), []);
        const {_setCurrentDriver} = useAppDispatch();
        const navigation: StackNavigationProp<any> = useNavigation();

        const handleOnDriverPress = () => {
            _setCurrentDriver(item);
            navigation.navigate(ROUTES.Racer);
        };

        return (
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={handleOnDriverPress}>
                <View style={{flexDirection: "row"}}>
                    <Text>Racer name:</Text>
                    <Text style={{marginLeft: 8}}>{name}</Text>
                    <Text style={{marginLeft: 8}}>{familyName}</Text>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text>Racer birthday:</Text>
                    <Text style={{marginLeft: 8}}>{birthday}</Text>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text>Nationality:</Text>
                    <Text style={{marginLeft: 8}}>{nationality}</Text>
                </View>
            </TouchableOpacity>
        );
    }
);
