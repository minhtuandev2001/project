import React from 'react'
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
export default function Register({ navigation }) {
    return (
        // <View style={styles.container}>
        //     {/* <Text>Register</Text>
        //     <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
        //         <Text>di toi Login</Text>
        //     </TouchableOpacity> */}

        // </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <View style={styles.container}>
                <StatusBar barStyle='dark-content'></StatusBar>
                <View style={styles.boxLogin}>
                    <Text style={styles.Title}>Register</Text>
                    <>
                        <View style={styles.boxFrom}>
                            <View style={styles.groupText}>
                                <Text style={styles.label}>Name</Text>
                                <TextInput style={styles.textInput} name='name' maxLength={40} placeholder='name...'
                                // onChangeText={(text) => setName(text.trim())}
                                // value={name}
                                />
                                <Text style={styles.textError}>
                                    {/* {error.name} */}
                                    error *
                                </Text>
                            </View>
                        </View>
                    </>
                    <>
                        <View style={styles.boxFrom}>
                            <View style={styles.groupText}>
                                <Text style={styles.label}>Email</Text>
                                <TextInput style={styles.textInput} name='email' placeholder='email...'
                                // onChangeText={(text) => setEmail(text.trim())}
                                // value={email}
                                />
                                <Text style={styles.textError}>
                                    {/* {error.email} */}
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
                    <>
                        <View style={styles.boxFrom}>
                            <View style={styles.groupText}>
                                <Text style={styles.label}>Password Confirm</Text>
                                <TextInput style={styles.textInput} placeholder='password confirm...'
                                // onChangeText={(text) => setPasswordCF(text.trim())}
                                // value={passwordCF}
                                />
                                <Text style={styles.textError}>
                                    {/* {error.password} */}
                                    error *
                                </Text>
                            </View>
                        </View>
                    </>
                    <TouchableOpacity style={styles.buttonLogin}
                    // onPress={() =>
                    // console.log(name + ' ' + email + ' ' + password)}
                    // addDatabase('id', name, email, password)}
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
                    <TouchableOpacity style={styles.register}
                        onPress={() => navigation.navigate('Login')}
                    >
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