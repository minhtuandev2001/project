import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={() =>
                Alert.alert(
                    "title button",
                    "day la message cua alert",
                    [
                        {
                            text: "cancel",
                            onPress: () => console.log("ban chon cancel"),
                            style: "cancel", // ios
                        },
                        {
                            text: "Ok",
                            onPress: () => Alert.alert(
                                "alert 2",
                                "ban da nhan vao nut OK", 
                                [
                                    {
                                        text: "cancel",
                                        onPress: () => console.log("dong alert 2"),
                                    }
                                ]
                                ),
                        },
                    ],
                    {
                        cancelable: true,
                        onDismiss: () => console.log("txt"),
                    }
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
    alert:{
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 10,
        backgroundColor: 'tomato',
        color: '#fff',
    },
});
