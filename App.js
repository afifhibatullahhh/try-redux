import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import Counter from './redux'

import storeState from './redux/store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={storeState}>
        <Counter/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});