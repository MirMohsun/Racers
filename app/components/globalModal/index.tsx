import React, {forwardRef, useImperativeHandle, useMemo, useState} from "react";
import {Modal, Text, TouchableOpacity, View} from "react-native";
import {useDispatch} from "react-redux";
import {getStyle} from "./styles";
import {useAppDispatch} from "../../services/customHooks/useAppDispatch";
import {useBackHandler} from "@react-native-community/hooks";

interface GlobalModalProps {
    errorMessage: string;
}

export type GlobalModalRefProps = {
    onOpenPicker: () => void;
    onClosePicker: () => void;
};

export const GlobalModal = forwardRef<GlobalModalRefProps, GlobalModalProps>(
    ({errorMessage}, ref) => {
        const styles = useMemo(() => getStyle(), []);
        const dispatch = useDispatch();
        const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);
        const {_setError} = useAppDispatch();

        const onBackPress = (): boolean => {
            setIsPickerOpen(false);
            return true;
        };

        const onOpenPicker = () => {
            setIsPickerOpen(true);
        };

        const onClosePicker = () => {
            setIsPickerOpen(false);
            dispatch(_setError(""));
        };

        useImperativeHandle(
            ref,
            () => ({
                onOpenPicker,
                onClosePicker
            }),
            [onOpenPicker, onClosePicker]
        );

        useBackHandler(() => {
            onBackPress();
            return false;
        });

        return (
            <Modal
                animationType="fade"
                transparent
                onRequestClose={onClosePicker}
                visible={isPickerOpen}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.modalBack}
                    onPress={onClosePicker}>
                    <View style={styles.modalWrapper}>
                        <Text numberOfLines={20} style={styles.warningText}>
                            Something went wrong
                        </Text>
                        <View style={styles.mainButtonWrapper}>
                            <TouchableOpacity style={styles.mainButtonCancel}>
                                <Text style={styles.cancelText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        );
    }
);
