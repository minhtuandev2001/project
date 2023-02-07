import { Animated, Easing, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'

export default function App() {
    const rotateValueY = useRef(new Animated.Value(0)).current;
    const handler = () => {
        Animated.loop(
            Animated.timing(rotateValueY, {
                toValue: 1,
                useNativeDriver: true,
                duration: 900,
                easing: Easing.linear,
                delay: 0,
            })
        ).start();
    }
    return (
        <View style={styles.container}>
            <View style={styles.loader}>
                <Animated.View style={[styles.plane_face, {
                    transform: [
                        {
                            rotateY: rotateValueY.interpolate({
                                inputRange: [0, 0.4, 1],
                                outputRange: ["0deg", "720deg", "900deg"],
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
    plane_face: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: "tomato"
    },
})