import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Button,
    Text,
    TextInput,
    View,
    ScrollView,
    FlatList,
    Dimensions,
    SafeAreaView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView
} from 'react-native';
import firebase, { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

const WIDTH = Dimensions.get('window').width;

const Adduser = () => {
    const [id, setId] = useState(null);
    const [name, setName] = useState(null);
    const [address, setAddress] = useState(null);
    const [data, setData] = useState([]);
    useEffect(() => {
        const firebaseConfig = {
            apiKey: "AIzaSyDUDZrdmoz3SYXDuruO3F4iVl9BKWOoeQk",
            authDomain: "fir-rn-18749.firebaseapp.com",
            projectId: "fir-rn-18749",
            storageBucket: "fir-rn-18749.appspot.com",
            messagingSenderId: "27720899545",
            appId: "1:27720899545:web:4809ebb75c7744ff7c97c8",
            measurementId: "G-RKZJ1TMP4Q"
        };
        // firebase.initializeApp(firebaseConfig);
        if (!firebase.apps.length) {
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
            // const analytics = getAnalytics(app);
            console.log('ket noi thanh cong');
            getDatabase();
        }
    }, []);
    function addDatabase(id, name, address) {
        firebase.database().ref('users/').push().set({
            Name: name,
            address: address
        }, function (error) {
            if (error) {
                alert('loi nang');
            } else {
                alert('thanh cong');
            }
        })
    }
    function updateDatabase(id, name, address) {
        firebase.database().ref('users/' + id).set({
            Name: name,
            address: address
        }, function (error) {
            if (error) {
                alert('loi nang');
            } else {
                alert('thanh cong');
            }
        })
    }
    function deleteDatabase(id) {
        firebase.database().ref('users/' + id).remove();
        alert('xoa thanh cong');
    }
    function getDatabase() {
        firebase.database().ref('users/').on('value', function (snapshot) {
            let array = [];
            snapshot.forEach(function (item) {
                var childData = item.val();
                array.push({
                    id: item.key,
                    name: childData.Name,
                    address: childData.address
                });
            });
            setData(array);
            console.log(array);
        });
    }
    return (
        <TouchableOpacity onPress={Keyboard.dismiss} style={styles.vip}>
            <ScrollView>
                <Text>User</Text>
                <TextInput style={styles.nhap} name='Id' placeholder='id' onChangeText={(text) => setId(text)} value={id} />
                <TextInput style={styles.nhap} name='name' placeholder='name' onChangeText={(text) => setName(text)} value={name} />
                <TextInput style={styles.nhap} name='address' placeholder='address' onChangeText={(text) => setAddress(text)} value={address} />
                <TouchableOpacity onPress={() => { addDatabase(id, name, address) }}>
                    <View style={styles.btn}>
                        <Text>Them</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                // onPress={() => { deleteDatabase('-Mxo1RvwJYwSlL9_Kwx8')}}
                >
                    <View style={styles.btn}>
                        <Text>xoa</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    updateDatabase('-Mxo1onkt7bnJ5AHwfvd', name, address);
                }}>
                    <View style={styles.btn}>
                        <Text>sua</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            {/* <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <View>
                        <Text>name: {item.name}</Text>
                        <Text>address: {item.address}</Text>
                    </View>
                )}
                keyExtractor={({ item }, index) => { index.toString() }}
            /> */}
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
    },
    nhap: {
        width: 300,
        borderWidth: 2,
        borderColor: 'tomato',
        margin: 10,
        padding: 10,
    },
    btn: {
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 15,
        paddingRight: 15,
        margin: 10,
        backgroundColor: 'cyan'
    },
    vip: {
        backgroundColor: 'red'
    }
})
export default Adduser;
