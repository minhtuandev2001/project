// animation spring , animation dạng lò xo
import React, { useEffect, useRef } from 'react'
import { Animated, Easing, StyleSheet, Text, View } from 'react-native'

export default function App() {
    const posValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.loop(
            Animated.spring(posValue, {
                toValue: 250,
                speed: 10,
                bounciness: 12,
                useNativeDriver: false,
            })
        ).start();
        return () => { };
    }, []);
    return (
        <View style={styles.container}>
            <Animated.View style={{
                width: 100,
                height: 100,
                backgroundColor: "tomato",
                borderRadius: 10,
                marginTop: 100,
                marginLeft: posValue
            }}></Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})