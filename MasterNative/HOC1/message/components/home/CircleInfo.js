import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
import React from 'react'
import tuan from '../../assets/tuan.jpg';

export default function CircleInfo() {
    return (
        <View style={styles.circle}
        >
            <View style={styles.circleItem}>
                <Image source={tuan} style={styles.circleImage} />
                <View style={styles.circleStatus}></View>
                <Text style={styles.circleText} numberOfLines={1} ellipsizeMode='tail' >Bui</Text>
                <Text style={styles.circleText} numberOfLines={1} ellipsizeMode='tail' >Minh Tuan</Text>
            </View>
            <View style={styles.circleItem}>
                <Image source={tuan} style={styles.circleImage} />
                <View style={styles.circleStatus}></View>
                <Text style={styles.circleText} numberOfLines={1} ellipsizeMode='tail' >Bui</Text>
                <Text style={styles.circleText} numberOfLines={1} ellipsizeMode='tail' >Minh Tuan</Text>
            </View>
            <View style={styles.circleItem}>
                <Image source={tuan} style={styles.circleImage} />
                <View style={styles.circleStatus}></View>
                <Text style={styles.circleText} numberOfLines={1} ellipsizeMode='tail' >Bui</Text>
                <Text style={styles.circleText} numberOfLines={1} ellipsizeMode='tail' >Minh Tuan</Text>
            </View>
            <View style={styles.circleItem}>
                <Image source={tuan} style={styles.circleImage} />
                <View style={styles.circleStatus}></View>
                <Text style={styles.circleText} numberOfLines={1} ellipsizeMode='tail' >Bui</Text>
                <Text style={styles.circleText} numberOfLines={1} ellipsizeMode='tail' >Minh Tuan</Text>
            </View>
            <View style={styles.circleItem}>
                <Image source={tuan} style={styles.circleImage} />
                <View style={styles.circleStatus}></View>
                <Text style={styles.circleText} numberOfLines={1} ellipsizeMode='tail' >Bui</Text>
                <Text style={styles.circleText} numberOfLines={1} ellipsizeMode='tail' >Minh Tuan</Text>
            </View>
            <View style={styles.circleItem}>
                <Image source={tuan} style={styles.circleImage} />
                <View style={styles.circleStatus}></View>
                <Text style={styles.circleText} numberOfLines={1} ellipsizeMode='tail' >Bui</Text>
                <Text style={styles.circleText} numberOfLines={1} ellipsizeMode='tail' >Minh Tuan</Text>
            </View>
            <View style={styles.circleItem}>
                <Image source={tuan} style={styles.circleImage} />
                <View style={styles.circleStatus}></View>
                <Text style={styles.circleText} numberOfLines={1} ellipsizeMode='tail' >Bui</Text>
                <Text style={styles.circleText} numberOfLines={1} ellipsizeMode='tail' >Minh Tuan</Text>
            </View>
            <View style={styles.circleItem}>
                <Image source={tuan} style={styles.circleImage} />
                <View style={styles.circleStatus}></View>
                <Text style={styles.circleText} numberOfLines={1} ellipsizeMode='tail' >Bui</Text>
                <Text style={styles.circleText} numberOfLines={1} ellipsizeMode='tail' >Minh Tuan</Text>
            </View>
            <View style={styles.circleItem}>
                <Image source={tuan} style={styles.circleImage} />
                <View style={styles.circleStatus}></View>
                <Text style={styles.circleText} numberOfLines={1} ellipsizeMode='tail' >Bui</Text>
                <Text style={styles.circleText} numberOfLines={1} ellipsizeMode='tail' >Minh Tuan</Text>
            </View>
            <View style={styles.circleItem}>
                <Image source={tuan} style={styles.circleImage} />
                <View style={styles.circleStatus}></View>
                <Text style={styles.circleText} numberOfLines={1} ellipsizeMode='tail' >Bui</Text>
                <Text style={styles.circleText} numberOfLines={1} ellipsizeMode='tail' >Minh Tuan</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    circle: {
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        marginBottom: 8,
    },
    circleItem: {
        width: 60,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 17,
    },
    circleImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        position: 'relative',
    },
    circleStatus: {
        position: 'absolute',
        bottom: 32,
        right: 4,
        width: 14,
        height: 14,
        backgroundColor: '#19EB15',
        borderRadius: 14 / 2,
        borderWidth: 2,
        borderColor: '#FFFFFF',
    },
    circleText: {
        fontSize: 13,
        fontWeight: '300',
        flexShrink: 1
    }
})