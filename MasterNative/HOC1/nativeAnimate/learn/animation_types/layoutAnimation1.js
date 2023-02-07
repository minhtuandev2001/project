import React, { useRef, useState } from 'react';
import {
    Animated,
    Dimensions,
    Easing,
    FlatList,
    LayoutAnimation,
    PanResponder,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    UIManager,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}
const App = () => {
    // variable
    const [data, setData] = useState(
        [
            {
                id: 1,
                name: 'bui minh tuan',
                age: 22,
                job: 'student',
            },
            {
                id: 2,
                name: 'bui minh tai',
                age: 22,
                job: 'student',
            },
            {
                id: 3,
                name: 'le huu huy',
                age: 20,
                job: 'quan doi',
            },
            {
                id: 4,
                name: 'nguyen van A',
                age: 49,
                job: 'teacher',
            },
        ])
    const [loadFlat, setLoadFlat] = useState(false);
    // animation
    const scaleAnimate = useRef(new Animated.Value(1)).current;

    // handler animation
    const scaleHandlerIn = () => {
        Animated.timing(scaleAnimate,
            {
                toValue: 1.04,
                duration: 200,
                easing: Easing.bounce,
                useNativeDriver: true,
            }
        ).start();
    }
    const scaleHandlerOut = () => {
        Animated.timing(scaleAnimate,
            {
                toValue: 1,
                duration: 500,
                easing: Easing.bounce,
                useNativeDriver: true,
            }
        ).start();
    }
    // handler add item
    const handlerAddItem = async () => {
        // console.log(data);
        await data.push({
            id: Math.floor(Math.random() * 100) + 'j',
            name: 'minh tuan' + (Math.random() * 10),
            job: 'dang lam viec tai' + (Math.random() * 10)
        })
        let data2 = data;
        // LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        LayoutAnimation.configureNext(
            {
                duration: 500,
                create: { type: 'easeOut', property: 'opacity' },
                update: { type: 'spring', springDamping: 0.4 },
                delete: { type: 'easeOut', property: 'opacity' }
            }
        );
        await setData(data2);
        await setLoadFlat(!loadFlat); // báo hiệu render cho flatList
    }
    // handler delete item
    const handlerDeleteItem = async (id) => {
        console.log(id);
        let data2 = await data.filter((item) => item.id !== id);
        LayoutAnimation.configureNext({ // xóa xong thì các layout còn lại sẽ sử dụng cái này để thể hiện
            duration: 500,
            update: { type: "spring", springDamping: 0.9 },
        });
        // LayoutAnimation.configureNext({
        //     duration: 500,
        //     create: { type: "linear", property: "opacity" },
        //     update: { type: "spring", springDamping: 0.4 },
        //     delete: { type: "linear", property: "opacity" }
        //   });
        await setData(data2);
        await setLoadFlat(!loadFlat); //báo hiệu render cho flatList

    }
    const item = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={0.9}
                style={[
                    styles.flatItem,
                    styles.boxShadow,
                    {
                        transform: [
                            { scale: scaleAnimate }
                        ]
                    }
                ]}
                onLongPress={() =>scaleHandlerIn()}
                onPressOut={() => scaleHandlerOut()}
                onPress={() => handlerDeleteItem(item.id)}
            >
                <View style={styles.itemId}>
                    <Text style={[styles.flatItem_text, styles.itemId_text]}>{item.id}</Text>
                </View>
                <View style={styles.itemDescription}>
                    <Text style={[styles.flatItem_text, styles.itemDescription_name]}>{item.name}</Text>
                    <Text style={[styles.flatItem_text, styles.itemDescription_des]}>{item.job}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.flatData}>
                <FlatList
                    data={data}
                    renderItem={item}
                    keyExtractor={item => item.id}
                    extraData={loadFlat}
                />
            </View>
            <TouchableOpacity
                style={
                    [styles.addItem, styles.boxShadow]
                }
                onPress={handlerAddItem}
            >
                <Icon name="add" color="tomato" size={30} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    flatData: {
        width: 'auto',
    },
    flatItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#E4E7E8',
        margin: 15,
        marginBottom: 2,
        borderRadius: 10,
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 7,
        paddingRight: 7,
    },
    boxShadow: {
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 1,
                    height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
            },
            android: {
                shadowColor: '#000',
                elevation: 5,
            },
            default: {},
        })
    },
    flatItem_text: {
        color: '#1C1E21',
        fontWeight: '480',
    },
    itemId: {
        width: 50,
        height: 50,
        backgroundColor: '#F4F1F1',
        borderRadius: 50 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    itemId_text: {
        fontWeight: '500',
        fontSize: 23,
    },
    itemDescription: {
        justifyContent: 'space-around',
    },
    itemDescription_name: {
        fontWeight: '500',
        fontSize: 17,
    },
    itemDescription_des: {
        fontSize: 14,
    },
    addItem: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: '#F4F1F1',
        bottom: 30,
        right: 40,
    },
});

export default App;
