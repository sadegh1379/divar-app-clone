import React from 'react'
import { View,
     Text,
     TouchableOpacity,
     StatusBar
     } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'
import { BookMarkIcon, RightArrow, VerticalDotsIcon } from '../constants/VectorIcons'

const HeaderBar2 = ({right  , title , customStyle , rightOnPress  , barStyle="dark" , barColor = "#fff"}) => {
    return (
        <View
            style={{
                padding:SIZES.base+ 5,
                backgroundColor:COLORS.gray2,
                flexDirection:'row',
                ...customStyle
            }}
        >
            <StatusBar barStyle={`${barStyle}-content`} backgroundColor={barColor}/>

            {/* back icon */}
            <View
                style={{
                    alignItems:'flex-start',
                    flex : 6
                }}
            >
               <Text
                style={{
                    ...FONTS.h3,
                    color:COLORS.black
                }}
               >{title}</Text>
            </View>
            {/* lefts */}
            <View
                style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                }}
            >
                {
                    right && (
                        <TouchableOpacity
                            onPress={rightOnPress}
                        >
                            <VerticalDotsIcon size={25} color={COLORS.darkGray}/>
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    )
}

export default HeaderBar2
