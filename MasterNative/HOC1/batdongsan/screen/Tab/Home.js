import React, { useState, useEffect } from 'react'
import {
    StyleSheet, Text, View, StatusBar, TouchableOpacity,
    ScrollView, Image, Dimensions, Modal, SafeAreaView,
    TouchableWithoutFeedback, Keyboard, TextInput, ActivityIndicator
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import MapView from 'react-native-maps';
import Swiper from 'react-native-swiper';

import firebase, { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Home({ route, navigation }) {
    var params = route.params.params;
    const [modalVisible, setModalVisible] = useState(false);
    const [modalChat, setModalChat] = useState(false);
    const [position, setPosition] = useState('88.7%');
    const [dataPost, setDataPost] = useState(null);
    const [dataPostProvincial, setDataPostProvincial] = useState(null)
    const arrayProvincial = ['ALL', 'Quảng Trị', 'Khánh Hòa', 'Hưng Yên', 'Kiên Giang', 'Quảng Nam', 'Quảng Ngãi', 'Đà Nẵng', 'Cần Thơ'];
    const [activeProvincial, setActiveProvincial] = useState(0);
    const [dataUser, setDataUser] = useState({
        id: params.id,
        name: params.name,
        email: params.email,
        password: params.password,
        status: params.status,
        avatar: params.avatar,
    });
    const [imageUserMe, setImageUserMe] = useState(null);
    const [nameFriendChat, setNameFriendChat] = useState('');
    const [listMessage, setListMessage] = useState([]);
    const [imageUserFriend, setImageUserFriend] = useState('');
    const [typeImageUserFriend, setTypeImageUserFriend] = useState('');
    //mess
    const [textMessage, setTextMessage] = useState('');
    const [idMessageAll, setIdMessageAll] = useState('');
    const [idUserReceive, setIdUserReceive] = useState('');
    useEffect(() => {
        const firebaseConfig = {
            apiKey: "AIzaSyAfYIJrNCDdzLG4BZa5gDPCBAaoKWYAn6c",
            authDomain: "batdongsan-41470.firebaseapp.com",
            databaseURL: "https://batdongsan-41470-default-rtdb.firebaseio.com",
            projectId: "batdongsan-41470",
            storageBucket: "batdongsan-41470.appspot.com",
            messagingSenderId: "438805796856",
            appId: "1:438805796856:web:3246ae37f20570a037a80d",
            measurementId: "G-3NEQFEHQ1D"
        };
        if (!firebase.apps.length) {
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
            console.log('ket noi thanh cong');
        }
        getDatabase();
    }, []);
    function getDatabase() {
        firebase.database().ref('posts/').on('value', function (snapshot) {
            let array = [];
            snapshot.forEach(function (item) {
                var childData = item.val();
                array.push({
                    post: childData.post,
                });
            });
            let arrayData = [];
            let len1 = array.length;
            for (let i = 0; i < len1; i++) {
                let len2 = array[i].post.length;
                for (let j = 0; j < len2; j++) {
                    arrayData.push(array[i].post[j]);
                }
            }
            setDataPost(arrayData);
            setDataPostProvincial(arrayData);
            setActiveProvincial(0);
        });
        let imageUsers = {};
        firebase.database().ref('users/' + dataUser.id + '/avatar').on('value', function (snapshot) {
            imageUsers = snapshot.val();
            setImageUserMe({
                image: imageUsers.image,
                type: imageUsers.type,
            });
        })
    }
    function kiemTraListFriend(idFriend, imageFriend, nameFriend) {
        setNameFriendChat(nameFriend);
        setImageUserFriend(imageFriend);
        let typeImage = imageFriend.slice(0, 6);
        if (typeImage == 'https:') {
            setTypeImageUserFriend('link');
        } else {
            setTypeImageUserFriend('base64');
        }
        // console.log(typeImage);
        var keyMess = firebase.database().ref().child('users').push().key; // tạo key mess cho 2 người
        // lay data nguoi dang dung
        var object1 = {}
        firebase.database().ref('users/' + dataUser.id).on('value', function (snapshot) {
            object1 = snapshot.val();
        })
        // lay data nguoi chuan duoc ket ban
        var object2 = {}
        firebase.database().ref('users/' + idFriend).on('value', function (snapshot) {
            object2 = snapshot.val();
        })
        // tao 2 doi tuong 
        let statusRead1 = {
            status: true,
        }
        let statusRead2 = {
            status: false,
        }
        let objFriendYou = {  // dung de add cho nguoi dang dung 
            idUserFriend: idFriend,
            idMess: keyMess,
            nameUserFriend: nameFriend,
            imageUserFriend: imageFriend,
            statusRead: statusRead2
        }
        let arrayYou = [];
        arrayYou.push(objFriendYou);
        let objFriendMe = {  // dung de add cho nguoi chuan bi ket ban
            idUserFriend: dataUser.id,
            idMess: keyMess,
            nameUserFriend: dataUser.name,
            imageUserFriend: imageUserMe.image,
            statusRead: statusRead1
        }
        let arrayMe = [];
        arrayMe.push(objFriendMe);
        if (object1.listFriend == undefined && object2.listFriend == undefined) {
            // add data lai cho nguoi dang dung
            firebase.database().ref('users/' + dataUser.id).set({
                name: object1.name,
                email: object1.email,
                password: object1.password,
                status: true,
                avatar: {
                    type: imageUserMe.type,
                    image: imageUserMe.image,
                },
                listFriend: arrayYou
            })
            firebase.database().ref('users/' + idFriend).set({
                name: object2.name,
                email: object2.email,
                password: object2.password,
                status: true,
                avatar: {
                    type: object2.avatar.type,
                    image: object2.avatar.image,
                },
                listFriend: arrayMe
            })
            // tin nhan dau tien
            var date = new Date();
            var time = date.getHours() + ':' + date.getMinutes();
            let message = {
                idUser: dataUser.id,
                mess: 'HI',
                time: time,
            }
            let arrayMess = [];
            arrayMess.push(message);
            //  add message first 
            firebase.database().ref('listMessage/' + keyMess).set({
                message: arrayMess
            });
            console.log('case 1');
            setIdMessageAll(keyMess);
            let mess = [];
            firebase.database().ref('listMessage/' + keyMess).on('value', function (snapshot) {
                mess = snapshot.val();
                setListMessage(mess.message);
            });
        } else if (object1.listFriend != undefined && object2.listFriend == undefined) {
            let listFriendMe = object1.listFriend; // chuan bi add them 1 ban cho nguoi dang dung
            listFriendMe.push(objFriendYou);
            // console.log(listFriendMe);
            firebase.database().ref('users/' + dataUser.id).set({
                name: object1.name,
                email: object1.email,
                password: object1.password,
                status: true,
                avatar: {
                    type: imageUserMe.type,
                    image: imageUserMe.image,
                },
                listFriend: listFriendMe
            });
            firebase.database().ref('users/' + idFriend).set({
                name: object2.name,
                email: object2.email,
                password: object2.password,
                status: true,
                avatar: {
                    type: object2.avatar.type,
                    image: object2.avatar.image,
                },
                listFriend: arrayMe // ban kia dang add data cua nguoi dang dung
            });
            // tin nhan dau tien
            var date = new Date();
            var time = date.getHours() + ':' + date.getMinutes()
            let message = {
                idUser: dataUser.id,
                mess: 'HI',
                time: time,
            }
            let arrayMess = [];
            arrayMess.push(message);
            firebase.database().ref('listMessage/' + keyMess).set({
                message: arrayMess
            });
            console.log('case 2');
            setIdMessageAll(keyMess);
            let mess = [];
            firebase.database().ref('listMessage/' + keyMess).on('value', function (snapshot) {
                mess = snapshot.val();
                setListMessage(mess.message);
            });
        } else if (object1.listFriend == undefined && object2.listFriend != undefined) {
            let listFriendYou = object2.listFriend; // chuan bi add them 1 ban cho nguoi dang bai
            listFriendYou.push(objFriendMe);
            // console.log(listFriendYou);
            firebase.database().ref('users/' + dataUser.id).set({
                name: object1.name,
                email: object1.email,
                password: object1.password,
                status: true,
                avatar: {
                    type: imageUserMe.type,
                    image: imageUserMe.image,
                },
                listFriend: arrayYou
            });
            firebase.database().ref('users/' + idFriend).set({
                name: object2.name,
                email: object2.email,
                password: object2.password,
                status: true,
                avatar: {
                    type: object2.avatar.type,
                    image: object2.avatar.image,
                },
                listFriend: listFriendYou
            });
            // tin nhan dau tien
            var date = new Date();
            var time = date.getHours() + ':' + date.getMinutes();
            let message = {
                idUser: dataUser.id,
                mess: 'HI',
                time: time,
            }
            let arrayMess = [];
            arrayMess.push(message);
            firebase.database().ref('listMessage/' + keyMess).set({
                message: arrayMess
            });
            setIdMessageAll(keyMess);
            console.log('case 3');
            let mess = [];
            firebase.database().ref('listMessage/' + keyMess).on('value', function (snapshot) {
                mess = snapshot.val();
                setListMessage(mess.message);
            });
        } else if (object1.listFriend != undefined && object2.listFriend != undefined) {
            console.log('case 4');
            let listFriendMe = object1.listFriend;
            let listFriendYou = object2.listFriend;
            let len1 = listFriendMe.length;
            let len2 = listFriendYou.length;
            let ktID = false;
            let idMess = '';
            for (let i = 0; i < len1; i++) {
                if (listFriendMe[i].idUserFriend == idFriend) {
                    idMess = listFriendMe[i].idMess;
                    ktID = true;
                    break;
                }
            }
            if (ktID) {
                console.log('co');
                setIdMessageAll(idMess);
                // console.log(idMessageAll);
                let mess = [];
                firebase.database().ref('listMessage/' + idMess).on('value', function (snapshot) {
                    mess = snapshot.val();
                    // console.log(mess.message);
                    setListMessage(mess.message);
                })
            } else {
                console.log('khong');
                let listFriendMe = object1.listFriend; // chuan bi add them 1 ban cho nguoi dang dung
                listFriendMe.push(objFriendYou);
                firebase.database().ref('users/' + dataUser.id).set({
                    name: object1.name,
                    email: object1.email,
                    password: object1.password,
                    status: true,
                    avatar: {
                        type: imageUserMe.type,
                        image: imageUserMe.image,
                    },
                    listFriend: listFriendMe
                });
                let listFriendYou = object2.listFriend; // chuan bi add them 1 ban cho nguoi dang bai
                listFriendYou.push(objFriendMe);
                firebase.database().ref('users/' + idFriend).set({
                    name: object2.name,
                    email: object2.email,
                    password: object2.password,
                    status: true,
                    avatar: {
                        type: object2.avatar.type,
                        image: object2.avatar.image,
                    },
                    listFriend: listFriendYou
                });
                // tin nhan dau tien
                var date = new Date();
                var time = date.getHours() + ':' + date.getMinutes();
                let message = {
                    idUser: dataUser.id,
                    mess: 'HI',
                    time: time,
                }
                let arrayMess = [];
                arrayMess.push(message);
                firebase.database().ref('listMessage/' + keyMess).set({
                    message: arrayMess
                });
                setIdMessageAll(keyMess);
                // lay message
                let mess = [];
                firebase.database().ref('listMessage/' + keyMess).on('value', function (snapshot) {
                    mess = snapshot.val();
                    // console.log(mess.message);
                    setListMessage(mess.message);
                });
            }
        }
    }
    function sendMessage(prText) {
        console.log('da gui ...');
        var date = new Date();
        var time = date.getHours() + ':' + date.getMinutes();
        let objectMess = {
            idUser: dataUser.id,
            mess: prText,
            time: time,
        };
        // console.log(idMessageAll);
        let mess = [];
        firebase.database().ref('listMessage/' + idMessageAll).on('value', function (snapshot) {
            mess = snapshot.val();
        });
        let newMess = [];
        newMess = mess.message;
        newMess.push(objectMess);
        firebase.database().ref('listMessage/' + idMessageAll).set({
            message: newMess
        });
        setTextMessage('');
        // console.log(idUserReceive);
        let friendList1 = []; // tao mang chua ban cua nguoi dc nhan mess
        firebase.database().ref('users/' + idUserReceive + '/listFriend').on('value', function (snapshot) {
            friendList1 = snapshot.val();
        });
        let lenListFriend1 = friendList1.length;
        // console.log(lenListFriend1);
        for (let i = 0; i < lenListFriend1; i++) {
            if (friendList1[i].idUserFriend == dataUser.id) {
                firebase.database().ref('users/' + idUserReceive + '/listFriend/' + i + '/statusRead').set({
                    status: true
                });
            }
        }
        let friendList2 = []; // tao mang chua ban cua nguoi dc gui mess
        firebase.database().ref('users/' + dataUser.id + '/listFriend').on('value', function (snapshot) {
            friendList2 = snapshot.val();
        });
        let lenListFriend2 = friendList2.length;
        // console.log(lenListFriend2);
        for (let i = 0; i < lenListFriend2; i++) {
            if (friendList2[i].idUserFriend == idUserReceive) {
                firebase.database().ref('users/' + dataUser.id + '/listFriend/' + i + '/statusRead').set({
                    status: false
                });
            }
        }
    }
    function updateListPostProvincial(prProvincial) {
        // console.log(prProvincial);
        if (prProvincial == 'ALL') {
            setDataPost(dataPostProvincial);
        } else {
            let arrayUpdate = [];
            for (let value of dataPostProvincial) {
                if (value.provincial == prProvincial) {
                    arrayUpdate.push(value);
                }
            }
            setDataPost(arrayUpdate);
        }
    }
    function carePost(prCoordinate, prDescription, prIdUser, prImageUser, prListImage, prNameUser, prPrice, prProvincial, prRegion, prSold, prTime) {
        let obj = {
            coordinate: prCoordinate,
            description: prDescription,
            idUser: prIdUser,
            imageUser: prImageUser,
            listImage: prListImage,
            nameUser: prNameUser,
            price: prPrice,
            provincial: prProvincial,
            regions: prRegion,
            sold: prSold,
            time: prTime,
        }
        let listCarePost = [];
        firebase.database().ref('listCare/' + dataUser.id + '/postCare').on('value', function (snapshot) {
            snapshot.forEach(function (item, index) {
                listCarePost.push(item.val());
            })
        });
        let len = listCarePost.length;
        if (len == 0) {
            console.log('bang o');
            listCarePost.push(obj);
            firebase.database().ref('listCare/' + dataUser.id).set({
                postCare: listCarePost
            }, function (err) {
                if (err) { } else {
                    alert('success')
                }
            });
        } else {
            let yes = false;
            for (let value of listCarePost) {
                if (value.idUser == obj.idUser && value.nameUser == obj.nameUser && value.description == obj.description && value.price == obj.price && value.provincial == obj.provincial && value.sold == obj.sold && value.time == obj.time) {
                    console.log('da co trong nay roi')
                    yes = true;
                    break;
                }
            }
            if (yes == false) {
                listCarePost.push(obj);
                firebase.database().ref('listCare/' + dataUser.id).set({
                    postCare: listCarePost
                }, function (err) {
                    if (err) { } else {
                        alert('success')
                    }
                });
            }
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor='tomato' />
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal={true} style={{ flexDirection: 'row', padding: 5, padding: 10, paddingTop: 10, }}>
                {arrayProvincial.map(function (item, index) {
                    return index == activeProvincial
                        ? <TouchableOpacity key={index} onPress={() => { updateListPostProvincial(item), setActiveProvincial(index) }}>
                            <Text style={{ borderWidth: 1, borderColor: 'tomato', marginRight: 15, padding: 3, borderRadius: 10, textAlign: 'center', paddingRight: 5, paddingLeft: 5, color: '#FFFFFF', backgroundColor: 'tomato' }}>{item}</Text>
                        </TouchableOpacity>
                        : <TouchableOpacity key={index} onPress={() => { updateListPostProvincial(item), setActiveProvincial(index) }}>
                            <Text style={{ borderWidth: 1, borderColor: 'tomato', marginRight: 15, padding: 3, borderRadius: 10, textAlign: 'center', paddingRight: 5, paddingLeft: 5, color: 'tomato' }}>{item}</Text>
                        </TouchableOpacity>
                })}
            </ScrollView>
            <ScrollView>
                {dataPost != null
                    ? dataPost.length > 0
                        ? <>{dataPost.map((item, index) => {
                            return <View key={index}>
                                <View style={[styles.post, { borderBottomWidth: 5, borderBottomColor: '#DCDBDA' }]}>
                                    <View style={styles.boxImage}>
                                        <Swiper
                                            showsButtons={true}
                                            dot={
                                                <View style={{ backgroundColor: '#DCE0DB', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />
                                            }
                                            activeDot={
                                                <View style={{ backgroundColor: '#B5B7B4', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />
                                            }
                                            nextButton={<Text style={styles.buttonText}>›</Text>}
                                            prevButton={<Text style={styles.buttonText}>‹</Text>}
                                        >
                                            {(item.listImage).map((item2, pos) => {
                                                return <Image key={pos} source={{ uri: 'data:image/jpeg;base64,' + item2 }} style={styles.ImagePost} />
                                            })}
                                        </Swiper>
                                    </View>
                                    <View style={styles.description}>
                                        <View style={styles.row1}>
                                            <View style={styles.row1Left}>
                                                {
                                                    (item.imageUser).charAt(5) == ':'
                                                        ? <Image source={{ uri: item.imageUser }} style={styles.imageUser}></Image>
                                                        : <Image resizeMode='cover' source={{ uri: 'data:image/jpeg;base64,' + item.imageUser }} style={styles.imageUser} />
                                                }
                                                <Text style={styles.textNameUse}>{item.nameUser}</Text>
                                                <Text style={[styles.textNameUse, { fontWeight: '100', fontStyle: 'italic' }]}>{item.time}</Text>
                                            </View>
                                            <View style={styles.row1Right}>
                                                {item.idUser == dataUser.id
                                                    ? <View
                                                        style={{ marginLeft: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                                                    >
                                                        <Text style={[styles.textNameUse, { marginRight: 5 }]}>Care</Text>
                                                        <Ionicons name='heart' size={25} color='pink' />
                                                    </View>
                                                    : <TouchableOpacity
                                                        style={{ marginLeft: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                                                        onPress={() => {
                                                            carePost(
                                                                item.coordinate,
                                                                item.description,
                                                                item.idUser,
                                                                item.imageUser,
                                                                item.listImage,
                                                                item.nameUser,
                                                                item.price,
                                                                item.provincial,
                                                                item.regions,
                                                                item.sold,
                                                                item.time
                                                            );
                                                        }}
                                                    >
                                                        <Text style={[styles.textNameUse, { marginRight: 5 }]}>Care</Text>
                                                        <Ionicons name='heart' size={25} color='#F13F93' />
                                                    </TouchableOpacity>
                                                }
                                            </View>
                                        </View>
                                        <View style={styles.row2}>
                                            <Text style={styles.TextDescription}>{item.description}</Text>
                                        </View>
                                        <View style={styles.row3}>
                                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => setModalVisible(true)}>
                                                <Ionicons name='location' size={25} color='tomato' />
                                                <Text style={styles.textLocation}>location on map</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.row4}>
                                            <View style={styles.row4Left}>
                                                <Text style={[{ fontWeight: 'bold', }, styles.TextPrice1]}>Price :</Text>
                                                <Text style={[{ fontWeight: 'bold', }, styles.TextPrice2]}>{item.price}</Text>
                                            </View>
                                            <View style={styles.row4Right}>
                                                {item.idUser == dataUser.id
                                                    ? <View style={[styles.bottomChat, { backgroundColor: 'gray' }]}>
                                                        <Text style={styles.bottomTextChat}>Chat</Text>
                                                        <Ionicons name='chatbubble-outline' style={styles.chatbubble} />
                                                    </View>
                                                    : <TouchableOpacity style={styles.bottomChat} onPress={() => {
                                                        setModalChat(true),
                                                            setIdUserReceive(item.idUser);
                                                        kiemTraListFriend(item.idUser, item.imageUser, item.nameUser)
                                                        // ,ImageUser()
                                                    }}>
                                                        <Text style={styles.bottomTextChat}>Chat</Text>
                                                        <Ionicons name='chatbubble-outline' style={styles.chatbubble} />
                                                    </TouchableOpacity>
                                                }
                                                <View style={styles.bottomSold}>
                                                    <Text style={styles.bottomTextSold}>Sold</Text>
                                                    {item.sold === true
                                                        ? <Ionicons name='checkmark-outline' style={styles.checkmark} />
                                                        : <Text></Text>
                                                    }
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={modalVisible}
                                >
                                    <SafeAreaView>
                                        <View style={styles.modalLocation}>
                                            <View style={[styles.modalBottom, { backgroundColor: '#FFFFFF' }]}>
                                                <Text onPress={() => setModalVisible(false)} style={[styles.textOk, { color: 'tomato' }]}>Xong</Text>
                                            </View>
                                            <MapView style={styles.mapPost}
                                                region={item.regions}
                                            >
                                                <MapView.Marker
                                                    coordinate={item.coordinate}
                                                    description={item.description}
                                                    draggable={true}
                                                />
                                            </MapView>
                                        </View>
                                    </SafeAreaView>
                                </Modal>
                                {/* modal chat */}
                                <Modal
                                    animationType="fade"
                                    transparent={true}
                                    visible={modalChat}
                                >
                                    <SafeAreaView>
                                        <View style={styles.modalLocation}>
                                            <View style={styles.modalBottom}>
                                                <TouchableOpacity onPress={() => setModalChat(false)} >
                                                    <Text style={styles.chevron}>‹</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{ flexDirection: 'row' }}>
                                                    {typeImageUserFriend == 'link'
                                                        ? <Image source={{ uri: imageUserFriend }} style={styles.image}></Image>
                                                        : <Image resizeMode='cover' source={{ uri: 'data:image/jpeg;base64,' + imageUserFriend }} style={styles.image} />
                                                    }
                                                    <Text style={styles.textOk}>{nameFriendChat}</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                                <View style={[styles.boxMessage, { height: position }]}>
                                                    <ScrollView>
                                                        {listMessage.map((mess, indexMess) => {
                                                            return mess.idUser == dataUser.id
                                                                ? <View key={indexMess} style={[styles.messageBlock, { flexDirection: 'row-reverse' }]}>
                                                                    {(imageUserMe.image).charAt(5) == ':'
                                                                        ? <Image source={{ uri: imageUserMe.image }} style={styles.messageBlock_image}></Image>
                                                                        : <Image resizeMode='cover' source={{ uri: 'data:image/jpeg;base64,' + imageUserMe.image }} style={styles.messageBlock_image} />
                                                                    }
                                                                    <View style={styles.message}>
                                                                        <Text style={styles.textMessageBox}>{mess.mess}</Text>
                                                                        <Text style={styles.textTime}>{mess.time}</Text>
                                                                    </View>
                                                                </View>
                                                                : <View key={indexMess} style={[styles.messageBlock, { flexDirection: 'row' }]}>
                                                                    {typeImageUserFriend == 'link'
                                                                        ? <Image source={{ uri: imageUserFriend }} style={styles.messageBlock_image}></Image>
                                                                        : <Image resizeMode='cover' source={{ uri: 'data:image/jpeg;base64,' + imageUserFriend }} style={styles.messageBlock_image} />
                                                                    }
                                                                    <View style={styles.message}>
                                                                        <Text style={styles.textMessageBox}>{mess.mess}</Text>
                                                                        <Text style={styles.textTime}>{mess.time}</Text>
                                                                    </View>
                                                                </View>
                                                        })}
                                                    </ScrollView>
                                                </View>
                                            </TouchableWithoutFeedback>
                                            <View style={styles.sendMessage}>
                                                <Ionicons name='image-outline' style={styles.sendMessageImage} />
                                                <TextInput style={styles.textInputMessage}
                                                    onFocus={() => setPosition('81.2%')}
                                                    onBlur={() => setPosition('88.7%')}
                                                    onChangeText={(text) => setTextMessage(text)}
                                                    value={textMessage}
                                                ></TextInput>
                                                <TouchableOpacity onPress={() => sendMessage(textMessage)}>
                                                    <Ionicons name='send' style={styles.sendMessageImage} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </SafeAreaView>
                                </Modal>
                            </View>
                        })}
                        </>
                        : <Text style={{ textAlign: 'center', color: 'tomato' }}>There are no posts</Text>
                    : <View style={{ flex: 1, width: '100%', height: windowHeight, alignItems: 'center', justifyContent: 'center' }}>
                        <ActivityIndicator size={40} color="tomato" style={{ alignItems: 'center', justifyContent: 'center' }}></ActivityIndicator>
                    </View>
                }
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#FFFFFF',
    },
    scrollTab: {
        // height: 40,
    },
    postTab: {
        margin: 5,
        marginLeft: 5,
        marginRight: 5,
        height: 37,
        borderRadius: 13,
    },
    postTabText: {
        // backgroundColor: '#E5E5E5',
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: 'tomato',
        color: 'tomato',
    },
    post: {
        width: '100%',
        paddingBottom: 30,
        paddingTop: 10,
    },
    boxImage: {
        width: windowWidth,
        height: windowHeight / 2.5,
        padding: 3,
        borderWidth: 0.5,
        borderColor: 'tomato',
    },
    buttonText: {
        fontSize: 40,
        color: '#FE8541',
    },
    ImagePost: {
        width: 600,
        height: windowHeight / 2,
    },
    description: {
        // flexDirection: 'row'
        paddingLeft: 10,
        paddingRight: 10,
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    row1Left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textNameUse: {
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    row1Right: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageUser: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
    },
    row2: {
        paddingTop: 10,
    },
    TextDescription: {
        color: '#444343',
        textAlign: 'left',
    },
    // row3
    row3: {
        paddingTop: 10,
    },
    textLocation: {
        color: 'tomato',
        fontWeight: 'bold',
        alignItems: 'center',
        paddingTop: 10,
    },
    // row 4
    row4: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    row4Left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    TextPrice1: {
        fontSize: 15,
        color: '#444343',
        marginRight: 10,
    },
    TextPrice2: {
        color: 'tomato',
    },
    row4Right: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottomChat: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        backgroundColor: 'tomato',
        borderRadius: 11,
        alignItems: 'center',
    },
    bottomTextChat: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        padding: 2,
        paddingLeft: 12,
        paddingRight: 12,
    },
    bottomSold: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: 'tomato',
        borderRadius: 11,
    },
    bottomTextSold: {
        color: 'tomato',
        fontWeight: 'bold',
        padding: 2,
        paddingLeft: 12,
        paddingRight: 12,
    },
    checkmark: {
        color: 'tomato',
        fontWeight: 'bold',
        fontSize: 25,
    },
    chatbubble: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 3,
        paddingLeft: 0,
    },
    // modal 
    modalLocation: {
        backgroundColor: '#FFFFFF',
        height: '100%',
    },
    modalBottom: {
        backgroundColor: '#FFFFFF',
        alignItems: 'flex-end',
        padding: 5,
        // shadowColor: '#A4B6BA',
        // shadowOffset: { width: 1, height: 1 },
        // shadowOpacity: 0.2,
        // shadowRadius: 1,
        borderBottomColor: '#E9E5E5',
        borderBottomWidth: 0.5,
    },
    textOk: {
        padding: 2,
        color: 'tomato',
    },
    //chat
    modalLocation: {
        backgroundColor: '#FFFFFF',
        height: '100%',
    },
    modalBottom: {
        flexDirection: 'row',
        backgroundColor: 'tomato',
        alignItems: 'flex-start',
        padding: 5,
        borderBottomColor: '#E9E5E5',
        borderBottomWidth: 0.5,
    },
    textOk: {
        padding: 2,
        color: 'tomato',
        marginTop: 5,
        color: '#FFFFFF',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        marginRight: 10,
    },
    chevron: {
        fontSize: 30,
        color: 'tomato',
        marginRight: 15,
        marginTop: -15,
        color: '#FFFFFF',
    },
    boxMessage: {
    },
    sendMessage: {
        backgroundColor: 'tomato',
        width: '100%',
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sendMessageImage: {
        fontSize: 30,
        color: '#FFFFFF',
    },
    textInputMessage: {
        backgroundColor: '#FDFDFD',
        width: windowWidth - 75,
        borderRadius: 9,
        padding: 3,
        marginRight: 6,
        marginLeft: 6,
        paddingLeft: 10,
    },
    messageBlock: {
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    messageBlock_image: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        margin: 15,
        marginBottom: 0,
        marginRight: 10,
    },
    message: {
        maxWidth: '75%',
    },
    textMessageBox: {
        padding: 5,
        paddingLeft: 7,
        paddingRight: 7,
        borderRadius: 10,
        backgroundColor: '#EBEBEB',
        color: '#3C3C39',
        fontSize: 15
    },
    textTime: {
        fontSize: 7,
        color: '#DCDBCD',
    },
    // map Post
    mapPost: {
        height: '100%',
    },
    boxOkCancel: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButtonOkCancel: {
        color: '#FFFFFF',
        backgroundColor: 'tomato',
        padding: 0,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 3,
    }
})