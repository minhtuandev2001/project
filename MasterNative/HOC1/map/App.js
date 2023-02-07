import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';


export default function App() {
    const [regions, setRegion] = useState({
        latitude: 16.9016955,
        // latitude: 16.90226946689817,
        latitudeDelta: 0.05344377267959999,
        // longitude: 107.00705805793405,
        longitude: 107.0186967,
        longitudeDelta: 0.050673969089999105,
    })
    // const [location, setLocation] = useState(null);
    // const [error, setError] = useState('');
    // let stringText = 'Waiting ....';
    // useEffect(() => {
    //     (async () => {
    //         let  {status}  = await Location.requestForegroundPermissionsAsync();
    //         if (status == 'granted') {
    //             let location = await Location.getCurrentPositionAsync({});
    //             setLocation(location);
    //             console.log(location);
    //         } else {
    //             setError('khong cho lay vi tri');
    //         }
    //     })();
    // }, []);
    // function getLocationHandler() {

    // }
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                onRegionChange={(region) =>
                    // setRegion({ region });
                    console.log(region)
                }
                region={regions}
            >
                <MapView.Marker
                    coordinate={{
                        latitude: 16.9016955,
                        longitude: 107.0186967,
                    }}
                    title={'Nhà 60 tỷ quận nam hồ tây'}
                    description={'Nhà cua anh bùi minh tuấn'}
                    draggable={true}
                    onDragStart={(value) => console.log(value.nativeEvent)}
                />
            </MapView>
            {/* <Text>{error !== '' ? error : stringText}</Text>
            <TouchableOpacity onPress={getLocationHandler()}>
                <Text>Get location</Text>
            </TouchableOpacity> */}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        // justifyContent: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center'
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
});
