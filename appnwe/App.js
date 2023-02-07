import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddUser from './screens/AddUser';
import AddCotegory from './screens/AddCotegory';
import { Keyboard } from 'react-native';


export default function App() {
    // const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer onPress={()=>{Keyboard.dismiss()}}>
            <Tab.Navigator>
                <Tab.Screen name="AddUser" component={AddUser} />
                <Tab.Screen name="AddCotegory" component={AddCotegory} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
