import { Animated, Easing, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useSyncExternalStore } from 'react'

export default function App() {
    const translateYValue = useRef(new Animated.Value(0)).current;
    const handler = () => {
        Animated.loop(
            Animated.timing(translateYValue, {
                toValue: 1,
                useNativeDriver: false,
                duration: 900,
                easing: Easing.ease,
                delay: 0,
            })
        ).start();
    }
    return (
        <View style={styles.container}>
            <View style={styles.loader}>
                <Animated.View style={[styles.progress,
                {
                    transform: [
                        {
                            translateY: translateYValue.interpolate({
                                inputRange: [0, 0.7, 1],
                                outputRange: [-100, 40, 40]
                            })
                        }
                    ]
                },
                {
                    opacity: translateYValue.interpolate({
                        inputRange: [0, 0.6, 0.7, 1],
                        outputRange: [0, 0.9, 1, 0]
                    })
                }
                ]}></Animated.View>
                <Animated.View style={[styles.progress,
                {
                    transform: [
                        {
                            translateY: translateYValue.interpolate({
                                inputRange: [0, 0.7, 1],
                                outputRange: [-120, 60, 60]
                            })
                        }
                    ]
                },
                {
                    opacity: translateYValue.interpolate({
                        inputRange: [0, 0.6, 0.7, 1],
                        outputRange: [0, 0.9, 1, 0]
                    })
                }
                ]}></Animated.View>
            </View>
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
    loader: {
        width: 55,
        height: 100,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    progress: {
        width: 5,
        height: 40,
        backgroundColor: "tomato",
        zIndex: 1,
    },
})