import React from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
    // alert 2 button 
    const createTowButtonAlert = () => {
        return (
            Alert.alert(
                "warning",
                "dang nhap di !",
                [
                    {
                        text: "cancel",
                        onPress: () => Alert.alert("cancel Pressed"),
                        style: 'cancel',
                    },
                    {
                        text: "OK",
                        onPress: () => Alert.alert("OK pressed"),
                    }
                ]
            )
        )
    }

    const createThreeButtonAlert = () => {
        return (
            Alert.alert(
                "warning",
                "Ban chua dang nhap !",
                [
                    {
                        text: "cancel",
                        onPress: () => Alert.alert("khong dang nhap thi khong cho vao")
                    },
                    {
                        text: "Enter",
                        onPress: () => Alert.alert("nhap cai khac !")
                    },
                    {
                        text: "Ok",
                        onPress: () => Alert.alert("Ok")
                    }
                ]
            )
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TouchableOpacity onPress={createTowButtonAlert} style={styles.button}>
                    <Text>2-Show ALERT</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={createThreeButtonAlert}>
                    <Text>3-Show ALERT</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        marginBottom: 20
    },
});

export default App;
