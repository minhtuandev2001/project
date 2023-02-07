import { Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function App() {
    const onShare = () => {
        Share.share({
            message: "xin chao toi la tuan"
        }).then(({ action, activityType }) => {
            if (action === Share.sharedAction) {
                console.log("thanh cong");
            } else if (action === Share.dismissedAction) {
                console.log("hop thoai share bi dong");
            }
        })
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onShare()}>
                <Text style={{
                    color: "white",
                    backgroundColor: "tomato",
                    fontWeight: "bold",
                    paddingHorizontal: 20,
                    paddingVertical: 8,
                    borderRadius: 5,
                }}>Share</Text>
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