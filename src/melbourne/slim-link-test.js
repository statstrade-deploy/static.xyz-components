import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import event_view from '../xt/lang/event-view'

import n from '../js/react-native'

import ext_form from '../js/react/ext-form'

import ext_view from '../js/react/ext-view'

import k from '../xt/lang/base-lib'

import slim_link from './slim-link'

// melbourne.slim-link-test/FormLinkDropdownDemo [28] 
function FormLinkDropdownDemo(){
  let form = ext_form.makeForm(function (){
    return {"account_id":null};
  },{"account_id":[]});
  let views = React.useCallback({
    "account":ext_view.makeView({
        "defaultOutput":[],
        "defaultArgs":[],
        "defaultProcess":event_view.sorted_lookup("name"),
        "handler":function (args){
            return new Promise(function (resolve,reject){
              setTimeout(function (){
                try{
                  resolve(          (function (){
                              return k.arr_map(k.arr_range(5),function (i){
                                return {"id":"id-" + i,"name":"name-" + i,"balance":Math.random()};
                              });
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
  return (
    <n.Isolation>
      <n.Enclosed
        label="melbourne.slim-link/FormLinkDropdown"
        style={{"height":200}}>
        <n.Row>
          {React.createElement(slim_link.FormLinkDropdown,Object.assign({form,views},{
            "design":{"type":"light"},
            "label":"Account",
            "field":"account_id",
            "fieldProps":{
              "style":{"width":500},
              "viewKey":"account",
              "viewTemplate":["name"]
            }
          }))}
        </n.Row>
      </n.Enclosed>
    </n.Isolation>);
}

// melbourne.slim-link-test/FormLinkReadOnlyDemo [67] 
function FormLinkReadOnlyDemo(){
  let form = ext_form.makeForm(function (){
    return {"account_id":"id-2"};
  },{"account_id":[]});
  let views = React.useCallback({
    "account":ext_view.makeView({
        "defaultOutput":[],
        "defaultArgs":[],
        "defaultProcess":event_view.sorted_lookup("name"),
        "handler":function (args){
            return new Promise(function (resolve,reject){
              setTimeout(function (){
                try{
                  resolve(          (function (){
                              return k.arr_map(k.arr_range(5),function (i){
                                return {"id":"id-" + i,"name":"name-" + i,"balance":Math.random()};
                              });
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
  let entry = {"account_id":"id-3"};
  return (
    <n.Enclosed label="melbourne.slim-link/FormLinkReadOnly">
      <n.Row>
        {React.createElement(slim_link.FormLinkReadOnly,Object.assign({entry,form,views},{
          "design":{"type":"light"},
          "label":"Account",
          "field":"account_id",
          "fieldProps":{
            "style":{"width":500},
            "viewKey":"account",
            "viewTemplate":["name"]
          }
        }))}
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-link-test/FormLinkEntryReadOnlyDemo [106] 
function FormLinkEntryReadOnlyDemo(){
  let form = ext_form.makeForm(function (){
    return {"account_id":"id-4"};
  },{"account_id":[]});
  let views = React.useCallback({
    "account":ext_view.makeView({
        "defaultOutput":[],
        "defaultArgs":[],
        "defaultProcess":event_view.sorted_lookup("name"),
        "handler":function (args){
            return new Promise(function (resolve,reject){
              setTimeout(function (){
                try{
                  resolve(          (function (){
                              return k.arr_map(k.arr_range(5),function (i){
                                return {"id":"id-" + i,"name":"name-" + i,"balance":Math.random()};
                              });
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
  let entry = {"account_id":"id-2"};
  return (
    <n.Enclosed label="melbourne.slim-link/FormLinkEntryReadOnly">
      <n.Row>
        {React.createElement(slim_link.FormLinkEntryReadOnly,Object.assign({entry,form,views},{
          "design":{"type":"light"},
          "label":"Account",
          "field":"account_id",
          "fieldProps":{
            "style":{"width":500},
            "viewKey":"account",
            "viewTemplate":["name"]
          }
        }))}
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {
  "FormLinkDropdownDemo":FormLinkDropdownDemo,
  "FormLinkReadOnlyDemo":FormLinkReadOnlyDemo,
  "FormLinkEntryReadOnlyDemo":FormLinkEntryReadOnlyDemo
};

export default MODULE