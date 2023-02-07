import { Text, StyleSheet, View, SafeAreaView, TextInput, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Statusbars from '../components/home/Statusbar';
import CircleInfoList from '../components/category/CircleInfoList';
import BottomTab from '../components/BottomTab';
import { Ionicons } from '@expo/vector-icons';
import firebase, { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

export default function Phonebook({ navigation, route }) {

    const [data, setData] = useState([]);
    useEffect(() => {
        getDatabase();
    }, []);
    function getDatabase() {
        firebase.database().ref('users/').on('value', function (snapshot) {
            let array = [];
            snapshot.forEach(function (item) {
                var childData = item.val();
                array.push({
                    id: item.key,
                    name: childData.name,
                    email: childData.email,
                    password: childData.password,
                    status: childData.status,
                    avatar: childData.avatar,
                });
            });
            setData(array);
            console.log(data);
        });
    };
    return (
        <SafeAreaView style={{ backgroundColor: '#ffffff' }}>
            <StatusBar
                backgroundColor="#61dafb"
            />
            <View style={styles.container}>
                <Statusbars name='Phonebook' icon='rocket-outline'></Statusbars>
                {/*start danh sach toan bo users */}
                <CircleInfoList data={data} navigation={navigation} />
                {/*start danh sach toan bo users */}
                {/* START Bottom tabs */}
                <View style={styles.BottomTabContainer}>
                    <TouchableOpacity style={styles.BottomTabItem}
                        onPress={() => (
                            navigation.navigate('Home')
                        )}
                    >
                        <Ionicons name='home-outline' size={24} color="tomato" />
                        <Text style={styles.BottomTabTitle}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.BottomTabItem}
                        onPress={() => (
                            console.log('hello'),
                            navigation.navigate('Phonebook')
                        )}
                    >
                        <Ionicons name='ios-book' size={24} color="tomato" />
                        <Text style={styles.BottomTabTitle}>PhoneBook</Text>
                    </TouchableOpacity>
                </View>
                {/* End Bottom tabs */}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        height: '100%',
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
    }
})