import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native';

const flatList = () => {
    const [data, setData] = useState([
        {
            id: 1,
            name: "tuan",
            age: 21,
            selected: false,
        },
        {
            id: 2,
            name: "huy",
            age: 20,
            selected: false,
        },
        {
            id: 3,
            name: "quang",
            age: 19,
            selected: false,
        },
        {
            id: 4,
            name: "tai",
            age: 21,
            selected: false,
        },
    ]);
    const handlerSelected = (id) => {
        console.log(id);
        let arr = data.map(item => {
            if (item.id === id) {
                item.selected = true;
            } else {
                item.selected = false;
            }
            return item;
        });
        setData(arr);
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => handlerSelected(item.id)}>
                            <Text style={item.selected ? styles.text : styles.text2}>{item.name}</Text>
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    text: {
        padding: 10,
        margin: 10,
        backgroundColor: 'tomato'
    },
    text2: {
        padding: 10,
        margin: 10,
        backgroundColor: 'green'
    }
})

export default flatList;
