import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BottomTab({ navigation, route },props) {
    console.log(navigation); 
    const [home, setHome] = useState('home');
    const [book, setBook] = useState('ios-book-outline');
    return (
        <View style={styles.BottomTabContainer}>
            <TouchableOpacity style={styles.BottomTabItem}
                onPress={() => (
                    setHome('home'),
                    setBook('ios-book-outline'),
                    navigation.navigate('Home')
                )}
            >
                <Ionicons name={home} size={26} color="tomato" />
                <Text style={styles.BottomTabTitle}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.BottomTabItem}
                onPress={() => (
                    setHome('home-outline'),
                    setBook('ios-book'),
                    console.log('hello'),
                    navigation.navigate('Phonebook')
                )}
            >
                <Ionicons name={book} size={26} color="tomato" />
                <Text style={styles.BottomTabTitle}>PhoneBook</Text>
            </TouchableOpacity>
        </View>
    )
}
{/* <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            if (route.name === 'Home') {
                                iconName = focused
                                    ? 'home'
                                    : 'home-outline';
                            } else if (route.name === 'Phonebook') {
                                iconName = focused ? 'ios-book' : 'ios-book-outline';
                            }
                            // You can return any component that you like here!
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: 'tomato',
                        tabBarInactiveTintColor: 'tomato',
                    })}
                >
                    <Tab.Screen options={{
                        title: 'Home',
                        headerStyle: {
                            // backgroundColor: 'tomato'
                            // color: 'tomato'
                        },
                        headerTitleStyle: {
                            color: 'tomato'
                        },
                        headerShown: false,
                        tabBarStyle: {
                            // display: 'none'
                            // backgroundColor: '',
                            // zIndex: 
                        }
                    }} name="Home" component={ChatStackScreen} />
                    <Tab.Screen
                        options={{
                            headerShown: false,
                        }}
                        name="Phonebook" component={Phonebook} />
                </Tab.Navigator> */}


const TEXT_TAB = {
    fontSize: 12,
    fontWeight: '500',
    color: 'tomato'
}
const styles = StyleSheet.create({
    BottomTabContainer: {
        width: '100%',
        height: 48.5,
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255,0.99)',
    },
    BottomTabItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    BottomTabTitle: {
        ...TEXT_TAB,
    }
})