import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import n from '../js/react-native'

import base_palette from './base-palette'

import ui_text from './ui-text'

import ui_section from './ui-section'

// melbourne.ui-text-test/EnumMinorDemo [23] 
function EnumMinorDemo(){
  let [values,setValues] = React.useState(["USD"]);
  return (
    <n.Enclosed label="melbourne.ui-text/EnumMinor">
      <n.Row>
        <ui_section.SectionBase design={{"type":"light"}}>
          <ui_text.EnumMinor
            design={{"type":"light"}}
            data={["STATS","XLM","USD"]}
            values={values}
            setValues={setValues}>
          </ui_text.EnumMinor>
        </ui_section.SectionBase>
        <ui_section.SectionBase design={{"type":"dark"}}>
          <ui_text.EnumMinor
            design={{"type":"dark"}}
            data={["STATS","XLM","USD"]}
            values={values}
            setValues={setValues}>
          </ui_text.EnumMinor>
        </ui_section.SectionBase>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.ui-text-test/TabsMinorDemo [49] 
function TabsMinorDemo(){
  let [value,setValue] = React.useState("USD");
  return (
    <n.Enclosed label="melbourne.ui-text/TabsMinor">
      <n.Row>
        <ui_section.SectionBase design={{"type":"light"}}>
          <ui_text.TabsMinor
            design={{"type":"light"}}
            data={["STATS","XLM","USD"]}
            value={value}
            setValue={setValue}>
          </ui_text.TabsMinor>
        </ui_section.SectionBase>
        <ui_section.SectionBase design={{"type":"dark"}}>
          <ui_text.TabsMinor
            design={{"type":"dark"}}
            data={["STATS","XLM","USD"]}
            value={value}
            setValue={setValue}>
          </ui_text.TabsMinor>
        </ui_section.SectionBase>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.ui-text-test/EnumAccentDemo [75] 
function EnumAccentDemo(){
  let [values,setValues] = React.useState(["USD"]);
  return (
    <n.Enclosed label="melbourne.ui-text/EnumAccent">
      <n.Row>
        <ui_section.SectionBase design={{"type":"light"}}>
          <ui_text.EnumAccent
            design={{"type":"light"}}
            data={["STATS","XLM","USD"]}
            values={values}
            setValues={setValues}>
          </ui_text.EnumAccent>
        </ui_section.SectionBase>
        <ui_section.SectionBase design={{"type":"dark"}}>
          <ui_text.EnumAccent
            design={{"type":"dark"}}
            data={["STATS","XLM","USD"]}
            values={values}
            setValues={setValues}>
          </ui_text.EnumAccent>
        </ui_section.SectionBase>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.ui-text-test/TabsAccentDemo [101] 
function TabsAccentDemo(){
  let [value,setValue] = React.useState("USD");
  return (
    <n.Enclosed label="melbourne.ui-text/TabsAccent">
      <n.Row>
        <ui_section.SectionBase design={{"type":"light"}}>
          <ui_text.TabsAccent
            design={{"type":"light"}}
            data={["STATS","XLM","USD"]}
            value={value}
            setValue={setValue}>
          </ui_text.TabsAccent>
        </ui_section.SectionBase>
        <ui_section.SectionBase design={{"type":"dark"}}>
          <ui_text.TabsAccent
            design={{"type":"dark"}}
            data={["STATS","XLM","USD"]}
            value={value}
            setValue={setValue}>
          </ui_text.TabsAccent>
        </ui_section.SectionBase>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.ui-text-test/HeaderBaseDemo [130] 
function HeaderBaseDemo(){
  let [color,setColor] = React.useState("purple");
  let [type,setType] = React.useState("dark");
  let [foil,setFoil] = React.useState("background");
  let palette = base_palette.createPalette(type,color);
  return (
    <n.Enclosed label="melbourne.ui-text/createHeaderFn">
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
      <n.Row>
        <ReactNative.View
          style={{
            "backgroundColor":base_palette.getColorRaw(palette,foil || "background")
          }}>
          {[
            ui_text.H1,
            ui_text.H2,
            ui_text.H3,
            ui_text.H4,
            ui_text.H5,
            ui_text.H6
          ].map(function (Component,i){
            return (
              <ReactNative.View key={i} style={{"padding":10}}><Component design={{color,type}}>HELLO</Component></ReactNative.View>);
          })}
        </ReactNative.View>
        <ReactNative.View
          style={{
            "backgroundColor":base_palette.getColorRaw(palette,foil || "background")
          }}>
          {[
            ui_text.H1,
            ui_text.H2,
            ui_text.H3,
            ui_text.H4,
            ui_text.H5,
            ui_text.H6
          ].map(function (Component,i){
            return (
              <ReactNative.View key={i} style={{"padding":10}}>
                <Component
                  design={{color,type}}
                  designOverride={{"variant":{"fg":{"key":"neutral","tone":"sharpen"}}}}>HELLO
                </Component>
              </ReactNative.View>);
          })}
        </ReactNative.View>
        <ReactNative.View
          style={{
            "backgroundColor":base_palette.getColorRaw(palette,foil || "background")
          }}>
          {[
            ui_text.H1,
            ui_text.H2,
            ui_text.H3,
            ui_text.H4,
            ui_text.H5,
            ui_text.H6
          ].map(function (Component,i){
            return (
              <ReactNative.View key={i} style={{"padding":10}}>
                <Component
                  design={{color,type}}
                  designOverride={{"variant":{"fg":{"key":"background","tone":"flatten"}}}}>HELLO
                </Component>
              </ReactNative.View>);
          })}
        </ReactNative.View>
        <ReactNative.View
          style={{
            "backgroundColor":base_palette.getColorRaw(palette,foil || "background")
          }}>
          {[
            ui_text.H1,
            ui_text.H2,
            ui_text.H3,
            ui_text.H4,
            ui_text.H5,
            ui_text.H6
          ].map(function (Component,i){
            return (
              <ReactNative.View key={i} style={{"padding":10}}>
                <Component
                  design={{color,type}}
                  designOverride={{"variant":{"fg":{"key":"error"}}}}>HELLO
                </Component>
              </ReactNative.View>);
          })}
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.ui-text-test/TextBaseDemo [236] 
function TextBaseDemo(){
  let [color,setColor] = React.useState("purple");
  let [type,setType] = React.useState("dark");
  let [foil,setFoil] = React.useState("background");
  let palette = base_palette.createPalette(type,color);
  return (
    <n.Enclosed label="melbourne.ui-text/createTextFn">
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
      <n.Row>
        <ReactNative.View
          style={{
            "backgroundColor":base_palette.getColorRaw(palette,foil || "background")
          }}>
          {[ui_text.P,ui_text.Caption].map(function (Component,i){
            return (
              <ReactNative.View key={i} style={{"padding":10}}><Component design={{color,type}}>HELLO</Component></ReactNative.View>);
          })}
        </ReactNative.View>
        <ReactNative.View
          style={{
            "backgroundColor":base_palette.getColorRaw(palette,foil || "background")
          }}>
          {[ui_text.P,ui_text.Caption].map(function (Component,i){
            return (
              <ReactNative.View key={i} style={{"padding":10}}>
                <Component
                  design={{color,type}}
                  variant={{"fg":{"key":"background"},"bg":{"key":"primary"}}}>HELLO
                </Component>
              </ReactNative.View>);
          })}
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.ui-text-test/ActivityIndicatorDemo [295] 
function ActivityIndicatorDemo(){
  return (
    <n.Enclosed label="melbourne.ui-text/ActivityIndicator">
      <n.Row>
        <ui_section.SectionBase design={{"type":"light"}}>
          <ui_text.ActivityIndicator design={{"type":"light"}}></ui_text.ActivityIndicator>
          <ui_text.ActivityIndicator design={{"type":"light"}} size={100}></ui_text.ActivityIndicator>
        </ui_section.SectionBase>
        <ui_section.SectionBase design={{"type":"dark"}}>
          <ui_text.ActivityIndicator design={{"type":"dark"}}></ui_text.ActivityIndicator>
          <ui_text.ActivityIndicator design={{"type":"light"}} size={100}></ui_text.ActivityIndicator>
        </ui_section.SectionBase>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.ui-text-test/IconDemo [320] 
function IconDemo(){
  return (
    <n.Enclosed label="melbourne.ui-text/Icon">
      <n.Row>
        <ui_section.SectionBase design={{"type":"light"}}>
          <ui_text.Icon design={{"type":"light"}} name="close"></ui_text.Icon>
          <ui_text.Icon design={{"type":"light"}} name="close" size={100}></ui_text.Icon>
        </ui_section.SectionBase>
        <ui_section.SectionBase design={{"type":"dark"}}>
          <ui_text.Icon design={{"type":"dark"}} name="close"></ui_text.Icon>
          <ui_text.Icon design={{"type":"light"}} name="close" size={100}></ui_text.Icon>
        </ui_section.SectionBase>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.ui-text-test/AvatarDemo [349] 
function AvatarDemo(){
  return (
    <n.Enclosed label="melbourne.ui-text/Avatar">
      <n.Row>
        <ui_section.SectionBase design={{"type":"light"}}>
          <ui_text.Avatar design={{"type":"light"}} text="H"></ui_text.Avatar>
          <ui_text.Avatar design={{"type":"light"}} text="H" size={100}></ui_text.Avatar>
        </ui_section.SectionBase>
        <ui_section.SectionBase design={{"type":"dark"}}>
          <ui_text.Avatar design={{"type":"dark"}} text="H"></ui_text.Avatar>
          <ui_text.Avatar design={{"type":"light"}} text="H" size={100}></ui_text.Avatar>
        </ui_section.SectionBase>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.ui-text-test/MinorBaseDemo [387] 
function MinorBaseDemo(){
  let [color,setColor] = React.useState("purple");
  let [type,setType] = React.useState("dark");
  let [foil,setFoil] = React.useState("background");
  let [selected,setSelected] = React.useState();
  let palette = base_palette.createPalette(type,color);
  let components = [ui_text.ButtonMinor,ui_text.ToggleMinor];
  let overrides = [
    ui_text.minorToggleTheme(
      {"key":"background","tone":"standard"},
      {"key":"primary","tone":"sharpen"}
    ),
    ui_text.minorToggleTheme(
      {"key":"primary","tone":"standard"},
      {"key":"background","tone":"sharpen"}
    ),
    ui_text.minorToggleTheme(
      {"key":"neutral","tone":"standard"},
      {"key":"background","tone":"sharpen"}
    ),
    ui_text.minorToggleTheme(
      {"key":"error","tone":"standard"},
      {"key":"background","tone":"sharpen"}
    )
  ];
  return (
    <n.Enclosed
      key={type + "." + color}
      label="melbourne.ui-text/createMinorFn">
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
      <n.Row>
        {overrides.map(function (override,i){
          return (
            <ReactNative.View
              key={i}
              style={{
                "backgroundColor":base_palette.getColorRaw(palette,foil || "background")
              }}>
              {components.map(function (Component,i){
                return (
                  <ReactNative.View key={i} style={{"padding":10}}>
                    <Component
                      design={{color,type}}
                      variant={override}
                      selected={selected}
                      onPress={function (){
                        return setSelected(!selected);
                      }}
                      text="HELLO">
                    </Component>
                  </ReactNative.View>);
              })}
            </ReactNative.View>);
        })}
      </n.Row>
    </n.Enclosed>);
}

// melbourne.ui-text-test/AccentBaseDemo [469] 
function AccentBaseDemo(){
  let [color,setColor] = React.useState("purple");
  let [type,setType] = React.useState("dark");
  let [foil,setFoil] = React.useState("background");
  let [selected,setSelected] = React.useState();
  let palette = base_palette.createPalette(type,color);
  let components = [ui_text.ButtonAccent,ui_text.ToggleAccent];
  let overrides = [
    ui_text.accentToggleTheme(
      {"key":"neutral","tone":"standard"},
      {"key":"primary","tone":"sharpen"}
    ),
    ui_text.accentToggleTheme(
      {"key":"primary","tone":"standard"},
      {"key":"background","tone":"sharpen"}
    ),
    ui_text.accentToggleTheme(
      {"key":"neutral","tone":"standard"},
      {"key":"background","tone":"sharpen"}
    ),
    ui_text.accentToggleTheme(
      {"key":"error","tone":"standard"},
      {"key":"background","tone":"sharpen"}
    )
  ];
  return (
    <n.Enclosed
      key={type + "." + color}
      label="melbourne.ui-text/createAccentFn">
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
      <n.Row>
        {overrides.map(function (override,i){
          return (
            <ReactNative.View
              key={i}
              style={{
                "backgroundColor":base_palette.getColorRaw(palette,foil || "background")
              }}>
              {components.map(function (Component,i){
                return (
                  <ReactNative.View key={i} style={{"padding":10}}>
                    <Component
                      design={{color,type}}
                      variant={override}
                      selected={selected}
                      onPress={function (){
                        return setSelected(!selected);
                      }}
                      text="HELLO">
                    </Component>
                  </ReactNative.View>);
              })}
            </ReactNative.View>);
        })}
      </n.Row>
    </n.Enclosed>);
}

// melbourne.ui-text-test/ButtonTooltipDemo [548] 
function ButtonTooltipDemo(){
  let mainComponent = React.useCallback(function (){
    return (
      <ReactNative.View style={{"height":100,"width":100,"backgroundColor":"red"}}></ReactNative.View>);
  },[]);
  return (
    <n.Isolation>
      <n.Enclosed label="melbourne.ui-text/ButtonTooltip">
        <n.Row>
          <ui_section.SectionBase design={{"type":"light"}}>
            <n.Row>
              <ui_text.ButtonTooltip
                design={{"type":"light"}}
                mainComponent={mainComponent}
                text="Press"
                tooltip={{"position":"top"}}
                onPress={function (){
                  return alert("HELLO");
                }}>
              </ui_text.ButtonTooltip>
              <ui_text.ButtonTooltip
                design={{"type":"light"}}
                mainComponent={mainComponent}
                component="accent"
                text="Press"
                tooltip={{"position":"left"}}
                onPress={function (){
                  return alert("HELLO");
                }}>
              </ui_text.ButtonTooltip>
            </n.Row>
          </ui_section.SectionBase>
          <ui_section.SectionBase design={{"type":"dark"}}>
            <n.Row>
              <ui_text.ButtonTooltip
                design={{"type":"dark"}}
                mainComponent={mainComponent}
                text="Press"
                onPress={function (){
                  return alert("HELLO");
                }}>
              </ui_text.ButtonTooltip>
              <ui_text.ButtonTooltip
                design={{"type":"dark"}}
                mainComponent={mainComponent}
                component="accent"
                tooltip={{"position":"right"}}
                text="Press"
                onPress={function (){
                  return alert("HELLO");
                }}>
              </ui_text.ButtonTooltip>
            </n.Row>
          </ui_section.SectionBase>
        </n.Row>
      </n.Enclosed>
    </n.Isolation>);
}

// melbourne.ui-text-test/ConfirmTooltipDemo [596] 
function ConfirmTooltipDemo(){
  return (
    <n.Isolation>
      <n.Enclosed label="melbourne.ui-text/ConfirmTooltip">
        <n.Row>
          <ui_section.SectionBase design={{"type":"light"}}>
            <n.Row>
              <ui_text.ConfirmTooltip
                design={{"type":"light"}}
                text="Press"
                onPress={function (){
                  return alert("HELLO");
                }}>
              </ui_text.ConfirmTooltip>
              <ui_text.ConfirmTooltip
                design={{"type":"light"}}
                component="accent"
                text="Press"
                onPress={function (){
                  return alert("HELLO");
                }}>
              </ui_text.ConfirmTooltip>
            </n.Row>
          </ui_section.SectionBase>
          <ui_section.SectionBase design={{"type":"dark"}}>
            <n.Row>
              <ui_text.ConfirmTooltip
                design={{"type":"dark"}}
                text="Press"
                onPress={function (){
                  return alert("HELLO");
                }}>
              </ui_text.ConfirmTooltip>
              <ui_text.ConfirmTooltip
                design={{"type":"dark"}}
                component="accent"
                text="Press"
                onPress={function (){
                  return alert("HELLO");
                }}>
              </ui_text.ConfirmTooltip>
            </n.Row>
          </ui_section.SectionBase>
        </n.Row>
      </n.Enclosed>
    </n.Isolation>);
}

// melbourne.ui-text-test/TextAltDemo [635] 
function TextAltDemo(){
  return (
    <n.Enclosed label="melbourne.ui-text/TextAlt">
      <n.Row>
        <ui_section.SectionBase design={{"type":"light"}}>
          <n.Row>
            <ui_text.TextAlt design={{"type":"light"}} value={{"a":1,"b":2}}></ui_text.TextAlt>
          </n.Row>
        </ui_section.SectionBase>
        <ui_section.SectionBase design={{"type":"dark"}}>
          <n.Row>
            <ui_text.TextAlt design={{"type":"dark"}} value={{"a":1,"b":2}}></ui_text.TextAlt>
          </n.Row>
        </ui_section.SectionBase>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {
  "EnumMinorDemo":EnumMinorDemo,
  "TabsMinorDemo":TabsMinorDemo,
  "EnumAccentDemo":EnumAccentDemo,
  "TabsAccentDemo":TabsAccentDemo,
  "HeaderBaseDemo":HeaderBaseDemo,
  "TextBaseDemo":TextBaseDemo,
  "ActivityIndicatorDemo":ActivityIndicatorDemo,
  "IconDemo":IconDemo,
  "AvatarDemo":AvatarDemo,
  "MinorBaseDemo":MinorBaseDemo,
  "AccentBaseDemo":AccentBaseDemo,
  "ButtonTooltipDemo":ButtonTooltipDemo,
  "ConfirmTooltipDemo":ConfirmTooltipDemo,
  "TextAltDemo":TextAltDemo
};

export default MODULE