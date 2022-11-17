import React from 'react'

import * as ReactNative from 'react-native'

import n from '../js/react-native'

import ui_toggle_button from './ui-toggle-button'

import base_palette from './base-palette'

// melbourne.ui-toggle-button-test/ToggleButtonDemo [21] 
function ToggleButtonDemo(){
  let [s0,setS0] = React.useState();
  let [s1,setS1] = React.useState(true);
  let [s2,setS2] = React.useState(true);
  let [color,setColor] = React.useState("blue");
  let [type,setType] = React.useState("dark");
  let [foil,setFoil] = React.useState("primary");
  let palette = base_palette.createPalette(type,color);
  return (
    <n.Enclosed label="melbourne.ui-button/ToggleButton">
      <n.Row>
        <n.Tabs
          data={["purple","teal","blue","green"]}
          value={color}
          setValue={setColor}>
        </n.Tabs>
        <ReactNative.Text>   </ReactNative.Text>
        <n.Tabs data={["light","dark"]} value={type} setValue={setType}></n.Tabs>
      </n.Row>
      <n.Tabs
        data={["background","primary","neutral","error"]}
        value={foil}
        setValue={setFoil}>
      </n.Tabs>
      <ReactNative.View
        key={type + "." + color}
        style={{
          "backgroundColor":base_palette.getColorRaw(palette,foil || "background"),
          "flex":1,
          "padding":20
        }}>
        <n.Row style={{"margin":5}}>
          <ui_toggle_button.ToggleButton
            selected={s0}
            onPress={function (){
              return setS0(!s0);
            }}
            design={{color,type}}
            variant={{"active":{"bg":{"key":"neutral"}},"font":"h2"}}
            text="H2 Button">
          </ui_toggle_button.ToggleButton>
        </n.Row>
        <n.Row style={{"margin":5}}>
          <ui_toggle_button.ToggleButton
            selected={s1}
            onPress={function (){
              return setS1(!s1);
            }}
            design={{color,type}}
            variant={{
              "fg":{"key":"primary"},
              "active":{"bg":{"key":"primary"},"fg":{"key":"background"}}
            }}
            text="Secondary Light">
          </ui_toggle_button.ToggleButton>
        </n.Row>
        <n.Row style={{"margin":5}}>
          <ui_toggle_button.ToggleButton
            selected={s2}
            onPress={function (){
              return setS2(!s2);
            }}
            design={{color,type}}
            variant={{
              "fg":{"key":"primary"},
              "pressed":{"bg":{"raw":1}},
              "active":{"bg":{"key":"background"},"fg":{"key":"primary"}}
            }}
            outlined={s2}
            style={[{"fontSize":12},{"borderWidth":1,"borderStyle":"solid"}]}
            text="Minor Light">
          </ui_toggle_button.ToggleButton>
        </n.Row>
        <n.Row style={{"margin":5}}>
          <ui_toggle_button.ToggleButton
            selected={s2}
            onPress={function (){
              return setS2(!s2);
            }}
            design={{color,type}}
            variant={{
              "fg":{"key":"background"},
              "bg":{"key":"primary"},
              "hovered":{"bg":{"raw":1}},
              "pressed":{"bg":{"raw":1}},
              "active":{"bg":{"key":"primary"},"fg":{"key":"background"}}
            }}
            outlined={s2}
            style={[{"fontSize":12},{"borderWidth":1,"borderStyle":"solid"}]}
            text="Color Light">
          </ui_toggle_button.ToggleButton>
        </n.Row>
        <n.Row style={{"margin":5}}>
          <ui_toggle_button.ToggleButton
            selected={s2}
            onPress={function (){
              return setS2(!s2);
            }}
            design={{color,type}}
            variant={{
              "fg":{"key":"background"},
              "bg":{"key":"error"},
              "pressed":{"bg":{"raw":1}},
              "active":{"bg":{"key":"error"},"fg":{"key":"background"}}
            }}
            outlined={s2}
            style={[{"fontSize":12},{"borderWidth":1,"borderStyle":"solid"}]}
            text="Color Light">
          </ui_toggle_button.ToggleButton>
        </n.Row>
        <n.TextDisplay s1={s1} s2={s2} s0={s0}></n.TextDisplay>
      </ReactNative.View>
    </n.Enclosed>);
}

var MODULE = {"ToggleButtonDemo":ToggleButtonDemo};

export default MODULE