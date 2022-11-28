import React from 'react'

import * as ReactNative from 'react-native'

import n from '../js/react-native'

import ui_console from './ui-console'

// pune.ui-console-test/ConsoleDemo [21] 
function ConsoleDemo(){
  let [current,setCurrent] = React.useState(true);
  return (
    <n.Enclosed label="pune.ui-console/Console">
      <n.Row style={{"marginTop":30}}>
        <ui_console.Console
          screens={{
            "a_screen":function (){
              return (
                <ReactNative.Text>A</ReactNative.Text>);
            },
            "b_screen":function (){
              return (
                <ReactNative.Text>B</ReactNative.Text>);
            },
            "c_screen":function (){
              return (
                <ReactNative.Text>C</ReactNative.Text>);
            }
          }}
          current={current}
          setCurrent={setCurrent}>
        </ui_console.Console>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {"ConsoleDemo":ConsoleDemo};

export default MODULE