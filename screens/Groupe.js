import {isTemplateElement, isTSEnumMember} from '@babel/types';
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {HeaderBar2} from '../components';
import {COLORS, dummyData, FONTS, SIZES} from '../constants';
import {LeftIcon} from '../constants/VectorIcons';

const Groupe = () => {

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        // on press
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height:45,
            padding : 3
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {item.icon(COLORS.darkGray, 25)}
            <Text 
                style={{
                    ...FONTS.body4,
                    color:COLORS.darkGray,
                    marginLeft : 20

                }}
            >{item.name}</Text>
          </View>
          <View>
            <LeftIcon color={COLORS.gray} size={15} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightGray}}>
      <HeaderBar2
        title="دسته بندی آگهی ها"
        barStyle="dark"
        barColor={COLORS.lightGray}
      />
      <View
        style={{
          padding: SIZES.base,
        }}>
        <FlatList
          data={dummyData.homeCategories}
          keyExtractor={item => `${item.id}`}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          ItemSeparatorComponent={()=>(
            <View
            style={{
                backgroundColor:COLORS.lightGray,
                height : 1,
                marginVertical : 2
            }}
          />
          )
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Groupe;
