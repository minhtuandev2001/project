import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tuan from '../assets/tuan.jpg'
import { Ionicons } from '@expo/vector-icons';

export default function AddFriend() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonFunction}>
                <TouchableOpacity><Text style={styles.textGoBack}>Xong</Text></TouchableOpacity>
                <TouchableOpacity><Ionicons name='person-add' size={20} color='tomato' /></TouchableOpacity>
            </View>
            <View style={styles.ImageBox}>
                <Image style={styles.imageAvatar} source={tuan} />
                <View style={styles.statusUser}></View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        // justifyContent: 'center',
        backgroundColor: 'red',
    },
    ImageBox: {
        height: '35%',
        width: '100%',
        backgroundColor: 'green',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonFunction: {
        position: 'relative',
        backgroundColor: 'yellow',
        // width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
    },
    textGoBack: {
        fontSize: 16,
        fontWeight: '500',
        color: 'tomato',
    },
    imageAvatar: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        position: 'relative',
    },
    statusUser: {
        position: 'absolute',
        right: 155,

        width: 14,
        height: 14,
        backgroundColor: '#3FF921',
        borderRadius: 14 / 2,
        borderWidth: 2,
        borderColor: '#FFFFFF',
    }
})