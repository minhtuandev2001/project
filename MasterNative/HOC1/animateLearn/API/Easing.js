// thay đổi các kiểu chạy animation trong easing : Easing 
import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, StatusBar, Dimensions, Animated, Easing } from 'react-native'
export default function App() {
    const posValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(posValue, {
            toValue: 150,
            easing: Easing.bounce,
            duration: 2000,
            useNativeDriver: false,
        }).start();
        return () => {
        };
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