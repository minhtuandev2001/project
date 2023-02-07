import { PermissionsAndroid, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function App() {
    const request = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "QUYỀN TRUY CẬP LỊCH",
                    message: "ung dung can quyen truy cap lich",
                    buttonPositive: "OK",
                    buttonNegative: "Cancel",
                    buttonNeutral: "hỏi lại sau",
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("ban co the su dung camera");
            } else {
                console.log("camera tu choi quyen truy cap");
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => request()}
            >
                <Text style={{
                    color: "white",
                    backgroundColor: "tomato",
                    fontWeight: "bold",
                    paddingHorizontal: 20,
                    paddingVertical: 8,
                    borderRadius: 5,
                }}>permission calender</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})