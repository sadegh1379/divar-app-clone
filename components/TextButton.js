import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'

const TextButton = ({title , onPress , customContainerStyle , customBtnStyle}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                backgroundColor:COLORS.red,
                justifyContent:'center',
                alignItems:'center',
                borderRadius:SIZES.radius - 8,
                ...customContainerStyle
            }}
        >
            <Text
                style={{
                    ...FONTS.body3,
                    color:COLORS.white,
                    ...customBtnStyle
                }}
            >{title}</Text>
        </TouchableOpacity>
    )
}

export default TextButton
