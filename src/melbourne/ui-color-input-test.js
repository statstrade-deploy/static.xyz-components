import * as ReactNative from 'react-native'

import React from 'react'

import n from '../js/react-native'

import ui_static from './ui-static'

import base_palette from './base-palette'

import ui_color_input from './ui-color-input'

// melbourne.ui-color-input-test/ColorInputDemo [23] 
function ColorInputDemo(){
  let [value,setValue] = React.useState("#ccc");
  return (
    <n.Enclosed label="melbourne.ui-color-input/ColorInput">
      <n.Row>
        <ui_color_input.ColorInput value={value} setValue={setValue}></ui_color_input.ColorInput>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {"ColorInputDemo":ColorInputDemo};

export default MODULE