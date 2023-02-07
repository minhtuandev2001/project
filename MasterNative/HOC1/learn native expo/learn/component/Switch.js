import React, { useState } from 'react';
import { View, StyleSheet, Switch, TouchableOpacity, Text } from 'react-native';

const switchExample = () => {
    const [isEnable, setIsEnabled] = useState(false);
    const [disable, setDisable] = useState(false);
    const change = () => {
        setIsEnabled(isEnable => !isEnable);
    }
    return (
        <>
            <Switch
                //onChange={() => setIsEnabled(!isEnable)} // nhận sự kiện thay đổi làm đối số , nếu muốn nhận giá trị mới thì sử dụng onValueChange
                onValueChange={change} // dùng cái này khi chỉ muốn nhận giá trị mới 
                value={isEnable}
                thumbColor={isEnable ? "pink" : "tomato"}
                trackColor={{ true: "yellow", false: "black" }}
                disabled={disable}
                // IOS 
                ios_backgroundColor="tomato"
            />
            <TouchableOpacity onPress={() => setDisable(!disable)}>
                <Text style={styles.button}>disabled</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        backgroundColor: 'pink',
        color: "white",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 7,
    }
})

export default switchExample;
