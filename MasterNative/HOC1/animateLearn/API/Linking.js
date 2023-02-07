import { Alert, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'

export default function App() {
    const url = "https://vieclamit.careerbuilder.vn/advices/cach-su-dung-deep-linking-trong-ung-dung-di-dong.35A4EFCB.html";
    const number = "0377129169";
    const tel = `tel: ${number}`;
    const message = "xin chao toi la tuan";
    const sms = `sms:number=${number}?body=${message}`;
    const mail = `mailto:bmtuan.20it1@vku.udn.vn?subject=test&body=${message}`;
    const openUrl = async (url) => {
        const isSupported = await Linking.canOpenURL(url);

        if (isSupported) {
            Linking.openURL(url);
        } else {
            Alert.alert("warring", `khong the mo Url: ${url} nay`, [
                {
                    text: "cancel",
                    onPress: () => { }
                }
            ])
        }
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, { backgroundColor: "steelblue" }]}
                onPress={() => openUrl(url)}
            >
                <Text style={{ color: "white" }}>Open URL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: "green" }]}
                onPress={() => openUrl(tel)}
            >
                <Text style={{ color: "white" }}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: "blue" }]}
                onPress={() => openUrl(sms)}
            >
                <Text style={{ color: "white" }}>SMS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: "tomato" }]}
                onPress={() => openUrl(mail)}
            >
                <Text style={{ color: "white" }}>email</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: "gray" }]}
                onPress={() => Linking.openSettings()}
            >
                <Text style={{ color: "white" }}>Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: "#1DC59B" }]}
                onPress={() => openUrl("https://www.google.com/maps/search/?api=1&query=america")}
            >
                <Text style={{ color: "white" }}>Map google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: "#1DC59B" }]}
                onPress={() => openUrl("geo:37.484847,-122.148386")}
            >
                <Text style={{ color: "white" }}>Map app android</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: "#1DC59B" }]}
                onPress={() => openUrl("http://maps.apple.com/?ll=37.484847,-122.148386")}
            >
                <Text style={{ color: "white" }}>Map app ios</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: "#F8160F" }]}
                onPress={() => openUrl("https://www.youtube.com/watch?v=No44CYE91Cs")}
            >
                <Text style={{ color: "white" }}>Youtube</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: "#2380DF" }]}
                onPress={() => openUrl("fb://profile/")}
            >
                <Text style={{ color: "white" }}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: "#BADBFE" }]}
                onPress={() => openUrl("fb-messenger://use-thread/100036808596129")}
            >
                <Text style={{ color: "white" }}>Message</Text>
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
    button: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 7,
        marginBottom: 20,
    },
})