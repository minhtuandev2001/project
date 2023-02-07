import { Text, StyleSheet, View, Image, TouchableOpacity, SectionList, FlatList } from 'react-native'
import React, { Component } from 'react'
import tuan from '../../assets/tuan.jpg';

export default function CircleInfoList(props, { navigation, route }) {
    console.log('chao');
    console.log(props);
    var arrayData = props.data;
    var navigation = props.navigation;
    console.log(arrayData);
    return (
        <FlatList
            data={arrayData}
            renderItem={({ item }) => (<TouchableOpacity style={styles.container} onPress={() => navigation.navigate('AddFriend')}>
                <Image source={tuan} style={styles.ImageInfo} />
                <View style={styles.status}></View>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>{item.name}</Text>
                </View>
            </TouchableOpacity>)}
        ></FlatList>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        marginTop: 2,
        marginBottom: 2,
    },
    ImageInfo: {
        width: 45,
        height: 45,
        borderRadius: 45 / 2,
        marginTop: 5,
        marginBottom: 5,
        position: 'relative',
    },
    status: {
        width: 13,
        height: 13,
        backgroundColor: '#19EB15',
        borderRadius: 13 / 2,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        position: 'absolute',
        bottom: 6,
        left: 45,
    },
    title: {
        marginLeft: 17,
        flex: 1,
        borderBottomWidth: 0.5,
        borderColor: '#D5D9E0',
        justifyContent: 'center',
    },
    textTitle: {
        fontSize: 17,
        fontWeight: '500',
    }
})