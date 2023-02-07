import React from "react";
import { Image, Text, View , StyleSheet,Button } from "react-native";
function ButtonCustom (){
onPressLearnMore = () => {
    Alert.alert("bấm cái gì mà bấm");
  };
  return (
      <Button
        onPress={onPressLearnMore}
        title="Press me"
        color='#f194ff'
        accessibilityLabel="Learn more about this purple button"
      />
  );
}
export default ButtonCustom;
