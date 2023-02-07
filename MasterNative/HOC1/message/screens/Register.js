import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import firebase, { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

export default function Register({ navigation }) {
    const [id, setId] = useState('')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCF, setPasswordCF] = useState('');
    const [data, setData] = useState([]);
    const [error, setError] = useState({
        name: '',
        email: '',
        password: '',
    });
    useEffect(() => {
        getDatabase();
    }, []);
    function addDatabase(id, name, email, password) {
        // kiem tra tai khoan
        var arrayErrors = {
            name: '',
            email: '',
            password: '',
            passwordCF: '',
        };
        if (name === '' || email === '' || password === '' || passwordCF === '') {
            if (name === '') {
                arrayErrors.name = '* cannot be left blank';
            }
            if (email === '') {
                arrayErrors.email = '* cannot be left blank';
            }
            if (password === '') {
                arrayErrors.password = '* cannot be left blank';
            }
            if (passwordCF === '') {
                arrayErrors.passwordCF = '* cannot be left blank';
            }
            setError(arrayErrors);
        } else {
            if (data == []) {  // nếu chưa có tài khoản thì lập tức add vào
                firebase.database().ref('users/').push().set({
                    // push() sẽ bổ sung cho id
                    name: name,
                    email: email,
                    password: password,
                    status: true,
                    avatar: 'https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg'
                }, function (error) {
                    if (error) {
                        alert('error ' + error);
                    } else {
                        alert('success');
                    }
                });
            } else {
                if (password === passwordCF) {
                    var trungEmail = false; // mặc định không trùng 
                    for (let value of data) {
                        if (value.email === email) {
                            trungEmail = true; // trùng
                            break;
                        }
                    }
                    // kiểm tra xem có trùng tài khoản không 
                    if (trungEmail == false) {
                        var keyNew = firebase.database().ref().child('users').push().key;
                        setId(keyNew);  // để có thể lưu trữ key tại đây thì không dùng push trực tiếp mà phải tạo ra key từ push
                        firebase.database().ref('users/' + keyNew).set({
                            // push() sẽ bổ sung cho id
                            name: name,
                            email: email,
                            password: password,
                            status: true,
                            avatar: 'https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg'
                        }, function (error) {
                            if (error) {
                                alert('error' + error);
                            } else {
                                alert('success');
                                navigation.navigate('Home',
                                    {
                                        id: id,
                                        name: name,
                                        email: email,
                                        password: password,
                                        status: true,
                                        avatar: 'https://bloganh.net/wp-content/uploads/2021/03/chup-anh-dep-anh-sang-min.jpg',
                                        listUser: data
                                    }
                                );
                            }
                        });
                    } else {
                        arrayErrors.email = '* this email already exists';
                    }
                } else {
                    arrayErrors.password = '* password incorrect';
                }
                setError(arrayErrors);
            }
        }
    };
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <View style={styles.container}>
                <StatusBar barStyle='light-content'></StatusBar>
                <View style={styles.boxLogin}>
                    <Text style={styles.Title}>Register</Text>
                    <>
                        <View style={styles.boxFrom}>
                            <View style={styles.groupText}>
                                <Text style={styles.label}>Name</Text>
                                <TextInput style={styles.textInput} name='name' maxLength={40} placeholder='name...'
                                    onChangeText={(text) => setName(text.trim())}
                                    value={name}
                                />
                                <Text style={styles.textError}>{error.name}</Text>
                            </View>
                        </View>
                    </>
                    <>
                        <View style={styles.boxFrom}>
                            <View style={styles.groupText}>
                                <Text style={styles.label}>Email</Text>
                                <TextInput style={styles.textInput} name='email' placeholder='email...'
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
                    <>
                        <View style={styles.boxFrom}>
                            <View style={styles.groupText}>
                                <Text style={styles.label}>Password Confirm</Text>
                                <TextInput style={styles.textInput} placeholder='password confirm...'
                                    onChangeText={(text) => setPasswordCF(text.trim())}
                                    value={passwordCF}
                                />
                                <Text style={styles.textError}>{error.password}</Text>
                            </View>
                        </View>
                    </>
                    <TouchableOpacity style={styles.buttonLogin} onPress={() =>
                        // console.log(name + ' ' + email + ' ' + password)}
                        addDatabase('id', name, email, password)}
                    >
                        <Text style={styles.textButton}>Register</Text>
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
                    <TouchableOpacity style={styles.register} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.textRegister}>Do you already have an account ? LogIn</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    boxLogin: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        // height: '80%',
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
        marginTop: 8,
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
        marginTop: 25,
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
        marginTop: 25,
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
        marginTop: 15,
    },
    textIconLink: {
        fontSize: 10,
        color: 'tomato',
    },
    register: {
        width: '100%',
        marginTop: 15,
    },
    textRegister: {
        fontStyle: 'italic',
        color: 'tomato',
        fontSize: 13,
    },
})