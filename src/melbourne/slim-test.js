import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import ui_text from './ui-text'

import n from '../js/react-native'

import ui_group from './ui-group'

import ext_view from '../js/react/ext-view'

import k from '../xt/lang/base-lib'

import base_palette from './base-palette'

import event_route from '../xt/lang/event-route'

import ui_static from './ui-static'

import slim from './slim'

// melbourne.slim-test/TableDemo [28] 
function TableDemo(){
  let views = React.useCallback({
    "list":ext_view.makeView({
        "defaultArgs":[],
        "handler":function (){
            return new Promise(function (resolve,reject){
              setTimeout(function (){
                try{
                  resolve(          (function (){
                              return [
                                {"id":"id-0","currency_id":"STATS","balance":1000,"escrow":50.5},
                                {"id":"id-1","currency_id":"USA","balance":300,"escrow":10.5},
                                {"id":"id-2","currency_id":"XLM","balance":50,"escrow":0.0}
                              ];
                            })());
                }
                catch(e){
                  reject(e);
                }
              },100);
            });
          }
      })
  },[]);
  let control = slim.useLocalControl();
  let EntryBrief = React.useCallback(function (props){
    return React.createElement(slim.Entry,Object.assign({},props,{
      "impl":{
            "type":"card",
            "body":{"title":{"type":"title","template":["currency_id"]}}
          }
    }));
  },[]);
  let EntryDetail = React.useCallback(function (props){
    let nprops = Object.assign({},props,{
      "impl":{
            "type":"card",
            "body":{
                  "main":{
                        "type":"v",
                        "body":[
                              {
                                  "type":"pair",
                                  "title":{"template":"B"},
                                  "text":{"template":["balance"]}
                                },
                              {
                                  "type":"pair",
                                  "title":{"template":"E"},
                                  "text":{"template":["escrow"]}
                                }
                            ]
                      },
                  "avatar":{
                        "type":"image",
                        "text":{"template":["currency_id"]},
                        "image":{"template":["picture"]}
                      }
                }
          }
    });
    return React.createElement(slim.Entry,nprops);
  },[]);
  let components = {
    "entry_brief":EntryBrief,
    "entry_detail":EntryDetail,
    "create":React.useCallback(function (props){
        return React.createElement(ui_static.Text,props,"CREATE");
      },[])
  };
  let {orderBy,routeKey,setOrderBy,setShowCreate,setShowDetail,setShowHeader,setShowList,setShowModify,showCreate,showDetail,showHeader,showList,showModify} = control;
  let [mini,setMini] = React.useState(true);
  let design = {"type":"light"};
  return (
    <n.Enclosed label="melbourne.slim/Table">
      <n.Row>
        <ui_text.ToggleMinor
          text="Create"
          selected={showCreate}
          onPress={function (){
            return setShowCreate(!showCreate);
          }}
          design={design}>
        </ui_text.ToggleMinor>
        <ui_text.ToggleMinor
          text="List"
          selected={showList}
          onPress={function (){
            return setShowList(!showList);
          }}
          design={design}>
        </ui_text.ToggleMinor>
        <ui_text.ToggleMinor
          text="Mini"
          selected={mini}
          onPress={function (){
            return setMini(!mini);
          }}
          design={design}>
        </ui_text.ToggleMinor>
      </n.Row>
      <n.Row>
        <slim.Table
          design={{"type":"light"}}
          display={{"type":"fold"}}
          mini={mini}
          views={views}
          components={components}
          control={control}>
        </slim.Table>
        <slim.Table
          design={{"type":"dark"}}
          display={{"type":"fold"}}
          mini={mini}
          views={views}
          components={components}
          control={control}>
        </slim.Table>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-test/CreateEntryDemo [131] 
function CreateEntryDemo(){
  return (
    <n.Enclosed label="melbourne.slim/createEntry">
      <n.Row>
        {slim.createEntry({
          "design":{"type":"light"},
          "impl":{"type":"raw"},
          "entry":{"a":1,"b":2}
        })}
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-test/EntryDemo [146] 
function EntryDemo(){
  return (
    <n.Enclosed label="melbourne.slim/entry">
      <n.Row>
        {slim.entry(
          {"design":{"type":"light"},"entry":{"a":1,"b":2}},
          {"type":"raw"}
        )}
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-test/UseRouteControlDemo [170] 
function UseRouteControlDemo(){
  let controls = slim.useRouteControl(React.useCallback(event_route.make_route("hello"),[]));
  let {orderBy,routeKey,setOrderBy,setShowCreate,setShowDetail,setShowHeader,setShowList,setShowModify,showCreate,showDetail,showHeader,showList,showModify} = controls;
  let design = {"type":"light"};
  return (
    <n.Enclosed label="melbourne.slim/UseRouteControl">
      <ui_static.Div style={{"flexDirection":"row"}} design={design}>
        <ui_text.ToggleMinor
          text="OrderBy"
          selected={orderBy}
          onPress={function (){
            return setOrderBy((orderBy == "name") ? "time" : "name");
          }}
          design={design}>
        </ui_text.ToggleMinor>
        <ui_text.ToggleMinor
          text="Header"
          selected={showHeader}
          onPress={function (){
            return setShowHeader(!showHeader);
          }}
          design={design}>
        </ui_text.ToggleMinor>
        <ui_text.ToggleMinor
          text="Detail"
          selected={showDetail}
          onPress={function (){
            return setShowDetail(!showDetail);
          }}
          design={design}>
        </ui_text.ToggleMinor>
        <ui_text.ToggleMinor
          text="Modify"
          selected={showModify}
          onPress={function (){
            return setShowModify(!showModify);
          }}
          design={design}>
        </ui_text.ToggleMinor>
        <ui_text.ToggleMinor
          text="Create"
          selected={showCreate}
          onPress={function (){
            return setShowCreate(!showCreate);
          }}
          design={design}>
        </ui_text.ToggleMinor>
        <ui_text.ToggleMinor
          text="List"
          selected={showList}
          onPress={function (){
            return setShowList(!showList);
          }}
          design={design}>
        </ui_text.ToggleMinor>
      </ui_static.Div>
    </n.Enclosed>);
}

var MODULE = {
  "TableDemo":TableDemo,
  "CreateEntryDemo":CreateEntryDemo,
  "EntryDemo":EntryDemo,
  "UseRouteControlDemo":UseRouteControlDemo
};

export default MODULE