import React , {useEffect} from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import {I18nManager , StatusBar , LogBox} from 'react-native'
import Tabs from "./navigation/tabs";
import { Add } from './screens';
import { COLORS } from './constants';

const Stack = createStackNavigator();

const App = () => {

    useEffect(()=>{
        I18nManager.forceRTL(true);
        LogBox.ignoreLogs(['VirtualizedLists'])
      },[])

    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightGray}/>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Home"
            >
                <Stack.Screen
                    name="Home"
                    component={Tabs}
                />
                  <Stack.Screen
                    name="Add"
                    component={Add}
                />
            
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;