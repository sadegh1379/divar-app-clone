import React from 'react'
import { View, Text } from 'react-native'
import { TextButton } from '../components'
import { COLORS, FONTS } from '../constants'

const NotNetwork = ({refresh}) => {
    return (
        <View
        style={{
            flex : 1,
            justifyContent:'center',
            alignItems:'center'
        }}
      >
        <Text
            style={{
                ...FONTS.h3,
                color:COLORS.black
            }}
        >ارتباط برقرار نشد</Text>
        <Text
            style={{
                ...FONTS.body4,
                color:COLORS.gray,
                lineHeight : 50
            }}
        >متاسفانه ارتباط بین دستگاه شما و دیوار برقرار نشد. 
            لطفا دوباره تلاش کنید 
        </Text>
        <TextButton
            title="تلاش دوباره"
            customContainerStyle={{
                width : 150,
                height : 50,
                marginTop : 40
            }}
            customBtnStyle={{
                ...FONTS.h3
            }}
            onPress={refresh}
        />
      </View>
    )
}

export default NotNetwork
