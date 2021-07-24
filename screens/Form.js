import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';



export default function Form({navigation}) {
    return (
        <View style={styles.container} >
            <Text style={styles.text}> Add to your list </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center' 
    },
    text: {
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop:15,
    }
});
