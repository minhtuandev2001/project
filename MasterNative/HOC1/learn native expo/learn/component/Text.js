import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const text = () => {
    return (
        <Text 
        numberOfLines={1}
        ellipsizeMode="head" // head , middle, tail, clip
        maxFontSizeMultiplier={2}
        selectable={true}
        selectionColor="tomato"
        // ios
        mininumFontSize={0.2}
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fugiat ex architecto quidem quaerat ad.</Text>
    );
}

const styles = StyleSheet.create({})

export default text;
