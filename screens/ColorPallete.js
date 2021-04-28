import React from 'react'
import { Text, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import ColorBox from '../components/ColorBox'

const COLORS = [
    {colorName:"Cyan", hexCode:"#2aa198"},
    {colorName:"Orange", hexCode:"#cb4b16"},
    {colorName:"Blue", hexCode:"#268bd2"},
    {colorName:"Magenta", hexCode:"#d33682"},
    {colorName:"white", hexCode:"#ffffff"},
]

export default function ColorPallete() {
    return (
        <SafeAreaView style={{ flex: 1 }} >
        {/* <StatusBar/> */}
            <FlatList
                style={styles.container}
                    data={COLORS}
                        keyExtractor={item => item.colorName}
                            renderItem={({ item }) => (
                                <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
                            )}
                ListHeaderComponent={<Text style={styles.text}>Color Legend</Text>}
            />
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop:40,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom:10,
    },
});