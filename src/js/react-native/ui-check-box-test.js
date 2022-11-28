import React from 'react'

import * as ReactNative from 'react-native'

import n from '../react-native'

import physical_addon from './physical-addon'

import ui_check_box from './ui-check-box'

// js.react-native.ui-check-box-test/CheckBoxSimpleDemo [25] 
function CheckBoxSimpleDemo(){
  let [first,setFirst] = React.useState(true);
  let [highlighted,setHighlighted] = React.useState(true);
  let [disabled,setDisabled] = React.useState();
  return (
    <n.Enclosed label="js.react-native.ui-check-box/CheckBoxSimple">
      <n.Row style={{"alignItems":"center"}}>
        <ReactNative.Text
          style={{"width":80,"fontSize":12,"color":"#333","fontWeight":"700"}}>CHECKBOX
        </ReactNative.Text>
        <ui_check_box.CheckBox
          highlighted={highlighted}
          disabled={disabled}
          theme={{
            "fgActive":"limegreen",
            "fgHovered":0.9,
            "bgActive":"green",
            "bgPressed":"palegreen",
            "bgNormal":"black"
          }}
          selected={first}
          setSelected={setFirst}
          outlined={true}
          addons={[
            physical_addon.tagAll({"style":{"paddingHorizontal":20,"height":80,"flex":1}})
          ]}>
        </ui_check_box.CheckBox>
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

// js.react-native.ui-check-box-test/CheckBoxDemo [74] 
function CheckBoxDemo(){
  let [first,setFirst] = React.useState(true);
  let [second,setSecond] = React.useState(true);
  let [highlighted,setHighlighted] = React.useState(true);
  let [errored,setErrored] = React.useState(true);
  return (
    <n.Enclosed label="js.react-native.ui-check-box/CheckBox">
      <n.Row style={{"alignItems":"center"}}>
        <ReactNative.Text
          style={{"width":80,"fontSize":12,"color":"#333","fontWeight":"700"}}>CHECKBOX
        </ReactNative.Text>
        <ui_check_box.CheckBox
          theme={{"fgSelected":"limegreen"}}
          selected={first}
          setSelected={setFirst}
          outlined={true}>
        </ui_check_box.CheckBox>
        <ReactNative.View style={{"width":10}}></ReactNative.View>
        <ui_check_box.CheckBox
          theme={{
            "fgSelected":"white",
            "fgNormal":"white",
            "bgNormal":"darkblue",
            "bgHovered":"blue",
            "bgPressed":"purple"
          }}
          selected={second}
          setSelected={setSecond}
          outlined={true}>
        </ui_check_box.CheckBox>
        <ReactNative.View style={{"width":10}}></ReactNative.View>
        <ui_check_box.CheckBox disabled={true} selected={false} outlined={true}></ui_check_box.CheckBox>
        <ReactNative.View style={{"width":10}}></ReactNative.View>
        <ui_check_box.CheckBox
          highlighted={highlighted}
          setSelected={setHighlighted}
          selected={highlighted}
          outlined={true}>
        </ui_check_box.CheckBox>
        <ReactNative.View style={{"width":10}}></ReactNative.View>
        <ui_check_box.CheckBox
          highlighted={errored}
          setSelected={setErrored}
          selected={errored}
          theme={{"fgHighlighted":"white","bgHighlighted":"red"}}
          outlined={true}>
        </ui_check_box.CheckBox>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {
  "CheckBoxSimpleDemo":CheckBoxSimpleDemo,
  "CheckBoxDemo":CheckBoxDemo
};

export default MODULE