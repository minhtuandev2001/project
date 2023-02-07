import { Text, StyleSheet, View, SafeAreaView, TextInput, ScrollView, StatusBar, TouchableOpacity, Image, Modal, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useEffect } from 'react'
import Statusbars from '../components/home/Statusbar';
import CircleInfo from '../components/home/CircleInfo';
import CircleInfoList from '../components/category/CircleInfoList'
import tuan from '../assets/tuan.jpg';
import { Ionicons } from '@expo/vector-icons';
import firebase, { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

export default function Home({ navigation, route }) {
    const { id, name, email, password, status, avatar, listUser } = route.params;
    const [flatListUser, setFlatListUser] = useState(false);
    // console.log('chao');
    // console.log('id ' + JSON.stringify(id));
    // console.log('name ' + JSON.stringify(name));
    // console.log('email ' + JSON.stringify(email));
    // console.log('password ' + JSON.stringify(password));
    // console.log('status ' + JSON.stringify(status));
    // console.log('avatar ' + JSON.stringify(avatar));
    // console.log('data ' + JSON.stringify(listUser));
    const [statusPeople, setStatusPeople] = useState(true);
    return (
        <>
            <SafeAreaView style={{ backgroundColor: '#ffffff' }}>
                <StatusBar />
                <View style={styles.container}>
                    <Statusbars name='Home' icon='create-outline' nameUser={name} avatar={avatar} ></Statusbars>
                    {/* start Component Search */}
                    <View style={styles.containerSearch}>
                        <Ionicons name='search-outline' style={styles.iconSearch} />
                        <TextInput placeholder="Search" style={styles.TextSearch} onFocus={() => setFlatListUser(true)} />
                        <Ionicons name='ios-close-circle' style={styles.iconCloseFlatList} onPress={() => setFlatListUser(false)} />
                    </View>
                    {/* end Component Search */}
                    {/* ẩn hiện modal tìm kiếm bạn bè */}
                    {/* start FlastList bạn bè tìm được */}
                    {(flatListUser) &&
                        <View activeOpacity={1} style={styles.boxFlatList} onPress={Keyboard.dismiss}>
                            <View style={styles.UserNewSearch}>
                                <Text style={styles.TextUserNewSearch}>NỘI DUNG MỚI TÌM KIẾM</Text>
                                <ScrollView
                                    horizontal={true}
                                    showsVerticalScrollIndicator={false}
                                    showsHorizontalScrollIndicator={false}
                                    style={{height: 130}}
                                >
                                    <CircleInfo></CircleInfo>
                                </ScrollView>
                                <Text style={styles.TextUserNewSearch}>Gợi ý</Text>
                                <CircleInfoList data={listUser}></CircleInfoList>
                            </View>
                        </View>
                    }
                    {/* end modal */}
                    <ScrollView>
                        <ScrollView
                            horizontal={true}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                        >
                            <CircleInfo></CircleInfo>
                        </ScrollView>
                        {/* start Component BlockMessage */}

                        <TouchableOpacity style={styles.block}
                            onPress={() => {
                                navigation.navigate('Chat');
                                setStatusPeople(!status);
                            }}
                        >
                            <Image source={{ uri: 'https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg' }} style={styles.blockLeft} />
                            <View style={styles.status}></View>
                            <View style={styles.blockCenter}>
                                <Text style={styles.blockTitle}>Minh Tuan</Text>
                                <View style={styles.message}>
                                    <Text style={styles.messInfo} numberOfLines={1} ellipsizeMode='tail' >Huy: efggfeuygugafyefawgheuifhaihfiug</Text>
                                    <Text style={styles.messInfo}>13:30</Text>
                                </View>
                            </View>
                            <View style={styles.blockRight}>
                                <Ionicons name='ios-notifications-off' size={18} color='#B1B1B2' style={{ transform: [{ scaleX: -1 }] }} />
                                {(statusPeople) && <View style={styles.blockStatusRead}></View>}
                            </View>
                        </TouchableOpacity>
                        {/* end Component BlockMessage */}
                    </ScrollView>
                    {/* START Bottom tabs */}
                    <View style={styles.BottomTabContainer}>
                        <TouchableOpacity style={styles.BottomTabItem}
                            onPress={() => (
                                navigation.navigate('Home')
                            )}
                        >
                            <Ionicons name='home' size={24} color="tomato" />
                            <Text style={styles.BottomTabTitle}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.BottomTabItem}
                            onPress={() => (
                                navigation.navigate('Phonebook')
                            )}
                        >
                            <Ionicons name='ios-book-outline' size={24} color="tomato" />
                            <Text style={styles.BottomTabTitle}>PhoneBook</Text>
                        </TouchableOpacity>
                    </View>
                    {/* End Bottom tabs */}
                </View>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        height: '100%',
    },
    block: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 15,
    },
    blockLeft: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 17,
        position: 'relative',
    },
    status: {
        position: 'absolute',
        bottom: 15,
        left: 60,
        width: 14,
        height: 14,
        backgroundColor: '#19EB15',
        borderRadius: 14 / 2,
        borderWidth: 2,
        borderColor: '#FFFFFF',
    },
    blockCenter: {
        flex: 1,
        paddingTop: 8,
        // backgroundColor: 'green',
    },
    blockTitle: {
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 7,
    },
    message: {
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        paddingRight: 35
    },
    messInfo: {
        color: '#B1B1B2',
        fontSize: 13,
    },
    blockRight: {
        width: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingRight: 5
    },
    blockStatusRead: {
        width: 13,
        height: 13,
        backgroundColor: '#0C65F8',
        borderRadius: 13 / 2,
    },
    // bottom tabs 
    BottomTabContainer: {
        width: '100%',
        height: 48.5,
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255,0.99)',
    },
    BottomTabItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    BottomTabTitle: {
        fontSize: 11,
        fontWeight: '500',
        color: 'tomato'
    },
    //end Bottom tabs */
    // start search style 
    containerSearch: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    TextSearch: {
        backgroundColor: '#E0E1E4',
        width: '100%',
        padding: 3,
        height: 33,
        borderRadius: 10,
        paddingLeft: 27,
        position: 'relative',
    },
    iconSearch: {
        position: 'absolute',
        zIndex: 1,
        paddingLeft: 20,
        paddingTop: 3,
        fontSize: 20,
        color: '#A1A2A4'
    },
    iconCloseFlatList: {
        position: 'absolute',
        right: 17,
        fontSize: 20,
        color: '#A1A2A4'
    },
    // end search style 
    // start flatList style  
    boxFlatList: {
        backgroundColor: '#FFFFFF',
        height: '86%',
        width: '100%',
        position: 'absolute',
        top: 92,
        zIndex: 1,
    },
    TextUserNewSearch: {
        fontSize: 12,
        fontWeight: '500',
        paddingLeft: 10,
        paddingRight: 10,
        // paddingTop: 10,
        color: '#A1A2A4',
    }
    // end flatList style  

})