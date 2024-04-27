import { it } from '@jest/globals';
import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import App from 'app';

it('renders correctly', () => {
  renderer.create(<App />);
});
