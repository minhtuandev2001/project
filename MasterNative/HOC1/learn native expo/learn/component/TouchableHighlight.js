import React from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';

const touchableHighlight = () => {
    return (
        <TouchableHighlight
            activeOpacity={0.9}
            onPress={() => console.log("nhan")} // phải có sự kiện onPress mới khởi động
            underlayColor="tomato"
            onShowUnderlay={() => console.log("show underlay")}
            onHideUnderlay={() => console.log("hide underlay")}
        >
            <Text style={styles.button}>press now</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: "pink",
        color: "white",
        borderRadius: 10,
    }
})

export default touchableHighlight;
