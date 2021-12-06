import React from 'react'
import { View, Text, Image } from 'react-native'
import {COLORS, FONTS } from '../constants'
import Entypo from 'react-native-vector-icons/Entypo'

const TabIcon = ({focused , icon , label}) => {
    return (
        <View
            style={{
                width : 50,
                height : 70,
                alignItems:'center',
                justifyContent:'center'
            }}
        >
           <Entypo name={icon} color={focused?COLORS.red : COLORS.gray} size={30} />
           <Text
            style={{
                color: focused ? COLORS.red : COLORS.gray,
                ...FONTS.body5
            }}
           >{label}</Text>
        </View>
    )
}

export default TabIcon
