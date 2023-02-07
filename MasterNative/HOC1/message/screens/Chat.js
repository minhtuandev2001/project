import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Animated } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import ItemMessage from '../components/ChatMessage/ItemChat';
import tuan from '../assets/tuan.jpg';

// rnfes
const Chat = ({ navigation, route }) => {
    const [widthMess, setWidthMess] = useState({
        backgroundColor: '#F1F1F1',
        width: 300,
        borderRadius: 15,
        paddingLeft: 15,
        paddingRight: 27,
        paddingTop: 8,
        paddingBottom: 8,
        position: 'relative',
        marginRight: 10,
        marginLeft: 10,
        justifyContent: 'center',
    });
    const [iconFun, setIconFun] = useState('chevron-forward-outline');
    const [iconSend, setIconSend] = useState('ios-thumbs-up');
    const [message, setMessage] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerStatusBar}>
                <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                    <Ionicons style={styles.icon} name="chevron-back-outline" size={35} color="tomato" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.headerImage} source={tuan} />
                </TouchableOpacity>
                <View style={styles.headerInfo}>
                    <TouchableOpacity>
                        <Text style={styles.headerTitle} numberOfLines={1} ellipsizeMode='tail'>Minh Tuan</Text>
                        <Text style={styles.headerStatus}>Đang hoạt động</Text>
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons style={styles.iconCall} name="ios-call" size={35} color="tomato" />
                        <Ionicons style={styles.iconCall} name="logo-whatsapp" size={35} color="tomato" />
                        <View style={styles.status}></View>
                    </View>
                </View>
            </View>
            <Text
                onPress={() => { navigation.goBack(); }}
            >Chao</Text>
            <ScrollView>
                <ItemMessage />
            </ScrollView>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <View style={styles.sendBox}>
                    {(iconFun === 'chevron-forward-outline') ?
                        <Ionicons style={styles.iconFunction} name={iconFun} size={35} color="tomato"
                            onPress={() => (
                                setWidthMess(
                                    {
                                        backgroundColor: '#F1F1F1',
                                        width: 200,
                                        borderRadius: 15,
                                        paddingLeft: 15,
                                        paddingRight: 27,
                                        paddingTop: 8,
                                        paddingBottom: 8,
                                        position: 'relative',
                                        marginRight: 10,
                                        marginLeft: 10,
                                        justifyContent: 'center',
                                    }
                                ),
                                setIconFun('chevron-back-outline'))
                            }
                        />
                        :
                        <Ionicons style={styles.iconFunction} name={iconFun} size={35} color="tomato"
                            onPress={() => (
                                setWidthMess(
                                    {
                                        backgroundColor: '#F1F1F1',
                                        width: 300,
                                        borderRadius: 15,
                                        paddingLeft: 15,
                                        paddingRight: 27,
                                        paddingTop: 8,
                                        paddingBottom: 8,
                                        position: 'relative',
                                        marginRight: 10,
                                        marginLeft: 10,
                                        justifyContent: 'center',
                                    }
                                ),
                                setIconFun('chevron-forward-outline'))
                            }
                        />
                    }
                    <Ionicons style={styles.iconFunctionCamera} name='ios-camera' size={25} color="tomato" />
                    <Ionicons style={styles.iconFunctionImage} name='image' size={25} color="tomato" />
                    <Ionicons style={styles.iconFunctionMic} name='md-mic' size={25} color="tomato" />
                    <TextInput style={widthMess} multiline={true} maxLength={1000} placeholder='nhap..' onChangeText={(text) => (
                        // (text.length > 0) ? setIconSend('md-send') : setIconSend('ios-thumbs-up'),
                        setMessage(text),
                        setIconSend('md-send')
                    )} />
                    <Ionicons style={styles.iconMess} name='ios-happy' size={23} color="tomato" />
                    <TouchableOpacity onPress={() => (
                        console.log(message)
                    )}>
                        <Ionicons name={iconSend} size={23} color="tomato" />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        height: '100%',
    },
    headerStatusBar: {
        backgroundColor: 'rgba(255, 255, 255, 0.97)',
        flexDirection: 'row',
        paddingTop: 4,
        paddingBottom: 4,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(244, 244, 244, 0.9)',
    },
    headerImage: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        marginRight: 10,
    },
    headerInfo: {
        flex: 1,
        // backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerTitle: {
        fontSize: 17,
        fontWeight: '600',
    },
    headerStatus: {
        fontSize: 13,
        color: '#B1B1B2'
    },
    iconCall: {
        fontSize: 30,
        marginRight: 10,
    },
    status: {
        width: 13,
        height: 13,
        borderRadius: 13 / 2,
        backgroundColor: '#4DDD33',
        marginRight: 5
    },
    sendBox: {
        width: '100%',
        // height: 45,
        // backgroundColor: 'red',
        backgroundColor: 'rgba(255, 255, 255, 0.97)',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 5,
        paddingLeft: 5,
        paddingTop: 8,
        paddingBottom: 8,
        borderTopWidth: 1,
        borderColor: 'rgba(244, 244, 244, 0.9)',
    },
    iconFunction: {
        position: 'absolute',
        left: 0,
        marginLeft: 5,
    },
    iconFunctionCamera: {
        marginLeft: 5,
        marginRight: 5,
        position: 'absolute',
        left: 35,
    },
    iconFunctionImage: {
        marginLeft: 5,
        marginRight: 5,
        position: 'absolute',
        left: 70,
    },
    iconFunctionMic: {
        marginLeft: 5,
        marginRight: 5,
        position: 'absolute',
        left: 100,
    },
    iconMess: {
        position: 'absolute',
        paddingRight: 43,
    }
})