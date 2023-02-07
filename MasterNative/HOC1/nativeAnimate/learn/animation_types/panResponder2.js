import React, { useRef } from 'react';
import {
    Animated,
    Dimensions,
    Easing,
    PanResponder,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

const App = () => {
    const windowWidth = Dimensions.get('window').width;
    const scaleAnimate = useRef(new Animated.Value(1)).current;
    // const scaleAnimateHandler = () => {
    //     Animated.timing(
    //         scaleAnimate,
    //         {
    //             toValue: 1.2,
    //             duration: 1000,
    //             easing: Easing.bounce,
    //             useNativeDriver: true,
    //         }
    //     ).start();
    // }
    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(PanResponder.create(
        {
            // thuộc tính yêu cầu thành thành phần responder
            onStartShouldSetPanResponder: (e, gestureState) => {
                // có thể làm gí đó 
                return true;
            },
            onStartShouldSetPanResponderCapture: (e, gestureState) => {
                // là gì đó 
                return true;
            },
            onMoveShouldSetPanResponder: (e, gestureState) => {
                // là gì đó 
                return true;
            },
            onMoveShouldSetPanResponderCapture: (e, gestureState) => {
                // làm gì đó 
                return true;
            },
            onPanResponderGrant: (e, gestureState) => {
                Animated.timing(
                    scaleAnimate,
                    {
                        toValue: 1.2,
                        duration: 500,
                        easing: Easing.bounce,
                        useNativeDriver: true,
                    }
                ).start();
                pan.setOffset(
                    {
                        x: gestureState.x0 - 50,
                        y: gestureState.y0 - 50
                    }
                )
            },
            onPanResponderMove: Animated.event(
                [
                    null,
                    {
                        dx: pan.x,
                        dy: pan.y
                    }
                ],
                {
                    useNativeDriver: false
                }
            ),
            onPanResponderRelease: (e, gestureState) => {
                Animated.timing(
                    scaleAnimate,
                    {
                        toValue: 1,
                        duration: 500,
                        easing: Easing.bounce,
                        useNativeDriver: true,
                    }
                ).start();
                // console.log(gestureState);
                // let nua_man_hinh = windowWidth / 2;
                // if (gestureState.moveX > nua_man_hinh) {
                //     // pan.setValue({
                //     //     x: 0,
                //     //     y: gestureState.dy
                //     // })
                //     pan.setOffset(
                //         {
                //             x: windowWidth - gestureState.moveX - 50,
                //             y: gestureState.moveY
                //         }
                //     )
                // }
                pan.extractOffset();
            }
        }
    )).current;
    return (
        <SafeAreaView style={styles.container}>
            <Animated.View {...panResponder.panHandlers} style={
                [
                    styles.box,
                    // {
                    //     marginLeft: pan.x,
                    //     marginTop: pan.y
                    // },
                    {
                        transform: [
                            {
                                translateX: pan.x
                            },
                            {
                                translateY: pan.y
                            },
                            {
                                scale: scaleAnimate
                            }
                        ]
                    }
                ]}
            ></Animated.View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: 'tomato',
    },
});

export default App;
