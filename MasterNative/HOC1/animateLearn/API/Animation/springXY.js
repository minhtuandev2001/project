// animation decay , dung làm quăng ném hợp hơn
import React, { useEffect, useRef } from 'react'
import { Animated, Easing, StyleSheet, Text, View } from 'react-native'

export default function App() {
    const posValue = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    useEffect(() => {
        Animated.loop(
            Animated.spring(posValue, {
                toValue: { x: 150, y: 150 },
                speed: 10,
                bounciness: 12,
                useNativeDriver: false,
            })
        ).start()
            ;
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