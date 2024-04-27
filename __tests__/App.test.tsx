import { it } from '@jest/globals';
import App from 'app';
import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
