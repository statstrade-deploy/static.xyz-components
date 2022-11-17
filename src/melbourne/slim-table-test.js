import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import slim_entry from './slim-entry'

import ui_text from './ui-text'

import slim_table from './slim-table'

import n from '../js/react-native'

import ui_group from './ui-group'

import ext_form from '../js/react/ext-form'

import ext_view from '../js/react/ext-view'

import k from '../xt/lang/base-lib'

import validators from './base-validators'

import base_palette from './base-palette'

import event_route from '../xt/lang/event-route'

import ui_static from './ui-static'

import slim from './slim'

// melbourne.slim-table-test/TableModifyViewDemo [32] 
function TableModifyViewDemo(){
  let control = slim.useLocalControl();
  let actions = {
    "modify":function (e){
        return setTimeout(function (){
          new Promise(function (){
            alert(JSON.stringify(e));
          });
        },100);
      }
  };
  let entry = {"id":"id-0"};
  let form = ext_form.makeForm(function (){
    return {"currency":"STATS","name":"","title":""};
  },{"name":[],"title":[],"currency":[]});
  let design = {"type":"light"};
  let impl = {
    "type":"form",
    "header":{"main":{"type":"title","template":"EDIT CURRENCY"}},
    "submit":"modify",
    "body":[
        {
          "type":"pair",
          "title":{"template":"ID: "},
          "text":{"template":["id"]}
        },
        {
          "type":"field",
          "label":"Currency",
          "field":"currency",
          "options":["STATS","XLM","USD"],
          "component":"enum_single"
        },
        {"type":"field","label":"Title","field":"title"}
      ]
  };
  let components = {};
  return (
    <n.Isolation>
      <n.Enclosed label="melbourne.slim-table/TableModifyView">
        <n.Row>
          <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
            <slim_table.TableModifyView
              design={{"type":"light"}}
              mini={true}
              display={{"modify":impl}}
              form={form}
              actions={actions}
              components={components}
              control={control}
              entry={entry}>
            </slim_table.TableModifyView>
          </ui_static.Div>
          <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
            <slim_table.TableModifyView
              design={{"type":"dark"}}
              mini={true}
              display={{"modify":impl}}
              form={form}
              actions={actions}
              components={components}
              control={control}
              entry={entry}>
            </slim_table.TableModifyView>
          </ui_static.Div>
        </n.Row>
      </n.Enclosed>
    </n.Isolation>);
}

