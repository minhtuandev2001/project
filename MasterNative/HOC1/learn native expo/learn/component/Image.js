import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const image = () => {
    return (
        <>
            <Image style={styles.image} source={require('../assets/icon.png')} />
            <Image style={styles.image} source={{ uri: "https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/317350200_6523278171021055_7324997834279807312_n.png?stp=dst-png_p526x296&_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=wtqZASKx_6gAX-tUOhO&_nc_ht=scontent.fdad3-3.fna&oh=00_AfCapNeZ8kGuqGOMlOH5RC1jTn7ky-A-mUaaJC-iY1ZDAA&oe=639263B7" }} />
            <Image style={styles.image} source={{ uri: "'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='" }} />
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    }
})

export default image;
