import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal, Text } from 'react-native';

const modal = () => {
    const [isVisible,setIsVisible] = useState(false);
    return (
        <View style={styles.modal}>
            <TouchableOpacity onPress={()=> setIsVisible(true)}>
                <Text style={styles.onModal}>Visible modal</Text>
            </TouchableOpacity>
            <Modal
            visible={isVisible}
            statusBarTranslucent={true}
            >
                <View style={styles.modalVisible}>
                    <Text style={styles.text}>Chao nha</Text>
                    <TouchableOpacity onPress={()=> setIsVisible(false)}>
                        <Text style={styles.onModal}>hidden modal</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        height: "100%",
        width: '100%',
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    onModal: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        color: '#FFFFFF',
        backgroundColor: 'tomato',
        borderRadius: 15,
    },
    modalVisible:{
        height: "100%",
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default modal;
