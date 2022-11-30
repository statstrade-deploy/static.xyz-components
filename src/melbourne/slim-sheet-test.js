import * as ReactNative from 'react-native'

import React from 'react'

import n from '../js/react-native'

import ext_form from '../js/react/ext-form'

import ui_static from './ui-static'

import slim_sheet from './slim-sheet'

import k from '../xt/lang/base-lib'

// melbourne.slim-sheet-test/SheetPaginationDemo [24] 
function SheetPaginationDemo(){
  let [showPage,setShowPage] = React.useState(3);
  return (
    <n.Enclosed label="melbourne.slim-sheet/SheetPagination">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_sheet.SheetPagination
            design={{"type":"light"}}
            control={{setShowPage,showPage}}
            impl={{"page":{"total":200}}}>
          </slim_sheet.SheetPagination>
          <slim_sheet.SheetPagination
            design={{"type":"light"}}
            control={{setShowPage,showPage}}
            impl={{"page":{"total":70}}}>
          </slim_sheet.SheetPagination>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_sheet.SheetPagination
            design={{"type":"dark"}}
            control={{setShowPage,showPage}}
            impl={{"page":{"total":200}}}>
          </slim_sheet.SheetPagination>
          <slim_sheet.SheetPagination
            design={{"type":"dark"}}
            control={{setShowPage,showPage}}
            impl={{"page":{"total":70}}}>
          </slim_sheet.SheetPagination>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-sheet-test/SheetGroupHeaderDemo [58] 
function SheetGroupHeaderDemo(){
  let [showPage,setShowPage] = React.useState(3);
  return (
    <n.Enclosed label="melbourne.slim-sheet/SheetGroupHeader">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_sheet.SheetGroupHeader design={{"type":"light"}} group={{"name":"WORLD"}} impl={{}}></slim_sheet.SheetGroupHeader>
          <slim_sheet.SheetGroupHeader design={{"type":"light"}} group={{"name":"HELLO"}} impl={{}}></slim_sheet.SheetGroupHeader>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_sheet.SheetGroupHeader design={{"type":"dark"}} group={{"name":"WORLD"}} impl={{}}></slim_sheet.SheetGroupHeader>
          <slim_sheet.SheetGroupHeader design={{"type":"dark"}} group={{"name":"HELLO"}} impl={{}}></slim_sheet.SheetGroupHeader>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-sheet-test/SheetHeaderDemo [92] 
function SheetHeaderDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-sheet/SheetHeader">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_sheet.SheetHeader
            design={{"type":"light"}}
            style={{"padding":10}}
            entry={entry}
            impl={{
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              },
              "columns":[
                {"name":"title","template":["currency_id"]},
                {"name":"balance","template":["balance"]},
                {
                "name":"escrow",
                "template":["escrow"],
                "style":{"textAlign":"right"}
              }
              ]
            }}>
          </slim_sheet.SheetHeader>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_sheet.SheetHeader
            design={{"type":"dark"}}
            style={{"padding":10}}
            entry={entry}
            impl={{
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              },
              "columns":[
                {"name":"title","template":["currency_id"]},
                {"name":"balance","template":["balance"]},
                {
                "name":"escrow",
                "template":["escrow"],
                "style":{"textAlign":"right"}
              }
              ]
            }}>
          </slim_sheet.SheetHeader>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-sheet-test/SheetRowDemo [136] 
function SheetRowDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-sheet/SheetRow">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_sheet.SheetRow
            design={{"type":"light"}}
            style={{"padding":10}}
            entry={entry}
            impl={{
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              },
              "columns":[
                {"name":"title","template":["currency_id"]},
                {"name":"balance","template":["balance"]},
                {
                "name":"escrow",
                "template":["escrow"],
                "style":{"textAlign":"right"}
              }
              ]
            }}>
          </slim_sheet.SheetRow>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_sheet.SheetRow
            design={{"type":"dark"}}
            style={{"padding":10}}
            entry={entry}
            impl={{
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              },
              "columns":[
                {"name":"title","template":["currency_id"]},
                {"name":"balance","template":["balance"]},
                {
                "name":"escrow",
                "template":["escrow"],
                "style":{"textAlign":"right"}
              }
              ]
            }}>
          </slim_sheet.SheetRow>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-sheet-test/SheetBasicRowsDemo [180] 
function SheetBasicRowsDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-sheet/SheetBasicRows">
      <ReactNative.View>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_sheet.SheetBasicRows
            design={{"type":"light"}}
            entries={[
              {"currency_id":"STATS","balance":1000,"escrow":50.5},
              {"currency_id":"DOGE","balance":1000,"escrow":50.5}
            ]}
            impl={{
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              },
              "columns":[
                {"name":"title","template":["currency_id"]},
                {"name":"balance","template":["balance"]},
                {
                "name":"escrow",
                "template":["escrow"],
                "style":{"textAlign":"right"}
              }
              ]
            }}>
          </slim_sheet.SheetBasicRows>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1,"padding":5}}>
          <slim_sheet.SheetBasicRows
            design={{"type":"dark"}}
            entries={[
              {"currency_id":"STATS","balance":1000,"escrow":50.5},
              {"currency_id":"DOGE","balance":1000,"escrow":50.5}
            ]}
            impl={{
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              },
              "columns":[
                {"name":"title","template":["currency_id"]},
                {"name":"balance","template":["balance"]},
                {
                "name":"escrow",
                "template":["escrow"],
                "style":{"textAlign":"right"}
              }
              ]
            }}>
          </slim_sheet.SheetBasicRows>
        </ui_static.Div>
      </ReactNative.View>
    </n.Enclosed>);
}

