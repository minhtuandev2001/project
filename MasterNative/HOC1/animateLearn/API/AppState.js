import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, StatusBar, AppState } from 'react-native'

export default function App() {
    const appState = useRef(AppState.currentState);
    const [active, setActive] = useState(appState.current);
    useEffect(() => {
        const appStatus = AppState.addEventListener("change", appStateNext => {
            console.log('1', appStateNext);
            // để vào if để check xem có thay đổi ko, chỉ dành cho dev 
            if (appStateNext === "background") {
                appState.current = appStateNext;
                setActive(appState.current);
            }
            //  trên production thì cho 2 dòng sau chạy
            // appState.current = appStateNext;
            // setActive(appState.current);
        })
        return () => {
            appStatus.remove();
        };
    }, []);
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="tomato"></StatusBar>
            <Text>Trở về màn hình chính sau đó vào lại app</Text>
            <Text>App in status : {active}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})