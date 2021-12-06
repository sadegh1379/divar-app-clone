import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  TextInput
} from 'react-native';
import { COLORS, dummyData, FONTS, icons, images, SIZES } from '../constants';
import { CategoriCard, TrendingCard } from '../components';

const Home = ({navigation}) => {
  return(
    <SafeAreaView style={{flex :1 , backgroundColor:COLORS.white}}>
      <Text>سلام</Text>
    </SafeAreaView>
  ) 
};

export default Home;
