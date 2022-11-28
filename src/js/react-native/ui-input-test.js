import React from 'react'

import * as ReactNative from 'react-native'

import n from '../react-native'

import physical_addon from './physical-addon'

import ui_input from './ui-input'

// js.react-native.ui-input-test/InputSimpleDemo [24] 
function InputSimpleDemo(){
  let [first,setFirst] = React.useState("Hello");
  let [highlighted,setHighlighted] = React.useState();
  let [disabled,setDisabled] = React.useState();
  return (
    <n.Enclosed label="js.react-native.ui-input/InputSimple">
      <n.Row
        style={{"alignItems":"center","justifyContent":"center","height":40}}>
        <ReactNative.Text
          style={{"width":80,"fontSize":12,"color":"#333","fontWeight":"700"}}>First Name
        </ReactNative.Text>
        <ui_input.Input
          outlined={true}
          highlighted={highlighted}
          disabled={disabled}
          theme={{"bgNormal":"#eee","bgHovered":"#ddd"}}
          value={first}
          onChangeText={setFirst}
          styleContainer={{"flex":1}}
          addons={[
            physical_addon.tagAll({"style":{"paddingHorizontal":20,"height":80,"flex":1}})
          ]}>
        </ui_input.Input>
      </n.Row>
      <n.Row>
        <ReactNative.Button
          title="H"
          onPress={function (){
            return setHighlighted(!highlighted);
          }}>
        </ReactNative.Button>
        <ReactNative.Text> </ReactNative.Text>
        <ReactNative.Button
          title="D"
          onPress={function (){
            return setDisabled(!disabled);
          }}>
        </ReactNative.Button>
      </n.Row>
    </n.Enclosed>);
}

// js.react-native.ui-input-test/InputDemo [71] 
function InputDemo(){
  let [first,setFirst] = React.useState("Hello");
  let [last,setLast] = React.useState("World");
  return (
    <n.Enclosed label="js.react-native.ui-core/TextInput">
      <n.Row
        style={{"alignItems":"center","justifyContent":"center","height":40}}>
        <ReactNative.Text
          style={{"width":80,"fontSize":12,"color":"#333","fontWeight":"700"}}>First Name
        </ReactNative.Text>
        <ui_input.Input
          theme={{"bgNormal":"#eee","bgHovered":"#ddd"}}
          value={first}
          onChangeText={setFirst}
          style={{"flex":1}}
          styleContainer={{"flex":1}}>
        </ui_input.Input>
      </n.Row>
      <n.Row
        style={{"alignItems":"center","justifyContent":"center","height":40}}>
        <ReactNative.Text
          style={{"width":80,"fontSize":12,"color":"#333","fontWeight":"700"}}>Last Name
        </ReactNative.Text>
        <ui_input.Input
          theme={{"bgNormal":"#eee","bgHovered":"#ddd"}}
          value={last}
          onChangeText={setLast}
          style={{"flex":1}}
          styleContainer={{"flex":1}}>
        </ui_input.Input>
      </n.Row>
      <n.Caption text={n.format_obj({first,last})} style={{"marginTop":10}}></n.Caption>
    </n.Enclosed>);
}

var MODULE = {"InputSimpleDemo":InputSimpleDemo,"InputDemo":InputDemo};

export default MODULE