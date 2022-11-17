import React from 'react'

import * as ReactNative from 'react-native'

import n from '../js/react-native'

import ext_form from '../js/react/ext-form'

import event_form from '../xt/lang/event-form'

import slim_common from './slim-common'

import base_palette from './base-palette'

// melbourne.ui-base-palette-test/PaletteBaseDemo [24] 
function PaletteBaseDemo(){
  let [color,setColor] = React.useState("purple");
  let [type,setType] = React.useState("dark");
  let [foil,setFoil] = React.useState("background");
  let palette = base_palette.createPalette(type,color);
  return (
    <n.Enclosed label="melbourne.base-palette/PaletteBase">
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
        style={{
          "backgroundColor":base_palette.getColorRaw(palette,foil || "background")
        }}>
        {["primary","error","neutral","background"].map(function (colorKey){
          return (
            <ReactNative.View key={colorKey} style={{"padding":10}}>
              <ReactNative.Text
                style={{
                  "color":base_palette.getColorRaw(palette,(foil == "background") ? "neutral" : "background"),
                  "margin":5
                }}>{colorKey.toUpperCase()}
              </ReactNative.Text>
              <n.Row>
                <ReactNative.View
                  style={{
                    "backgroundColor":base_palette.getColorRaw(palette,colorKey,"flatten"),
                    "height":30,
                    "width":30,
                    "margin":5
                  }}>
                </ReactNative.View>
                <ReactNative.View
                  style={{
                    "backgroundColor":base_palette.getColorRaw(palette,colorKey,"diminish"),
                    "height":30,
                    "width":30,
                    "margin":5
                  }}>
                </ReactNative.View>
                <ReactNative.View
                  style={{
                    "backgroundColor":base_palette.getColorRaw(palette,colorKey),
                    "height":30,
                    "width":30,
                    "margin":5
                  }}>
                </ReactNative.View>
                <ReactNative.View
                  style={{
                    "backgroundColor":base_palette.getColorRaw(palette,colorKey,"augment"),
                    "height":30,
                    "width":30,
                    "margin":5
                  }}>
                </ReactNative.View>
                <ReactNative.View
                  style={{
                    "backgroundColor":base_palette.getColorRaw(palette,colorKey,"sharpen"),
                    "height":30,
                    "width":30,
                    "margin":5
                  }}>
                </ReactNative.View>
              </n.Row>
            </ReactNative.View>);
        })}
      </ReactNative.View>
    </n.Enclosed>);
}

