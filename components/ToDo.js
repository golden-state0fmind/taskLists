import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ToDo({ taskName, completed }) {
    //create function that checks if item is completed or not
    const isTrue = (completed === "true"); //checking the string value 
    const isComplete = {
        backgroundColor: isTrue ? 'green' : 'red', //if completed is true change background to green
        color: isTrue ? 'white' : 'black' //change the text color to white if completed is true
    };
    return (
        <View style={styles.box} > 
            <Text style={styles.taskText, isComplete} > {taskName} : {completed} </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    box: {
        padding: 10,
        marginBottom: 10,
        borderWidth: 2, //borders are here to give visual for each task 
        borderColor: 'green',
        borderStyle: 'solid',
    },
    taskText: {
        color: 'black',
        fontWeight: 'bold',
    },
});

export default ToDo;
