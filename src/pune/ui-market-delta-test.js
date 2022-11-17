import React from 'react'

import * as ReactNative from 'react-native'

import market_delta from './ui-market-delta'

import a from '../js/react-native/animate'

import n from '../js/react-native'

import k from '../xt/lang/base-lib'

import c from '../js/react-native/helper-color'

import ui from '../js/react-native/physical-base'

// pune.ui-market-delta-test/DeltaDemo [27] 
function DeltaDemo(){
  let [value,setValue] = React.useState(100);
  return (
    <n.Enclosed label="pune.ui-market-delta/Delta">
      <n.Row>
        <market_delta.Delta value={value}></market_delta.Delta>
        <n.Fill></n.Fill>
        <n.Row>
          <ReactNative.Button
            title="-1"
            style={{"fontSize":10}}
            onPress={function (){
              setValue(value - 1);
            }}>
          </ReactNative.Button>
          <ReactNative.View style={{"width":10}}></ReactNative.View>
          <ReactNative.Button
            title="+1"
            onPress={function (){
              setValue(value + 1);
            }}>
          </ReactNative.Button>
        </n.Row>
      </n.Row>
      <n.Caption
        text={JSON.stringify({value})}
        style={{"marginTop":10,"zIndex":-100}}>
      </n.Caption>
    </n.Enclosed>);
}

var MODULE = {"DeltaDemo":DeltaDemo};

export default MODULE