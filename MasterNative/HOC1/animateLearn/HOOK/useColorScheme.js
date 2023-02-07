import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

export default function App() {
    const userColors = useColorScheme();
    return (
        <View style={styles.container}>
            <Text>user usage color : {userColors} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})