import { Animated, Easing, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useSyncExternalStore } from 'react'

export default function App() {
    const marginLeftValue = useRef(new Animated.Value(0)).current;
    const handler = () => {
        Animated.loop(
            Animated.timing(marginLeftValue, {
                toValue: 1,
                useNativeDriver: false,
                duration: 1200,
                easing: Easing.linear,
                delay: 0,
            })
        ).start();
    }
    return (
        <View style={styles.container}>
            <View style={styles.loader}>
                <Animated.View style={[styles.progress, {
                    marginLeft: marginLeftValue.interpolate({
                        inputRange: [0, 0.8, 1],
                        outputRange: [-90, 90, 90],
                        extrapolate: "clamp"
                    })
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
        width: 90,
        height: 100,
        flexDirection: "row",
        // backgroundColor: "green",
        justifyContent: "space-between",
        overflow: "hidden",
    },
    progress: {
        width: 90,
        height: 6,
        backgroundColor: "tomato",
        zIndex: 1,
    },
})