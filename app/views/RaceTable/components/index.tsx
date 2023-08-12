import React, {FC, useMemo, memo} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {getStyle} from "../styles";
import {useNavigation} from "@react-navigation/native";
import {ROUTES} from "../../../modules/navigation/routes";
import {StackNavigationProp} from "@react-navigation/stack";
import {IRace} from "../../../interfaces/race";

interface Props {
    item: IRace;
}

export const ButtonComponent: FC<Props> = memo(({item}: Props) => {
    const styles = useMemo(() => getStyle(), []);
    const navigation: StackNavigationProp<any> = useNavigation();

    const handleOnRacePress = () => {
        navigation.navigate(ROUTES.CircuitInfo, {url: item.url});
    };

    const handleOnCircuitPress = () => {
        navigation.navigate(ROUTES.CircuitInfo, {url: item.Circuit.url});
    };

    return (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={handleOnRacePress}>
            <View style={{width: "50%"}}>
                <View style={{flexDirection: "row"}}>
                    <Text>Circuit name:</Text>
                    <Text style={{marginLeft: 8}}>
                        {item.Circuit.circuitName}
                    </Text>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text>Circuit location:</Text>
                    <Text style={{marginLeft: 8}}>
                        {item.Circuit.Location.country}
                    </Text>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text>Grid count:</Text>
                    <Text style={{marginLeft: 8}}>{item.Results[0].grid}</Text>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text>Laps count:</Text>
                    <Text style={{marginLeft: 8}}>{item.Results[0].laps}</Text>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text>Race number:</Text>
                    <Text style={{marginLeft: 8}}>
                        {item.Results[0].number}
                    </Text>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text>Racer points:</Text>
                    <Text style={{marginLeft: 8}}>
                        {item.Results[0].points}
                    </Text>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text>Racer position:</Text>
                    <Text style={{marginLeft: 8}}>
                        {item.Results[0].position}
                    </Text>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text>Racer status:</Text>
                    <Text style={{marginLeft: 8}}>
                        {item.Results[0].status}
                    </Text>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text>Race name:</Text>
                    <Text style={{marginLeft: 8}}>{item.raceName}</Text>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text>Race date:</Text>
                    <Text style={{marginLeft: 8}}>{item.date}</Text>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text>Round count:</Text>
                    <Text style={{marginLeft: 8}}>{item.round}</Text>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text>Race url:</Text>
                    <Text style={{marginLeft: 8}}>{item.url}</Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={handleOnCircuitPress}
                style={{
                    width: "50%",
                    height: 50,
                    backgroundColor: "blue",
                    borderRadius: 25,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text style={{color: "white", textAlign: "center"}}>
                    Press to see more info about circuit
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
});
