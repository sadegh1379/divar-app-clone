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

const user = {
    recentVisits : [
        {
            id : 1,
            name : 'خودرو سواری'
        },
        {
            id : 2,
            name : 'قطعات یدکی و لوازم جانبی خودرو'
        },
        {
            id : 3,
            name : 'موبایل'
        },
        {
            id : 4,
            name : 'خودرو 206'
        },
        {
            id : 5,
            name : 'آپارتمان'
        },
        {
            id : 6,
            name : 'پراید 11  SE'
        },
    ]
}

const products = [
    {
        id : 1,
        name : 'مزدا',
        rang: 'سفید',
        location : 'تهران ، بومهن',
        model : '1388',
        karkard : '250',
        brand : 'سمند',
        bime : '4 ماه',
        girbox : 'دنده ای ',
        sanad : 'چند برگی',
        forosh : 'نقد واقساط',
        price : '825000000',
        motor : true,
        shasi : true,
        badane : false,
        description : 'فروشنده هستم ، فنی سالم در حد',
        phone : '09376770472',
        group : 'سواری و وانت',
        images : [{
            id : 1,
            image : require("../assets/images/divar/mazda.jpg")

             },{
             id : 2,
            image : require("../assets/images/divar/samand-1.jpg")

            },{
            id : 3,
            image : require("../assets/images/divar/samand-3.jpg")
             },
        ]
    },
    {
        id : 2,
        name : 'سانتافه 2015',
        rang: 'سفید',
        location : 'تهران ، بومهن',
        model : '1388',
        karkard : '20',
        brand : 'سمند',
        bime : '4 ماه',
        girbox : 'دنده ای ',
        sanad : 'چند برگی',
        forosh : 'نقد واقساط',
        price : '2000000000',
        motor : true,
        shasi : true,
        badane : false,
        description : 'فروشنده هستم ، فنی سالم در حد',
        phone : '09376770472',
        group : 'سواری و وانت',
        images : [{
            id : 1,
            image : require("../assets/images/divar/santafe.jpg")
             },{
             id : 2,
             image : require("../assets/images/divar/samand-2.jpg")
            },{
            id : 3,
            image : require("../assets/images/divar/samand-3.jpg")
             },
        ]
    },
    {
        id : 3,
        name : 'سمند سورن 97',
        rang: 'سفید',
        location : 'تهران ، بومهن',
        model : '1388',
        karkard : '250',
        brand : 'سمند',
        bime : '4 ماه',
        girbox : 'دنده ای ',
        sanad : 'چند برگی',
        forosh : 'نقد واقساط',
        price : '11000000',
        motor : true,
        shasi : true,
        badane : false,
        description : 'فروشنده هستم ، فنی سالم در حد',
        phone : '09376770472',
        group : 'سواری و وانت',
        images : [{
            id : 1,
            image : require("../assets/images/divar/samand-1.jpg")
             },{
             id : 2,
             image : require("../assets/images/divar/samand-2.jpg")
            },{
            id : 3,
            image : require("../assets/images/divar/samand-3.jpg")
             },
        ]
    },
    {
        id : 4,
        name : 'سمند سورن 97',
        rang: 'سفید',
        location : 'تهران ، بومهن',
        model : '1388',
        karkard : '250',
        brand : 'سمند',
        bime : '4 ماه',
        girbox : 'دنده ای ',
        sanad : 'چند برگی',
        forosh : 'نقد واقساط',
        price : '11000000',
        motor : true,
        shasi : true,
        badane : false,
        description : 'فروشنده هستم ، فنی سالم در حد',
        phone : '09376770472',
        group : 'سواری و وانت',
        images : [{
            id : 1,
            image : require("../assets/images/divar/samand-3.jpg")

             },{
             id : 2,
             image : require("../assets/images/divar/samand-2.jpg")
            },{
            id : 3,
            image : require("../assets/images/divar/samand-1.jpg")

             },
        ]
    },
    {
        id : 5,
        name : 'سمند سورن 97',
        rang: 'سفید',
        location : 'تهران ، بومهن',
        model : '1388',
        karkard : '250',
        brand : 'سمند',
        bime : '4 ماه',
        girbox : 'دنده ای ',
        sanad : 'چند برگی',
        forosh : 'نقد واقساط',
        price : '11000000',
        motor : true,
        shasi : true,
        badane : false,
        description : 'فروشنده هستم ، فنی سالم در حد',
        phone : '09376770472',
        group : 'سواری و وانت',
        images : [{
            id : 1,
            image : require("../assets/images/divar/samand-1.jpg")
             },{
             id : 2,
             image : require("../assets/images/divar/samand-2.jpg")
            },{
            id : 3,
            image : require("../assets/images/divar/samand-3.jpg")
             },
        ]
    },
    {
        id : 6,
        name : 'سمند سورن 97',
        rang: 'سفید',
        location : 'تهران ، بومهن',
        model : '1388',
        karkard : '250',
        brand : 'سمند',
        bime : '4 ماه',
        girbox : 'دنده ای ',
        sanad : 'چند برگی',
        forosh : 'نقد واقساط',
        price : '11000000',
        motor : true,
        shasi : true,
        badane : false,
        description : 'فروشنده هستم ، فنی سالم در حد',
        phone : '09376770472',
        group : 'سواری و وانت',
        images : [{
            id : 1,
            image : require("../assets/images/divar/samand-3.jpg")

             },{
             id : 2,
             image : require("../assets/images/divar/samand-2.jpg")
            },{
            id : 3,
            image : require("../assets/images/divar/samand-1.jpg")

             },
        ]
    },
    {
        id : 7,
        name : 'سمند سورن 97',
        rang: 'سفید',
        location : 'تهران ، بومهن',
        model : '1388',
        karkard : '250',
        brand : 'سمند',
        bime : '4 ماه',
        girbox : 'دنده ای ',
        sanad : 'چند برگی',
        forosh : 'نقد واقساط',
        price : '11000000',
        motor : true,
        shasi : true,
        badane : false,
        description : 'فروشنده هستم ، فنی سالم در حد',
        phone : '09376770472',
        group : 'سواری و وانت',
        images : [{
            id : 1,
            image : require("../assets/images/divar/samand-1.jpg")
             },{
             id : 2,
             image : require("../assets/images/divar/samand-2.jpg")
            },{
            id : 3,
            image : require("../assets/images/divar/samand-3.jpg")
             },
        ]
    },
    {
        id : 8,
        name : 'سمند سورن 97',
        rang: 'سفید',
        location : 'تهران ، بومهن',
        model : '1388',
        karkard : '250',
        brand : 'سمند',
        bime : '4 ماه',
        girbox : 'دنده ای ',
        sanad : 'چند برگی',
        forosh : 'نقد واقساط',
        price : '11000000',
        motor : true,
        shasi : true,
        badane : false,
        description : 'فروشنده هستم ، فنی سالم در حد',
        phone : '09376770472',
        group : 'سواری و وانت',
        images : [{
            id : 1,
            image : require("../assets/images/divar/samand-1.jpg")
             },{
             id : 2,
             image : require("../assets/images/divar/samand-2.jpg")
            },{
            id : 3,
            image : require("../assets/images/divar/samand-3.jpg")
             },
        ]
    }
]

export default {
    homeCategories,
    user,
    products
}