import React from 'react';
import { Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ToDo from '../components/ToDo';

function TodoList({ route }) {
    //taskName and todos passed in from Home
    const { todos, taskName } = route.params;
    return (
        <SafeAreaView style={{ flex: 1 }} >
            <FlatList //flatten the array of objects
                style={styles.container}
                data={todos} //this is the array of objects 
                keyExtractor={(item, index) => index.toString()} //using the index of the array as a key
                renderItem={({ item }) => (
                    <ToDo taskName={item.taskName} completed={item.completed.toString()} /> //rendering each task
                )}
                ListHeaderComponent={<Text style={styles.text} >{ taskName }</Text>}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 40,
        borderColor: 'red',
        borderWidth: 3,
        borderStyle: "solid"
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 30
    }
});

export default TodoList;
