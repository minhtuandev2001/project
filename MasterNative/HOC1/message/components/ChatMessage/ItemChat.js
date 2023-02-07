import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import tuan from '../../assets/tuan.jpg';

export default function ItemChat() {
    const props = [
        '{color: "#F2F2F2"}',
        '{backgroundColor: "#3B55F8"}',
        '{flexDirection: "row-reverse"}',
    ];
    const [direction, setDirection] = useState([
        { flexDirection: "row-reverse" },
        { backgroundColor: "#3B55F8" },
        { color: "#F2F2F2" }
    ]);
    const [direction2, setDirection2] = useState([
        { flexDirection: "row" },
        { backgroundColor: "#F1F1F1" },
        { color: "#000" }
    ]);
    console.log(props[2]);
    return (
        <>
            <View style={[styles.containerMessage, direction[0]]}>
                <Text style={styles.title}>minh tuan</Text>
                <Image style={styles.image} source={tuan} />
                <View style={[styles.boxMessage, direction[1]]}>
                    <Text style={[styles.message, direction[2]]}>
                        Các địa phương ghi nhận số ca bệnh thấp có: Cần Thơ 133 ca, An Giang 130 ca, Kiên Giang 90 ca, Đồng Tháp 75 ca, Sóc Trăng 57 ca, Hậu Giang 53 ca, Ninh Thuận 40 ca, Tiền Giang 38 ca.
                    </Text>
                </View>
            </View>
            <View style={[styles.containerMessage, direction2[0]]}>
                <Text style={styles.title}>minh tuan</Text>
                <Image style={styles.image} source={tuan} />
                <View style={[styles.boxMessage, direction2[1]]}>
                    <Text style={[styles.message, direction2[2]]}>
                        Các địa phương ghi nhận số ca bệnh thấp có: Cần Thơ 133 ca, An Giang 130 ca, Kiên Giang 90 ca, Đồng Tháp 75 ca, Sóc Trăng 57 ca, Hậu Giang 53 ca, Ninh Thuận 40 ca, Tiền Giang 38 ca.
                    </Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    containerMessage: {
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'flex-end',
        backgroundColor: 'red',
        marginBottom: 20,
        position: 'relative',
        paddingTop: 15,
    },
    title: {
        position: 'absolute',
        top: 0,
        left: 45,
        fontSize: 10,
        color: '#DCDCDC', // graya
        fontWeight: '500'
    },
    image: {
        width: 25,
        height: 25,
        borderRadius: 25 / 2,
        marginLeft: 7,
        marginRight: 7,
    },
    boxMessage: {
        backgroundColor: '#F1F1F1',
        borderRadius: 15,
        maxWidth: '75%',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        borderRadius: 10,
        padding: 5,
        fontSize: 16,
        flexWrap: 'wrap',
        maxWidth: '97%',
    },
})