import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const touchableOpacity = () => {
    return (
        <TouchableOpacity
            activeOpacity={0.5} // default 0.2
            onPress={() => console.log("nhan")}
        >
            <Text style={styles.button}>press now</Text>
        </TouchableOpacity>
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

export default touchableOpacity;
