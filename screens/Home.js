import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const COLORS = [
    {colorName:"Cyan", hexCode:"#2aa198"},
    {colorName:"Orange", hexCode:"#cb4b16"},
    {colorName:"Blue", hexCode:"#268bd2"},
    {colorName:"Magenta", hexCode:"#d33682"},
    {colorName:"white", hexCode:"#ffffff"},
]

export default function Home({navigation}) {
    return (
        <View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('ColorPallete', {
                    palleteName:'Colors',
                    colors:COLORS
                })
            }} >
                <Text>Color World</Text>
            </TouchableOpacity>
        </View>
    )
}
