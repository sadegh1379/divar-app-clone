import React , {useEffect} from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import {I18nManager} from 'react-native'
import Tabs from "./navigation/tabs";
import { Add } from './screens';

const Stack = createStackNavigator();

const App = () => {

    useEffect(()=>{
        I18nManager.forceRTL(true);
      },[])

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
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