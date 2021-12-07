import React from 'react'
import { View, Text } from 'react-native'
import { COLORS, FONTS } from '../constants'

const Dots = ({number , index , color , customStyle}) => {

    const items = []

    for(var i =0 ; i<number ; i++){
        items.push(
            <View
                key={`item-${i}`}
                style={{
                    height : 10,
                    width : 10,
                    borderRadius : 10,
                    backgroundColor:COLORS.white,
                    marginLeft : i == 0 ? 0 : 6
                }}
            />
        )
    }
    return (
        <View
            style={{
                flexDirection:'row',
                ...customStyle
            }}
        >
           {items}
        </View>
    )
}

export default Dots
