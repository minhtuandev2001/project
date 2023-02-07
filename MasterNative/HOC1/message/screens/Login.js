import {
    ActivityIndicator, StyleSheet, Text, View,
    SafeAreaView, ImageBackground, StatusBar, TextInput,
    TouchableOpacity, TouchableWithoutFeedback, Keyboard
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import firebase, { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

export default function Login({ navigation }) {
    const [visibleLoading, setVisibleLoading] = useState(['light-content', true]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);
    const [error, setError] = useState({
        email: '',
        password: '',
    })

    useEffect(() => {
        const firebaseConfig = {
            apiKey: "AIzaSyBqD1nzf3oqE8MyEmdQ7mm6rmDD9TpQglg",
            authDomain: "skyteam-chat.firebaseapp.com",
            projectId: "skyteam-chat",
            storageBucket: "skyteam-chat.appspot.com",
            messagingSenderId: "753445584708",
            appId: "1:753445584708:web:1627245d844fa60df86111",
            measurementId: "G-NW91ZNCGSQ"
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
            // console.log(array);
        });
    }
    function kiemTraTaiKhoan(email, password) {
        var arrayErrors = {
            email: '',
            password: '',
        }
        if (email == '' || password == '') {
            if (email == '') {
                arrayErrors.email = '* cannot be left blank';
            }
            if (password == '') {
                arrayErrors.password = '* cannot be left blank';
            }
            setError(arrayErrors);
        } else {
            if (data !== []) {
                var idParams = '';
                var nameParams = '';
                var emailParams = '';
                var passwordParams = '';
                var statusParams = '';
                var avatarParams = '';
                var emailDatabase = false;  // kiểm tra tài khoản tồn tại không , mặc định không
                for (var value of data) {
                    if (value.email == email && value.password == password) {
                        idParams = value.id;
                        nameParams = value.name;
                        emailParams = value.email;
                        passwordParams = value.password;
                        statusParams = value.status;
                        avatarParams = value.avatar;
                        emailDatabase = true;
                        break;
                    }
                };
                if (emailDatabase == true) {
                    navigation.navigate('Home', {
                        id: idParams,
                        name: nameParams,
                        email: emailParams,
                        password: passwordParams,
                        status: statusParams,
                        avatar: avatarParams,
                        listUser: data,
                    });
                } else {
                    alert('login fail');
                }
            } else {
                arrayErrors.email = '* Account does not exist';
                setError(arrayErrors);
            }
        }
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <View style={styles.container}>
                {(visibleLoading[1]) && <View style={styles.loading}>
                    <Text style={styles.loadingText}>SKY TEAM</Text>
                    <ActivityIndicator size='large' color='white' />
                </View>}
                <StatusBar barStyle={visibleLoading[0]}></StatusBar>
                <View style={styles.boxLogin}>
                    <Text style={styles.Title}>Log in</Text>
                    <>
                        <View style={styles.boxFrom}>
                            <View style={styles.groupText}>
                                <Text style={styles.label}>Email</Text>
                                <TextInput style={styles.textInput} placeholder='email..'
                                    onChangeText={(text) => setEmail(text.trim())}
                                    value={email}
                                />
                                <Text style={styles.textError}>{error.email}</Text>
                            </View>
                        </View>
                    </>
                    <>
                        <View style={styles.boxFrom}>
                            <View style={styles.groupText}>
                                <Text style={styles.label}>Password</Text>
                                <TextInput style={styles.textInput} placeholder='password...'
                                    onChangeText={(text) => setPassword(text.trim())}
                                    value={password}
                                />
                                <Text style={styles.textError}>{error.password}</Text>
                            </View>
                        </View>
                    </>
                    <TouchableOpacity style={styles.buttonLogin} onPress={() => kiemTraTaiKhoan(email, password)}>
                        <Text style={styles.textButton}>Sing In</Text>
                    </TouchableOpacity>
                    <View style={styles.Or}>
                        <Text style={styles.textOne}></Text>
                        <Text style={styles.textTwo}>Or with</Text>
                        <Text style={styles.textThree}></Text>
                    </View>
                    <View style={styles.iconLink}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Ionicons name='logo-facebook' size={30} color="tomato" />
                            <Text style={styles.textIconLink}>Facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Ionicons name='ios-mail' size={30} color="tomato" />
                            <Text style={styles.textIconLink}>Gmail</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.register} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.textRegister}>Do not have an account ? Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback >
    )
}
const styles = StyleSheet.create({
    loading: {
        backgroundColor: 'tomato',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: 1,
    },
    loadingText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 15,
        textShadowColor: '#FFFFFF',
        textShadowOffset: { width: 2.5, height: 1.7 },
        textShadowRadius: 1,
    },
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    boxLogin: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        height: '80%',
        width: '90%',
        alignItems: 'center',
        padding: 10,
    },
    Title: {
        fontSize: 35,
        color: 'tomato',
        fontWeight: 'bold',
        textShadowColor: 'tomato',
        textShadowOffset: { width: 3, height: 2.5 },
        textShadowRadius: 1,
    },
    boxFrom: {
        width: '100%',
        marginTop: 30,
    },
    label: {
        color: 'tomato',
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'tomato',
        marginTop: 10,
        padding: 10,
    },
    textError: {
        fontSize: 10,
        color: 'tomato',
        fontStyle: 'italic',
    },
    buttonLogin: {
        backgroundColor: 'tomato',
        marginTop: 30,
        width: '100%',
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: '#FFFFFF',
        fontWeight: '500'
    },
    Or: {
        width: '100%',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textOne: {
        width: '35%',
        height: 2,
        backgroundColor: 'tomato',
    },
    textTwo: {
        color: 'tomato',
        margin: 5,
        textShadowColor: 'tomato',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
    textThree: {
        width: '35%',
        height: 2,
        backgroundColor: 'tomato',
    },
    iconLink: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    textIconLink: {
        fontSize: 10,
        color: 'tomato',
    },
    register: {
        width: '100%',
        marginTop: 20,
    },
    textRegister: {
        fontStyle: 'italic',
        color: 'tomato',
        fontSize: 13,
    },
})