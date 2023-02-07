// InteractionManager lên lịch trình việc chạy các code js sau khi tương tác/animation hoàn thành 
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TextInput, Keyboard, Text } from 'react-native'
export default function App() {
    const [text, setText] = useState(null);
    useEffect(() => {
        const showKeyboard = Keyboard.addListener("keyboardDidShow", () => {
            setText("show");
        })
        const hideKeyboard = Keyboard.addListener("keyboardDidHide", () => {
            setText("hide");
        })
        return () => {
            showKeyboard.remove();
            hideKeyboard.remove();
        };
    }, []);
    return (
        // chưa sửa được chổ này 
        <View style={styles.container} onPress={() => Keyboard.dismiss()}> 
            <>
                <TextInput style={{
                    width: "90%",
                    height: 35,
                    borderBottomWidth: 1,
                    borderBottomColor: "tomato"
                }}
                    placeholder="Enter name..."
                ></TextInput>
                <Text style={{ marginTop: 30 }}>keyboard is :{text} </Text>
            </>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "yellow"
    },
})