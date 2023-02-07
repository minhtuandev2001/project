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
                    <Text style={styles.titleInput}>Name :</Text>
                    <Animated.View style={[styles.lineInputVertical,
                    {
                        width: inputValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [inputTextValue !== "" ? windowWidth - 100 : 0, windowWidth - 100],
                            extrapolate: "clamp"
                        })
                    }
                    ]}></Animated.View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Animated.View style={[styles.lineInputHorizontal,
                        {
                            height: inputValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [inputTextValue !== "" ? 43 : 0, 43],
                                extrapolate: "clamp"
                            })
                        }
                        ]}></Animated.View>
                        <TextInput
                            onFocus={() => handlerActive(true)}
                            onBlur={() => handlerActive(false)}
                            onChangeText={(text) => setInputTextValue(text)}
                            style={styles.textInput}
                            placeholder='enter name'
                        ></TextInput>
                        <Animated.View style={[styles.lineInputHorizontal,
                        {
                            height: inputValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [inputTextValue !== "" ? 43 : 0, 43],
                                extrapolate: "clamp"
                            })
                        }
                        ]}></Animated.View>
                    </View>
                </View>
                <Animated.View style={[styles.lineInputVertical,
                {
                    width: inputValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [inputTextValue !== "" ? windowWidth - 100 : 0, windowWidth - 100],
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
        width: windowWidth - 103.1,
        paddingLeft: 5,
    },
    boxInput: {
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lineInputVertical: {
        height: 1.5,
        backgroundColor: "tomato",
    },
    lineInputHorizontal: {
        width: 1.5,
        height: 43,
        backgroundColor: "tomato",
    },
    titleInput: {
        color: "tomato",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        alignSelf: "flex-start",
    }
})