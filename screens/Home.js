import React , {useState , useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  TextInput,
  ScrollView,
  RefreshControl
} from 'react-native';
import { COLORS, dummyData, FONTS, icons, images, SIZES } from '../constants';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import { HomeIcon , CarIcon, PhoneIcon, LightIcon, ServiceIcon,
   WatchIcon, DiceIcon, GroupIcon, UserIcon, BagIcon
   } from '../constants/VectorIcons';
import { ProductCard } from '../components';


const Home = ({navigation}) => {
  
  // state
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showCatText , setShowCatText] = useState(true);
  const [categoryItemHeight , setCategiryItemHeight] = useState(120)
  const [refreshing, setRefreshing] = React.useState(false);

  // functions
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
              width : '80%',
              paddingRight : 50
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
          width :100,
          height : categoryItemHeight ,
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
            borderRadius : 25,
            backgroundColor:COLORS.white
          }}
        >
          {item.icon(COLORS.darkGray,25)}
        </View>
        {/* text */}
        {showCatText && (
            <Text 
            style={{
              ...FONTS.body4,
              color:COLORS.darkGray,
              marginTop : SIZES.padding
            }}
          >{item.name}</Text>
        )}
      
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
              backgroundColor:COLORS.lightGray,
              borderBottomWidth : 1,
              borderBottomColor:COLORS.gray,
            
            }}
       />
      </View>
    )
  }

  const handleScroll = (event)=>{
    let newPosition = event.nativeEvent.contentOffset.y
    if(scrollPosition < newPosition + 5){
      setShowCatText(false)
      setCategiryItemHeight(80)
      setScrollPosition(newPosition)
    }else{
      setShowCatText(true)
      setCategiryItemHeight(120)
      setScrollPosition(newPosition)
    }
  }


  const renderRecently = ()=>{
    return(
      <View>
            <Text 
                style={{
                        ...FONTS.h2,
                        color : COLORS.black,
                        padding:SIZES.base
                    }}
                >
                      بازدید های اخیر
             </Text>
            <FlatList
              data={dummyData.user.recentVisits}
              keyExtractor={item =>`${item.id}`}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item , index})=>{
                return(
                  <TouchableOpacity
                    // activeOpacity={0.7}
                    style={{
                      padding : SIZES.base,
                      borderWidth : 1,
                      borderColor : COLORS.gray,
                      borderRadius : SIZES.radius + 10,
                      marginHorizontal:SIZES.base - 3,
                      marginVertical : SIZES.base,
                      justifyContent:'center',
                      alignItems:'center'
                    }}
                  >
                    <Text
                      style={{
                          color:COLORS.darkGray,
                          ...FONTS.h4
                      }}
                    >{item.name}</Text>
                  </TouchableOpacity>
                )
              }}
            
            />
      </View>
    )
  }

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const renderProducts = ()=>{
    return(
      <FlatList
        data={dummyData.products}
        keyExtractor={item=>`${item.id}`}
        style={{
          marginTop:SIZES.padding
        }}
        renderItem={({item , index})=>{
          return(
            <ProductCard 
              image={item.images[0].image}
              name={item.name}
              price={item.price}
            />
          )
        }}
        ListHeaderComponent={
          <View
          style={{
            height : 1,
            backgroundColor:COLORS.lightGray,
          }}
        />
        }
        ItemSeparatorComponent={()=>(
          <View
            style={{
              height : 1,
              backgroundColor:COLORS.lightGray,
              marginHorizontal:SIZES.base
            }}
          />
        )}
      />
    )
  }
 
  return(
    <SafeAreaView style={{flex :1 , backgroundColor:COLORS.white}}>
      {/* search bar */}
      {renderSeachBar()}
      {/* categories */}
      {renderCategories()}
      <ScrollView
          onScroll={handleScroll}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[COLORS.red]}
            />
          }
      >
          {/* recently see */}
          {renderRecently()}
          {/* products */}
          {renderProducts()}
      </ScrollView>
     
    </SafeAreaView>
  ) 
};

export default Home;
