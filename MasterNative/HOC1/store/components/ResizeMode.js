import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import anh1 from "../assets/NewYork.jpg";

function ImageList() {
  return (
    <View>
      <View>
        <Image style={styles.image} source={anh1} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    resizeMode: "center",
    width: 300,
    height: 300,
  },
});

export default ImageList;
