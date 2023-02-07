import { Animated, Easing, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'

export default function App() {
    const rotateValue1 = useRef(new Animated.Value(0)).current;
    const handler = () => {
        Animated.loop(
            Animated.timing(rotateValue1, {
                toValue: 1,
                useNativeDriver: false,
                duration: 1750,
                easing: Easing.linear,
                delay: 0,
            }),
        ).start();
    }
    return (
        <View style={styles.container}>
            <View style={styles.loader}>
                <Animated.View style={[styles.semicircle1, styles.borderSolid, {
                    transform: [
                        {
                            rotate: rotateValue1.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0deg', '360deg'],
                                extrapolate: "clamp"
                            })
                        }
                    ]
                }]}></Animated.View>
                <Animated.View style={[styles.semicircle2, styles.borderSolid, {
                    transform: [
                        {
                            rotate: rotateValue1.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0deg', '-360deg'],
                                extrapolate: "clamp"
                            })
                        }
                    ]
                }]}></Animated.View>
                <Animated.View style={[styles.semicircle3, styles.borderSolid, {
                    transform: [
                        {
                            rotate: rotateValue1.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['90deg', '450deg'],
                                extrapolate: "clamp"
                            })
                        }
                    ]
                }]}>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loader: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    borderSolid: {
        borderWidth: 5,
        borderTopColor: "tomato",
        borderRightColor: "tomato",
        borderBottomColor: "#FFFFFF",
        borderLeftColor: "#FFFFFF",
    },
    semicircle1: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        position: "absolute",
        top: 0,
    },
    semicircle2: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        position: "absolute",
        top: 15,
    },
    semicircle3: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        position: "absolute",
    },
})