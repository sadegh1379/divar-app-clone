import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const HomeIcon = ({color  , size})=>(
    <MaterialCommunityIcons name="home-city-outline" size={size} color={color}/>
)

const CarIcon = ({color  , size})=>(
    <FontAwesome5 name="car-alt" size={size} color={color}/>
)

const PhoneIcon = ({color  , size})=>(
    <FontAwesome name="mobile-phone" size={size} color={color}/>
)

const LightIcon = ({color  , size})=>(
    <FontAwesome name="lightbulb-o" size={size} color={color}/>
)

const ServiceIcon = ({color  , size})=>(
    <MaterialIcons name="cleaning-services" size={size} color={color}/>
)

const WatchIcon = ({color  , size})=>(
    <Octicons name="watch" size={size} color={color}/>
)

const DiceIcon = ({color  , size})=>(
    <FontAwesome5 name="dice" size={size} color={color}/>
)

const GroupIcon = ({color  , size})=>(
    <MaterialIcons name="group" size={size} color={color}/>
)

const UserIcon = ({color  , size})=>(
    <FontAwesome name="user" size={size} color={color}/>
)

const BagIcon = ({color  , size})=>(
    <MaterialIcons name="home-repair-service" size={size} color={color}/>
)

const CloseIcon = ({color , size})=>(
    <AntDesign name="close" size={size} color={color}/>
)

const RightArrow = ({color , size})=>(
    <AntDesign name="arrowright" size={size} color={color}/>
)

const BookMarkIcon = ({color  , size})=>(
    <FontAwesome name="bookmark" size={size} color={color}/>
)

const VerticalDotsIcon = ({color  , size})=>(
    <MaterialCommunityIcons name="dots-vertical" size={size} color={color}/>
)

export {
    HomeIcon ,
     CarIcon,
     PhoneIcon,
     LightIcon,
     ServiceIcon,
     WatchIcon,
     DiceIcon,
     GroupIcon,
    UserIcon,
    BagIcon,
    CloseIcon,
    RightArrow,
    BookMarkIcon,
    VerticalDotsIcon
    }