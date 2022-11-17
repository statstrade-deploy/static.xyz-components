import React from 'react'

import * as ReactNative from 'react-native'

import n from '../js/react-native'

import ui_input_xl from './ui-input-xl'

// melbourne.ui-input-xl-test/InputPlaceHolderDemo [20] 
function InputPlaceHolderDemo(){
  return (
    <n.Enclosed label="melbourne.ui-input-xl/inputPlaceHolder">
      <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":20}}></ReactNative.View>
    </n.Enclosed>);
}

// melbourne.ui-input-xl-test/InputXLDemo [34] 
function InputXLDemo(){
  let [value,setValue] = React.useState();
  return (
    <n.Enclosed label="melbourne.ui-input-xl/InputXL">
      <n.Row>
        <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":30}}>
          <ui_input_xl.InputXL
            value={value}
            onChangeText={setValue}
            placeholder="Enter your Name">
          </ui_input_xl.InputXL>
        </n.Row>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":30}}>
          <ui_input_xl.InputXL
            value={value}
            onChangeText={setValue}
            design={{"type":"dark"}}
            placeholder="Enter your Name">
          </ui_input_xl.InputXL>
        </n.Row>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {
  "InputPlaceHolderDemo":InputPlaceHolderDemo,
  "InputXLDemo":InputXLDemo
};

export default MODULE