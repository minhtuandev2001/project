// animation timing với Animated.Value
import React, { useEffect, useRef } from 'react'
import { Animated, Easing, StyleSheet, Text, View } from 'react-native'

export default function App() {
    const posValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(posValue, {
            toValue: 250,
            duration: 2000,
            easing: Easing.bounce,
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