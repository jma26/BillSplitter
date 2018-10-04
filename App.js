import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BillTotal from './components/BillTotal';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <BillTotal />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
