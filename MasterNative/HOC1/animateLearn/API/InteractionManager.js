// InteractionManager lên lịch trình việc chạy các code js sau khi tương tác/animation hoàn thành 
import React, { useEffect, useRef } from 'react'
import { View, StyleSheet, Animated, Easing, Alert, InteractionManager } from 'react-native'
export default function App() {
    const posValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(posValue, {
            toValue: 150,
            easing: Easing.bounce,
            duration: 2000,
            useNativeDriver: false,
        }).start();
        return () => {
        };
    }, []);
    const Square = ({ vai }) => {
        useEffect(() => {
            InteractionManager.setDeadline(5);
            const InteractionMana = InteractionManager.runAfterInteractions(() => vai());
            return () => {
                InteractionMana.cancel();
            };
        }, []);
        return (
            <Animated.View style={{
                width: 100,
                height: 100,
                backgroundColor: "tomato",
                borderRadius: 10,
                marginTop: 100,
                marginLeft: posValue
            }}
            ></Animated.View>
        )
    }
    return (
        <View style={styles.container}>
            <Square
                vai={() => Alert.alert("message", "hien ra", [
                    {
                        text: "Ok",
                        onPress: console.log("ok"),
                    }
                ])}
            ></Square>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})