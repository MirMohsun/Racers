import React, {FC, useMemo, memo, useEffect} from "react";
import {
    StatusBar,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useDispatch} from "react-redux";
import {getStyle} from "../RaceTable/styles";
import driversMock from "../../../mocks/driversMock.json";
import {ButtonComponent} from "./components";
import {MainHeader} from "../../components/mainHeader";
import {getRacerTable} from "../../modules/redux-saga/racers/actions";
import {useAppSelector} from "../../services/customHooks/useAppSelector";

interface Props {}

export const HomeView: FC<Props> = memo(({}: Props) => {
    const styles = useMemo(() => getStyle(), []);
    const dispatch = useDispatch();
    const {drivers} = useAppSelector(state => state.DriversStateSlice);

    useEffect(() => {
        dispatch(getRacerTable({limit: 10, offset: 0}));
    }, []);

    const loadMoreData = () => {
        dispatch(getRacerTable({limit: 10, offset: 10}));
    };

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={"transparent"} />
            <SafeAreaView>
                <MainHeader title="Racers Table" isBackHidden />
                <FlatList
                    data={drivers}
                    overScrollMode="never"
                    onEndReached={loadMoreData}
                    onEndReachedThreshold={2}
                    showsVerticalScrollIndicator={false}
                    style={styles.listContainer}
                    horizontal={false}
                    renderItem={({item}: any) => {
                        return (
                            <ButtonComponent
                                item={item}
                                name={item.givenName}
                                birthday={item.dateOfBirth}
                                familyName={item.familyName}
                                nationality={item.nationality}
                                url={item.url}
                            />
                        );
                    }}
                />
            </SafeAreaView>
        </View>
    );
});
