import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Press = () => {
    return (
        <TouchableOpacity
            onPress={() => console.log('Press')}
            onLongPress={() => console.log('LongPress')}
            onPressIn={() => console.log('onPressIn')}
            onPressOut={() => console.log('onPressOut')}
        >
            <Text style={styles.onPress}>button</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    onPress: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        color: '#FFFFFF',
        backgroundColor: 'tomato',
        borderRadius: 10,
    },

})

export default Press;
