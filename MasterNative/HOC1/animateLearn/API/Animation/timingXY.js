// animation timing Animated.ValueXY
import React, { useEffect, useRef } from 'react'
import { Animated, Easing, StyleSheet, Text, View } from 'react-native'

export default function App() {
    const posValue = useRef(new Animated.ValueXY(
        {
            x: 10,
            y: 10
        }
    )).current;
    useEffect(() => {
        Animated.timing(posValue, {
            toValue: { x: 300, y: 400 },
            duration: 2000,
            easing: Easing.bezier(.43, .07, .84, .37),
            // easing: Easing.bounce,
            useNativeDriver: false,
            delay: 1000
        }).start();
        return () => { };
    }, []);
    return (
        <View style={styles.container}>
            <Animated.View style={{
                width: 100,
                height: 100,
                backgroundColor: "tomato",
                borderRadius: 10,
                marginTop: posValue.y,
                marginLeft: posValue.x
            }}></Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})