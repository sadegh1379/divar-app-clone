import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {HeaderBar} from '../components';
import {COLORS, FONTS, SIZES} from '../constants';
import {ZoomOut} from '../constants/VectorIcons';

const Details = ({navigation, route}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const {product} = route.params;
    setSelectedItem(product);
  }, []);

  const renderImages = () => {
    return (
      <FlatList
        data={selectedItem?.images}
        keyExtractor={item => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({item, index}) => {
          return (
            <Image
              source={item.image}
              style={{
                width: SIZES.width,
                height: 300,
              }}
            />
          );
        }}
      />
    );
  };

  const renderImageCounter = () => {
    return (
      <View
        style={{
            position:'absolute',
            backgroundColor:COLORS.darkGray,
            bottom : 10,
            right : 10,
            borderRadius : SIZES.radius + 10
        }}
      >
        <TouchableOpacity>
          <View
            style={{
                flexDirection:'row',
                borderRadius : SIZES.radius,
                width :65 ,
                height : 35,
                justifyContent:'center',
                alignItems:'center'
            }}
          >
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.white,
                marginRight : 10
              }}>
              {selectedItem?.images?.length}
            </Text>
            <ZoomOut size={25} color={COLORS.white} />

          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={{
        paddingTop: 55,
      }}>
      <HeaderBar
        showBookMark={true}
        bookMarkOnPress={() => console.log('bookmark')}
        showDetails={true}
        DetailsOnPress={() => console.log('details')}
        navigation={navigation}
      />
      <ScrollView>
        {/* images */}
        <View>
          {renderImages()}
          {renderImageCounter()}
        </View>
        {/* details */}
      </ScrollView>
    </View>
  );
};

export default Details;
