import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import firebase, { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

export default function App() {
    let [selectedImage, setSelectedImage] = useState(null);
    useEffect(() => {
        const firebaseConfig = {
            apiKey: "AIzaSyBqD1nzf3oqE8MyEmdQ7mm6rmDD9TpQglg",
            authDomain: "skyteam-chat.firebaseapp.com",
            databaseURL: "https://skyteam-chat-default-rtdb.firebaseio.com",
            projectId: "skyteam-chat",
            storageBucket: "skyteam-chat.appspot.com",
            messagingSenderId: "753445584708",
            appId: "1:753445584708:web:1627245d844fa60df86111",
            measurementId: "G-NW91ZNCGSQ"
        };
        if (!firebase.apps.length) {
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
            // const analytics = getAnalytics(app);
            console.log('ket noi thanh cong');
            // getDatabase();
        }
    }, []);

    let openImagePickerAsync = async () => {
        // cấp quyền
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }
        // cho phép truy cập thư viện ảnh 
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }
        console.log(pickerResult.uri);
        setSelectedImage({ localUri: pickerResult.uri });
    };

    if (selectedImage !== null) {
        return (
            <View>
                <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
            <Text style={styles.instructions}>
                To share a photo from your phone with a friend, just press the button below!
            </Text>

            <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                <Text style={styles.buttonText}>Pick a photo</Text>
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
    logo: {
        width: 305,
        height: 159,
        marginBottom: 20,
    },
    instructions: {
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
});
