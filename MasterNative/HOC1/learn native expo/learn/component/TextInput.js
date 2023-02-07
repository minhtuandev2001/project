import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const textInput = () => {
    const EnterText2 = (e) => {
        console.log(e.nativeEvent);
    }
    const EnterText = (text) => {
        console.log(text);
    }
    const [focus, setFocus] = useState("white");
    return (
        <>
            <TextInput style={[styles.input, { backgroundColor: focus }]}
                autoCapitalize="words" // viết hoa 
                autoCorrect={true} // tính năng tự động sửa
                editable={true} // vô hiệu hóa trường nhập văn bản 
                placeholder="enter email"
                placeholderTextColor="green"
                keyboardType="email-address"
                onChange={EnterText2}
                onFocus={() => setFocus("tomato")}
                onBlur={() => setFocus("white")}
                textAlign="right"
            />
            <TextInput style={styles.input}
                defaultValue="enter descriptions"
                multiline={true}
                numberOfLines={4}
                textAlignVertical="top"
                onChangeText={EnterText} // van ban duoc chuyen duoi dang doi so (onchange thì chuyển sự kiện )
            />
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        width: "90%",
        marginBottom: 14,
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "tomato",
    },
})

export default textInput;
