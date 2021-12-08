import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { COLORS } from '../constants'

const Loading = () => {
    return (
        <View
            style={{
                position:'absolute',
                top : 0,
                left : 0,
                right : 0,
                bottom:0,
                backgroundColor:COLORS.transparentBlack1,
                zIndex : 1,
                justifyContent:'center',
                alignItems:'center'
            }}
        >
            <ActivityIndicator size="large" color={COLORS.red}/>
        </View>
    )
}

export default Loading
