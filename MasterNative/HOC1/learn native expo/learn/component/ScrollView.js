import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, RefreshControl } from 'react-native';

const data = [
    {
        id: 1,
        title: 'afjejfaijifpaepaijfaiew oaijfejfi  aioe iefjafe'
    },
    {
        id: 2,
        title: 'afjejfaijifpaepaijfaiew oaijfejfi  aioe iefjafe'
    },
    {
        id: 3,
        title: 'afjejfaijifpaepaijfaiew oaijfejfi  aioe iefjafe'
    },
    {
        id: 4,
        title: 'afjejfaijifpaepaijfaiew oaijfejfi  aioe iefjafe'
    },
    {
        id: 5,
        title: 'afjejfaijifpaepaijfaiew oaijfejfi  aioe iefjafe'
    },
    {
        id: 6,
        title: 'afjejfaijifpaepaijfaiew oaijfejfi  aioe iefjafe'
    },
    {
        id: 7,
        title: 'afjejfaijifpaepaijfaiew oaijfejfi  aioe iefjafe'
    },
    {
        id: 8,
        title: 'afjejfaijifpaepaijfaiew oaijfejfi  aioe iefjafe'
    },
    {
        id: 9,
        title: 'afjejfaijifpaepaijfaiew oaijfejfi  aioe iefjafe'
    }, {
        id: 10,
        title: 'afjejfaijifpaepaijfaiew oaijfejfi  aioe iefjafe'
    },
    {
        id: 11,
        title: 'afjejfaijifpaepaijfaiew oaijfejfi  aioe iefjafe'
    },
    {
        id: 12,
        title: 'afjejfaijifpaepaijfaiew oaijfejfi  aioe iefjafe'
    },
    {
        id: 13,
        title: 'afjejfaijifpaepaijfaiew oaijfejfi  aioe iefjafe'
    },
    {
        id: 14,
        title: 'afjejfaijifpaepaijfaiew oaijfejfi  aioe iefjafe'
    },
]
const scrollView = () => {
    const [refreshing, setRefreshing] = useState(false);
    const lam_moi = async () => {
        setRefreshing(true);
        await setTimeout(() => setRefreshing(false), 2000);
    }
    return (
        <ScrollView
            contentContainerStyle={styles.scroll}
            onScroll={() => console.log('dang scroll')}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            refreshControl={
                <RefreshControl
                    colors={['tomato']}
                    tintColor="tomato"
                    progressBackgroundColor="blue"
                    progressViewOffset={200}
                    refreshing={refreshing}
                    onRefresh={() => lam_moi()}
                />
            }
        >
            {
                data.map(item => <Text key={item.id} style={styles.title}>{item.title}</Text>)
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scroll: {
        width: '100%',
        backgroundColor: 'red',
    },
    title: {
        width: "100%",
        paddingVertical: 30,
        marginVertical: 20,
    }
})

export default scrollView;
