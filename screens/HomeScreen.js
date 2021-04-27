import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native'; //  can build theme in components later

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >Welcome to the Home Screen</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
    },
    titile: {
        fontSize: 20,
        fontWeight:'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width:'80%'
    },
})