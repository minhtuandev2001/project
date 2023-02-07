import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ActivityIndicator,
  Button,
  Text,
  ScrollView,
  View,
  FlatList,
  Alert,
  Image,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import CategoryListItem from "./components/CategoryListItem.js"; // bai1
import ImageList from "./components/ResizeMode.js"; // bai2
import BorderRadius from "./components/BorderRadius.js"; // bai3
import ButtonCustom from "./components/Button.js"; // Button.js
import anhdep from "./assets/anhdep.jpg"; // image

<script src="http://localhost:8097"></script>;
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.image} source={anhdep} resizeMode="cover">
      <Text>Inside</Text>
    </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cyan",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "space-around"
  },
});
