import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const Setting = ({ navigation }) => {
    return (
        <View>
            <Text>Setting</Text>
            <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
            <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Setting;
