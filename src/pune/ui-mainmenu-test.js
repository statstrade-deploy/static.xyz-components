import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import n from '../js/react-native'

import ui_mainmenu from './ui-mainmenu'

// pune.ui-mainmenu-test/MainMenuSeperatorDemo [24] 
function MainMenuSeperatorDemo(){
  let [show,setShow] = React.useState(true);
  return (
    <n.Enclosed label="pune.ui-mainmenu/MainMenuSeperator">
      <n.Row>
        <ReactNative.View style={{"padding":20,"backgroundColor":"#eee"}}>
          <ui_mainmenu.MainMenuSeperator design={{"type":"light","mode":"secondary"}}></ui_mainmenu.MainMenuSeperator>
        </ReactNative.View>
        <ReactNative.View style={{"padding":20,"backgroundColor":"#333"}}>
          <ui_mainmenu.MainMenuSeperator design={{"type":"dark","mode":"minor"}}></ui_mainmenu.MainMenuSeperator>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// pune.ui-mainmenu-test/MainMenuButtonDemo [48] 
function MainMenuButtonDemo(){
  let [selected0,setSelected0] = React.useState("home");
  let [selected1,setSelected1] = React.useState("account");
  return (
    <n.Enclosed label="pune.ui-mainmenu/MainMenuButton">
      <n.Row>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#eee"}}>
          <ui_mainmenu.MainMenuButton
            design={{"type":"light"}}
            item={{"key":"home","icon":"home","label":"HOME"}}
            onPress={function (){
              return alert("PRESSED");
            }}>
          </ui_mainmenu.MainMenuButton>
        </ReactNative.View>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#333"}}>
          <ui_mainmenu.MainMenuButton
            design={{"type":"dark"}}
            item={{"key":"home","icon":"home","label":"HOME"}}
            onPress={function (){
              return alert("PRESSED");
            }}>
          </ui_mainmenu.MainMenuButton>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// pune.ui-mainmenu-test/MainMenuToggleDemo [81] 
function MainMenuToggleDemo(){
  let [selected0,setSelected0] = React.useState(true);
  let [selected1,setSelected1] = React.useState();
  return (
    <n.Enclosed label="pune.ui-mainmenu/MainMenuToggle">
      <n.Row>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#eee"}}>
          <ui_mainmenu.MainMenuToggle
            design={{"type":"light"}}
            item={{"key":"home","icon":"home","label":"HOME"}}
            selected={selected0}
            onPress={function (){
              return setSelected0(!selected0);
            }}>
          </ui_mainmenu.MainMenuToggle>
        </ReactNative.View>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#333"}}>
          <ui_mainmenu.MainMenuToggle
            design={{"type":"dark"}}
            item={{"key":"home","icon":"home","label":"HOME"}}
            selected={selected1}
            onPress={function (){
              return setSelected1(!selected1);
            }}>
          </ui_mainmenu.MainMenuToggle>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// pune.ui-mainmenu-test/MainMenuRouteDemo [116] 
function MainMenuRouteDemo(){
  let [routeKey0,setRouteKey0] = React.useState("home");
  let [routeKey1,setRouteKey1] = React.useState("account");
  return (
    <n.Enclosed label="pune.ui-mainmenu/MainMenuRoute">
      <n.Row>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#eee"}}>
          <ui_mainmenu.MainMenuRoute
            design={{"type":"light"}}
            item={{"key":"home","icon":"home","label":"HOME"}}
            routeKey={routeKey0}
            setRouteKey={setRouteKey0}>
          </ui_mainmenu.MainMenuRoute>
          <ui_mainmenu.MainMenuRoute
            design={{"type":"light"}}
            item={{"key":"account","icon":"user","label":"ACCOUNT"}}
            routeKey={routeKey0}
            setRouteKey={setRouteKey0}>
          </ui_mainmenu.MainMenuRoute>
        </ReactNative.View>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#333"}}>
          <ui_mainmenu.MainMenuRoute
            design={{"type":"dark"}}
            item={{"key":"home","icon":"home","label":"HOME"}}
            routeKey={routeKey1}
            setRouteKey={setRouteKey1}>
          </ui_mainmenu.MainMenuRoute>
          <ui_mainmenu.MainMenuRoute
            design={{"type":"dark"}}
            item={{"key":"account","icon":"user","label":"ACCOUNT"}}
            routeKey={routeKey1}
            setRouteKey={setRouteKey1}>
          </ui_mainmenu.MainMenuRoute>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// pune.ui-mainmenu-test/MainMenuMiniContextDemo [165] 
function MainMenuMiniContextDemo(){
  let [visible,setVisible] = React.useState();
  return (
    <n.Enclosed label="pune.ui-mainmenu/MainMenuMiniContext">
      <n.Row style={{"paddingRight":90,"backgroundColor":"#eee"}}>
        <ui_mainmenu.MainMenuMiniContext
          design={{"type":"dark"}}
          visible={visible}
          setVisible={setVisible}>
          <ReactNative.View>
            <ReactNative.Button title="Link A"></ReactNative.Button>
            <ReactNative.Button title="Link B"></ReactNative.Button>
            <ReactNative.Button title="Link C"></ReactNative.Button>
          </ReactNative.View>
        </ui_mainmenu.MainMenuMiniContext>
      </n.Row>
    </n.Enclosed>);
}

// pune.ui-mainmenu-test/MainMenuDemo [189] 
function MainMenuDemo(){
  let [routeKey0,setRouteKey0] = React.useState("home");
  let [routeKey1,setRouteKey1] = React.useState("user");
  return (
    <n.Enclosed label="pune.ui-mainmenu/MainMenu">
      <n.PortalSink>
        <n.Row>
          <ReactNative.View style={{"paddingRight":90,"backgroundColor":"#eee"}}>
            <ui_mainmenu.MainMenu
              design={{"type":"light"}}
              items={[
                {"key":"home","icon":"home","label":"HOME"},
                {"component":ui_mainmenu.MainMenuSeperator},
                {"key":"account","icon":"user","label":"ACCOUNT"},
                {"key":"market","icon":"line-graph","label":"MARKET"}
              ]}
              routeKey={routeKey0}
              setRouteKey={setRouteKey0}>
            </ui_mainmenu.MainMenu>
          </ReactNative.View>
          <ReactNative.View style={{"paddingRight":90,"backgroundColor":"#333"}}>
            <ui_mainmenu.MainMenu
              design={{"type":"dark"}}
              items={[
                {"key":"home","icon":"home","label":"HOME"},
                {"component":ui_mainmenu.MainMenuSeperator},
                {"key":"account","icon":"user","label":"ACCOUNT"},
                {"key":"market","icon":"line-graph","label":"MARKET"}
              ]}
              routeKey={routeKey1}
              setRouteKey={setRouteKey1}>
            </ui_mainmenu.MainMenu>
          </ReactNative.View>
        </n.Row>
      </n.PortalSink>
    </n.Enclosed>);
}

var MODULE = {
  "MainMenuSeperatorDemo":MainMenuSeperatorDemo,
  "MainMenuButtonDemo":MainMenuButtonDemo,
  "MainMenuToggleDemo":MainMenuToggleDemo,
  "MainMenuRouteDemo":MainMenuRouteDemo,
  "MainMenuMiniContextDemo":MainMenuMiniContextDemo,
  "MainMenuDemo":MainMenuDemo
};

export default MODULE