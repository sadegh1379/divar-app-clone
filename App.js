import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {I18nManager, StatusBar, LogBox, View, Text} from 'react-native';
import Tabs from './navigation/tabs';
import {Add, Details, NotNetwork} from './screens';
import {COLORS, FONTS} from './constants';
import NetInfo from '@react-native-community/netinfo';

const Stack = createStackNavigator();

const App = () => {
  const [networkConnection, setNetworkConnection] = useState(true);

  useEffect(() => {
    I18nManager.forceRTL(true);
    LogBox.ignoreLogs(['VirtualizedLists']);
    cehckNetworkConnection()
  }, []);

  const cehckNetworkConnection = ()=>{
    NetInfo.fetch().then(state => {
        setNetworkConnection(state.isConnected)
      });
  }


  if (networkConnection == false) {
    return (
         <NotNetwork refresh={cehckNetworkConnection}/>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightGray} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Add" component={Add} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
