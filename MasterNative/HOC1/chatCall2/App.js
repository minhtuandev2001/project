import { View, Text } from 'react-native'
import React, { useState } from 'react'
import {
    RTCPeerConnection,
    RTCMediaStream,
    RTCIceCandidate,
    RTCSessionDescription,
    RTCView,
    MediaStreamTrack,
    getUserMedia,
} from 'react-native-webrtc';
import WebrtcSimple from 'react-native-webrtc-simple';
const App = () => {

    useEffect(() => {
        const configuration = {
            optional: null,
            key: Math.random().toString(36).substr(2, 4), //optional
        };

        WebrtcSimple.start(configuration)
            .then((status) => {
                if (status) {
                    const stream = WebrtcSimple.getLocalStream();
                    console.log('My stream: ', stream);
                }
            })
            .catch();
    });
    return (
        <View>
            {/* <RTCView
                mirror={true}
                objectFit={'cover'}
                streamURL={videoCall.videoURL.toURL()}
                zOrder={0}
            /> */}
        </View>
    )
}

export default App