import { Animated, Easing, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'

export default function App() {
    const translateYValue = useRef(new Animated.Value(0)).current;
    const handler = () => {
        Animated.loop(
            Animated.timing(translateYValue, {
                toValue: 1,
                useNativeDriver: true,
                duration: 600,
                easing: Easing.ease,
                delay: 0,
            })
        ).start();
    }
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.dot, {
                transform: [
                    {
                        translateX: translateYValue.interpolate({
                            inputRange: [0, 0.9, 1],
                            outputRange: [0, 49, 50],
                            extrapolate: "clamp"
                        })
                    }
                ]
            },
            {
                opacity: translateYValue.interpolate({
                    inputRange: [0, 0.1, 0.9, 1],
                    outputRange: [0, 1, 0.9, 0],
                    extrapolate: "clamp"
                })
            }
            ]}>
            </Animated.View>
            <TouchableOpacity style={{ marginTop: 100 }}
                onPress={() => handler()}
            >
                <Text style={{
                    backgroundColor: "tomato",
                    paddingHorizontal: 15,
                    paddingVertical: 7,
                    fontWeight: "bold",
                    color: "white",
                    borderRadius: 5,
                }}>press</Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        backgroundColor: "tomato",
        zIndex: 1,
        marginLeft: -50,
    },
})