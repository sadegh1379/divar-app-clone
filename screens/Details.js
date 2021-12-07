import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {Dots, HeaderBar} from '../components';
import {COLORS, FONTS, SIZES} from '../constants';
import {CloseIcon, ZoomOut} from '../constants/VectorIcons';

const Details = ({navigation, route}) => {

  const [selectedItem, setSelectedItem] = useState(null);
  const [showFullImages , setShowFullImages] = useState(false)

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
            backgroundColor:COLORS.transparentBlack3,
            bottom : 10,
            right : 10,
            borderRadius : SIZES.radius + 10
        }}
      >
        <TouchableOpacity
            onPress={()=>setShowFullImages(true)}
        >
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

  const renderImageDots = ()=>{
      return(
          <View
            style={{
                position:'absolute',
                bottom : 10,
                left : 80,
                right : 80,
                justifyContent:'center',
                alignItems:'center'
            }}
          >
            <Dots number={selectedItem?.images.length}/>
          </View>
      )
  }


  if(showFullImages){
      return(
          <View
            style={{
                flex : 1,
                display:'flex',
                backgroundColor:COLORS.white,
                justifyContent:'center',
                alignItems:'center'
            }}
          >
              <StatusBar hidden />
              
              <TouchableOpacity
                style={{
                    position:'absolute',
                    top : 10,
                    left : 10,
                    zIndex : 100,
                    padding : 10
                }}
                onPress={()=>setShowFullImages(false)}
              >
                  <CloseIcon color={COLORS.black} size={25}/>
              </TouchableOpacity>
               <FlatList
                    data={selectedItem?.images}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    contentContainerStyle={{
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                    renderItem={({item, index}) => {
                    return (
                        <Image
                        source={item.image}
                        style={{
                            width: SIZES.width,
                            height: 400,
                        }}
                        />
          );
        }}
      />
          </View>
      )
  }

  return (
    <View
      style={{
        // paddingTop: 53,
      }}>
      <HeaderBar
        showBookMark={true}
        bookMarkOnPress={() => console.log('bookmark')}
        showDetails={true}
        DetailsOnPress={() => console.log('details')}
        navigation={navigation}
        customStyle={{
            backgroundColor:'rgba(255,255,255,0.2)',
            zIndex : 20,
            
        }}
      />
      <ScrollView>
        {/* images */}
        <View>
          {renderImages()}
          {renderImageCounter()}
          {renderImageDots()}
        </View>
        {/* details */}
      </ScrollView>
    </View>
  );
};

export default Details;
