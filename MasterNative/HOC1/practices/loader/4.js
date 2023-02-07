import { Animated, Easing, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'

export default function App() {
    const rotateValue = useRef(new Animated.Value(0)).current;
    const handler = () => {
        Animated.loop(
            Animated.timing(rotateValue, {
                toValue: 1,
                useNativeDriver: true,
                duration: 1750,
                easing: Easing.linear,
                delay: 0,
            })
        ).start();
    }
    return (
        <View style={styles.container}>
            <View style={styles.loader}>
                <Animated.View style={[styles.semicircle, styles.borderSolid, {
                    transform: [
                        {
                            rotate: rotateValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0deg', '360deg'],
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
        borderWidth: 6,
        borderTopColor: "#FD5E18",
        borderRightColor: "#FB9060",
        borderBottomColor: "#FB9060",
        borderLeftColor: "#FB9060",
    },
    semicircle: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        position: "absolute",
        top: 0,
    },
})