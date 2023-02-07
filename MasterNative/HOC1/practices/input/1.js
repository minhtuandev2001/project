import { Animated, Dimensions, Easing, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'

const windowWidth = Dimensions.get('window').width;
export default function App() {
    const inputValue = useRef(new Animated.Value(0)).current;
    const [inputTextValue, setInputTextValue] = useState("");
    const handlerActive = (permission) => {
        if (permission) {
            Animated.timing(inputValue, {
                toValue: 1,
                useNativeDriver: false,
                duration: 400,
                easing: Easing.linear,
                delay: 0,
            }
            ).start();
        } else {
            Animated.timing(inputValue, {
                toValue: 0,
                useNativeDriver: false,
                duration: 400,
                easing: Easing.linear,
                delay: 0,
            }
            ).start();
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.boxInput}>
                <View>
                    <Animated.Text style={[styles.titleInput,
                    {
                        position: "absolute",
                        top: inputValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [inputTextValue !== "" ? -15 : 10, -15]
                        }),
                        transform: [
                            {
                                scale: inputValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 1.1]
                                }),
                            }
                        ],
                    }
                    ]}>Enter name :</Animated.Text>
                    <TextInput
                        onFocus={() => handlerActive(true)}
                        onBlur={() => handlerActive(false)}
                        onChangeText={(text) => setInputTextValue(text)}
                        style={styles.textInput}
                    // placeholder='enter name'
                    ></TextInput>
                </View>
                <Animated.View style={[styles.lineInput,
                {
                    width: inputValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, windowWidth - 100],
                        extrapolate: "clamp"
                    })
                }
                ]}></Animated.View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        paddingVertical: 7,
        // borderWidth: 1,
    },
    boxInput: {
        width: windowWidth,
        paddingHorizontal: 70,
    },
    lineInput: {
        height: 1.5,
        backgroundColor: "tomato",
    },
    titleInput: {
        color: "tomato",
        fontSize: 16,
        fontWeight: "bold",
    }
})