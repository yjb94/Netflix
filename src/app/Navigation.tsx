import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ContentDetailScreen } from 'screens/ContentDetail';
import { ContentPlayScreen } from 'screens/ContentPlay';
import { HomeScreen } from 'screens/Home';

export type RootStackParamList = {
  Home: undefined;
  ContentDetail: { contentId: string };
  ContentPlay: { contentId: string };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
        />
        <RootStack.Screen
          name="ContentDetail"
          component={ContentDetailScreen}
        />
        <RootStack.Screen
          name="ContentPlay"
          component={ContentPlayScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;