// melbourne.ui-base-palette-test/PaletteToneDemo [114] 
function PaletteToneDemo(){
  let [color,setColor] = React.useState("purple");
  let [type,setType] = React.useState("dark");
  let [foil,setFoil] = React.useState("background");
  let palette = base_palette.createPalette(type,color);
  return (
    <n.Enclosed label="melbourne.base-palette/PaletteTone">
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
        style={{
          "backgroundColor":base_palette.getColorRaw(palette,foil || "background")
        }}>
        <ReactNative.View style={{"padding":10}}>
          <ReactNative.Text
            style={{
              "color":base_palette.getColorRaw(palette,(foil == "background") ? "neutral" : "background"),
              "margin":5
            }}>PRIMARY/BACKGROUND
          </ReactNative.Text>
          <n.Row>
            {[0,1,2,3,4,5,6,7].map(function (i){
              return (
                <ReactNative.View
                  key={i}
                  style={{
                    "backgroundColor":base_palette.getColorRaw(palette,"primary","mix","background",i),
                    "height":30,
                    "width":30,
                    "margin":5
                  }}>
                </ReactNative.View>);
            })}
          </n.Row>
        </ReactNative.View>
        <ReactNative.View style={{"padding":10}}>
          <ReactNative.Text
            style={{
              "color":base_palette.getColorRaw(palette,(foil == "background") ? "neutral" : "background"),
              "margin":5
            }}>PRIMARY/NEUTRAL
          </ReactNative.Text>
          <n.Row>
            {[0,1,2,3,4,5,6,7].map(function (i){
              return (
                <ReactNative.View
                  key={i}
                  style={{
                    "backgroundColor":base_palette.getColorRaw(palette,"primary","mix","neutral",i),
                    "height":30,
                    "width":30,
                    "margin":5
                  }}>
                </ReactNative.View>);
            })}
          </n.Row>
        </ReactNative.View>
        <ReactNative.View style={{"padding":10}}>
          <ReactNative.Text
            style={{
              "color":base_palette.getColorRaw(palette,(foil == "background") ? "neutral" : "background"),
              "margin":5
            }}>NEUTRAL/BACKGROUND
          </ReactNative.Text>
          <n.Row>
            {[0,1,2,3,4,5,6,7].map(function (i){
              return (
                <ReactNative.View
                  key={i}
                  style={{
                    "backgroundColor":base_palette.getColorRaw(palette,"neutral","mix","background",i),
                    "height":30,
                    "width":30,
                    "margin":5
                  }}>
                </ReactNative.View>);
            })}
          </n.Row>
        </ReactNative.View>
        <ReactNative.View style={{"padding":10}}>
          <ReactNative.Text
            style={{
              "color":base_palette.getColorRaw(palette,(foil == "background") ? "neutral" : "background"),
              "margin":5
            }}>PRIMARY/LIGHTEN
          </ReactNative.Text>
          <n.Row>
            {[0,1,2,3,4,5,6,7].map(function (i){
              return (
                <ReactNative.View
                  key={i}
                  style={{
                    "backgroundColor":base_palette.getColorRaw(palette,"primary","lighten",null,i),
                    "height":30,
                    "width":30,
                    "margin":5
                  }}>
                </ReactNative.View>);
            })}
          </n.Row>
        </ReactNative.View>
        <ReactNative.View style={{"padding":10}}>
          <ReactNative.Text
            style={{
              "color":base_palette.getColorRaw(palette,(foil == "background") ? "neutral" : "background"),
              "margin":5
            }}>PRIMARY/DARKEN
          </ReactNative.Text>
          <n.Row>
            {[0,1,2,3,4,5,6,7].map(function (i){
              return (
                <ReactNative.View
                  key={i}
                  style={{
                    "backgroundColor":base_palette.getColorRaw(palette,"primary","darken",null,i),
                    "height":30,
                    "width":30,
                    "margin":5
                  }}>
                </ReactNative.View>);
            })}
          </n.Row>
        </ReactNative.View>
        <ReactNative.View style={{"padding":10}}>
          <ReactNative.Text
            style={{
              "color":base_palette.getColorRaw(palette,(foil == "background") ? "neutral" : "background"),
              "margin":5
            }}>PRIMARY/SATURATE
          </ReactNative.Text>
          <n.Row>
            {[1,2,3,4,5,6,7].map(function (i){
              return (
                <ReactNative.View
                  key={i}
                  style={{
                    "backgroundColor":base_palette.getColorRaw(palette,"primary","saturate",null,i),
                    "height":30,
                    "width":30,
                    "margin":5
                  }}>
                </ReactNative.View>);
            })}
          </n.Row>
        </ReactNative.View>
        <ReactNative.View style={{"padding":10}}>
          <ReactNative.Text
            style={{
              "color":base_palette.getColorRaw(palette,(foil == "background") ? "neutral" : "background"),
              "margin":5
            }}>PRIMARY/DESATURATE
          </ReactNative.Text>
          <n.Row>
            {[1,2,3,4,5,6,7].map(function (i){
              return (
                <ReactNative.View
                  key={i}
                  style={{
                    "backgroundColor":base_palette.getColorRaw(palette,"primary","desaturate",null,i),
                    "height":30,
                    "width":30,
                    "margin":5
                  }}>
                </ReactNative.View>);
            })}
          </n.Row>
        </ReactNative.View>
      </ReactNative.View>
    </n.Enclosed>);
}

var MODULE = {
  "PaletteBaseDemo":PaletteBaseDemo,
  "PaletteToneDemo":PaletteToneDemo
};

export default MODULE