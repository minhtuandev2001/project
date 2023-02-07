import { Platform, StyleSheet, Text, TouchableOpacity, Vibration, View } from 'react-native'
import React from 'react'

export default function App() {
    const vibrationValue = 400;

    const PATTERN = [
        1 * vibrationValue,
        2 * vibrationValue,
        3 * vibrationValue,
    ]
    return (
        <View style={styles.container}>
            {Platform.OS === 'android' &&
                <TouchableOpacity onPress={() => Vibration.vibrate(vibrationValue, false)}>
                    <Text style={[{ backgroundColor: "tomato" }, styles.button]}>Vibration</Text>
                </TouchableOpacity>
            }
            <TouchableOpacity onPress={() => Vibration.vibrate(PATTERN)}>
                <Text style={[{ backgroundColor: "green" }, styles.button]}>Vibration</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Vibration.vibrate(PATTERN, true)}>
                <Text style={[{ backgroundColor: "red" }, styles.button]}>Vibration</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Vibration.cancel()}>
                <Text style={[{ backgroundColor: "blue" }, styles.button]}>Vibration</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        color: "white",
        fontWeight: "bold",
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 5,
        marginVertical: 10,
    },
})