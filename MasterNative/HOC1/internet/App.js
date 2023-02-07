import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

export default function App() {
    const info = NetInfo.useNetInfo();
    console.log(info.type);
    console.log(info.isConnected);
    const [connected, setConnected] = useState(true);

    useEffect(() => {
        if (info.isConnected === true) {
            setConnected(true);
        } else {
            setConnected(false);
        }
    });
    return (
        <View style={styles.container}>
            {connected ? <Text>chao cac ban</Text> :
                <ActivityIndicator size={40} color="#0000ff" />
            }
            <StatusBar style="auto" />
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
});
