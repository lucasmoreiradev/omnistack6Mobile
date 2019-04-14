import React from 'react';
import { YellowBox } from 'react-native'
import Routes from './routes'
import { View } from 'react-native'

YellowBox.ignoreWarnings(['Unrecognized WebSocket'])

const App = () => <Routes />;

export default App;
