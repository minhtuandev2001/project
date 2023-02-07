import { Text, StyleSheet, View, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Statusbar(props) { 
    var iconStatusBar = props.icon;
    var ava = 'macdinh';
    // console.log(ava);
    return (
        <View style={styles.statusbar}>
            <Image source={require('../../ImageAvatar/'+ava+'.png')} style={styles.imageStatusBar} />
            <Text style={styles.textStatusBar}>{props.name}</Text>
            <Ionicons name={iconStatusBar} size={27} style={styles.iconStatusBar} color='tomato' />
        </View>
    )
}

const styles = StyleSheet.create({
    statusbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
    },
    imageStatusBar: {
        width: 28,
        height: 28,
        borderRadius: 28 / 2,
    },
    iconStatusBar: {
        fontWeight: '900',
    },
    textStatusBar: {
        fontSize: 18,
        fontWeight: '700',
    }
})