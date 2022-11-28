import React from 'react'

import * as ReactNative from 'react-native'

import n from '../react-native'

import physical_addon from './physical-addon'

import ui_button from './ui-button'

// js.react-native.ui-button-test/ButtonOpacityDemo [23] 
function ButtonOpacityDemo(){
  let [active,setActive] = React.useState(true);
  return (
    <n.Enclosed label="js.react-native.ui-button/ButtonOpacity">
      <n.Row
        style={{"alignItems":"center","backgroundColor":"yellow","height":100}}>
        <ReactNative.Text
          style={{"width":80,"fontSize":12,"color":"#333","fontWeight":"700"}}>OPACITY
        </ReactNative.Text>
        <ui_button.Button
          theme={{
            "bgNormal":"green",
            "fgNormal":"#fefefe",
            "bgPressed":"limegreen",
            "bgHovered":"limegreen"
          }}
          indicatorParams={{"pressing":{"default":{"duration":1000}}}}
          text="PUSH"
          style={{"borderRadius":3}}
          size="lg"
          onPress={function (){
            setActive(!active);
          }}
          addons={[
            physical_addon.tagAll({"style":{"paddingHorizontal":20,"height":80,"flex":1}})
          ]}
          transformations={{
            "bg":function ({pressing}){
              return {"style":{"opacity":1 - (0.8 * pressing)}};
            }
          }}>
        </ui_button.Button>
      </n.Row>
      <n.Caption text={n.format_obj({active})} style={{"marginTop":10}}></n.Caption>
    </n.Enclosed>);
}

// js.react-native.ui-button-test/ButtonSizeDemo [67] 
function ButtonSizeDemo(){
  let [active,setActive] = React.useState(true);
  return (
    <n.Enclosed label="js.react-native.ui-button/ButtonSize">
      <n.Row style={{"alignItems":"center"}}>
        <ReactNative.Text
          style={{"width":80,"fontSize":12,"color":"#333","fontWeight":"700"}}>SIZE
        </ReactNative.Text>
        <ui_button.Button
          onPress={function (){
            setActive(!active);
          }}
          transformations={{
            "bg":function ({pressing}){
              return {
                "style":{
                    "transform":[{"scaleY":1 + pressing},{"scaleX":1 + pressing}]
                  }
              };
            }
          }}
          indicatorParams={{"pressing":{"default":{"duration":1000}}}}
          size="lg"
          style={{"borderRadius":3}}
          theme={{
            "bgNormal":"green",
            "fgNormal":"#fefefe",
            "bgPressed":"limegreen",
            "bgHovered":"limegreen"
          }}
          styleContainer={{"height":100,"paddingVertical":30}}
          addons={[
            physical_addon.tagAll({"style":{"paddingHorizontal":20,"height":80,"flex":1}})
          ]}
          text="PUSH">
        </ui_button.Button>
      </n.Row>
      <n.Caption text={n.format_obj({active})} style={{"marginTop":10}}></n.Caption>
    </n.Enclosed>);
}

// js.react-native.ui-button-test/ButtonFractionDemo [112] 
function ButtonFractionDemo(){
  let [active,setActive] = React.useState(true);
  return (
    <n.Enclosed label="js.react-native.ui-button/ButtonFraction">
      <n.Row style={{"alignItems":"center"}}>
        <ReactNative.Text
          style={{"width":80,"fontSize":12,"color":"#333","fontWeight":"700"}}>FRACTION
        </ReactNative.Text>
        <ui_button.Button
          theme={{
            "bgNormal":"blue",
            "fgNormal":"red",
            "fgHovered":0.1,
            "bgPressed":-0.5,
            "bgHovered":-0.8
          }}
          text="PUSH"
          style={{"fontSize":30,"fontWeight":"800","borderRadius":10,"margin":20}}
          onPress={function (){
            setActive(!active);
          }}
          addons={[
            physical_addon.tagAll({"style":{"paddingHorizontal":20,"height":80,"flex":1}})
          ]}>
        </ui_button.Button>
        <ReactNative.View style={{"width":10}}></ReactNative.View>
      </n.Row>
      <n.Caption text={n.format_obj({active})} style={{"marginTop":10}}></n.Caption>
    </n.Enclosed>);
}

// js.react-native.ui-button-test/ButtonSimpleDemo [155] 
function ButtonSimpleDemo(){
  let [active,setActive] = React.useState(true);
  let [highlighted,setHighlighted] = React.useState();
  let [disabled,setDisabled] = React.useState();
  return (
    <n.Enclosed label="js.react-native.ui-button/ButtonSimple">
      <n.Row style={{"alignItems":"center"}}>
        <ReactNative.Text
          style={{"width":80,"fontSize":12,"color":"#333","fontWeight":"700"}}>SIMPLE
        </ReactNative.Text>
        <ui_button.Button
          highlighted={highlighted}
          disabled={disabled}
          theme={{
            "bgNormal":"darkred",
            "fgNormal":"#fefefe",
            "bgPressed":"orange",
            "bgHovered":"firebrick"
          }}
          text="PUSH"
          style={{"borderRadius":3}}
          size="lg"
          onPress={function (){
            setActive(!active);
          }}
          addons={[
            physical_addon.tagAll({"style":{"paddingHorizontal":20,"height":80,"flex":1}})
          ]}>
        </ui_button.Button>
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
      <n.Caption text={n.format_obj({active})} style={{"marginTop":10}}></n.Caption>
    </n.Enclosed>);
}

var MODULE = {
  "ButtonOpacityDemo":ButtonOpacityDemo,
  "ButtonSizeDemo":ButtonSizeDemo,
  "ButtonFractionDemo":ButtonFractionDemo,
  "ButtonSimpleDemo":ButtonSimpleDemo
};

export default MODULE