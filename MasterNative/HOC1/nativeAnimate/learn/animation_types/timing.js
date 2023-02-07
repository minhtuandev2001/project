import React, { useEffect, useRef } from 'react';
import {
    Alert,
    Animated,
    Easing,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const App = () => {

    // const animatePos = useRef(new Animated.Value(1)).current;
    const animatePos = useRef(new Animated.ValueXY(
        {
            x: 10,
            y: 10
        }
    )).current;

    useEffect(() => {
        Animated.timing(animatePos, {
            toValue: {
                x: 100,
                y: 100
            },
            duration: 2000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
        }).start();
    }, [animatePos]);
    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={
                {
                    width: 100,
                    height: 100,
                    marginLeft: animatePos.x,
                    marginTop: animatePos.y,
                    backgroundColor: 'red',
                }
            }>
            </Animated.View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },
});

export default App;
