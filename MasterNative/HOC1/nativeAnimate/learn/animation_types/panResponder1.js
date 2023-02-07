import React, { useEffect, useRef, useState } from 'react';
import {
    Alert,
    Animated,
    Easing,
    PanResponder,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const App = () => {
    const textValue = useRef({ dx: 3 }).current;
    const [value, setValue] = useState(textValue.dx);
    useEffect(() => {

    }, [textValue]);
    const pan = useRef(PanResponder.create(
        {
            // thuộc tính yêu cầu thành thành phần phai hổi
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
                console.log("Grant" +gestureState.dx);
                textValue.dx = gestureState.dx;
                setValue(textValue.dx);
            },
            onPanResponderMove: (e, gestureState) => {
                textValue.dx = gestureState.dx;
                setValue(textValue.dx)
                console.log(textValue.dx);
            },
            onPanResponderRelease: (e, gestureState) => { // nhấc ngón tay lên
                console.log('thanh cong ' + gestureState.dx);
                console.log('thanh cong ' + textValue.dx);
            }
        }
    )).current;
    return (
        <SafeAreaView style={styles.container}>
            <View {...pan.panHandlers} style={styles.view}>
                <Text>{value}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
