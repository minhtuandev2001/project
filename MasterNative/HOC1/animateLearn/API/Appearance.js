import React, { useCallback, useEffect } from 'react'
import { View, Text, StyleSheet, useColorScheme, StatusBar } from 'react-native'
import { Appearance } from 'react-native-web';

export default function App() {
    // const systemScheme = useColorScheme();
    // const themeObject = systemScheme === 'light' ? 'light' : 'dark';

    const toggleTheme = useCallback((colorScheme) => {
        const statusBarTheme = colorScheme === 'light' ? 'light' : 'light'; // colorScheme là light thì cho dark và ngược lại 
        StatusBar.setBarStyle(`${statusBarTheme}-content`);
    }, []);
    useEffect(() => {
        Appearance.addChangeListener((colorScheme) => {
            toggleTheme(colorScheme);
        })
        return () => {
            Appearance.removeChangeListener(); // sẽ bị lỗi nhưng không sao // cái này dành cho việc thoát khỏi màn hình mới hoạt động đúng, còn nếu chỉ freshing điện lúc dev thì mới bị lỗi 
        };
    }, [toggleTheme]);
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="tomato"></StatusBar>
            <View style={{
                width: 100,
                height: 100,
                backgroundColor: "tomato",
                borderRadius: 10,
                marginTop: 50,
                marginLeft: 10
            }}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})