// melbourne.slim-table-test/TableDetailViewDemo [88] 
function TableDetailViewDemo(){
  let entry = {"id":"id-0","currency_id":"STATS","balance":1000,"escrow":50.5};
  let control = slim.useLocalControl();
  let design = {"type":"light"};
  let impl = {
    "type":"card",
    "header":{"main":{"type":"title","template":["currency_id"]}},
    "body":{
        "title":{"type":"title","template":["currency_id"]},
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
  };
  let components = {};
  return (
    <n.Isolation>
      <n.Enclosed label="melbourne.slim-table/TableDetailView">
        <n.Row>
          <ui_static.Div design={{"type":"light"}}>
            <slim_table.TableDetailView
              design={{"type":"light"}}
              style={{"width":200}}
              display={{"detail":impl}}
              components={components}
              control={control}
              entry={entry}>
            </slim_table.TableDetailView>
          </ui_static.Div>
          <ui_static.Div design={{"type":"dark"}}>
            <slim_table.TableDetailView
              design={{"type":"dark"}}
              style={{"width":200}}
              display={{"detail":impl}}
              components={components}
              control={control}
              entry={entry}>
            </slim_table.TableDetailView>
          </ui_static.Div>
        </n.Row>
      </n.Enclosed>
    </n.Isolation>);
}

// melbourne.slim-table-test/TableCreateViewDemo [136] 
function TableCreateViewDemo(){
  let control = slim.useLocalControl();
  let actions = {
    "create":function (e){
        return setTimeout(function (){
          new Promise(function (){
            alert(JSON.stringify(e));
          });
        },100);
      }
  };
  let form = ext_form.makeForm(function (){
    return {"currency":"STATS","name":"","title":""};
  },{"name":[],"title":[],"currency":[]});
  let design = {"type":"light"};
  let impl = {
    "type":"form",
    "header":{"main":{"type":"title","template":"NEW CURRENCY"}},
    "submit":"create",
    "body":[
        {"type":"field","label":"Name","field":"name"},
        {
          "type":"field",
          "label":"Currency",
          "field":"currency",
          "options":["STATS","XLM","USD"],
          "component":"enum_single"
        },
        {"type":"field","label":"Title","field":"title"}
      ]
  };
  let components = {};
  return (
    <n.Isolation>
      <n.Enclosed label="melbourne.slim-table/TableCreateView">
        <n.Row>
          <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
            <slim_table.TableCreateView
              design={{"type":"light"}}
              mini={true}
              display={{"create":impl}}
              form={form}
              actions={actions}
              components={components}
              control={control}>
            </slim_table.TableCreateView>
          </ui_static.Div>
          <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
            <slim_table.TableCreateView
              design={{"type":"dark"}}
              mini={true}
              display={{"create":impl}}
              form={form}
              actions={actions}
              components={components}
              control={control}>
            </slim_table.TableCreateView>
          </ui_static.Div>
        </n.Row>
      </n.Enclosed>
    </n.Isolation>);
}

// melbourne.slim-table-test/TableRouterViewDemo [191] 
function TableRouterViewDemo(){
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
  let display = {
    "brief":{"type":"card","body":{"title":{"template":["currency_id"]}}},
    "detail":{
        "type":"card",
        "header":{
            "main":{
                "type":"h",
                "style":{"alignItems":"center"},
                "body":[
                    {"type":"title_h5","template":["currency_id"]},
                    {"type":"fill"},
                    {"type":"control","text":"EDIT","submit":"modify"}
                  ]
              }
          },
        "body":{
            "title":{"type":"title","template":["currency_id"]},
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
      },
    "modify":{
        "type":"form",
        "header":{"main":{"type":"title_h5","template":"EDIT"}},
        "form":[
            function (){
              return {
                "id":"HELLO",
                "currency":"STATS",
                "title":"National Basketball Association"
              };
            },
            function (){
              return {"id":[],"currency":[],"title":[]};
            }
          ],
        "submit":"modify",
        "control":{"success":"back"},
        "body":[
            {
              "type":"pair",
              "title":{"template":"ID: "},
              "text":{"template":["id"]}
            },
            {
              "type":"field",
              "label":"Currency",
              "field":"currency",
              "options":["STATS","XLM","USD"],
              "component":"enum_single"
            },
            {"type":"field","label":"Title","field":"title"}
          ]
      }
  };
  let actions = {
    "modify":function (id,e){
        return new Promise(function (resolve,reject){
          try{
            resolve(        (function (){
                      return "hello";
                    })());
          }
          catch(e){
            reject(e);
          }
        });
      }
  };
  let components = {};
  return (
    <n.Isolation>
      <n.Enclosed label="melbourne.slim-table/TableRouterView">
        <n.Row>
          <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
            <slim_table.TableRouterView
              design={{"type":"light"}}
              mini={true}
              routeKey={control.routeKey}
              views={views}
              actions={actions}
              components={components}
              control={control}
              display={display}>
            </slim_table.TableRouterView>
          </ui_static.Div>
          <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
            <slim_table.TableRouterView
              design={{"type":"dark"}}
              mini={true}
              routeKey={control.routeKey}
              views={views}
              actions={actions}
              components={components}
              control={control}
              display={display}>
            </slim_table.TableRouterView>
          </ui_static.Div>
        </n.Row>
      </n.Enclosed>
    </n.Isolation>);
}

// melbourne.slim-table-test/TableRouterDemo [289] 
function TableRouterDemo(){
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
  let impl = {
    "type":"card",
    "body":{
        "title":{"type":"title","template":["currency_id"]},
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
  };
  let EntryBrief = React.useCallback(function (props){
    return React.createElement(slim_entry.Entry,Object.assign({},props,{
      "impl":{"type":"card","body":{"title":{"template":["currency_id"]}}}
    }));
  },[]);
  let EntryDetail = React.useCallback(function (props){
    return React.createElement(slim_entry.Entry,Object.assign({},props,{impl}));
  },[]);
  let components = {
    "entry_brief":EntryBrief,
    "entry_detail":EntryDetail,
    "create":React.useCallback(function (props){
        return React.createElement(ui_static.Text,props,"CREATE");
      },[])
  };
  let {orderBy,routeKey,setOrderBy,setShowCreate,setShowDetail,setShowHeader,setShowList,setShowModify,showCreate,showDetail,showHeader,showList,showModify} = control;
  let design = {"type":"light"};
  return (
    <n.Enclosed label="melbourne.slim-table/TableRouter">
      <n.Row>
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
      </n.Row>
      <n.Row>
        <slim_table.TableRouter
          design={{"type":"light"}}
          mini={true}
          display={{
            "detail":{
              "type":"card",
              "header":{"main":{"type":"title","template":["currency_id"]}},
              "body":{
                "title":{"type":"title","template":["currency_id"]},
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
          }}
          views={views}
          components={components}
          control={control}>
        </slim_table.TableRouter>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-table-test/TableDemo [408] 
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
  let impl = {
    "type":"card",
    "sections":{
        "body":[
            {
              "columns":[
                  {"name":"B","template":["balance"]},
                  {"name":"E","template":["escrow"]}
                ]
            }
          ],
        "avatar":{"template":["currency_id"],"image":["picture"]}
      }
  };
  let EntryBrief = React.useCallback(function (props){
    return React.createElement(slim_entry.Entry,Object.assign({},props,{
      "impl":{"type":"card","body":{"title":{"template":["currency_id"]}}}
    }));
  },[]);
  let components = {
    "entry_brief":EntryBrief,
    "create":React.useCallback(function (props){
        return React.createElement(ui_static.Text,props,"CREATE");
      },[])
  };
  let {orderBy,routeKey,setOrderBy,setShowCreate,setShowDetail,setShowHeader,setShowList,setShowModify,showCreate,showDetail,showHeader,showList,showModify} = control;
  let design = {"type":"light"};
  return (
    <n.Enclosed label="melbourne.slim-table/Table">
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
      </n.Row>
      <n.Row>
        <slim_table.Table
          design={{"type":"light"}}
          display={{"create":{"type":"fold"}}}
          views={views}
          components={components}
          control={control}>
        </slim_table.Table>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-table-test/TableStandardDemo [483] 
function TableStandardDemo(){
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
  let impl = {
    "type":"card",
    "sections":{
        "body":[
            {
              "columns":[
                  {"name":"B","template":["balance"]},
                  {"name":"E","template":["escrow"]}
                ]
            }
          ],
        "avatar":{"template":["currency_id"],"image":["picture"]}
      }
  };
  let EntryBrief = React.useCallback(function (props){
    return React.createElement(slim_entry.Entry,Object.assign({},props,{
      "impl":{"type":"card","body":{"title":{"template":["currency_id"]}}}
    }));
  },[]);
  let components = {
    "entry_brief":EntryBrief,
    "create":React.useCallback(function (props){
        return React.createElement(ui_static.Text,props,"CREATE");
      },[])
  };
  let {orderBy,routeKey,setOrderBy,setShowCreate,setShowDetail,setShowHeader,setShowList,setShowModify,showCreate,showDetail,showHeader,showList,showModify} = control;
  let design = {"type":"light"};
  return (
    <n.Enclosed label="melbourne.slim-table/TableStandard">
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
      </n.Row>
      <n.Row>
        <slim_table.TableStandard
          design={{"type":"light"}}
          display={{"create":{"type":"fold"}}}
          views={views}
          components={components}
          control={control}>
        </slim_table.TableStandard>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-table-test/TableEmbeddedDemo [558] 
function TableEmbeddedDemo(){
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
  let impl = {
    "type":"card",
    "sections":{
        "body":[
            {
              "columns":[
                  {"name":"B","template":["balance"]},
                  {"name":"E","template":["escrow"]}
                ]
            }
          ],
        "avatar":{"template":["currency_id"],"image":["picture"]}
      }
  };
  let EntryBrief = React.useCallback(function (props){
    return React.createElement(slim_entry.Entry,Object.assign({},props,{
      "impl":{"type":"card","body":{"title":{"template":["currency_id"]}}}
    }));
  },[]);
  let components = {
    "entry_brief":EntryBrief,
    "create":React.useCallback(function (props){
        return React.createElement(ui_static.Text,props,"CREATE");
      },[])
  };
  let {orderBy,routeKey,setOrderBy,setShowCreate,setShowDetail,setShowHeader,setShowList,setShowModify,showCreate,showDetail,showHeader,showList,showModify} = control;
  let design = {"type":"light"};
  return (
    <n.Enclosed label="melbourne.slim-table/TableEmbedded">
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
      </n.Row>
      <n.Row>
        <slim_table.TableEmbedded
          design={{"type":"light"}}
          display={{"create":{"type":"fold"}}}
          views={views}
          components={components}
          control={control}>
        </slim_table.TableEmbedded>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {
  "TableModifyViewDemo":TableModifyViewDemo,
  "TableDetailViewDemo":TableDetailViewDemo,
  "TableCreateViewDemo":TableCreateViewDemo,
  "TableRouterViewDemo":TableRouterViewDemo,
  "TableRouterDemo":TableRouterDemo,
  "TableDemo":TableDemo,
  "TableStandardDemo":TableStandardDemo,
  "TableEmbeddedDemo":TableEmbeddedDemo
};

export default MODULE