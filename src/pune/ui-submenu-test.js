import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import n from '../js/react-native'

import ui_submenu from './ui-submenu'

// pune.ui-submenu-test/SubMenuToggleDemo [20] 
function SubMenuToggleDemo(){
  let [selected0,setSelected0] = React.useState(true);
  let [selected1,setSelected1] = React.useState();
  return (
    <n.Enclosed label="pune.ui-submenu/SubMenuToggle">
      <n.Row>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#eee"}}>
          <ui_submenu.SubMenuToggle
            design={{"type":"light"}}
            item={{"key":"info","icon":"appstore-o","label":"INFO"}}
            selected={selected0}
            onPress={function (){
              return setSelected0(!selected0);
            }}>
          </ui_submenu.SubMenuToggle>
        </ReactNative.View>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#333"}}>
          <ui_submenu.SubMenuToggle
            design={{"type":"dark"}}
            item={{"key":"info","icon":"appstore-o","label":"INFO"}}
            selected={selected1}
            onPress={function (){
              return setSelected1(!selected1);
            }}>
          </ui_submenu.SubMenuToggle>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// pune.ui-submenu-test/SubMenuRouteDemo [55] 
function SubMenuRouteDemo(){
  let [routeKey0,setRouteKey0] = React.useState("home");
  let [routeKey1,setRouteKey1] = React.useState("account");
  return (
    <n.Enclosed label="pune.ui-submenu/SubMenuRoute">
      <n.Row>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#eee"}}>
          <ui_submenu.SubMenuRoute
            design={{"type":"light"}}
            item={{"key":"info","icon":"appstore-o","label":"INFO"}}
            routeKey={routeKey0}
            setRouteKey={setRouteKey0}>
          </ui_submenu.SubMenuRoute>
          <ui_submenu.SubMenuRoute
            design={{"type":"light"}}
            item={{"key":"stats","icon":"dashboard","label":"STC"}}
            routeKey={routeKey0}
            setRouteKey={setRouteKey0}>
          </ui_submenu.SubMenuRoute>
        </ReactNative.View>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#333"}}>
          <ui_submenu.SubMenuRoute
            design={{"type":"dark"}}
            item={{"key":"info","icon":"appstore-o","label":"INFO"}}
            routeKey={routeKey1}
            setRouteKey={setRouteKey1}>
          </ui_submenu.SubMenuRoute>
          <ui_submenu.SubMenuRoute
            design={{"type":"dark"}}
            item={{"key":"stats","icon":"dashboard","label":"STC"}}
            routeKey={routeKey1}
            setRouteKey={setRouteKey1}>
          </ui_submenu.SubMenuRoute>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// pune.ui-submenu-test/SubMenuDemo [104] 
function SubMenuDemo(){
  let [routeKey0,setRouteKey0] = React.useState("home");
  let [routeKey1,setRouteKey1] = React.useState("user");
  return (
    <n.Enclosed label="pune.ui-submenu/SubMenu">
      <n.PortalSink>
        <n.Row>
          <ReactNative.View style={{"paddingRight":90,"backgroundColor":"#eee"}}>
            <ui_submenu.SubMenu
              design={{"type":"light"}}
              items={[
                {"key":"info","icon":"appstore-o","label":"INFO"},
                {"key":"stats","icon":"dashboard","label":"STC"}
              ]}
              routeKey={routeKey0}
              setRouteKey={setRouteKey0}>
            </ui_submenu.SubMenu>
          </ReactNative.View>
          <ReactNative.View style={{"paddingRight":90,"backgroundColor":"#333"}}>
            <ui_submenu.SubMenu
              design={{"type":"dark"}}
              items={[
                {"key":"info","icon":"appstore-o","label":"INFO"},
                {"key":"stats","icon":"dashboard","label":"STC"}
              ]}
              routeKey={routeKey1}
              setRouteKey={setRouteKey1}>
            </ui_submenu.SubMenu>
          </ReactNative.View>
        </n.Row>
      </n.PortalSink>
    </n.Enclosed>);
}

var MODULE = {
  "SubMenuToggleDemo":SubMenuToggleDemo,
  "SubMenuRouteDemo":SubMenuRouteDemo,
  "SubMenuDemo":SubMenuDemo
};

export default MODULE