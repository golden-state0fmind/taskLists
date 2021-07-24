import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const TODOS = [
    { taskName: 'wash laundry', completed: false, key: 0 },
    { taskName: 'walk the dog', completed: true, key: 1 },
    { taskName: 'wash dishes', completed: false, key: 2 },
    { taskName: 'clean garage', completed: true, key: 3 }
];

export default function Home({navigation}) {
    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={() => {
                navigation.navigate('TodoList', {
                    taskName:'Tasks', //this is the header to be displayed from Todolist ListHeaderComponent
                    todos:TODOS //passing down todos array to TodoList
                })
            }} >
                <Text style={styles.text} >Todo List</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Add To-Do")
                }}
            >
                <Text style={styles.text} >Add To-Do</Text>
            </TouchableOpacity>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        flexDirection:'row',
        margin: 20,
        borderWidth: 3,
        borderColor: 'red',
        borderStyle: 'solid'
    },
    text: {
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 20,
        borderWidth: 3,
        borderColor: 'green',
        borderStyle: 'solid'
    }
});