import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'

export default function App() {
    const { fontScale, height, scale, width } = useWindowDimensions();
    return (
        <View style={styles.container}>
            <Text style={{ color: "tomato" }}>Thông số của củaư sổ hiển thị</Text>
            <Text>fontScale : {fontScale}</Text>
            <Text>scale : {scale} </Text>
            <Text>height : {height} </Text>
            <Text>width : {width} </Text>
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