import React from 'react'

import * as ReactNative from 'react-native'

import n from '../react-native'

import physical_addon from './physical-addon'

import ui_slider from './ui-slider'

// js.react-native.ui-slider-test/SliderHDemo [25] 
function SliderHDemo(){
  let [first,setFirst] = React.useState(10);
  let [highlighted,setHighlighted] = React.useState();
  let [disabled,setDisabled] = React.useState();
  return (
    <n.Enclosed label="js.react-native.ui-slider/Slider">
      <n.Row style={{"alignItems":"center","justifyContent":"center"}}>
        <ReactNative.Text
          style={{"width":80,"fontSize":12,"color":"#333","fontWeight":"700"}}>SliderH
        </ReactNative.Text>
        <ui_slider.Slider
          min={0}
          disabled={disabled}
          knobStyle={{"borderRadius":3}}
          value={first}
          highlighted={highlighted}
          setValue={setFirst}
          theme={{
            "bgNormal":"red",
            "fgNormal":"blue",
            "bgHovered":0.7,
            "fgHovered":0.7,
            "bgPressed":-0.2,
            "fgPressed":0.1
          }}
          axisStyle={{"borderRadius":3}}
          max={10}
          addons={[
            physical_addon.tagAll({"style":{"paddingHorizontal":20,"height":80,"flex":1}})
          ]}
          length={200}
          step={2}>
        </ui_slider.Slider>
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
        <ReactNative.Text>{n.format_entry({first})}</ReactNative.Text>
      </n.Row>
    </n.Enclosed>);
}

// js.react-native.ui-slider-test/SliderVDemo [77] 
function SliderVDemo(){
  let [first,setFirst] = React.useState(10);
  let [highlighted,setHighlighted] = React.useState();
  let [disabled,setDisabled] = React.useState();
  return (
    <n.Enclosed label="js.react-native.ui-slider/SliderV">
      <n.Row style={{"alignItems":"center","justifyContent":"center"}}>
        <ReactNative.Text
          style={{"width":80,"fontSize":12,"color":"#333","fontWeight":"700"}}>SliderV
        </ReactNative.Text>
        <ui_slider.Slider
          min={0}
          disabled={disabled}
          layout="vertical"
          knobStyle={{"borderRadius":3}}
          value={first}
          highlighted={highlighted}
          setValue={setFirst}
          theme={{
            "bgNormal":"red",
            "fgNormal":"blue",
            "bgHovered":0.7,
            "fgHovered":0.7,
            "bgPressed":-0.2,
            "fgPressed":0.1
          }}
          axisStyle={{"borderRadius":3}}
          max={10}
          addons={[
            physical_addon.tagAll({"style":{"paddingHorizontal":20,"height":80,"flex":1}})
          ]}
          length={200}
          step={2}>
        </ui_slider.Slider>
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
        <ReactNative.Text>{n.format_entry({first})}</ReactNative.Text>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {"SliderHDemo":SliderHDemo,"SliderVDemo":SliderVDemo};

export default MODULE