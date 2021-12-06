import React from 'react';
import { BagIcon, CarIcon, DiceIcon, GroupIcon, HomeIcon, LightIcon, PhoneIcon, ServiceIcon, UserIcon, WatchIcon } from "./VectorIcons"

const homeCategories = [
    {
        id : 1,
        name:'املاک',
        icon : (color , size)=> <HomeIcon color={color} size={size}/>
    },
    {
        id : 2,
        name:'وسایل نقلیه',
        icon : (color , size)=> <CarIcon color={color} size={size}/>
    },
    {
        id : 3,
        name:'کالای دیجیتال',
        icon : (color , size)=> <PhoneIcon color={color} size={size}/>
    },
    {
        id : 4,
        name:'خانه و آشپزخانه',
        icon : (color , size)=> <LightIcon color={color} size={size}/>
    },
    {
        id : 5,
        name:'خدمات',
        icon : (color , size)=> <ServiceIcon color={color} size={size}/>
    },
    {
        id : 6,
        name:'وسایل شخصی',
        icon : (color , size)=> <WatchIcon color={color} size={size}/>
    },
    {
        id : 7,
        name:'سرگرمی',
        icon : (color , size)=> <DiceIcon color={color} size={size}/>
    },
    {
        id : 8,
        name:'اجتماعی',
        icon : (color , size)=> <GroupIcon color={color} size={size}/>
    },
    {
        id : 9,
        name:'تجهیزات',
        icon : (color , size)=> <UserIcon color={color} size={size}/>
    },
    {
        id : 10,
        name:'استخدام و کاری',
        icon : (color , size)=> <BagIcon color={color} size={size}/>
    },
]

export default {
    homeCategories
}