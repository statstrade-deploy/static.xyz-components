import React from 'react'

import * as ReactNative from 'react-native'

import n from '../react-native'

import ui_router from './ui-router'

// js.react-native.ui-router-test/UseTransitionDemo [20] 
function UseTransitionDemo(){
  return (
    <n.Enclosed label="js.react-native.ui-router/useTransition"></n.Enclosed>);
}

// js.react-native.ui-router-test/RouterDemo [41] 
function RouterDemo(){
  let [routeKey,setRouteKey] = React.useState("b2");
  let [transition,setRouteTransition] = React.useState("from_top");
  let routeComponentFn = function (routeKey){
    return {
      "a1":function (){
            return (
              <ReactNative.View
                style={{
                  "backfaceVisibility":"hidden",
                  "backgroundColor":"orange",
                  "flex":1
                }}>
              </ReactNative.View>);
          },
      "b2":function (){
            return (
              <ReactNative.View
                style={{
                  "backfaceVisibility":"hidden",
                  "backgroundColor":"pink",
                  "flex":1
                }}>
              </ReactNative.View>);
          },
      "c3":function (){
            return (
              <ReactNative.View
                style={{
                  "backfaceVisibility":"hidden",
                  "backgroundColor":"cyan",
                  "flex":1
                }}>
              </ReactNative.View>);
          },
      "d4":function (){
            return (
              <ReactNative.View
                style={{
                  "backfaceVisibility":"hidden",
                  "backgroundColor":"black",
                  "flex":1
                }}>
              </ReactNative.View>);
          }
    }[routeKey];
  };
  return (
    <n.Enclosed
      label="js.react-native.ui-router/Router"
      style={{"height":400}}>
      <n.Tabs
        data={["a1","b2","c3","d4"]}
        value={routeKey}
        setValue={setRouteKey}>
      </n.Tabs>
      <n.Tabs
        data={[
          "from_top",
          "from_bottom",
          "from_left",
          "from_right",
          "flip_vertical",
          "flip_horizontal"
        ]}
        value={transition}
        setValue={setRouteTransition}>
      </n.Tabs>
      <ui_router.Router
        debug={true}
        fade={0.2}
        style={{"height":200,"width":350}}
        routeComponentFn={routeComponentFn}
        routeKey={routeKey}
        transition={transition}>
      </ui_router.Router>
    </n.Enclosed>);
}

var MODULE = {
  "UseTransitionDemo":UseTransitionDemo,
  "RouterDemo":RouterDemo
};

export default MODULE