
import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Image, Dimensions  } from 'react-native';
import a1 from '../assets/a1.jpg'
import a2 from '../assets/a2.jpg'
import a3 from '../assets/a3.jpg'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height; 
export default function DetailsScreen() {
    var domain = ['a1', 'a2', 'a3'];
    return (
        <SafeAreaView style={styles.container}>
            {/* <Image style={styles.image} source={a1} /> */}
            <ScrollView style={styles.scrollView}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
            >
                {domain.map((e, index) =>
                    <Image
                        key={e}
                        resizeMode='stretch'
                        style={styles.image}
                        source={a1}
                    />)}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        backgroundColor: 'pink',
        flex: 1,
    },
    text: {
        fontSize: 42,
    },
    image: {
        width: WIDTH,
        height: 408,
    }
});