// animation decay , dung làm quăng ném hợp hơn
import React, { useEffect, useRef } from 'react'
import { Animated, Easing, StyleSheet, Text, View } from 'react-native'

export default function App() {
    const posValue = useRef(new Animated.Value(10)).current;
    const posValue2 = useRef(new Animated.Value(30)).current;
    useEffect(() => {
        Animated.sequence([
            Animated.timing(posValue, {
                toValue: 250,
                duration: 3000,
                delay: 0,
                easing: Easing.bounce,
                useNativeDriver: false,
            }),
            Animated.spring(posValue2, {
                toValue: 150,
                speed: 12,
                bounciness: 8,
                useNativeDriver: false,
            })]
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
                marginTop: posValue2,
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