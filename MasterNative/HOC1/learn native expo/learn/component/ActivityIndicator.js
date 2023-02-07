import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'

const activityIndicator = () => {
    return (
        <View style={styles.activityIndicator}>
            {/* android */}
            <ActivityIndicator animating={true} size={30} color="tomato"></ActivityIndicator>
            {/* ios */}
            <ActivityIndicator animating={true} size="large" color="tomato"></ActivityIndicator>
        </View>
    )
}
const styles = StyleSheet.create({
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default activityIndicator