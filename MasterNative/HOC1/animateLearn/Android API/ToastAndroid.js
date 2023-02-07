import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function App() {
    const toast = () => {
        ToastAndroid.show("update thanh cong", ToastAndroid.SHORT);
        // không hiểu sao mấy phương thức kia đều giống với cái này 
        //ToastAndroid.showWithGravity("update thanh cong", ToastAndroid.LONG, ToastAndroid.CENTER);
        //ToastAndroid.showWithGravityAndOffset("update thanh cong", ToastAndroid.LONG, ToastAndroid.CENTER, 50, 50);
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => toast()}
            >
                <Text style={{
                    color: "white",
                    backgroundColor: "tomato",
                    fontWeight: "bold",
                    paddingHorizontal: 20,
                    paddingVertical: 8,
                    borderRadius: 5,
                }}>press toast</Text>
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