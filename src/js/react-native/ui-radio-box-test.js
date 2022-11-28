import React from 'react'

import * as ReactNative from 'react-native'

import n from '../react-native'

import physical_addon from './physical-addon'

import ui_radio_box from './ui-radio-box'

// js.react-native.ui-radio-box-test/RadioBoxSimpleDemo [24] 
function RadioBoxSimpleDemo(){
  let [first,setFirst] = React.useState(true);
  let [highlighted,setHighlighted] = React.useState();
  let [disabled,setDisabled] = React.useState();
  return (
    <n.Enclosed label="js.react-native.ui-radio-box/RadioBoxSimple">
      <n.Row style={{"alignItems":"center"}}>
        <ReactNative.Text
          style={{"width":80,"fontSize":12,"color":"#333","fontWeight":"700"}}>RADIO
        </ReactNative.Text>
        <ui_radio_box.RadioBox
          selected={first}
          disabled={disabled}
          highlighted={highlighted}
          setSelected={setFirst}
          size={30}
          style={{"flex":1}}
          theme={{
            "fgActive":"limegreen",
            "fgNormal":"#666",
            "bgActive":"green",
            "bgNormal":"#444"
          }}
          styleContainer={{"flex":1}}
          addons={[
            physical_addon.tagAll({"style":{"paddingHorizontal":20,"height":80,"flex":1}})
          ]}
          outlined={true}
          outsideStyle={{"borderWidth":4}}>
        </ui_radio_box.RadioBox>
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

// js.react-native.ui-radio-box-test/RadioBoxDemo [74] 
function RadioBoxDemo(){
  let [first,setFirst] = React.useState(true);
  let [second,setSecond] = React.useState(true);
  let [highlighted,setHighlighted] = React.useState(true);
  let [errored,setErrored] = React.useState(true);
  return (
    <n.Enclosed label="js.react-native.ui-radio-box/RadioBox">
      <n.Row style={{"alignItems":"center"}}>
        <ReactNative.Text
          style={{"width":80,"fontSize":12,"color":"#333","fontWeight":"700"}}>RADIO
        </ReactNative.Text>
        <ui_radio_box.RadioBox
          theme={{"fgActive":"limegreen"}}
          selected={first}
          setSelected={setFirst}
          style={{"flex":1}}
          styleContainer={{"flex":1}}>
        </ui_radio_box.RadioBox>
        <ReactNative.View style={{"width":10}}></ReactNative.View>
        <ui_radio_box.RadioBox
          theme={{
            "fgActive":"black",
            "fgNormal":"#333",
            "bgNormal":"white",
            "bgHovered":"#555",
            "bgPressed":"black"
          }}
          outerStyle={{"borderWidth":5,"borderStyle":"solid"}}
          outlined={true}
          selected={second}
          setSelected={setSecond}>
        </ui_radio_box.RadioBox>
        <ReactNative.View style={{"width":10}}></ReactNative.View>
        <ui_radio_box.RadioBox disabled={true} selected={true}></ui_radio_box.RadioBox>
        <ReactNative.View style={{"width":10}}></ReactNative.View>
        <ui_radio_box.RadioBox
          highlighted={highlighted}
          setSelected={setHighlighted}
          selected={highlighted}>
        </ui_radio_box.RadioBox>
        <ReactNative.View style={{"width":10}}></ReactNative.View>
        <ui_radio_box.RadioBox
          highlighted={errored}
          setSelected={setErrored}
          selected={errored}
          theme={{"fgHighlighted":"white","bgHighlighted":"red"}}>
        </ui_radio_box.RadioBox>
      </n.Row>
      <ReactNative.View style={{"height":10}}></ReactNative.View>
      <n.Row style={{"alignItems":"center"}}>
        <ReactNative.Text
          style={{"width":80,"fontSize":12,"color":"#333","fontWeight":"700"}}>RADIO
        </ReactNative.Text>
        <ui_radio_box.RadioBox
          theme={{"fgActive":"darkred"}}
          selected={first}
          outlined={true}
          setSelected={setFirst}
          size={32}
          sizeInner={18}>
        </ui_radio_box.RadioBox>
        <ReactNative.View style={{"width":10}}></ReactNative.View>
        <ui_radio_box.RadioBox
          theme={{
            "fgActive":"limegreen",
            "fgNormal":"#888",
            "bgNormal":"#aaa",
            "bgPressed":"limegreen",
            "bgHovered":0.5,
            "fgHovered":0
          }}
          selected={second}
          outlined={true}
          setSelected={setSecond}
          size={32}
          outerStyle={{"borderWidth":4,"borderStyle":"solid","borderRadius":3}}
          innerStyle={{"borderRadius":0}}
          sizeInner={12}>
        </ui_radio_box.RadioBox>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {
  "RadioBoxSimpleDemo":RadioBoxSimpleDemo,
  "RadioBoxDemo":RadioBoxDemo
};

export default MODULE