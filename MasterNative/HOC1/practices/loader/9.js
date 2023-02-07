import { Animated, Easing, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useSyncExternalStore } from 'react'

export default function App() {
    const translateYValue1 = useRef(new Animated.Value(0)).current;
    const handler = () => {
        Animated.loop(
            Animated.timing(translateYValue1, {
                toValue: 1,
                useNativeDriver: true,
                duration: 1300,
                easing: Easing.linear,
                delay: 0,
            })
        ).start();
    }
    return (
        <View style={styles.container}>
            <View style={styles.loader}>
                <Animated.View style={[styles.dot, {
                    transform: [
                        {
                            translateY: translateYValue1.interpolate({
                                inputRange: [0, 0.5, 0.6, 1],
                                outputRange: [0, 80, 70, 0],
                                extrapolate: "clamp"
                            })
                        }
                    ]
                }
                ]}>
                </Animated.View>
                <Animated.View style={[styles.dot, {
                    transform: [
                        {
                            translateY: translateYValue1.interpolate({
                                inputRange: [0, 0.5, 1],
                                outputRange: [0, -80, 0],
                                extrapolate: "clamp"
                            })
                        }
                    ]
                },
                {
                    alignSelf: "flex-end"
                }
                ]}>
                </Animated.View>
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
        width: 75,
        height: 100,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    dot: {
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        backgroundColor: "tomato",
        zIndex: 1,
    },
})