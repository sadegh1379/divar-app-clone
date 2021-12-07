import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, FONTS, numberWithCommas, SIZES} from '../constants';

const ProductCard = ({image, name, price, location, karkard , onPress}) => {
  return (
    <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={{
            backgroundColor:COLORS.white
        }}
    >
      <View
        style={{
            height : 200,
            flexDirection:'row',
            padding:SIZES.base
        }}
      >
          {/* details */}
           <View
            style={{
                flex : 1,
                padding : 10,
                
            }}
           >
               <View>
                   <Text
                    style={{
                        ...FONTS.h2,
                        color:COLORS.black
                    }}
                   >{name}</Text>
               </View>
               <View 
                style={{
                    height:'80%',
                    justifyContent:'flex-end',
                    
                }}
               >
                   <Text
                    style={{
                        ...FONTS.body4,
                        color:COLORS.gray
                    }}
                   >
                       کارکرد {karkard} کیلومتر
                   </Text>
                    <Text
                         style={{
                            ...FONTS.body4,
                            color:COLORS.gray,
                            lineHeight : 30
                        }}
                    >{ numberWithCommas(price)} تومان</Text>
                    <Text
                         style={{
                            ...FONTS.body4,
                            color:COLORS.gray
                        }}
                    >در {location}</Text>
               </View>
           </View>
          {/* image */}
          <View
            style={{
                justifyContent:'center',
                alignItems:'center',
            }}
          >
            <Image
                source={image}
                style={{
                    width:160,
                    height :160,
                    borderRadius : SIZES.radius - 6
                }}
                resizeMode="cover"
            />
          </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
