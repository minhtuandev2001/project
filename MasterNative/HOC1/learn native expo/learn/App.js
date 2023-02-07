import { StyleSheet, View } from 'react-native';
// import ActivityIndicator from './component/ActivityIndicator';
// import FlatList from './component/FlatList';
// import Image from './component/Image';
// import ImageBackground from './component/ImageBackground';
// import KeyboardAvoidingView from './component/KeyBoardAvoidingView';
// import Modal from './component/Modal';
// import Press from './component/Press';
// import RefreshControl from './component/RefreshControl';
// import ScrollView from './component/ScrollView';
// import StatusBar from './component/Statusbar';
// import Switch from './component/Switch';
// import Text from './component/Text';
// import TextInput from './component/TextInput';
// import TouchableHighlight from './component/TouchableHighlight';
import TouchableOpacity from './component/TouchableOpacity';

export default function App() {
    return (
        <View style={styles.container}>
            {/* <ActivityIndicator></ActivityIndicator> */}
            {/* <FlatList></FlatList> */}
            {/* <Image></Image> */}
            {/* <ImageBackground></ImageBackground> */}
            {/* <KeyboardAvoidingView></KeyboardAvoidingView> */}
            {/* <Modal></Modal> */}
            {/* <Press></Press> */}
            {/* <RefreshControl></RefreshControl> */}
            {/* <ScrollView></ScrollView> */}
            {/* <StatusBar></StatusBar> */}
            {/* <Switch></Switch> */}
            {/* <Text></Text> */}
            {/* <TextInput></TextInput> */}
            {/* <TouchableHighlight></TouchableHighlight> */}
            <TouchableOpacity></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
