import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
    const scale1 = useRef(new Animated.Value(1)).current;
    const scale2 = useRef(new Animated.Value(1)).current;
    const scale3 = useRef(new Animated.Value(1)).current;
    const scale4 = useRef(new Animated.Value(1)).current;
    const scale5 = useRef(new Animated.Value(1)).current;
    const handler = () => {
        animateHandler();
    }
    const animateHandler = () => {
        Animated.loop(
            Animated.stagger(100, [
                Animated.sequence([
                    Animated.timing(scale1, {
                        toValue: 0,
                        useNativeDriver: false,
                        duration: 500,
                        easing: Easing.ease,
                        delay: 0,
                    }),
                    Animated.timing(scale1, {
                        toValue: 1,
                        useNativeDriver: false,
                        duration: 500,
                        easing: Easing.ease,
                        delay: 0,
                    }),]
                ),
                Animated.sequence([
                    Animated.timing(scale2, {
                        toValue: 0,
                        useNativeDriver: false,
                        duration: 500,
                        easing: Easing.ease,
                        delay: 0,
                    }),
                    Animated.timing(scale2, {
                        toValue: 1,
                        useNativeDriver: false,
                        duration: 500,
                        easing: Easing.ease,
                        delay: 0,
                    }),]
                ),
                Animated.sequence([
                    Animated.timing(scale3, {
                        toValue: 0,
                        useNativeDriver: false,
                        duration: 500,
                        easing: Easing.ease,
                        delay: 0,
                    }),
                    Animated.timing(scale3, {
                        toValue: 1,
                        useNativeDriver: false,
                        duration: 500,
                        easing: Easing.ease,
                        delay: 0,
                    }),]
                ),
                Animated.sequence([
                    Animated.timing(scale4, {
                        toValue: 0,
                        useNativeDriver: false,
                        duration: 500,
                        easing: Easing.ease,
                        delay: 0,
                    }),
                    Animated.timing(scale4, {
                        toValue: 1,
                        useNativeDriver: false,
                        duration: 500,
                        easing: Easing.ease,
                        delay: 0,
                    }),]
                ),
                Animated.sequence([
                    Animated.timing(scale5, {
                        toValue: 0,
                        useNativeDriver: false,
                        duration: 500,
                        easing: Easing.ease,
                        delay: 0,
                    }),
                    Animated.timing(scale5, {
                        toValue: 1,
                        useNativeDriver: false,
                        duration: 500,
                        easing: Easing.ease,
                        delay: 0,
                    }),]
                )
            ])
        ).start();
    }
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.loader}>
                <View>
                    <Animated.View style={[styles.box_loader, {
                        transform: [
                            {
                                scale: scale3
                            }
                        ]
                    }]}></Animated.View>
                    <Animated.View style={[styles.box_loader, {
                        transform: [
                            {
                                scale: scale2
                            }
                        ]
                    }]}></Animated.View>
                    <Animated.View style={[styles.box_loader, {
                        transform: [
                            {
                                scale: scale1
                            }
                        ]
                    }]}></Animated.View>
                </View>
                <View>
                    <Animated.View style={[styles.box_loader, {
                        transform: [
                            {
                                scale: scale4
                            }
                        ]
                    }]}></Animated.View>
                    <Animated.View style={[styles.box_loader, {
                        transform: [
                            {
                                scale: scale3
                            }
                        ]
                    }]}></Animated.View>
                    <Animated.View style={[styles.box_loader, {
                        transform: [
                            {
                                scale: scale2
                            }
                        ]
                    }]}></Animated.View>
                </View>
                <View>
                    <Animated.View style={[styles.box_loader, {
                        transform: [
                            {
                                scale: scale5
                            }
                        ]
                    }]}></Animated.View>
                    <Animated.View style={[styles.box_loader, {
                        transform: [
                            {
                                scale: scale4
                            }
                        ]
                    }]}></Animated.View>
                    <Animated.View style={[styles.box_loader, {
                        transform: [
                            {
                                scale: scale3
                            }
                        ]
                    }]}></Animated.View>
                </View>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loader: {
        flexDirection: 'row',

    },
    box_loader: {
        width: 30,
        height: 30,
        backgroundColor: "tomato",
        margin: 0.2,
    }
});
