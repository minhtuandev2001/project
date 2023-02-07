import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Swipeout from 'react-native-swipeout';

export default function App() {
    const data = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
    ]
    const swipeSetting = {
        autoClose: true,
        onOpen: (secId, rowId, direction) => {
        },
        onClose: (secId, rowId, direction) => {
        },
        right: [
            {
                onPress: () => {

                },
                text: 'Delete', type: 'delete'
            }
        ]
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item, index }) =>
                    <Swipeout {...swipeSetting}>
                        <Text style={styles.blockMessage}>{item}</Text>
                    </Swipeout>
                }
                keyExtractor={(item,index) => item}
            />
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
    blockMessage: {
        padding: 30,
        borderColor: 'black',
        borderWidth: 1,
        width: 500,
    }
});
