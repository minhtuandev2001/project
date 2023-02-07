import { Animated, Easing, PanResponder, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'

export default function App() {
    const panValue = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const scaleValue = useRef(new Animated.Value(1)).current;
    const pan = useRef(PanResponder.create({
        onStartShouldSetPanResponder: () => {
            Animated.timing(scaleValue, {
                toValue: 1.08,
                useNativeDriver: false,
                duration: 400,
                easing: Easing.bounce,
                delay: 0
            }).start();
            return true;
        },
        onPanResponderGrant: (event, gesture) => {
            panValue.setOffset({
                x: panValue.x._value,
                y: panValue.y._value
            });
        },
        onPanResponderMove: (event, gesture) => {
            panValue.setValue({
                x: gesture.dx,
                y: gesture.dy
            })
        },
        onPanResponderRelease: (event, gesture) => {
            panValue.flattenOffset();
        },
        onPanResponderEnd: (event, gesture) => {
            Animated.timing(scaleValue, {
                toValue: 1,
                useNativeDriver: false,
                duration: 400,
                easing: Easing.bounce,
                delay: 0
            }).start();
        }
    })).current;
    return (
        <View style={styles.container}>
            <Animated.View {...pan.panHandlers} style={[styles.box,
            {
                transform: [
                    {
                        translateX: panValue.x
                    },
                    {
                        translateY: panValue.y
                    },
                    {
                        scale: scaleValue
                    }
                ]
            }
            ]}></Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: "tomato",
        borderRadius: 10,
        margin: 10,
    },
})