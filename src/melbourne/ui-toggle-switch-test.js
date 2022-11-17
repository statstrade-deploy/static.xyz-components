import React from 'react'

import * as ReactNative from 'react-native'

import n from '../js/react-native'

import ui_toggle_switch from './ui-toggle-switch'

// melbourne.ui-toggle-switch-test/ToggleSwitchDemo [21] 
function ToggleSwitchDemo(){
  let [s0,setS0] = React.useState();
  let [s1,setS1] = React.useState(true);
  let [s2,setS2] = React.useState(true);
  return (
    <n.Enclosed label=" melbourne.ui-toggle-switch/ToggleSwitch">
      <n.Row>
        <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":30}}>
          <ui_toggle_switch.ToggleSwitch
            design={{"type":"light"}}
            selected={s1}
            onPress={function (){
              return setS1(!s1);
            }}>
          </ui_toggle_switch.ToggleSwitch>
        </n.Row>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":30}}>
          <ui_toggle_switch.ToggleSwitch
            design={{"type":"dark"}}
            selected={s2}
            onPress={function (){
              return setS2(!s2);
            }}>
          </ui_toggle_switch.ToggleSwitch>
        </n.Row>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {"ToggleSwitchDemo":ToggleSwitchDemo};

export default MODULE