import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import n from '../js/react-native'

import ui_menu_vert from './ui-menu-vert'

// pune.ui-menu-vert-test/MainMenuSeperatorDemo [24] 
function MainMenuSeperatorDemo(){
  let [show,setShow] = React.useState(true);
  return (
    <n.Enclosed label="pune.ui-menu-vert/MainMenuSeperator">
      <n.Row>
        <ReactNative.View style={{"padding":20,"backgroundColor":"#eee"}}>
          <ui_menu_vert.MainMenuSeperator design={{"type":"light","mode":"secondary"}}></ui_menu_vert.MainMenuSeperator>
        </ReactNative.View>
        <ReactNative.View style={{"padding":20,"backgroundColor":"#333"}}>
          <ui_menu_vert.MainMenuSeperator design={{"type":"dark","mode":"minor"}}></ui_menu_vert.MainMenuSeperator>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// pune.ui-menu-vert-test/MainMenuButtonDemo [48] 
function MainMenuButtonDemo(){
  let [selected0,setSelected0] = React.useState("home");
  let [selected1,setSelected1] = React.useState("account");
  return (
    <n.Enclosed label="pune.ui-menu-vert/MainMenuButton">
      <n.Row>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#eee"}}>
          <ui_menu_vert.MainMenuButton
            design={{"type":"light"}}
            item={{"key":"home","icon":"home","label":"HOME"}}
            onPress={function (){
              return alert("PRESSED");
            }}>
          </ui_menu_vert.MainMenuButton>
        </ReactNative.View>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#333"}}>
          <ui_menu_vert.MainMenuButton
            design={{"type":"dark"}}
            item={{"key":"home","icon":"home","label":"HOME"}}
            onPress={function (){
              return alert("PRESSED");
            }}>
          </ui_menu_vert.MainMenuButton>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// pune.ui-menu-vert-test/MainMenuToggleDemo [81] 
function MainMenuToggleDemo(){
  let [selected0,setSelected0] = React.useState(true);
  let [selected1,setSelected1] = React.useState();
  return (
    <n.Enclosed label="pune.ui-menu-vert/MainMenuToggle">
      <n.Row>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#eee"}}>
          <ui_menu_vert.MainMenuToggle
            design={{"type":"light"}}
            item={{"key":"home","icon":"home","label":"HOME"}}
            selected={selected0}
            onPress={function (){
              return setSelected0(!selected0);
            }}>
          </ui_menu_vert.MainMenuToggle>
        </ReactNative.View>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#333"}}>
          <ui_menu_vert.MainMenuToggle
            design={{"type":"dark"}}
            item={{"key":"home","icon":"home","label":"HOME"}}
            selected={selected1}
            onPress={function (){
              return setSelected1(!selected1);
            }}>
          </ui_menu_vert.MainMenuToggle>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// pune.ui-menu-vert-test/MainMenuRouteDemo [116] 
function MainMenuRouteDemo(){
  let [routeKey0,setRouteKey0] = React.useState("home");
  let [routeKey1,setRouteKey1] = React.useState("account");
  return (
    <n.Enclosed label="pune.ui-menu-vert/MainMenuRoute">
      <n.Row>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#eee"}}>
          <ui_menu_vert.MainMenuRoute
            design={{"type":"light"}}
            item={{"key":"home","icon":"home","label":"HOME"}}
            routeKey={routeKey0}
            setRouteKey={setRouteKey0}>
          </ui_menu_vert.MainMenuRoute>
          <ui_menu_vert.MainMenuRoute
            design={{"type":"light"}}
            item={{"key":"account","icon":"user","label":"ACCOUNT"}}
            routeKey={routeKey0}
            setRouteKey={setRouteKey0}>
          </ui_menu_vert.MainMenuRoute>
        </ReactNative.View>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#333"}}>
          <ui_menu_vert.MainMenuRoute
            design={{"type":"dark"}}
            item={{"key":"home","icon":"home","label":"HOME"}}
            routeKey={routeKey1}
            setRouteKey={setRouteKey1}>
          </ui_menu_vert.MainMenuRoute>
          <ui_menu_vert.MainMenuRoute
            design={{"type":"dark"}}
            item={{"key":"account","icon":"user","label":"ACCOUNT"}}
            routeKey={routeKey1}
            setRouteKey={setRouteKey1}>
          </ui_menu_vert.MainMenuRoute>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// pune.ui-menu-vert-test/MainMenuMiniContextDemo [165] 
function MainMenuMiniContextDemo(){
  let [visible,setVisible] = React.useState();
  return (
    <n.Enclosed label="pune.ui-menu-vert/MainMenuMiniContext">
      <n.Row style={{"paddingRight":90,"backgroundColor":"#eee"}}>
        <ui_menu_vert.MainMenuMiniContext
          design={{"type":"dark"}}
          visible={visible}
          setVisible={setVisible}>
          <ReactNative.View>
            <ReactNative.Button title="Link A"></ReactNative.Button>
            <ReactNative.Button title="Link B"></ReactNative.Button>
            <ReactNative.Button title="Link C"></ReactNative.Button>
          </ReactNative.View>
        </ui_menu_vert.MainMenuMiniContext>
      </n.Row>
    </n.Enclosed>);
}

// pune.ui-menu-vert-test/MainMenuDemo [189] 
function MainMenuDemo(){
  let [routeKey0,setRouteKey0] = React.useState("home");
  let [routeKey1,setRouteKey1] = React.useState("user");
  return (
    <n.Enclosed label="pune.ui-menu-vert/MainMenu">
      <n.PortalSink>
        <n.Row>
          <ReactNative.View style={{"paddingRight":90,"backgroundColor":"#eee"}}>
            <ui_menu_vert.MainMenu
              design={{"type":"light"}}
              items={[
                {"key":"home","icon":"home","label":"HOME"},
                {"component":ui_menu_vert.MainMenuSeperator},
                {"key":"account","icon":"user","label":"ACCOUNT"},
                {"key":"market","icon":"line-graph","label":"MARKET"}
              ]}
              routeKey={routeKey0}
              setRouteKey={setRouteKey0}>
            </ui_menu_vert.MainMenu>
          </ReactNative.View>
          <ReactNative.View style={{"paddingRight":90,"backgroundColor":"#333"}}>
            <ui_menu_vert.MainMenu
              design={{"type":"dark"}}
              items={[
                {"key":"home","icon":"home","label":"HOME"},
                {"component":ui_menu_vert.MainMenuSeperator},
                {"key":"account","icon":"user","label":"ACCOUNT"},
                {"key":"market","icon":"line-graph","label":"MARKET"}
              ]}
              routeKey={routeKey1}
              setRouteKey={setRouteKey1}>
            </ui_menu_vert.MainMenu>
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