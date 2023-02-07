import { Alert, BackHandler, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

export default function App() {
    const toast = () => {
        Alert.alert(
            "BACK HOME",
            "ban muon thoat khoi day",
            [
                {
                    text: "cancel",
                    onPress: () => null,
                    style: "cancel",
                },
                {
                    text: "Ok",
                    onPress: () => BackHandler.exitApp(),
                }
            ]
        )
        return true // sẽ không có hành động quay lại nào được thực thi
    }
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", toast);
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", toast);
        };
    }, []);
    return (
        <View style={styles.container}>
            <Text>App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})