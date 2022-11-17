import React from 'react'

import * as ReactNative from 'react-native'

import r from '../js/react'

import n from '../js/react-native'

import base_palette from '../melbourne/base-palette'

import ui_page from './ui-page'

// pune.ui-page-test/PageLayoutHeaderDemo [21] 
function PageLayoutHeaderDemo(){
  let [routeKey,setRouteKey] = React.useState("world");
  let routeRoot = ["HELLO"];
  let headerId = r.id();
  let palette = base_palette.designPalette({"type":"light"});
  return (
    <n.Enclosed label="pune.ui-page/PageLayoutHeader" style={{"height":100}}>
      <n.Row>
        <ReactNative.View style={{"width":300}}>
          <ui_page.PageLayoutHeader
            routeKey={routeKey}
            headerId={headerId}
            palette={palette}
            routeRoot={routeRoot}>
          </ui_page.PageLayoutHeader>
        </ReactNative.View>
        <ReactNative.View style={{"width":300}}>
          <ui_page.PageLayoutHeader
            design={{"type":"dark"}}
            palette={base_palette.designPalette({"type":"dark"})}
            routeKey={routeKey}
            routeRoot={routeRoot}>
          </ui_page.PageLayoutHeader>
        </ReactNative.View>
      </n.Row>
      <n.Portal target={headerId}><ReactNative.Text>TOOLBAR</ReactNative.Text></n.Portal>
    </n.Enclosed>);
}

// pune.ui-page-test/PageLayoutMenuDemo [54] 
function PageLayoutMenuDemo(){
  let [routeKey,setRouteKey] = React.useState("world");
  let appendId = r.id();
  let palette = base_palette.designPalette({"type":"light"});
  return (
    <n.Enclosed label="pune.ui-page/PageLayoutMenu" style={{"height":200}}>
      <n.Row>
        <ReactNative.View style={{"width":300}}>
          <ui_page.PageLayoutMenu
            design={{"type":"light"}}
            sections={["hello","world"]}
            routeKey={routeKey}
            palette={palette}
            setRouteKey={setRouteKey}
            appendId={appendId}>
          </ui_page.PageLayoutMenu>
        </ReactNative.View>
        <ReactNative.View style={{"width":300}}>
          <ui_page.PageLayoutMenu
            design={{"type":"dark"}}
            palette={base_palette.designPalette({"type":"dark"})}
            sections={["hello","world"]}
            routeKey={routeKey}
            setRouteKey={setRouteKey}>
          </ui_page.PageLayoutMenu>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// pune.ui-page-test/PageLayoutDemo [87] 
function PageLayoutDemo(){
  let [routeKey,setRouteKey] = React.useState("world");
  let routeRoot = ["HELLO"];
  let Id = r.id();
  return (
    <n.Enclosed label="pune.ui-page/PageLayout" style={{"height":200}}>
      <n.Row>
        <ReactNative.View style={{"width":300}}>
          <ui_page.PageLayout
            design={{"type":"light"}}
            sections={["hello","world"]}
            sectionRoutes={{
              "hello":function (){
                return (
                  <ReactNative.Text>HELLO</ReactNative.Text>);
              },
              "world":function (){
                return (
                  <ReactNative.Text>WORLD</ReactNative.Text>);
              }
            }}
            routeRoot={["HOME"]}
            routeKey={routeKey}
            setRouteKey={setRouteKey}>
          </ui_page.PageLayout>
        </ReactNative.View>
        <ReactNative.View style={{"width":300}}>
          <ui_page.PageLayout
            design={{"type":"dark"}}
            sections={["hello","world"]}
            sectionRoutes={{
              "hello":function (){
                return (
                  <ReactNative.Text>HELLO</ReactNative.Text>);
              },
              "world":function (){
                return (
                  <ReactNative.Text>WORLD</ReactNative.Text>);
              }
            }}
            routeRoot={["HOME"]}
            routeKey={routeKey}
            setRouteKey={setRouteKey}>
          </ui_page.PageLayout>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {
  "PageLayoutHeaderDemo":PageLayoutHeaderDemo,
  "PageLayoutMenuDemo":PageLayoutMenuDemo,
  "PageLayoutDemo":PageLayoutDemo
};

export default MODULE