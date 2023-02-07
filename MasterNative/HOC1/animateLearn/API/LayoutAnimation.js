// InteractionManager lên lịch trình việc chạy các code js sau khi tương tác/animation hoàn thành 
import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet, Animated, Easing, SafeAreaView, Platform, Text, TouchableOpacity, FlatList, LayoutAnimation, UIManager } from 'react-native';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}
export default function App() {
    const [data, setData] = useState([{ id: 1 }]);
    const [loadData, setLoadData] = useState(false);
    const scaleValue = useRef(new Animated.Value(0.95)).current;
    console.log(scaleValue);
    const addNewItem = () => {
        LayoutAnimation.configureNext(
            {
                duration: 700,
                create: { type: 'linear', property: 'opacity' },
                update: { type: 'spring', springDamping: 0.4 },
                delete: { type: 'linear', property: 'opacity' }
            }
        );
        const newData = {
            id: Math.random()
        };
        console.log(newData);
        setData([...data, newData]);
        setLoadData(!loadData);
    }
    const handleDelItem = (id) => {
        console.log(id);
        LayoutAnimation.configureNext(
            {
                duration: 700,
                update: { type: 'spring', springDamping: 0.4 },
            }
        );
        setData(data.filter((item) => item.id !== id));
        setLoadData(!loadData);
    }
    const handlerLongPress = () => {
        Animated.timing(scaleValue, {
            toValue: 1,
            useNativeDriver: true,
            duration: 300,
            easing: Easing.linear,
            delay: 0,
        }).start();
    }
    const handlerPressOut = () => {
        Animated.timing(scaleValue, {
            toValue: 0.95,
            useNativeDriver: true,
            duration: 150,
            easing: Easing.linear,
            delay: 0,
        }).start();
    }
    return (
        // chưa sửa được chổ này 
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item, index }) =>
                    <TouchableOpacity activeOpacity={1}
                        onPress={() => handleDelItem(item.id)}
                        onLongPress={() => handlerLongPress(item.id)}
                        onPressOut={() => handlerPressOut(item.id)}
                    >
                        <Animated.View style={{
                            backgroundColor: "tomato",
                            width: "100%",
                            height: 65,
                            marginBottom: 10,
                            borderRadius: 10,
                            transform: [
                                {
                                    scale: scaleValue,
                                }
                            ]
                        }}>
                            <Text>{index}</Text>
                        </Animated.View>
                    </TouchableOpacity>
                }
                keyExtractor={(item) => item.id}
                //extraData={loadData} mờ màn hình
                style={{
                    width: "100%",
                    paddingHorizontal: 7,
                }}
            >
            </FlatList>
            <TouchableOpacity style={{
                position: "absolute",
                bottom: 50,
                right: 50,
                backgroundColor: '#1EB2A6',
                width: 65,
                height: 65,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100,
            }}
                onPress={() => addNewItem()}
            >
                <Text style={{
                    color: "#FFFFFF",
                    fontWeight: "bold",
                }}>+ add</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        ...Platform.select({
            android: {
                marginTop: 40,
            }
        })
    },
})