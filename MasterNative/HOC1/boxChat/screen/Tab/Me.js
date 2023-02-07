import React, { useState } from 'react';
import {
    StyleSheet, Text, View, Image, TouchableOpacity, Dimensions,
    ScrollView, Modal, SafeAreaView, TouchableWithoutFeedback, Keyboard,
    StatusBar, TextInput, Alert
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';

import girl from '../../assets/girl.jpg';
import girl1 from '../../assets/girl1.jpg';
import girl2 from '../../assets/girl2.jpeg'
import girl3 from '../../assets/girl3.jpg';
import girl4 from '../../assets/girl4.jpg';
import girl5 from '../../assets/girl5.jpg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const City = ['Đà Nẵng', 'Quảng Trị', 'Nghệ An', 'Quảng Nam', 'Quảng Ngãi', 'Bình Định', 'Ninh Thuận', 'Bình Dương', 'Đồng Nai', 'Long an']
export default function Me() {
    const [modalUpdateName, setModalUpdateName] = useState(false);
    const [modalUpdatePass, setModalUpdatePass] = useState(false);

    const [modalPost, setModalPost] = useState(false);
    const [modalMyPost, setModalMyPost] = useState(false);
    const [modalMapPost, setModalMapPost] = useState(false);
    const [modalMapMyPost, setModalMapMyPost] = useState(false);
    const [modalUpdate, setModalUpdate] = useState(false);
    const [modalMapUpdate, setModalMapUpdate] = useState(false);
    const [pickerCity, setPickerCity] = useState({
        value: 'Đà Nẵng',
        pos: 1
    }
    );
    const [modalAvatar, setModalAvatar] = useState(false);
    console.log(pickerCity);
    return (
        <View style={styles.container}>
            <View style={styles.boxBanner}>
                <Image source={girl} style={styles.imageBanner}></Image>
                <Text style={styles.textBanner}>Minh Tuan</Text>
            </View>
            {/* option */}
            <View style={styles.boxOptions}>
                <TouchableOpacity onPress={() => setModalUpdateName(true)}>
                    <View style={styles.option}>
                        <Ionicons name='create-outline' style={styles.iconOption} />
                        <Text style={styles.textOption}>Update Name</Text>
                    </View>
                </TouchableOpacity>
                {/* modal update name */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalUpdateName}
                >
                    <TouchableOpacity activeOpacity={1} onPress={Keyboard.dismiss} style={styles.boxUpdateName}>
                        <View style={styles.UpdateName}>
                            <Text style={styles.labelUpdateName}>New Name</Text>
                            <TextInput placeholder="type name" style={styles.textUpdateName}></TextInput>
                            <View style={styles.boxButtonUpdateName}>
                                <TouchableOpacity onPress={() => setModalUpdateName(false)}>
                                    <Text style={styles.textButtonUpdateName}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setModalUpdateName(false)}>
                                    <Text style={styles.textButtonUpdateName}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Modal>
                <TouchableOpacity onPress={() => setModalUpdatePass(true)}>
                    <View style={styles.option}>
                        <Ionicons name='settings-outline' style={styles.iconOption} />
                        <Text style={styles.textOption}>Update Password</Text>
                    </View>
                </TouchableOpacity>
                {/* modal update Pass */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalUpdatePass}
                >
                    <TouchableOpacity activeOpacity={1} onPress={Keyboard.dismiss} style={styles.boxUpdateName}>
                        <View style={styles.UpdatePass}>
                            <Text style={styles.labelUpdateName}>Old password</Text>
                            <TextInput placeholder="type name" style={styles.textUpdateName}></TextInput>
                            <Text style={styles.labelUpdateName}>New password</Text>
                            <TextInput placeholder="type name" style={styles.textUpdateName}></TextInput>
                            <Text style={styles.labelUpdateName}>Confirm password</Text>
                            <TextInput placeholder="type name" style={styles.textUpdateName}></TextInput>
                            <View style={styles.boxButtonUpdateName}>
                                <TouchableOpacity
                                    onPress={() => setModalUpdatePass(false)}
                                >
                                    <Text style={styles.textButtonUpdateName}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setModalUpdatePass(false)}
                                >
                                    <Text style={styles.textButtonUpdateName}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Modal>
                <TouchableOpacity onPress={() => setModalAvatar(true)}>
                    <View style={styles.option}>
                        <Ionicons name='ios-camera-outline' style={styles.iconOption} />
                        <Text style={styles.textOption}>Update Avatar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalPost(true)}>
                    <View style={styles.option}>
                        <Ionicons name='logo-buffer' style={styles.iconOption} />
                        <Text style={styles.textOption}>Post For Sale</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalMyPost(true)} >
                    <View style={styles.option}>
                        <Ionicons name='ios-clipboard-outline' style={styles.iconOption} />
                        <Text style={styles.textOption}>My Post</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* end option */}
            {/* modal avatar */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalAvatar}
            >
                <SafeAreaView>
                    <View style={styles.modalLocation}>
                        <View style={[styles.modalBottom, { borderBottomWidth: 0 }]}>
                            <Text onPress={() => setModalAvatar(false)} style={styles.textOk}>Xong</Text>
                        </View>
                        <View style={styles.chooseAvatar}>
                            <TouchableOpacity>
                                <View style={styles.avatarChoose}>
                                    <Ionicons name='ios-images' size={35} color='#B7B7AC' />
                                </View>
                            </TouchableOpacity>
                            <View style={styles.boxButton}>
                                <TouchableOpacity>
                                    <View style={styles.buttonChooseAvatar}>
                                        <Text style={styles.textButtonAvatar}>Clear</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.buttonChooseAvatar}>
                                        <Text style={styles.textButtonAvatar}>OK</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
            {/* end modal avatar */}
            {/* dang bai */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalPost}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={styles.postNews}>
                        <View style={styles.modalLocation}>
                            <View style={[styles.modalBottom, { borderBottomWidth: 0 }]}>
                                <Text onPress={() => setModalPost(false)} style={styles.textOk}>Xong</Text>
                            </View>
                            <View style={styles.map}>
                            </View>
                        </View>
                        <StatusBar barStyle='dark-content'></StatusBar>
                        <TouchableOpacity style={styles.boxChooseImage}>
                            <Ionicons name='ios-images' size={35} color='#B7B7AC' />
                        </TouchableOpacity>
                        <View style={styles.boxClear}>
                            <TouchableOpacity style={styles.clear}>
                                <Text style={styles.clearImage}>Clear</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.boxInput}>
                            <>
                                <View style={styles.boxFrom}>
                                    <View style={styles.groupText}>
                                        <Text style={styles.label}>Price</Text>
                                        <TextInput style={styles.textInput} name='name' maxLength={40} placeholder='type price...'
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
                                        <Text style={styles.label}>Description</Text>
                                        <TextInput style={styles.textInput} name='name' placeholder='type price...'
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
                                <View style={{ width: '100%', }}>
                                    <Text style={[styles.label, { textAlign: 'left', marginTop: 10, }]}>Description</Text>
                                    <View style={styles.Picker}>
                                        <Picker style={styles.pickerStyle}
                                            selectedValue={pickerCity} // trả về giá trị được chọn 
                                            onValueChange={(itemValue, itemPosition) =>
                                                setPickerCity({
                                                    value: itemValue,
                                                    pos: itemPosition
                                                })}
                                            mode='dropdown'
                                        >
                                            {City.map((item, index) => {
                                                return <Picker.Item key={index} label={item} value={item} />
                                            })}
                                            {/* <Picker.Item label="Đà Nẵng" value="Đà Nẵng" />
                                                    <Picker.Item label="JavaScript" value="js" />
                                                    <Picker.Item label="React Native" value="rn" /> */}
                                        </Picker>
                                    </View>
                                </View>
                            </>
                        </View>
                        <View style={{ alignItems: 'flex-start', width: '100%', marginTop: 10, marginBottom: 10 }}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'flex-end' }} onPress={() => setModalMapPost(true)}>
                                <Ionicons name='location' size={25} color='tomato' />
                                <Text style={styles.textLocation}>location on map</Text>
                            </TouchableOpacity>
                        </View>
                        {/* modal map post */}
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalMapPost}
                        >
                            <SafeAreaView>
                                <View style={styles.modalLocation}>
                                    <View style={styles.modalBottom}>
                                        <Text onPress={() => setModalMapPost(false)} style={styles.textOk}>Xong</Text>
                                    </View>
                                    <View style={styles.map}>
                                        <Text>map dang bai</Text>
                                    </View>
                                </View>
                            </SafeAreaView>
                        </Modal>
                        <View style={styles.boxClear}>
                            <TouchableOpacity style={styles.clear}>
                                <Text style={styles.clearImage}>Post</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            {/* end dang bai */}
            {/* modal my post */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalMyPost}
            >
                <SafeAreaView>
                    <View style={styles.modalLocation}>
                        <View style={[styles.modalBottom, { borderBottomWidth: 0 }]}>
                            <Text onPress={() => setModalMyPost(false)} style={styles.textOk}>Xong</Text>
                        </View>
                        <ScrollView>
                            <View style={styles.post}>
                                <TouchableOpacity style={styles.deletePost}>
                                    <Text style={{ fontWeight: 'bold', color: '#FFFFFF' }}>Delete</Text>
                                </TouchableOpacity>
                                <View style={styles.boxImagePost}>
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
                                        <Image resizeMode='cover' source={girl} style={styles.ImagePost}></Image>
                                        <Image resizeMode='cover' source={girl1} style={styles.ImagePost}></Image>
                                        <Image resizeMode='cover' source={girl2} style={styles.ImagePost}></Image>
                                        <Image resizeMode='cover' source={girl3} style={styles.ImagePost}></Image>
                                        <Image resizeMode='cover' source={girl4} style={styles.ImagePost}></Image>
                                        <Image resizeMode='cover' source={girl5} style={styles.ImagePost}></Image>
                                    </Swiper>
                                </View>
                                <View style={styles.description}>
                                    <View style={styles.row1}>
                                        <View style={styles.row1Left}>
                                            <Image source={girl5} style={styles.imageUser}></Image>
                                            <Text style={styles.textNameUse}>Minh Tuan</Text>
                                        </View>
                                        <View style={styles.row1Right}>
                                            <Text style={{ color: '#D5D7D4', marginRight: 10, fontSize: 12, }}>Care</Text>
                                            <TouchableOpacity>
                                                <Ionicons name='heart' size={25} color='#F61D6C' />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.row2}>
                                        <Text style={styles.TextDescription}>Căn hộ phía nam Đà Nẵng , diện tích 100 mét vuông Căn hộ phía nam Đà Nẵng , diện tích 100 mét vuôngCăn hộ phía nam Đà Nẵng , diện tích 100 mét vuông.....</Text>
                                    </View>
                                    <View style={styles.row3}>
                                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                                            onPress={() => setModalMapMyPost(true)}
                                        >
                                            <Ionicons name='location' size={25} color='tomato' />
                                            <Text style={styles.textLocation}>location on map</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.row4}>
                                        <View style={styles.row4Left}>
                                            <Text style={[{ fontWeight: 'bold', }, styles.TextPrice1]}>Price :</Text>
                                            <Text style={[{ fontWeight: 'bold', }, styles.TextPrice2]}>2 ~ 3 tỷ</Text>
                                        </View>
                                        <View style={styles.row4Right}>
                                            <TouchableOpacity style={styles.bottomChat} onPress={() => setModalUpdate(true)}>
                                                <Text style={styles.bottomTextChat}>Update</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.bottomSold}>
                                                <Text style={styles.bottomTextSold}>Sold</Text>
                                                <Ionicons name='checkmark-outline' style={styles.checkmark} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            {/* modal map my post*/}
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalMapMyPost}
                            >
                                <SafeAreaView>
                                    <View style={styles.modalLocation}>
                                        <View style={styles.modalBottom}>
                                            <Text onPress={() => setModalMapMyPost(false)} style={styles.textOk}>Xong</Text>
                                        </View>
                                        <View style={styles.map}>
                                            <Text>map cua toi</Text>
                                        </View>
                                    </View>
                                </SafeAreaView>
                            </Modal>
                            {/* end modal map my post*/}
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </Modal>
            {/* modal update my post */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalUpdate}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={styles.postNews}>
                        <View style={styles.modalLocation}>
                            <View style={[styles.modalBottom, { borderBottomWidth: 0 }]}>
                                <Text onPress={() => setModalUpdate(false)} style={styles.textOk}>Xong</Text>
                            </View>
                            <View style={styles.map}>
                            </View>
                        </View>
                        <StatusBar barStyle='dark-content'></StatusBar>
                        <TouchableOpacity style={styles.boxChooseImage}>
                            <Ionicons name='ios-images' size={35} color='#B7B7AC' />
                        </TouchableOpacity>
                        <View style={styles.boxClear}>
                            <TouchableOpacity style={styles.clear}>
                                <Text style={styles.clearImage}>Clear</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.boxInput}>
                            <>
                                <View style={styles.boxFrom}>
                                    <View style={styles.groupText}>
                                        <Text style={styles.label}>Price</Text>
                                        <TextInput style={styles.textInput} name='name' maxLength={40} placeholder='type price...'
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
                                        <Text style={styles.label}>Description</Text>
                                        <TextInput style={styles.textInput} name='name' placeholder='type price...'
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
                                <View style={{ width: '100%', }}>
                                    <Text style={[styles.label, { textAlign: 'left', marginTop: 10, }]}>Description</Text>
                                    <View style={styles.Picker}>
                                        <Picker style={styles.pickerStyle}
                                            selectedValue={pickerCity} // trả về giá trị được chọn 
                                            onValueChange={(itemValue, itemPosition) =>
                                                setPickerCity({
                                                    value: itemValue,
                                                    pos: itemPosition
                                                })}
                                            mode='dropdown'
                                        >
                                            {City.map((item, index) => {
                                                return <Picker.Item key={index} label={item} value={item} />
                                            })}
                                            {/* <Picker.Item label="Đà Nẵng" value="Đà Nẵng" />
                                                    <Picker.Item label="JavaScript" value="js" />
                                                    <Picker.Item label="React Native" value="rn" /> */}
                                        </Picker>
                                    </View>
                                </View>
                            </>
                        </View>
                        <View style={{ alignItems: 'flex-start', width: '100%', marginTop: 10, marginBottom: 10 }}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'flex-end' }} onPress={() => setModalMapUpdate(true)}>
                                <Ionicons name='location' size={25} color='tomato' />
                                <Text style={styles.textLocation}>location on map</Text>
                            </TouchableOpacity>
                        </View>
                        {/* modal map update my post */}
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalMapUpdate}
                        >
                            <SafeAreaView>
                                <View style={styles.modalLocation}>
                                    <View style={styles.modalBottom}>
                                        <Text onPress={() => setModalMapUpdate(false)} style={styles.textOk}>Xong</Text>
                                    </View>
                                    <View style={styles.map}>
                                        <Text>map update cua toi</Text>
                                    </View>
                                </View>
                            </SafeAreaView>
                        </Modal>
                        <View style={styles.boxClear}>
                            <TouchableOpacity style={styles.clear}>
                                <Text style={styles.clearImage}>Post</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            {/* end modal update my post */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        // padding: 1,
        paddingBottom: 0,
    },
    boxBanner: {
        backgroundColor: 'tomato',
        height: 300,
        width: '100%',
        borderBottomRightRadius: 150,
        flexDirection: 'row',
    },
    imageBanner: {
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
        marginTop: 120,
        marginLeft: 50,
    },
    textBanner: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 160,
        marginLeft: 15,
    },
    boxOptions: {
        padding: 20,
        paddingBottom: 0,
        height: '100%',
    },
    option: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        // padding: 10,
        margin: 2,
        marginTop: 20,
    },
    iconOption: {
        fontSize: 40,
        color: 'tomato',
        marginRight: 15,
    },
    textOption: {
        fontSize: 15,
        color: 'tomato',
        borderColor: '#E9E5E5',
        borderBottomWidth: 0.5,
        width: '80%',
        padding: 10,
        paddingLeft: 0,
    },
    // modal update name
    boxUpdateName: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
    },
    UpdateName: {
        width: 350,
        height: 150,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 10,
    },
    UpdatePass: {
        width: 350,
        height: 290,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 10,
    },
    labelUpdateName: {
        color: 'tomato',
        marginTop: 6,
        marginBottom: 4,
        fontSize: 13,
    },
    textUpdateName: {
        padding: 2,
        paddingLeft: 10,
        borderColor: 'tomato',
        borderWidth: 0.5,
        fontSize: 10,
    },
    boxButtonUpdateName: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    textButtonUpdateName: {
        padding: 1,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'tomato',
        width: 90,
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
        borderRadius: 10,
    },
    // boxImage: {
    //     width: '100%',
    //     justifyContent: 'center',
    //     // alignItems: 'center'
    // },
    // imageUse: {
    //     width: '100%',
    //     height: 300,
    //     position: 'relative',
    //     marginBottom: 75,
    // },
    // imageUseCircle: {
    //     width: 150,
    //     height: 150,
    //     borderRadius: 150 / 2,
    //     position: 'absolute',
    //     top: 220,
    //     left: (windowWidth / 2) - 75,
    //     borderWidth: 2,
    //     borderColor: '#FFFFFF',
    // },
    // iconUser: {
    //     position: 'absolute',
    //     top: 255,
    //     left: windowWidth - 60,
    // },
    // textNameMe: {
    //     // width: '100%',
    //     // backgroundColor: 'tomato',
    //     textAlign: 'center',
    //     fontWeight: 'bold',
    //     marginRight: 10,
    // },
    // //box Function
    // boxFunction: {
    //     alignItems: 'center',
    // },
    // box: {
    //     alignItems: 'center',
    //     backgroundColor: '#FE8541',
    //     width: 200,
    //     padding: 10,
    //     borderRadius: 10,
    //     margin: 15,
    // },
    // textBox: {
    //     fontWeight: 'bold',
    //     color: '#FFFFFF',
    // },
    // textTitlePost: {
    //     color: 'tomato',
    //     fontWeight: 'bold',
    //     marginRight: 10,
    // },
    // textTitlePost2: {
    //     color: '#FFFFFF',
    //     fontWeight: 'bold',
    //     marginRight: 10,
    // },
    // buttonPost: {
    //     flexDirection: 'row',
    //     backgroundColor: 'tomato',
    //     padding: 1,
    //     paddingLeft: 5,
    //     paddingRight: 5,
    //     borderRadius: 5,
    // },
    // post 
    post: {
        width: '100%',
        paddingBottom: 30,
        paddingTop: 10,
        position: 'relative',
    },
    deletePost: {
        position: 'absolute',
        zIndex: 1,
        top: 10,
        right: 0,
        backgroundColor: 'tomato',
        padding: 2,
        paddingLeft: 10,
        paddingRight: 10,
    },
    boxImagePost: {
        width: windowWidth,
        height: windowHeight / 2,
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
    // button XONG 
    modalLocation: {
        backgroundColor: '#FFFFFF',
        // height: '100%',
    },
    modalBottom: {
        backgroundColor: '#FFFFFF',
        alignItems: 'flex-end',
        padding: 5,
        borderBottomColor: '#A4B6BA',
        borderBottomWidth: 0.5,
    },
    textOk: {
        padding: 2,
        color: 'tomato',
    },
    // // modal post dang bai
    postNews: {
        height: '100%',
        backgroundColor: '#FFFFFF',
        padding: 10,
        paddingBottom: 0,

    },
    boxChooseImage: {
        width: '100%',
        height: 250,
        backgroundColor: '#E9E5E5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    boxClear: {
        width: '100%',
        alignItems: 'flex-end',
    },
    clear: {
        width: 100,
        backgroundColor: 'tomato',
        padding: 2,
        paddingLeft: 13,
        paddingRight: 13,
        paddingBottom: 3,
        borderRadius: 5,
        borderRadius: 8,
    },
    clearImage: {
        color: '#FFFFFF',
        textAlign: 'center',
    },
    boxInput: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        // height: '80%',
        width: '100%',
        alignItems: 'center',
        // padding: 10,
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
    textLocation: {
        color: 'tomato',
        fontWeight: 'bold',
        alignItems: 'center',
        paddingTop: 10,
    },
    // Picker
    Picker: {
        width: '100%',
        borderColor: 'tomato',
        borderWidth: 0.5,
        marginTop: 5,
    },
    pickerStyle: {
        height: 50,
        width: "100%",
        color: 'tomato',
        justifyContent: 'center',
    },
    // modal choose avatar
    chooseAvatar: {
        height: '100%',
        backgroundColor: '#FFFFFF',
        paddingRight: 20,
        paddingLeft: 20,
    },
    avatarChoose: {
        height: 300,
        width: '100%',
        backgroundColor: '#E9E5E5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxButton: {
        width: '100%',
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        padding: 10,
    },
    buttonChooseAvatar: {
        backgroundColor: 'tomato',
        width: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9,
        padding: 2,
    },
    textButtonAvatar: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

