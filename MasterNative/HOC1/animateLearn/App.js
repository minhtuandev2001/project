import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() =>
                    // Alert.alert(
                    //     "title button",
                    //     "day la message cua alert",
                    //     [
                    //         {
                    //             text: "cancel",
                    //             onPress: () => console.log("ban chon cancel"),
                    //             style: "cancel", // ios
                    //         },
                    //         {
                    //             text: "Ok",
                    //             onPress: () => Alert.alert(
                    //                 "alert 2",
                    //                 "ban da nhan vao nut OK", 
                    //                 [
                    //                     {
                    //                         text: "cancel",
                    //                         onPress: () => console.log("dong alert 2"),
                    //                     }
                    //                 ]
                    //                 ),
                    //         },
                    //     ],
                    //     {
                    //         // android 
                    //         cancelable: true,
                    //         onDismiss: () => console.log("txt"),
                    //     }
                    // )
                    Alert.alert(
                        "thoat khoi day",
                        "ban dang yeu cau cho chung toi ve viec thoat khoi day",
                        [
                            {
                                text: "Cancel",
                                onPress: () => console.log("dong alert"),
                                style: "cancel"
                            },
                            {
                                text: "OK",
                                onPress: () => console.log("chap nhan")
                            },
                            {
                                text: "alert",
                                onPress: () => Alert.alert(
                                    "alert 2",
                                    "ban danng mo alert 2 dko",
                                    [
                                        { 
                                            text: "OK",
                                            onPress: () => console.log("dong alert 2"),
                                        }
                                    ]
                                )
                            }
                        ]
                    )
                }
            >
                <Text style={styles.alert}>Button</Text>
            </TouchableOpacity>
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
    alert: {
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 10,
        backgroundColor: 'tomato',
        color: '#fff',
    },
});
