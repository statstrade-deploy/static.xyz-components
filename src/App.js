import * as Expo from 'expo'

import React from 'react'

import * as ReactNative from 'react-native'

import web_pune_frame from './component/web-pune-frame'

import web_melbourne from './component/web-melbourne'

import n from './js/react-native'

import client from './xt/lang/base-client'

import k from './xt/lang/base-lib'

import base_box from './xt/lang/event-box'

import ext_box from './js/react/ext-box'

import web_native from './component/web-native'

// statsenv.main.xyz-components/__import__ [31] 
import RNIcon from 'react-native-vector-icons/Entypo'
import * as ExpoImagePicker from 'expo-image-picker'
import * as RNSvg from 'react-native-svg'
import * as LWCharts from 'lightweight-charts'
Object.defineProperty((globalThis),"React",{"value":React,"writeable":true});
Object.defineProperty(
  (globalThis),
  "ReactNative",
  {"value":ReactNative,"writeable":true}
);
Object.defineProperty((globalThis),"RNIcon",{"value":RNIcon,"writeable":true});
Object.defineProperty(
  (globalThis),
  "ExpoImagePicker",
  {"value":ExpoImagePicker,"writeable":true}
);
Object.defineProperty((globalThis),"RNSvg",{"value":RNSvg,"writeable":true});
Object.defineProperty((globalThis),"LWCharts",{"value":LWCharts,"writeable":true});
Object.defineProperty((globalThis),"Expo",{"value":Expo,"writeable":true});

// statsenv.main.xyz-components/Global [35] 
globalThis["statsenv_main_xyz_components$$Global"] = base_box.make_box({"init":false,"l0":"03-pune-frame","l1":"101-sidemenu"});

// statsenv.main.xyz-components/Screens [40] 
globalThis["statsenv_main_xyz_components$$Screens"] = base_box.make_box({});

// statsenv.main.xyz-components/__screen__ [43] 
base_box.set_data(globalThis["statsenv_main_xyz_components$$Screens"],[],{
  "00-native":web_native.raw_controls(),
  "01-melbourne":web_melbourne.melbourne_controls(),
  "02-slim":web_melbourne.slim_controls(),
  "03-pune-frame":web_pune_frame.pune_frame_controls()
});

// statsenv.main.xyz-components/AppMain [53] 
function AppMain(){
  let [l0,setL0] = ext_box.useBox(globalThis["statsenv_main_xyz_components$$Global"],["l0"]);
  let [l1,setL1] = ext_box.useBox(globalThis["statsenv_main_xyz_components$$Global"],["l1"]);
  let tree = ext_box.listenBox(globalThis["statsenv_main_xyz_components$$Screens"],[]);
  return (
    <ReactNative.View
      style={{"position":"absolute","top":0,"bottom":0,"width":"100%"}}>
      <n.TreePane
        tree={tree}
        levels={[
          {"type":"tabs","initial":l0,"setInitial":setL0},
          {
          "type":"list",
          "initial":l1,
          "setInitial":setL1,
          "listWidth":120,
          "displayFn":n.displayTarget
        }
        ]}>
      </n.TreePane>
    </ReactNative.View>);
}

// statsenv.main.xyz-components/AppScratch [72] 
function AppScratch(){
  return (
    <ReactNative.View></ReactNative.View>);
}

// statsenv.main.xyz-components/__main__ [76] 
base_box.set_data(
  globalThis["statsenv_main_xyz_components$$Global"],
  ["Main"],
  AppMain
);

// statsenv.main.xyz-components/App [80] 
function App(){
  let {Main} = ext_box.listenBox(globalThis["statsenv_main_xyz_components$$Global"],[]);
  return (
    <Main></Main>);
}

var MODULE = Expo.registerRootComponent(App);

export default MODULE