import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';

const imageBackground = () => {
    return (
            <ImageBackground style={styles.imageBackground} source={{uri :"https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/317350200_6523278171021055_7324997834279807312_n.png?stp=dst-png_p526x296&_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=wtqZASKx_6gAX-tUOhO&_nc_ht=scontent.fdad3-3.fna&oh=00_AfCapNeZ8kGuqGOMlOH5RC1jTn7ky-A-mUaaJC-iY1ZDAA&oe=639263B7"}}>
            </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imageBackground:{
        flex: 1,
        width: "100%",
        height: "100%",
    }
})

export default imageBackground;
