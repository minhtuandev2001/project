import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, RefreshControl, Text } from 'react-native';

const refreshControl = () => {
    const [refreshing, setRefreshing] = useState(false);

    const handlerRefresh = async () => {
        setRefreshing(true); // hiển thị refreshing 
        // load data giả , sau 3s thì hết hiển thị refreshing 
        await setTimeout(() => setRefreshing(false), 3000);

    }
    return (
        <View style={styles.listData}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={() => handlerRefresh()}
                        // style
                        colors={['#D50000']}
                        tintColor={'#D50000'}
                        progressBackgroundColor="tomato"
                        progressViewOffset={200}
                    />
                }
            >
                <Text>Pull bottom update data</Text>
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    listData: {
        flex: 1,
        width: "100%",
        height: "100%",
        paddingTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    }
})

export default refreshControl;