// melbourne.slim-sheet-test/SheetBasicDemo [234] 
function SheetBasicDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-sheet/SheetBasic">
      <ReactNative.View>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_sheet.SheetBasic
            design={{"type":"light"}}
            entries={[
              {"currency_id":"STATS","balance":1000,"escrow":50.5},
              {"currency_id":"DOGE","balance":1000,"escrow":50.5}
            ]}
            impl={{
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              },
              "columns":[
                {"name":"title","template":["currency_id"]},
                {"name":"balance","template":["balance"]},
                {
                "name":"escrow",
                "template":["escrow"],
                "style":{"textAlign":"right"}
              }
              ]
            }}>
          </slim_sheet.SheetBasic>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1,"padding":5}}>
          <slim_sheet.SheetBasic
            design={{"type":"dark"}}
            entries={[
              {"currency_id":"STATS","balance":1000,"escrow":50.5},
              {"currency_id":"DOGE","balance":1000,"escrow":50.5}
            ]}
            impl={{
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              },
              "columns":[
                {"name":"title","template":["currency_id"]},
                {"name":"balance","template":["balance"]},
                {
                "name":"escrow",
                "template":["escrow"],
                "style":{"textAlign":"right"}
              }
              ]
            }}>
          </slim_sheet.SheetBasic>
        </ui_static.Div>
      </ReactNative.View>
    </n.Enclosed>);
}

// melbourne.slim-sheet-test/SheetGroupRowsDemo [307] 
function SheetGroupRowsDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-sheet/SheetGroupRows">
      <ReactNative.View>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_sheet.SheetGroupRows
            design={{"type":"light"}}
            group={{
              "name":"STATS",
              "entries":[
                {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
                {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5},
                {
                "currency_id":"STATS",
                "name":"HIJ",
                "balance":130400,
                "escrow":1250.5
              },
                {
                "currency_id":"STATS",
                "name":"NOP",
                "balance":1000,
                "escrow":50.5
              }
              ]
            }}
            impl={{
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              },
              "columns":[
                {"name":"title","template":["name"]},
                {"name":"balance","template":["balance"]},
                {
                "name":"escrow",
                "template":["escrow"],
                "style":{"textAlign":"right"}
              }
              ]
            }}>
          </slim_sheet.SheetGroupRows>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1,"padding":5}}>
          <slim_sheet.SheetGroupRows
            design={{"type":"dark"}}
            group={{
              "name":"STATS",
              "entries":[
                {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
                {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5},
                {
                "currency_id":"STATS",
                "name":"HIJ",
                "balance":130400,
                "escrow":1250.5
              },
                {
                "currency_id":"STATS",
                "name":"NOP",
                "balance":1000,
                "escrow":50.5
              }
              ]
            }}
            impl={{
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              },
              "columns":[
                {"name":"title","template":["name"]},
                {"name":"balance","template":["balance"]},
                {
                "name":"escrow",
                "template":["escrow"],
                "style":{"textAlign":"right"}
              }
              ]
            }}>
          </slim_sheet.SheetGroupRows>
        </ui_static.Div>
      </ReactNative.View>
    </n.Enclosed>);
}

// melbourne.slim-sheet-test/SheetDemo [392] 
function SheetDemo(){
  return (
    <n.Enclosed label="melbourne.slim-sheet/Sheet">
      <ReactNative.View>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_sheet.Sheet
            design={{"type":"light"}}
            impl={{
              "groups":{"split":["currency_id"]},
              "items":{
                "sort":function (arr){
                  return k.sort_by(arr,["balance","name"]);
                }
              },
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              },
              "columns":[
                {"name":"name","template":["name"]},
                {"name":"balance","template":["balance"]},
                {
                "name":"escrow",
                "template":["escrow"],
                "style":{"textAlign":"right"}
              }
              ]
            }}
            entries={[
              {"currency_id":"DOGE","name":"QRS","balance":490,"escrow":34.0},
              {"currency_id":"DOGE","name":"WXY","balance":456,"escrow":63},
              {"currency_id":"DOGE","name":"KLM","balance":100,"escrow":0.5},
              {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
              {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5},
              {
              "currency_id":"STATS",
              "name":"HIJ",
              "balance":130400,
              "escrow":1250.5
            },
              {
              "currency_id":"DOGE",
              "name":"EFG",
              "balance":34050,
              "escrow":50.5
            },
              {
              "currency_id":"STATS",
              "name":"NOP",
              "balance":1000,
              "escrow":50.5
            }
            ]}>
          </slim_sheet.Sheet>
        </ui_static.Div>
      </ReactNative.View>
    </n.Enclosed>);
}

var MODULE = {
  "SheetPaginationDemo":SheetPaginationDemo,
  "SheetGroupHeaderDemo":SheetGroupHeaderDemo,
  "SheetHeaderDemo":SheetHeaderDemo,
  "SheetRowDemo":SheetRowDemo,
  "SheetBasicRowsDemo":SheetBasicRowsDemo,
  "SheetBasicDemo":SheetBasicDemo,
  "SheetGroupRowsDemo":SheetGroupRowsDemo,
  "SheetDemo":SheetDemo
};

export default MODULE