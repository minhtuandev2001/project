import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, Text } from 'react-native';

const statusbar = () => {
    const [hidden, setHidden] = useState(false);
    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                barStyle="light-content"
                hidden={hidden}
                // android
                backgroundColor="tomato"
                // ios
                showHideTransition="fade" // fade slide none
            ></StatusBar>
            <TouchableOpacity onPress={() => setHidden(!hidden)}>
                <Text style={styles.button}>hidden</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        paddingVertical: 7,
        paddingHorizontal: 13,
        backgroundColor: 'pink',
        borderRadius: 9,
        color: 'white',
    },
})

export default statusbar;
