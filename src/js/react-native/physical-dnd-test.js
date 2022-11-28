import React from 'react'

import * as ReactNative from 'react-native'

import n from '../react-native'

import a from './animate'

import physical_base from './physical-base'

import physical_edit from './physical-edit'

// js.react-native.physical-dnd-test/DragAndDropDemo [26] 
function DragAndDropDemo(){
  let axis = "horizontal";
  let position = React.useCallback(new ReactNative.Animated.Value(0),[]);
  let size = 40;
  let [dragging,setDragging] = React.useState();
  let idragging = a.useBinaryIndicator(dragging,{});
  let responder = physical_edit.createPan({
    "pan":{"dx":position},
    "onPressIn":function (){
        setDragging(true);
      },
    "onPressOut":function (){
        setDragging(false);
        ReactNative.Animated.spring(position,{"toValue":0,"useNativeDriver":false}).start();
      }
  });
  return (
    <n.Enclosed label="js.react-native.physical-dnd/DragAndDropDemo">
      <n.Row>
        <physical_base.HoverableTarget
          indicators={{"dragging":idragging}}
          style={[
            {
            "justifyContent":"center",
            "alignItems":"center",
            "height":50,
            "backgroundColor":"blue",
            "flex":1
          }
          ]}
          transformations={function (m){
            return {
              "style":{
                  "backgroundColor":((m.dragging > 0.5) && (m.hovering > 0.5)) ? ["yellow","blue"] : null
                }
            };
          }}>
        </physical_base.HoverableTarget>
        <physical_base.Box
          indicators={{"dragging":idragging,"position":position}}
          style={[
            {
            "justifyContent":"center",
            "alignItems":"center",
            "height":50,
            "flex":1
          }
          ]}
          inner={[
            {
            "component":ReactNative.View,
            "inner":[
              Object.assign({
              "component":ReactNative.View,
              "style":[
                (axis == "horizontal") ? {"left":-(size / 2)} : {"top":-(size / 2)},
                {
                "position":"absolute",
                "cursor":"grab",
                "height":size,
                "width":size,
                "borderRadius":size / 2,
                "backgroundColor":"red",
                "zIndex":100
              }
              ],
              "transformations":function (m){
                return {
                  "style":{
                      "backgroundColor":(m.dragging > 0.5) ? ["black","red"] : null
                    }
                };
              }
            },responder.panHandlers),
              Object.assign({
              "component":ReactNative.View,
              "style":[
                (axis == "horizontal") ? {"left":-(size / 2)} : {"top":-20},
                {
                "position":"absolute",
                "cursor":"grab",
                "height":size,
                "width":size,
                "borderRadius":size / 2,
                "backgroundColor":"grey"
              }
              ],
              "transformations":{
                "position":function (v){
                  return {
                    "style":{
                        "transform":[{[(axis == "horizontal") ? "translateX" : "translateY"]:v}]
                      }
                  };
                }
              }
            },responder.panHandlers)
            ]
          }
          ]}>
        </physical_base.Box>
        <physical_base.Tag indicator={position}></physical_base.Tag>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {"DragAndDropDemo":DragAndDropDemo};

export default MODULE