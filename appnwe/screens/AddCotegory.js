import React, { useState } from 'react';
import { StyleSheet, Button, Text,TextInput, View, ScrollView, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

const Addcotegory = () => {
    const [key, setKey] = useState(null);
    const [ten, setTen] = useState(null);
    const [soLuong, setSoLuong] = useState(null);
    return (
        <View style={styles.container}>
            <Text>Category</Text>
            <TextInput style={styles.nhap} name='key' placeholder='key' onChange={(text) => { setKey(text) }} value={key} />
            <TextInput style={styles.nhap} name='ten' placeholder='ten' onChange={(text) => { setTen(text) }} value={ten} />
            <TextInput style={styles.nhap} name='soLuong' placeholder='soLuong' onChange={(text) => { setSoLuong(text) }} value={soLuong} />
            <TouchableOpacity>
                <View style={styles.btn}>
                    <Text>Them</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.btn}>
                    <Text>xoa</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.btn}>
                    <Text>sua</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nhap:{
        width: 300,
        borderWidth:2,
        borderColor: 'tomato',
        margin: 10,
        padding: 10,
    },
    btn:{
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 15,
        paddingRight: 15,
        margin : 10,
        backgroundColor: 'cyan'
    }
})
export default Addcotegory;
