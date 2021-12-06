import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import { COLORS, dummyData, FONTS, icons, images, SIZES } from '../constants';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import { HomeIcon , CarIcon, PhoneIcon, LightIcon, ServiceIcon,
   WatchIcon, DiceIcon, GroupIcon, UserIcon, BagIcon
   } from '../constants/VectorIcons';

const Home = ({navigation}) => {

  const renderSeachBar = ()=>{
    return(
      <View
        style={{
          paddingHorizontal : SIZES.base,
          paddingTop : SIZES.base,
          backgroundColor:COLORS.lightGray,
          height : 80,

        }}
      >
        <View
          style={{
            flexDirection:'row',
            alignItems:'center',
            backgroundColor:COLORS.white,
            borderWidth :1,
            borderColor : COLORS.gray,
            borderRadius:SIZES.radius - 4,
            padding:SIZES.base - 5,
          }}
        >
          <AntDesign name="search1" size={25} style={{marginRight : 5}}/>
          <TextInput
            placeholder="جستجو در همه آگهی ها"
            placeholderTextColor={COLORS.gray}
            textAlign="right"
            style={{
              padding:5,
              height : 40,
              fontFamily : 'IRANSansMobile',
              fontSize : 16,
              width : '80%'
            }}
          />
            {/* city */}
          <View
            style={{
              position:'absolute',
              top : 10,
              right : 10
            }}
          >
          <TouchableOpacity
            activeOpacity={0.4}
            style={{
              borderLeftWidth:2,
              borderLeftColor : COLORS.gray,
              paddingLeft : SIZES.base
            }}
            // onpress
            onPress={()=>alert('navigate to Cityes')}
          >
            <View 
              style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
              }}
            >
              <Text
                style={{
                  color:COLORS.black,
                  ...FONTS.h3,
                  marginRight : 10

                }}
              >
                 20 شهر 
              </Text>
              <Octicons name="location" size={25} color={COLORS.gray}/>
            </View>
          </TouchableOpacity>
        </View>
        </View>
      
      </View>    
    )
  }

  const renderCategoryItem = ({item , index})=>{
    return(
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          width :120,
          height : 150,
          justifyContent:'center',
          alignItems:'center',
        }}
      >
        {/* icon */}
        <View 
          style={{
            borderWidth :1,
            borderColor:COLORS.gray,
            width :50,
            height : 50,
            justifyContent:'center',
            alignItems:'center',
            borderRadius : 25
          }}
        >
          {item.icon(COLORS.darkGray,25)}
        </View>
        {/* text */}
        <Text 
          style={{
            ...FONTS.body4,
            color:COLORS.darkGray,
            marginTop : SIZES.padding
          }}
        >{item.name}</Text>
      </TouchableOpacity>
    )
  }

  const renderCategories = ()=>{
    return(
      <View>
       <FlatList
            data={dummyData.homeCategories}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item =>`${item.id}`}
            renderItem={renderCategoryItem}
            style={{
              backgroundColor:COLORS.lightGray
            }}
       />
      </View>
    )
  }

  return(
    <SafeAreaView style={{flex :1 , backgroundColor:COLORS.white}}>
      {/* search bar */}
      {renderSeachBar()}
      {/* categories */}
      {renderCategories()}
      {/* recently see */}
      {/* products */}
    </SafeAreaView>
  ) 
};

export default Home;
