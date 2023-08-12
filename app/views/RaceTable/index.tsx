import React, {FC, useMemo, memo, useEffect} from "react";
import {StatusBar, View, Text, FlatList} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useDispatch} from "react-redux";
import {getStyle} from "../RaceTable/styles";
import {ButtonComponent} from "./components";
import {MainHeader} from "../../components/mainHeader";
import {getCircuitTable} from "../../modules/redux-saga/circuit/actions";
import {useAppSelector} from "../../services/customHooks/useAppSelector";

interface Props {}

export const RaceTableView: FC<Props> = memo(({}: Props) => {
    const styles = useMemo(() => getStyle(), []);
    const {races} = useAppSelector(state => state.RaceStateSlice);
    const dispatch = useDispatch();
    const racerName = useAppSelector(
        state => state.DriversStateSlice.currentDriver.driverId
    );

    useEffect(() => {
        dispatch(getCircuitTable({racerName: racerName}));
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={"transparent"} />
            <SafeAreaView>
                <MainHeader title="Circuit Table" />
                <FlatList
                    data={races}
                    overScrollMode="never"
                    showsVerticalScrollIndicator={false}
                    style={styles.listContainer}
                    horizontal={false}
                    renderItem={({item}: any) => {
                        return <ButtonComponent item={item} />;
                    }}
                />
            </SafeAreaView>
        </View>
    );
});
