import React from 'react'

import * as ReactNative from 'react-native'

import n from '../react-native'

import physical_addon from './physical-addon'

import ui_range from './ui-range'

// js.react-native.ui-range-test/RangeHDemo [28] 
function RangeHDemo(){
  let [lower,setLower] = React.useState(2);
  let [upper,setUpper] = React.useState(8);
  let [highlighted,setHighlighted] = React.useState();
  let [disabled,setDisabled] = React.useState();
  return (
    <n.Enclosed label="js.react-native.ui-range/Range">
      <n.Row style={{"alignItems":"center","justifyContent":"center"}}>
        <ReactNative.Text
          style={{"width":80,"fontSize":12,"color":"#333","fontWeight":"700"}}>RangeH
        </ReactNative.Text>
        <ui_range.Range
          min={0}
          upper={upper}
          knobStyle={{"borderRadius":3}}
          disabled={disabled}
          theme={{
            "bgNormal":"red",
            "fgNormal":"blue",
            "bgHovered":0.7,
            "fgHovered":0.7,
            "bgPressed":-0.2,
            "fgPressed":0.1
          }}
          setLower={setLower}
          axisStyle={{"borderRadius":3}}
          max={10}
          addons={[
            physical_addon.tagAll({
            "style":{"paddingHorizontal":20,"height":250,"width":300,"flex":1}
          })
          ]}
          highlighted={highlighted}
          length={200}
          step={2}
          lower={lower}
          setUpper={setUpper}>
        </ui_range.Range>
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
        <ReactNative.Text>{n.format_entry({lower,upper})}</ReactNative.Text>
      </n.Row>
    </n.Enclosed>);
}

// js.react-native.ui-range-test/RangeVDemo [82] 
function RangeVDemo(){
  let [lower,setLower] = React.useState(10);
  let [upper,setUpper] = React.useState(10);
  let [highlighted,setHighlighted] = React.useState();
  let [disabled,setDisabled] = React.useState();
  return (
    <n.Enclosed label="js.react-native.ui-range/RangeV">
      <n.Row style={{"alignItems":"center","justifyContent":"center"}}>
        <ReactNative.Text
          style={{"width":80,"fontSize":12,"color":"#333","fontWeight":"700"}}>RangeV
        </ReactNative.Text>
        <ui_range.Range
          min={0}
          layout="vertical"
          upper={upper}
          knobStyle={{"borderRadius":3}}
          disabled={disabled}
          theme={{
            "bgNormal":"red",
            "fgNormal":"blue",
            "bgHovered":0.7,
            "fgHovered":0.7,
            "bgPressed":-0.2,
            "fgPressed":0.1
          }}
          setLower={setLower}
          axisStyle={{"borderRadius":3}}
          max={10}
          addons={[
            physical_addon.tagAll({
            "style":{"paddingHorizontal":20,"height":250,"width":300,"flex":1}
          })
          ]}
          highlighted={highlighted}
          length={200}
          step={2}
          lower={lower}
          setUpper={setUpper}>
        </ui_range.Range>
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
        <ReactNative.Text>{n.format_entry({lower,upper})}</ReactNative.Text>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {"RangeHDemo":RangeHDemo,"RangeVDemo":RangeVDemo};

export default MODULE