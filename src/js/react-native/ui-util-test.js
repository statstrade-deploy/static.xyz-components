import React from 'react'

import * as ReactNative from 'react-native'

import n from '../react-native'

import a from './animate'

import ui_util from './ui-util'

// js.react-native.ui-util-test/PageDemo [22] 
function PageDemo(){
  return (
    <n.Enclosed label="js.react-native.ui-util/Page" style={{"height":200}}>
      <ui_util.Page
        headerComponent={function (){
          return (
            <ReactNative.View style={{"height":30,"backgroundColor":"red"}}></ReactNative.View>);
        }}
        footerComponent={function (){
          return (
            <ReactNative.View style={{"height":30,"backgroundColor":"orange"}}></ReactNative.View>);
        }}
        styleMenu={{"height":60}}
        titleComponent={function (){
          return (
            <ReactNative.View style={{"flex":1,"backgroundColor":"yellow"}}></ReactNative.View>);
        }}
        leftComponent={function (){
          return (
            <ReactNative.View style={{"flex":1,"backgroundColor":"green"}}></ReactNative.View>);
        }}
        rightComponent={function (){
          return (
            <ReactNative.View style={{"flex":1,"backgroundColor":"blue"}}></ReactNative.View>);
        }}>
        <ReactNative.View style={{"flex":1,"backgroundColor":"black"}}></ReactNative.View>
      </ui_util.Page>
    </n.Enclosed>);
}

// js.react-native.ui-util-test/FadeDemo [50] 
function FadeDemo(){
  let [visible,setVisible] = React.useState(true);
  let [size,setSize] = React.useState(100);
  return (
    <n.Enclosed label="js.react-native.ui-util/Fade">
      <n.Row>
        <ReactNative.Button
          title="V"
          onPress={function (){
            return setVisible(!visible);
          }}>
        </ReactNative.Button>
      </n.Row>
      <ui_util.Fade visible={visible}>
        <ReactNative.View style={{"height":size,"width":100,"backgroundColor":"red"}}></ReactNative.View>
      </ui_util.Fade>
    </n.Enclosed>);
}

// js.react-native.ui-util-test/FoldInnerDemo [75] 
function FoldInnerDemo(){
  let [visible,setVisible] = React.useState(true);
  let [size,setSize] = React.useState(100);
  let vindicator = a.useBinaryIndicator(visible);
  return (
    <n.Enclosed label="js.react-native.ui-util/FoldInner">
      <n.Row>
        <ReactNative.Button
          title="V"
          onPress={function (){
            return setVisible(!visible);
          }}>
        </ReactNative.Button>
        <n.Tabs value={size} setValue={setSize} data={[100,200]}></n.Tabs>
      </n.Row>
      <n.Row style={{"height":100}}>
        <ui_util.FoldInner
          aspect="width"
          visible={visible}
          chord={{"visible":visible}}
          indicators={{"visible":vindicator}}>
          <ReactNative.View style={{"height":100,"width":size,"backgroundColor":"red"}}></ReactNative.View>
        </ui_util.FoldInner>
      </n.Row>
    </n.Enclosed>);
}

// js.react-native.ui-util-test/FoldDemo [110] 
function FoldDemo(){
  let [visible,setVisible] = React.useState(true);
  let [size,setSize] = React.useState(100);
  return (
    <n.Enclosed label="js.react-native.ui-util/Fold">
      <n.Row>
        <ReactNative.Button
          title="V"
          onPress={function (){
            return setVisible(!visible);
          }}>
        </ReactNative.Button>
        <n.Tabs value={size} setValue={setSize} data={[100,200]}></n.Tabs>
      </n.Row>
      <n.Row style={{"height":100}}>
        <ui_util.Fold visible={visible}>
          <ReactNative.View
            style={{"height":size,"width":100,"backgroundColor":"green"}}>
          </ReactNative.View>
        </ui_util.Fold>
        <ui_util.Fold visible={visible} aspect="width">
          <ReactNative.View
            style={{"height":100,"width":size,"backgroundColor":"blue"}}>
          </ReactNative.View>
        </ui_util.Fold>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {
  "PageDemo":PageDemo,
  "FadeDemo":FadeDemo,
  "FoldInnerDemo":FoldInnerDemo,
  "FoldDemo":FoldDemo
};

export default MODULE