import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, FONTS, numberWithCommas, SIZES} from '../constants';

const ProductCard = ({image, name, price, location, karkard}) => {
  return (
    <TouchableOpacity>
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
                flex : 1
            }}
           >
               <Text>{ numberWithCommas(price)}</Text>
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
