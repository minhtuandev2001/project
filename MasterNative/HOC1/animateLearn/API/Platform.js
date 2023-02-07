import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
    return (
        <View style={styles.container}>
            <Text>OS : {Platform.OS}</Text>
            <Text>version : {Platform.Version}</Text>
            {Platform.OS === 'ios' &&
                <Text>is Ipad : {Platform.isPad.toString()}</Text>
            }
            <Text>is TIVI : {Platform.isTV.toString()}</Text>
            <Text>is Testing : {Platform.isTesting.toString()}</Text>
            <Text>{JSON.stringify(Platform.constants, null, 2)}</Text>
            <View style={[{
                width: 100,
                height: 100,
                borderRadius: 10,
            }, styles.bgColor]}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgColor: {
        ...Platform.select({
            android: {
                backgroundColor: "tomato"
            },
            ios: {
                backgroundColor: "pink",
            },
            default: {
                backgroundColor: "tomato"
            }
        })
    }
})