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
    const animatePos = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.spring(animatePos, {
            toValue: 120,
            friction: 4, // mặc định 7
            tension: 120, // mặc định 40
            // speed: 30,  // mặc định 12
            // bounciness: 4, // mặc định 8
            useNativeDriver: false,
        }).start();
    }, [animatePos]);
    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={
                {
                    width: 100,
                    height: 100,
                    borderRadius: 100 / 2,
                    marginLeft: 10,
                    marginTop: 10,
                    backgroundColor: 'green',
                    transform: [
                        {
                            translateX : animatePos,
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
