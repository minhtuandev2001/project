import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, StatusBar, Dimensions } from 'react-native'

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');
export default function App() {
    const [dimension, setDimension] = useState({ window, screen }); // object literal
    useEffect(() => {
        const dims = Dimensions.addEventListener("change", ({ window, screen }) => {
            setDimension({ window, screen });
        });
        return () => {
            dims?.remove(); // nếu sự kiênj xảy ra thì sau đó mới xóa nha
        };
    }, []);
    return (
        <View style={styles.container}>
            <Text style={{ color: 'tomato' }}>WINDOW</Text>
            <StatusBar backgroundColor="tomato"></StatusBar>
            {Object.entries(dimension.window).map(([key, value], index) =>
                <Text key={key} >{key} - {value}</Text>
            )}
            <Text style={{ color: 'tomato' }}>SCREEN</Text>
            {Object.entries(dimension.screen).map(([key, value], index) =>
                <Text key={key} >{key} - {value}</Text>
            )}
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