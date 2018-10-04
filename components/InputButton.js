import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Style from '../stylesheet/Style';

class InputButton extends Component {
  render() {
    return (
      <View>
          <Text style={Style.inputButtonText}>{this.props.value}</Text>
      </View>
    )
  }
}

export default InputButton