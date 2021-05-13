import React from 'react'
import { Text, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import ColorBox from '../components/ColorBox'


export default function ColorPallete({ route }) {
    const {colors,palleteName} = route.params
    return (
        <SafeAreaView style={{ flex: 1 }} >
        {/* <StatusBar/> */}
            <FlatList
                style={styles.container}
                data={colors}
                keyExtractor={item => item.hexCode}
                renderItem={({ item }) => (
                    <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
                )}
                ListHeaderComponent={<Text style={styles.text}>{palleteName}</Text>}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 40,
        backgroundColor:'white',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom:10,
    },
});