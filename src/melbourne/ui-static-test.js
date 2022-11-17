import * as ReactNative from 'react-native'

import React from 'react'

import n from '../js/react-native'

import ui_static from './ui-static'

import base_palette from './base-palette'

// melbourne.ui-static-test/DivDemo [22] 
function DivDemo(){
  let [color,setColor] = React.useState("teal");
  return (
    <n.Enclosed label="melbourne.ui-static/Div">
      <n.Row>
        <n.Tabs
          data={["purple","teal","blue","green"]}
          value={color}
          setValue={setColor}>
        </n.Tabs>
      </n.Row>
      <n.Row>
        <ui_static.Div
          style={{"height":100,"width":100}}
          design={{"type":"light","color":color}}>
        </ui_static.Div>
        <ui_static.Div
          style={{"height":100,"width":100}}
          design={{"type":"light","color":color,"invert":true}}>
        </ui_static.Div>
        <ui_static.Div
          style={{"height":100,"width":100}}
          design={{"type":"light","color":color}}
          variant={{"bg":{"key":"primary"}}}>
        </ui_static.Div>
        <ui_static.Div
          style={{"height":100,"width":100}}
          design={{"type":"light","color":color}}
          variant={{"bg":{"key":"neutral","tone":"augment"}}}>
        </ui_static.Div>
        <ui_static.Div
          style={{"height":100,"width":100}}
          design={{"type":"light","color":color}}
          variant={{"bg":{"key":"neutral","tone":"diminish"}}}>
        </ui_static.Div>
        <ui_static.Div
          style={{"height":100,"width":100}}
          design={{"type":"light","color":color}}
          variant={{"bg":{"key":"primary","tone":"sharpen"}}}>
        </ui_static.Div>
      </n.Row>
      <n.Row>
        <ui_static.Div
          style={{"height":100,"width":100}}
          design={{"type":"dark","color":color}}>
        </ui_static.Div>
        <ui_static.Div
          style={{"height":100,"width":100}}
          design={{"type":"dark","color":color,"invert":true}}>
        </ui_static.Div>
        <ui_static.Div
          style={{"height":100,"width":100}}
          design={{"type":"dark","color":color}}
          variant={{"bg":{"key":"primary"}}}>
        </ui_static.Div>
        <ui_static.Div
          style={{"height":100,"width":100}}
          design={{"type":"dark","color":color}}
          variant={{"bg":{"key":"neutral","tone":"augment"}}}>
        </ui_static.Div>
        <ui_static.Div
          style={{"height":100,"width":100}}
          design={{"type":"dark","color":color}}
          variant={{"bg":{"key":"neutral","tone":"diminish"}}}>
        </ui_static.Div>
        <ui_static.Div
          style={{"height":100,"width":100}}
          design={{"type":"dark","color":color}}
          variant={{"bg":{"key":"primary","tone":"sharpen"}}}>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.ui-static-test/TextDemo [116] 
function TextDemo(){
  let [color,setColor] = React.useState("teal");
  let [type,setType] = React.useState("light");
  let [foil,setFoil] = React.useState("background");
  let [tone,setTone] = React.useState("augment");
  let palette = base_palette.createPalette(type,color);
  return (
    <n.Enclosed key={color + "." + type} label="melbourne.ui-static/Text">
      <n.Row>
        <n.Tabs
          data={["purple","teal","blue","green"]}
          value={color}
          setValue={setColor}>
        </n.Tabs>
        <ReactNative.Text>   </ReactNative.Text>
        <n.Tabs data={["light","dark"]} value={type} setValue={setType}></n.Tabs>
      </n.Row>
      <n.Row>
        <n.Tabs
          data={["background","primary","neutral","error"]}
          value={foil}
          setValue={setFoil}>
        </n.Tabs>
      </n.Row>
      <ReactNative.View
        style={{
          "backgroundColor":base_palette.getColorRaw(palette,foil || "background")
        }}>
        {["primary","background","neutral","error"].flatMap(function (key){
          return ["flatten","diminish","default","augment","sharpen"].map(function (tone){
            return (
              <ui_static.Text
                key={key + "." + tone}
                design={{"type":type,"color":color}}
                variant={{"font":"h4","fg":{"key":key,"tone":tone}}}>{(key + " " + tone).toUpperCase()}
              </ui_static.Text>);
          });
        })}
      </ReactNative.View>
    </n.Enclosed>);
}

// melbourne.ui-static-test/SeparatorDemo [167] 
function SeparatorDemo(){
  let [color,setColor] = React.useState("teal");
  return (
    <n.Enclosed label="melbourne.ui-static/Separator">
      <n.Row>
        <n.Tabs
          data={["purple","teal","blue","green"]}
          value={color}
          setValue={setColor}>
        </n.Tabs>
      </n.Row>
      <n.Row>
        <ui_static.Separator
          style={{"width":100}}
          design={{"type":"light","color":color}}>
        </ui_static.Separator>
        <ui_static.Separator
          style={{"width":100}}
          design={{"type":"light","color":color,"invert":true}}>
        </ui_static.Separator>
        <ui_static.Separator
          style={{"width":100}}
          design={{"type":"light","color":color}}
          variant={{"fg":{"key":"primary"}}}>
        </ui_static.Separator>
        <ui_static.Separator
          style={{"width":100}}
          design={{"type":"light","color":color}}
          variant={{"fg":{"key":"neutral","tone":"augment"}}}>
        </ui_static.Separator>
        <ui_static.Separator
          style={{"width":100}}
          design={{"type":"light","color":color}}
          variant={{"fg":{"key":"neutral","tone":"diminish"}}}>
        </ui_static.Separator>
        <ui_static.Separator
          style={{"width":100}}
          design={{"type":"light","color":color}}
          variant={{"fg":{"key":"primary","tone":"sharpen"}}}>
        </ui_static.Separator>
      </n.Row>
      <n.Row>
        <ui_static.Separator style={{"width":100}} design={{"type":"dark","color":color}}></ui_static.Separator>
        <ui_static.Separator
          style={{"width":100}}
          design={{"type":"dark","color":color,"invert":true}}>
        </ui_static.Separator>
        <ui_static.Separator
          style={{"width":100}}
          design={{"type":"dark","color":color}}
          variant={{"fg":{"key":"primary"}}}>
        </ui_static.Separator>
        <ui_static.Separator
          style={{"width":100}}
          design={{"type":"dark","color":color}}
          variant={{"fg":{"key":"neutral","tone":"augment"}}}>
        </ui_static.Separator>
        <ui_static.Separator
          style={{"width":100}}
          design={{"type":"dark","color":color}}
          variant={{"fg":{"key":"neutral","tone":"diminish"}}}>
        </ui_static.Separator>
        <ui_static.Separator
          style={{"width":100}}
          design={{"type":"dark","color":color}}
          variant={{"fg":{"key":"primary","tone":"sharpen"}}}>
        </ui_static.Separator>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.ui-static-test/ScrollViewDemo [249] 
function ScrollViewDemo(){
  let [color,setColor] = React.useState("teal");
  let [type,setType] = React.useState("light");
  let [foil,setFoil] = React.useState("background");
  let [tone,setTone] = React.useState("augment");
  return (
    <n.Enclosed
      key={color + "." + type}
      label="melbourne.ui-static/ScrollView">
      <n.Row>
        <n.Tabs
          data={["purple","teal","blue","green"]}
          value={color}
          setValue={setColor}>
        </n.Tabs>
        <ReactNative.Text>   </ReactNative.Text>
        <n.Tabs data={["light","dark"]} value={type} setValue={setType}></n.Tabs>
      </n.Row>
      <n.Row>
        <n.Tabs
          data={["background","primary","neutral","error"]}
          value={foil}
          setValue={setFoil}>
        </n.Tabs>
        <n.Tabs
          data={["augment","diminish","flatten","sharpen"]}
          value={tone}
          setValue={setTone}>
        </n.Tabs>
      </n.Row>
      <ui_static.ScrollView
        design={{"type":type,"color":color}}
        variant={{"bg":{"key":foil,"tone":tone}}}
        style={{"height":300,"width":300}}>
        <ReactNative.View style={{"width":400,"height":800,"backgroundColor":"#333"}}></ReactNative.View>
      </ui_static.ScrollView>
    </n.Enclosed>);
}

// melbourne.ui-static-test/TextTooltipDemo [295] 
function TextTooltipDemo(){
  let [color,setColor] = React.useState("teal");
  return (
    <n.Enclosed label="melbourne.ui-static/TextTooltip">
      <n.Row>
        <n.Tabs
          data={["purple","teal","blue","green"]}
          value={color}
          setValue={setColor}>
        </n.Tabs>
      </n.Row>
      <ui_static.TextTooltip design={{"type":"light"}} content="HELLO WORLD"></ui_static.TextTooltip>
    </n.Enclosed>);
}

// melbourne.ui-static-test/TextDisplayDemo [314] 
function TextDisplayDemo(){
  let [color,setColor] = React.useState("teal");
  return (
    <n.Enclosed label="melbourne.ui-static/TextDisplay">
      <n.Row>
        <n.Tabs
          data={["purple","teal","blue","green"]}
          value={color}
          setValue={setColor}>
        </n.Tabs>
      </n.Row>
      <ui_static.TextDisplay design={{"type":"light"}} content="HELLO WORLD"></ui_static.TextDisplay>
    </n.Enclosed>);
}

var MODULE = {
  "DivDemo":DivDemo,
  "TextDemo":TextDemo,
  "SeparatorDemo":SeparatorDemo,
  "ScrollViewDemo":ScrollViewDemo,
  "TextTooltipDemo":TextTooltipDemo,
  "TextDisplayDemo":TextDisplayDemo
};

export default MODULE