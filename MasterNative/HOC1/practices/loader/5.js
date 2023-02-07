import { Animated, Easing, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'

export default function App() {
    const rotateValue = useRef(new Animated.Value(0)).current;
    const handler = () => {
        Animated.loop(
            Animated.timing(rotateValue, {
                toValue: 1,
                useNativeDriver: true,
                duration: 2750,
                easing: Easing.linear,
                delay: 0,
            })
        ).start();
    }
    return (
        <View style={styles.container}>
            <View style={styles.loader}>
                <Animated.View style={[styles.borderSolid, styles.semicircle1, {
                    transform: [
                        {
                            rotate: rotateValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0deg', '360deg'],
                                extrapolate: "clamp"
                            })
                        }
                    ]
                }]}>
                </Animated.View>
                <Animated.View style={[styles.borderSolid, styles.semicircle2, {
                    transform: [
                        {
                            rotate: rotateValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0deg', '720deg'],
                                extrapolate: "clamp"
                            })
                        }
                    ]
                }]}></Animated.View>
                <Animated.View style={[styles.borderSolid, styles.semicircle3, {
                    transform: [
                        {
                            rotate: rotateValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0deg', '1080deg'],
                                extrapolate: "clamp"
                            })
                        }
                    ]
                }]}></Animated.View>
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
        borderWidth: 3,
        borderTopColor: "#FD5E18",
        borderRightColor: "#FFFFFF",
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
        width: 65,
        height: 65,
        borderRadius: 65 / 2,
        position: "absolute",
    },
    semicircle3: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        position: "absolute",
    },
})