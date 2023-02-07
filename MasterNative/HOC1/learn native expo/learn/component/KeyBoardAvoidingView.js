import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput } from 'react-native';

const keyBoardAvoidingView = () => {
    return (
        <KeyboardAvoidingView style={styles.keyBoard} keyboardVertical={600}>
            <Text style={styles.labelText}>name</Text>
            <TextInput style={styles.text} />
            <Text style={styles.labelText}>email</Text>
            <TextInput style={styles.text} />
            <Text style={styles.labelText}>password</Text>
            <TextInput style={styles.text} />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    labelText: {
        marginBottom: 10,
        fontWeight: '500',
        color: "tomato",
    },
    text: {
        width: "90%",
        padding: 5,
        borderWidth: 1,
    },
    keyBoard: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default keyBoardAvoidingView;
