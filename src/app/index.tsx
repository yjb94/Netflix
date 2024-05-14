import React from 'react';
import './ui/unistyle';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStyleSheet } from 'react-native-unistyles';
import Navigation from './Navigation';

export type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <GestureHandlerRootView style={stylesheet.gestureHandlerRootView}>
      <Navigation />
    </GestureHandlerRootView>
  );
};

const stylesheet = createStyleSheet({
  gestureHandlerRootView: {
    flex: 1,
  },
});

export default App;
