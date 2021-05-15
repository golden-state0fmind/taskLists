import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'



export default function Test() {
    return (
        <View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('', {
                })
            }}>
                <Text styles={styles.text} > Click me for a form</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        justifyContent: 'center',
        fontSize: 18,
        fontWeight:'bold'
    }
})
