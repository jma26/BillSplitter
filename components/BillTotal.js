import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import InputButton from './InputButton';

import Style from '../stylesheet/Style';

const inputButtons = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0, '', '.']
];

class BillTotal extends Component {
  renderInputButtons() {
    let views = [];
    for (let i = 0; i < inputButtons.length; i++) {
      let row = inputButtons[i];
      let inputRow = [];
      for (let j = 0; j < row.length; j++) {
        let input = row[j]
        inputRow.push(
          <TouchableOpacity style={Style.inputButton} key={j + '-' + i}>
            <InputButton value={input} key={j + '-' + i} />
          </TouchableOpacity>
        );
      }
      views.push(<View style={Style.inputRow} key={'row-' + i}>{inputRow}</View>)
    }
    return views;
  }

  render() {
    return (
      <View style={Style.rootContainer}>
        <View style={Style.displayContainer}></View>
        <View style={Style.inputContainer}>
          {this.renderInputButtons()}
        </View>
      </View>
    )
  }
}

export default BillTotal;