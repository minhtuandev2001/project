// InteractionManager lên lịch trình việc chạy các code js sau khi tương tác/animation hoàn thành 
import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet, Animated, Easing } from 'react-native'
export default function App() {
    const posValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(posValue, {
            toValue: 1,
            useNativeDriver: false,
            duration: 2000,
            easing: Easing.ease,
            delay: 0,
        }).start();
        return () => {

        };
    }, []);
    return (
        // chưa sửa được chổ này 
        <View style={styles.container}>
            <Animated.View style={{
                width: 100,
                height: 100,
                backgroundColor: "tomato",
                borderRadius: 10,
                marginTop: 100,
                marginLeft: 10,
                transform: [
                    {
                        translateX: posValue.interpolate(
                            {
                                inputRange: [0, 0.2, 0.5, 0.8, 1],
                                outputRange: [10, 50, 100, 40, 250],
                                extrapolate: "clamp",
                            }
                        )
                    },
                    {
                        scale: posValue.interpolate(
                            {
                                inputRange: [0, 0.2, 0.5, 0.8, 1],
                                outputRange: [0.8, 0.8, 1, 0.8, 1],
                                extrapolate: "clamp",
                            }
                        )
                    }
                ]
            }}></Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
    },
})