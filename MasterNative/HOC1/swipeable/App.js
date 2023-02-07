import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';
import a1 from './assets/a1.jpg';
import a2 from './assets/a2.jpg';
import a3 from './assets/a3.jpg';
import a4 from './assets/a4.jpg';
import a5 from './assets/a5.jpg';
import v from './assets/v.jpg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
    return (
        <SafeAreaView style={styles.container} dotColor='yellow'>
            <Swiper style={styles.wrapper}
                showsButtons={true}
                dot={
                    <View style={{ backgroundColor: '#DCE0DB', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />
                }
                activeDot={
                    <View style={{ backgroundColor: '#B5B7B4', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />
                }
                nextButton={<Text style={styles.buttonText}>›</Text>}
                prevButton={<Text style={styles.buttonText}>‹</Text>}
            >
                <Image source={a1} style={styles.image}></Image>
                <Image source={a2} style={styles.image}></Image>
                <Image source={a3} style={styles.image}></Image>
                <Image source={a4} style={styles.image}></Image>
                <Image source={a5} style={styles.image}></Image>
                <Image source={v} style={styles.image}></Image>
            </Swiper>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: windowWidth,
        height: windowHeight / 2,
    },
    buttonText: {
        color: '#B5B7B4',
        fontSize: 40,
        fontWeight: 'bold',
    },
});
