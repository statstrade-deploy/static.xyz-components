import * as ReactNative from 'react-native'

import React from 'react'

import n from '../js/react-native'

import ui_static from './ui-static'

import base_palette from './base-palette'

import ui_chip_input from './ui-chip-input'

// melbourne.ui-chip-input-test/ChipInputDemo [23] 
function ChipInputDemo(){
  let [values,setValues] = React.useState(["hello","world"]);
  return (
    <n.Enclosed label="melbourne.ui-chip-input/ChipInput">
      <n.Row>
        <ui_chip_input.ChipInput values={values} setValues={setValues}></ui_chip_input.ChipInput>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {"ChipInputDemo":ChipInputDemo};

export default MODULE