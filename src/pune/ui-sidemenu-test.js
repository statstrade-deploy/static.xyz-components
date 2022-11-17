import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import n from '../js/react-native'

import ui_sidemenu from './ui-sidemenu'

// pune.ui-sidemenu-test/SideMenuTitleDemo [20] 
function SideMenuTitleDemo(){
  let [routeKey,setRouteKey] = React.useState();
  return (
    <n.Enclosed label="pune.ui-sidemenu/SideMenuTitle">
      <n.Row>
        <ReactNative.View
          style={{
            "padding":10,
            "height":100,
            "flexDirection":"column-reverse",
            "paddingRight":40,
            "backgroundColor":"#eee"
          }}>
          <ui_sidemenu.SideMenuTitle
            design={{"type":"light"}}
            style={{"height":100}}
            title="HELLO">
          </ui_sidemenu.SideMenuTitle>
        </ReactNative.View>
        <ReactNative.View
          style={{
            "padding":10,
            "height":100,
            "flexDirection":"column-reverse",
            "paddingRight":40,
            "backgroundColor":"#333"
          }}>
          <ui_sidemenu.SideMenuTitle design={{"type":"dark"}} style={{"height":100}} title="HELLO"></ui_sidemenu.SideMenuTitle>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// pune.ui-sidemenu-test/SideMenuListDemo [52] 
function SideMenuListDemo(){
  let [routeKey,setRouteKey] = React.useState();
  return (
    <n.Enclosed label="pune.ui-sidemenu/SideMenuList">
      <n.Row>
        <ReactNative.View
          style={{"padding":10,"paddingRight":40,"backgroundColor":"#eee"}}>
          <ui_sidemenu.SideMenuList
            design={{"type":"light"}}
            data={["Security","Profile","Notifications","Organisation"]}
            routeKey={routeKey}
            setRouteKey={setRouteKey}>
          </ui_sidemenu.SideMenuList>
        </ReactNative.View>
        <ReactNative.View
          style={{"padding":10,"paddingRight":40,"backgroundColor":"#333"}}>
          <ui_sidemenu.SideMenuList
            design={{"type":"dark"}}
            data={["Security","Profile","Notifications","Organisation"]}
            routeKey={routeKey}
            setRouteKey={setRouteKey}>
          </ui_sidemenu.SideMenuList>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// pune.ui-sidemenu-test/SideMenuFloatingDemo [89] 
function SideMenuFloatingDemo(){
  let [routeKey,setRouteKey] = React.useState();
  return (
    <n.Isolation>
      <n.Enclosed label="pune.ui-sidemenu/SideMenuFloating">
        <n.Row>
          <ReactNative.View
            style={{
              "flex":1,
              "flexDirection":"row-reverse",
              "padding":10,
              "paddingRight":40,
              "backgroundColor":"#eee"
            }}>
            <ui_sidemenu.SideMenuFloating
              design={{"type":"light"}}
              data={["Security","Profile","Notifications","Organisation"]}
              routeKey={routeKey}
              setRouteKey={setRouteKey}>
            </ui_sidemenu.SideMenuFloating>
          </ReactNative.View>
          <ReactNative.View
            style={{
              "flex":1,
              "flexDirection":"row-reverse",
              "padding":10,
              "paddingRight":40,
              "backgroundColor":"#333"
            }}>
            <ui_sidemenu.SideMenuFloating
              design={{"type":"dark"}}
              data={["Security","Profile","Notifications","Organisation"]}
              routeKey={routeKey}
              setRouteKey={setRouteKey}>
            </ui_sidemenu.SideMenuFloating>
          </ReactNative.View>
        </n.Row>
        <n.TextDisplay routeKey={routeKey}></n.TextDisplay>
      </n.Enclosed>
    </n.Isolation>);
}

var MODULE = {
  "SideMenuTitleDemo":SideMenuTitleDemo,
  "SideMenuListDemo":SideMenuListDemo,
  "SideMenuFloatingDemo":SideMenuFloatingDemo
};

export default MODULE