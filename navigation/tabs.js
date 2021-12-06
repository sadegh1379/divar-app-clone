import React from "react";
import {
    View,
    Image,
    Text
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {COLORS , FONTS, icons, images} from '../constants'
import { Home , Chat , Profile , Add , Groupe } from "../screens"
import { TabIcon } from "../components";

const Tab = createBottomTabNavigator()

const Empty = ()=>{
    return null
}

const Tabs = () => {
    return (
        <Tab.Navigator
           screenOptions={{
               headerShown : false,
               tabBarShowLabel : false,
               tabBarStyle:{
                   position : 'absolute',
                   left : 0,
                   right : 0,
                   bottom : 0,
                   height : 60,
                   borderTopColor : COLORS.transparent
               }
           }}
        >
            <Tab.Screen
                name="Tabs"
                component={Home}
                options={{
                    tabBarIcon:({focused})=>(
                        <View
                            style={{
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                        >
                            <Image
                                source={images.DivarLogo}
                                resizeMode="contain"
                                style={{
                                    width : 45,
                                    height : 30,
                                }}
                            />
                             <Text
                                style={{
                                    color: focused ? COLORS.red : COLORS.gray,
                                    ...FONTS.body5
                                }}
                            >آگهی ها</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Groupe_tab"
                component={Groupe}
                options={{
                    tabBarIcon:({focused})=><TabIcon 
                        focused={focused}
                        icon="menu"
                        label="دسته ها"
                    />
                }}
            />
            <Tab.Screen
              
                name="Add_tab"
                component={Empty}
                listeners={({ navigation }) => ({
                    tabPress: (event) => {
                      event.preventDefault();
                      navigation.navigate("Add");
                    },
                  })}
                options={{
                    tabBarIcon:({focused})=><TabIcon 
                        focused={focused}
                        icon="circle-with-plus"
                        label="ثبت آگهی"
                    />
                }}
            />
            <Tab.Screen
                name="Chat_tab"
                component={Chat}
                options={{
                    tabBarIcon:({focused})=><TabIcon 
                        focused={focused}
                        icon="chat"
                        label="چت"
                    />
                }}
            />
              <Tab.Screen
                name="Profile_tab"
                component={Profile}
                options={{
                    tabBarIcon:({focused})=><TabIcon 
                        focused={focused}
                        icon="user"
                        label="دیوار من"
                    />
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;