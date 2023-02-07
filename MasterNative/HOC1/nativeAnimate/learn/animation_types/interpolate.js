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
    const animateValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animateValue, {
            toValue: 1,
            easing: Easing.bounce,
            useNativeDriver: false,
        }).start();
    }, [animateValue]);
    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={
                {
                    width: 100,
                    height: 100,
                    borderRadius: 100 / 2,
                    marginLeft: 10,
                    marginTop: 10,
                    backgroundColor: 'tomato',
                    transform: [
                        {
                            translateX: animateValue.interpolate({
                                inputRange: [0, 0.2, 0.6, 0.8, 1],
                                outputRange: [0, 20, 70, 50, 100]
                            }),
                        },
                        {
                            scale: animateValue.interpolate({
                                inputRange: [0, 0.2, 0.6, 0.8, 1],
                                outputRange: [1, 0.6, 1, 1.5, 1]
                            })
                        }
                    ]
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
