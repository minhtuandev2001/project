import React from "react";
import { Image, Text, View ,StyleSheet} from "react-native";
import user1 from "../assets/user1.png";
function CategoryListItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.item.name}</Text>
      <Image style={styles.categoryImage} source={user1}></Image>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        borderRadius: 5,
        borderColor: 'black',
        backgroundColor: '#fff',
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.34,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        marginTop: 40,
    },
    categoryImage: {
        width: 90,
        height: 90,
        marginTop: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        textTransform: 'uppercase',
    }

});
export default CategoryListItem;
