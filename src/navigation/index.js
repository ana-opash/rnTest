import {
    NavigationContainer,
    NavigationContainerRef,
  } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import React from 'react';
  import Home from '../screens/home';
  import search from '../screens/search';
  import secure from '../screens/secure';
  import treding from '../screens/treding';

  import { tabBar } from './bottomBar/BottamTab';
  
  const Stack = createNativeStackNavigator();
  
  function AppNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="tabBar"
            component={tabBar}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="search" component={search} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  export default AppNavigator;
  