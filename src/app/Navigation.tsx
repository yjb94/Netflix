import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { ContentDetailScreen } from 'pages/ContentDetail';
import { ContentPlayScreen } from 'pages/ContentPlay';
import { HomeScreen } from 'pages/Home';
import { RootStackParamList } from 'shared/model/navigation';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          contentStyle: styles.contentStyle,
        }}
      >
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
const stylesheet = createStyleSheet(theme => ({
  contentStyle: {
    backgroundColor: theme.colors.primaryBlack,
    flex: 1,
  },
}));

export default Navigation;
