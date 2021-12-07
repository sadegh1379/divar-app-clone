import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {BottomModal, Dots, HeaderBar, TextButton} from '../components';
import {COLORS, FONTS, numberWithCommas, SIZES} from '../constants';
import {CloseIcon, LeftIcon, ZoomOut} from '../constants/VectorIcons';

const Details = ({navigation, route}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showFullImages, setShowFullImages] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);

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
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setShowFullImages(true)}>
              <Image
                source={item.image}
                style={{
                  width: SIZES.width,
                  height: 290,
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  const renderImageCounter = () => {
    return (
      <View
        style={{
          position: 'absolute',
          backgroundColor: COLORS.transparentBlack3,
          bottom: 10,
          right: 10,
          borderRadius: SIZES.radius + 10,
        }}>
        <TouchableOpacity onPress={() => setShowFullImages(true)}>
          <View
            style={{
              flexDirection: 'row',
              borderRadius: SIZES.radius,
              width: 65,
              height: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.white,
                marginRight: 10,
              }}>
              {selectedItem?.images?.length}
            </Text>
            <ZoomOut size={25} color={COLORS.white} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderImageDots = () => {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          left: 80,
          right: 80,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Dots number={selectedItem?.images.length} />
      </View>
    );
  };

  const renderDetailsHeader = () => {
    return (
      <View
        style={{
          height: 80,
          backgroundColor: COLORS.lightGray,
          padding: SIZES.base,
        }}>
        <Text style={styles.largeText}>{selectedItem?.name}</Text>
        <Text style={styles.grayText}>
          دقایقی پیش در {selectedItem?.location} | {selectedItem?.group}
        </Text>
      </View>
    );
  };

  const renderTreeDetail = () => {
    return (
      <View
        style={{
          backgroundColor: COLORS.lightGray,
          height: 100,
        }}>
        <View
          style={{
            borderTopWidth: 1,
            borderTopColor: COLORS.border,
            borderBottomColor: COLORS.border,
            borderBottomWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%',
            marginHorizontal: SIZES.base,
            paddingVertical: SIZES.base,
          }}>
          {/* karkard */}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              flex: 1,
            }}>
            <Text style={styles.grayText}>کارکرد</Text>
            <Text style={styles.medText}>{selectedItem?.karkard}</Text>
          </View>
          {/* tolid */}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              flex: 1,
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderLeftColor: COLORS.border,
              borderRightColor: COLORS.border,
            }}>
            <Text style={styles.grayText}>مدل (سال تولید)</Text>
            <Text style={styles.medText}>1399</Text>
          </View>
          {/* rang */}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              flex: 1,
            }}>
            <Text style={styles.grayText}>رنگ</Text>
            <Text style={styles.medText}>{selectedItem?.rang}</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderOtherDetails = () => {
    return (
      <View
        style={{
          padding: SIZES.base,
          backgroundColor: COLORS.lightGray,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 40,
          }}>
          <Text style={styles.grayText}>برند و تیپ</Text>
          <Text style={styles.defText}>{selectedItem?.brand}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 40,
            borderTopWidth: 1,
            borderTopColor: COLORS.border,
          }}>
          <Text style={styles.grayText}>مهلت بیمه شخص ثالث</Text>
          <Text style={styles.defText}>{selectedItem?.bime}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 40,
            borderTopWidth: 1,
            borderTopColor: COLORS.border,
          }}>
          <Text style={styles.grayText}>گیربکس</Text>
          <Text style={styles.defText}>{selectedItem?.girbox}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 40,
            borderTopWidth: 1,
            borderTopColor: COLORS.border,
          }}>
          <Text style={styles.grayText}>سند</Text>
          <Text style={styles.defText}>{selectedItem?.sanad}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 40,
            borderTopWidth: 1,
            borderTopColor: COLORS.border,
          }}>
          <Text style={styles.grayText}>فروش</Text>
          <Text style={styles.defText}>{selectedItem?.forosh}</Text>
        </View>
      </View>
    );
  };

  const renderElevitionAndPrice = () => {
    return (
      <View
        style={{
          backgroundColor: COLORS.lightGray,
          marginVertical: SIZES.base,
          height: 275,
          padding: SIZES.base,
          marginBottom: SIZES.padding,
        }}>
        {/* price */}
        <View style={[styles.centerBetween, {padding: SIZES.base}]}>
          <Text style={styles.grayText}>قیمت</Text>
          <Text style={styles.defText}>
            {numberWithCommas(selectedItem ? selectedItem.price : 0)}
          </Text>
        </View>
        {/* color box */}
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: SIZES.base,
            justifyContent: 'center',
            marginVertical: SIZES.base,
            borderTopWidth: 1,
            borderTopColor: COLORS.border,
            paddingTop: 50,
            paddingBottom: SIZES.base,
          }}>
          <View
            style={[
              styles.colorView,
              {
                backgroundColor: 'gold',
                borderTopLeftRadius: SIZES.radius,
                borderBottomLeftRadius: SIZES.radius,
              },
            ]}>
            <Text style={{color: COLORS.white, ...FONTS.body5}}>پایین</Text>
          </View>
          <View style={[styles.colorView, {backgroundColor: COLORS.lime}]}>
            <Text style={{color: COLORS.white, ...FONTS.body5}}>منصفانه</Text>
          </View>
          <View
            style={[
              styles.colorView,
              {
                backgroundColor: COLORS.darkGreen,
                borderTopRightRadius: SIZES.radius,
                borderBottomRightRadius: SIZES.radius,
              },
            ]}>
            <Text style={{color: COLORS.white, ...FONTS.body5}}>بالا</Text>
          </View>
        </View>
        {/* description */}
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.black,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.border,
            paddingBottom: SIZES.base,
            paddingHorizontal: SIZES.base,
          }}>
          کوییک مدل اسفند ۹۸ لاستیکها صد درصد بیمه ۳ ماه کم کار کرده تو پارکینگ
          مصقف بوده بسیار خانگی بوده وماشین دوم استفاده شده و خوب نگهداری شده در
          حد نو هستش .....ینی سالی ۹تابیشتر راه نرفته
        </Text>
        {/* get elevition */}
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: SIZES.base,
              paddingVertical: SIZES.base + 10,
            }}>
            <Text style={{color: COLORS.black, ...FONTS.body3}}>
              نحوه ارزیابی قیمت
            </Text>
            <LeftIcon color={COLORS.gray} size={20} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderFixedPhoneInfo = () => {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
          backgroundColor: COLORS.white,
          padding: SIZES.base,
          zIndex: 5,
        }}>
        <TextButton
          title="اطلاعات تماس"
          onPress={() => console.log('phone info')}
          customContainerStyle={{
            width: '100%',
            height: '100%',
          }}
          onPress={() => setShowPhoneModal(true)}
        />
      </View>
    );
  };

  if (showFullImages) {
    return (
      <View
        style={{
          flex: 1,
          display: 'flex',
          backgroundColor: COLORS.white,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <StatusBar hidden />

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            zIndex: 100,
            padding: 10,
          }}
          onPress={() => setShowFullImages(false)}>
          <CloseIcon color={COLORS.black} size={25} />
        </TouchableOpacity>
        <FlatList
          data={selectedItem?.images}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
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
    );
  }

  return (
    <View
      style={{
        paddingBottom: 38,
      }}>
      <HeaderBar
        showBookMark={true}
        bookMarkOnPress={() => console.log('bookmark')}
        showDetails={true}
        DetailsOnPress={() => console.log('details')}
        navigation={navigation}
        customStyle={{
          backgroundColor: 'rgba(255,255,255,0.2)',
          zIndex: 20,
        }}
      />

      {/* fixed phone info */}
      {renderFixedPhoneInfo()}
      {/* phone modal */}
      {showPhoneModal && (
        <BottomModal onClose={() => setShowPhoneModal(false)}>
          <Text>sadegh</Text>
        </BottomModal>
      )}

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* images */}
        <View>
          {renderImages()}
          {renderImageCounter()}
          {renderImageDots()}
        </View>
        {/* details */}
        {renderDetailsHeader()}
        {renderTreeDetail()}
        {renderOtherDetails()}
        {/* Evaluation and price */}
        {renderElevitionAndPrice()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  largeText: {
    ...FONTS.h2,
    color: COLORS.black,
  },
  grayText: {
    ...FONTS.body4,
    color: COLORS.gray,
  },
  defText: {
    ...FONTS.h4,
    color: COLORS.black,
  },
  medText: {
    ...FONTS.h2,
    color: COLORS.black,
  },
  centerBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  colorView: {
    flex: 1,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Details;
