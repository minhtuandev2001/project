import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Loading from './Loading';

export default function Login({ navigation }) {
    const [loading, setLoading] = useState(true);
    setTimeout(() => { setLoading(false) }, 1000);
    return (
        <>
            {loading ?
                <Loading></Loading> :
                <View style={styles.container}>
                    <StatusBar barStyle="dark-content" backgroundColor='#FFFFFF' />
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                        <View style={styles.boxLogin}>
                            <Text style={styles.Title}>Log in</Text>
                            <>
                                <View style={styles.boxFrom}>
                                    <View style={styles.groupText}>
                                        <Text style={styles.label}>Email</Text>
                                        <TextInput style={styles.textInput} placeholder='email..'
                                        // onChangeText={(text) => setEmail(text.trim())}
                                        // value={email}
                                        />
                                        <Text style={styles.textError}>
                                            {/* {error.email */}
                                            error *
                                        </Text>
                                    </View>
                                </View>
                            </>
                            <>
                                <View style={styles.boxFrom}>
                                    <View style={styles.groupText}>
                                        <Text style={styles.label}>Password</Text>
                                        <TextInput style={styles.textInput} placeholder='password...'
                                        // onChangeText={(text) => setPassword(text.trim())}
                                        // value={password}
                                        />
                                        <Text style={styles.textError}>
                                            {/* {error.password} */}
                                            error *
                                        </Text>
                                    </View>
                                </View>
                            </>
                            <TouchableOpacity style={styles.buttonLogin}>
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
                            <TouchableOpacity style={styles.register}
                                onPress={() => navigation.navigate('Register')}
                            >
                                <Text style={styles.textRegister}>Do not have an account ? Register</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.register}
                                onPress={() => navigation.navigate('BottomTabNavigation')}
                            >
                                <Text style={styles.textRegister}>di toi BottomTabNavigation</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            }
        </>
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