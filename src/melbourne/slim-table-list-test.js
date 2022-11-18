import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import slim_entry from './slim-entry'

import ui_text from './ui-text'

import n from '../js/react-native'

import ui_group from './ui-group'

import ext_view from '../js/react/ext-view'

import k from '../xt/lang/base-lib'

import base_palette from './base-palette'

import event_route from '../xt/lang/event-route'

import slim_table_list from './slim-table-list'

import ui_static from './ui-static'

import slim from './slim'

// melbourne.slim-table-list-test/TableListCardBriefDemo [30] 
function TableListCardBriefDemo(){
  let entry = {"id":"id-0","currency_id":"STATS","balance":1000,"escrow":50.5};
  let control = slim.useLocalControl();
  let design = {"type":"light"};
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
  return (
    <n.Enclosed label="melbourne.slim-table-list/TableListCardBrief">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"width":200}}>
          <slim_table_list.TableListCardBrief design={{"type":"light"}} control={control} entry={entry}>
            <slim_entry.Entry design={{"type":"light"}} impl={impl} entry={entry}></slim_entry.Entry>
          </slim_table_list.TableListCardBrief>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"width":200}}>
          <slim_table_list.TableListCardBrief design={{"type":"dark"}} control={control} entry={entry}>
            <slim_entry.Entry design={{"type":"dark"}} impl={impl} entry={entry}></slim_entry.Entry>
          </slim_table_list.TableListCardBrief>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-table-list-test/TableListCardNavDemo [78] 
function TableListCardNavDemo(){
  let entry = {"id":"id-0","currency_id":"STATS","balance":1000,"escrow":50.5};
  let control = slim.useLocalControl();
  let design = {"type":"light"};
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
  return (
    <n.Enclosed label="melbourne.slim-table-list/TableListCardNav">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"width":200}}>
          <slim_table_list.TableListCardNav design={{"type":"light"}} control={control} entry={entry}>
            <slim_entry.Entry design={{"type":"light"}} impl={impl} entry={entry}></slim_entry.Entry>
          </slim_table_list.TableListCardNav>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"width":200}}>
          <slim_table_list.TableListCardNav design={{"type":"dark"}} control={control} entry={entry}>
            <slim_entry.Entry design={{"type":"dark"}} impl={impl} entry={entry}></slim_entry.Entry>
          </slim_table_list.TableListCardNav>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-table-list-test/TableListCardSwipeDemo [126] 
function TableListCardSwipeDemo(){
  let entry = {"id":"id-0","currency_id":"STATS","balance":1000,"escrow":50.5};
  let control = slim.useLocalControl();
  let design = {"type":"light"};
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
  return (
    <n.Isolation>
      <n.Enclosed label="melbourne.slim-table-list/TableListCardSwipe">
        <n.Row>
          <ui_static.Div design={{"type":"light"}}>
            <slim_table_list.TableListCardSwipe
              design={{"type":"light"}}
              style={{"width":200}}
              control={control}
              entry={entry}>
              <slim_entry.Entry design={{"type":"light"}} impl={impl} entry={entry}></slim_entry.Entry>
            </slim_table_list.TableListCardSwipe>
          </ui_static.Div>
          <ui_static.Div design={{"type":"dark"}}>
            <slim_table_list.TableListCardSwipe
              design={{"type":"dark"}}
              style={{"width":200}}
              control={control}
              entry={entry}>
              <slim_entry.Entry design={{"type":"dark"}} impl={impl} entry={entry}></slim_entry.Entry>
            </slim_table_list.TableListCardSwipe>
          </ui_static.Div>
        </n.Row>
      </n.Enclosed>
    </n.Isolation>);
}

// melbourne.slim-table-list-test/TableListCardFoldDemo [175] 
function TableListCardFoldDemo(){
  let entry = {"id":"id-0","currency_id":"STATS","balance":1000,"escrow":50.5};
  let control = slim.useLocalControl();
  let design = {"type":"light"};
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
  let EntryDetail = React.useCallback(function (props){
    return React.createElement(slim_entry.Entry,Object.assign({},props,{impl}));
  },[]);
  let components = {"entry_detail":EntryDetail};
  return (
    <n.Isolation>
      <n.Enclosed label="melbourne.slim-table-list/TableListCardFold">
        <n.Row>
          <ui_static.Div design={{"type":"light"}}>
            <slim_table_list.TableListCardFold
              design={{"type":"light"}}
              style={{"width":200}}
              components={components}
              control={control}
              entry={entry}>
              <slim_entry.Entry
                design={{"type":"light"}}
                impl={{"type":"card","body":{"title":{"template":["currency_id"]}}}}
                entry={entry}>
              </slim_entry.Entry>
            </slim_table_list.TableListCardFold>
          </ui_static.Div>
          <ui_static.Div design={{"type":"dark"}}>
            <slim_table_list.TableListCardFold
              design={{"type":"dark"}}
              style={{"width":200}}
              components={components}
              control={control}
              entry={entry}>
              <slim_entry.Entry
                design={{"type":"dark"}}
                impl={{"type":"card","body":{"title":{"template":["currency_id"]}}}}
                entry={entry}>
              </slim_entry.Entry>
            </slim_table_list.TableListCardFold>
          </ui_static.Div>
        </n.Row>
      </n.Enclosed>
    </n.Isolation>);
}

// melbourne.slim-table-list-test/TableListCardDemo [236] 
function TableListCardDemo(){
  let entry = {"id":"id-0","currency_id":"STATS","balance":1000,"escrow":50.5};
  let control = slim.useLocalControl();
  let design = {"type":"light"};
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
  let components = {"entry_brief":EntryBrief,"entry_detail":EntryDetail};
  let [type,setType] = React.useState("fold");
  let [swipe,setSwipe] = React.useState("left");
  return (
    <n.Isolation>
      <n.Enclosed label="melbourne.slim-table-list/TableListCard">
        <n.Row>
          <ui_text.TabsAccent
            value={type}
            setValue={setType}
            data={["fold","mini","swipe"]}>
          </ui_text.TabsAccent>
          <ui_text.TabsAccent value={swipe} setValue={setSwipe} data={["left","right"]}></ui_text.TabsAccent>
        </n.Row>
        <n.Row>
          <ui_static.Div design={{"type":"light"}}>
            <slim_table_list.TableListCard
              key={swipe}
              design={{"type":"light"}}
              style={{"width":200}}
              display={{
                "brief":{"card":{"component":type}},
                "swipe":{"direction":swipe,"showDelete":false}
              }}
              components={components}
              control={control}
              entry={entry}>
              <slim_entry.Entry
                design={{"type":"light"}}
                impl={{"type":"card","body":{"title":{"template":["currency_id"]}}}}
                entry={entry}>
              </slim_entry.Entry>
            </slim_table_list.TableListCard>
          </ui_static.Div>
          <ui_static.Div design={{"type":"dark"}}>
            <slim_table_list.TableListCard
              key={swipe}
              design={{"type":"dark"}}
              style={{"width":200}}
              display={{
                "brief":{"card":{"component":type}},
                "swipe":{"direction":swipe,"showDelete":false}
              }}
              components={components}
              control={control}
              entry={entry}>
              <slim_entry.Entry
                design={{"type":"dark"}}
                impl={{"type":"card","body":{"title":{"template":["currency_id"]}}}}
                entry={entry}>
              </slim_entry.Entry>
            </slim_table_list.TableListCard>
          </ui_static.Div>
        </n.Row>
      </n.Enclosed>
    </n.Isolation>);
}

// melbourne.slim-table-list-test/TableListViewEntriesDemo [341] 
function TableListViewEntriesDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-table-list/TableListViewEntries">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_table_list.TableListViewEntries
            design={{"type":"light"}}
            entries={[
              {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5},
              {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
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
            ]}
            display={{
              "brief":{
                "type":"v",
                "body":[
                  {"template":["name"]},
                  {"template":["balance"]},
                  {"template":["escrow"],"style":{"textAlign":"right"}}
                ]
              }
            }}
            impl={{}}>
          </slim_table_list.TableListViewEntries>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1,"padding":5}}>
          <slim_table_list.TableListViewEntries
            design={{"type":"dark"}}
            entries={[
              {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5},
              {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
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
            ]}
            display={{
              "brief":{
                "type":"v",
                "body":[
                  {"template":["name"]},
                  {"template":["balance"]},
                  {"template":["escrow"],"style":{"textAlign":"right"}}
                ]
              }
            }}
            impl={{}}>
          </slim_table_list.TableListViewEntries>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-table-list-test/TableListViewGroupDemo [400] 
function TableListViewGroupDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-table-list/TableListViewGroup">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_table_list.TableListViewGroup
            design={{"type":"light"}}
            group={{
              "name":"STATS",
              "entries":[
                {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
                {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5},
                {
                "currency_id":"STATS",
                "name":"NOP",
                "balance":1000,
                "escrow":50.5
              },
                {
                "currency_id":"STATS",
                "name":"HIJ",
                "balance":130400,
                "escrow":1250.5
              }
              ]
            }}
            display={{
              "brief":{
                "type":"v",
                "body":[
                  {"template":["name"]},
                  {"template":["balance"]},
                  {"template":["escrow"],"style":{"textAlign":"right"}}
                ]
              }
            }}
            impl={{}}>
          </slim_table_list.TableListViewGroup>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1,"padding":5}}>
          <slim_table_list.TableListViewGroup
            design={{"type":"dark"}}
            group={{
              "name":"STATS",
              "entries":[
                {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
                {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5},
                {
                "currency_id":"STATS",
                "name":"NOP",
                "balance":1000,
                "escrow":50.5
              },
                {
                "currency_id":"STATS",
                "name":"HIJ",
                "balance":130400,
                "escrow":1250.5
              }
              ]
            }}
            display={{
              "brief":{
                "type":"v",
                "body":[
                  {"template":["name"]},
                  {"template":["balance"]},
                  {"template":["escrow"],"style":{"textAlign":"right"}}
                ]
              }
            }}
            impl={{}}>
          </slim_table_list.TableListViewGroup>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-table-list-test/TableListViewPagedDemo [449] 
function TableListViewPagedDemo(){
  return (
    <n.Enclosed label="melbourne.slim-table-list/TableListViewPaged">
      <ReactNative.View>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_table_list.TableListViewPaged
            design={{"type":"light"}}
            control={{}}
            impl={{
              "page":{"display":5},
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              }
            }}
            display={{
              "brief":{
                "type":"v",
                "body":[{"template":["name"]},{"template":["amount"]}]
              }
            }}
            entries={[
              {"id":"id-0","name":"name-0","amount":0.9590555558206177},
              {"id":"id-1","name":"name-1","amount":0.7803180365590895},
              {"id":"id-2","name":"name-2","amount":0.49003288742253415},
              {"id":"id-3","name":"name-3","amount":0.5203681701713552},
              {"id":"id-4","name":"name-4","amount":0.996864042596198},
              {"id":"id-5","name":"name-5","amount":0.4062539949214403},
              {"id":"id-6","name":"name-6","amount":0.43992504923835574},
              {"id":"id-7","name":"name-7","amount":0.4129261583113115},
              {"id":"id-8","name":"name-8","amount":0.512736330546368},
              {"id":"id-9","name":"name-9","amount":0.44107109066742933},
              {"id":"id-10","name":"name-10","amount":0.019696958889321547},
              {"id":"id-11","name":"name-11","amount":0.9225506310490537},
              {"id":"id-12","name":"name-12","amount":0.42498719719842615},
              {"id":"id-13","name":"name-13","amount":0.18258802708890176},
              {"id":"id-14","name":"name-14","amount":0.4750822586300397},
              {"id":"id-15","name":"name-15","amount":0.06975036151312797},
              {"id":"id-16","name":"name-16","amount":0.3418188141087528},
              {"id":"id-17","name":"name-17","amount":0.4531285708128048},
              {"id":"id-18","name":"name-18","amount":0.19157828737251503},
              {"id":"id-19","name":"name-19","amount":0.41369078347748967},
              {"id":"id-20","name":"name-20","amount":0.5692469719337808},
              {"id":"id-21","name":"name-21","amount":0.4104922038036958},
              {"id":"id-22","name":"name-22","amount":0.11916291674022528},
              {"id":"id-23","name":"name-23","amount":0.6098084418788005},
              {"id":"id-24","name":"name-24","amount":0.3408606160804627},
              {"id":"id-25","name":"name-25","amount":0.5444805386245296},
              {"id":"id-26","name":"name-26","amount":0.7023068670337927},
              {"id":"id-27","name":"name-27","amount":0.5806082384300338},
              {"id":"id-28","name":"name-28","amount":0.1803337067354679},
              {"id":"id-29","name":"name-29","amount":0.45861885544081715},
              {"id":"id-30","name":"name-30","amount":0.3555958804469962},
              {"id":"id-31","name":"name-31","amount":0.7357096092572977},
              {"id":"id-32","name":"name-32","amount":0.5117103483324204},
              {"id":"id-33","name":"name-33","amount":0.967377045162032},
              {"id":"id-34","name":"name-34","amount":0.7450022526676667},
              {"id":"id-35","name":"name-35","amount":0.24849598120089844},
              {"id":"id-36","name":"name-36","amount":0.11783525499159875},
              {"id":"id-37","name":"name-37","amount":0.5011078861260858},
              {"id":"id-38","name":"name-38","amount":0.1358233005520293},
              {"id":"id-39","name":"name-39","amount":0.9992615444043356},
              {"id":"id-40","name":"name-40","amount":0.8139037928017914},
              {"id":"id-41","name":"name-41","amount":0.804084640580156},
              {"id":"id-42","name":"name-42","amount":0.8505296359262356},
              {"id":"id-43","name":"name-43","amount":0.42853800296757416},
              {"id":"id-44","name":"name-44","amount":0.7509565636143687},
              {"id":"id-45","name":"name-45","amount":0.4354343126848672},
              {"id":"id-46","name":"name-46","amount":0.44324352622721463},
              {"id":"id-47","name":"name-47","amount":0.2093235046180295},
              {"id":"id-48","name":"name-48","amount":0.09324604654055013},
              {"id":"id-49","name":"name-49","amount":0.6384266081944509},
              {"id":"id-50","name":"name-50","amount":0.5422936796759794},
              {"id":"id-51","name":"name-51","amount":0.34322443760093746},
              {"id":"id-52","name":"name-52","amount":0.4237534672940193},
              {"id":"id-53","name":"name-53","amount":0.7304928247324854},
              {"id":"id-54","name":"name-54","amount":0.43826974605553115},
              {"id":"id-55","name":"name-55","amount":0.013060378978548504},
              {"id":"id-56","name":"name-56","amount":0.12373607035560474},
              {"id":"id-57","name":"name-57","amount":0.2845132528655695},
              {"id":"id-58","name":"name-58","amount":0.4022260199135729},
              {"id":"id-59","name":"name-59","amount":0.28327103748765936},
              {"id":"id-60","name":"name-60","amount":0.14503690904439515},
              {"id":"id-61","name":"name-61","amount":0.021325198499193343},
              {"id":"id-62","name":"name-62","amount":0.40716061223192745},
              {"id":"id-63","name":"name-63","amount":0.5295037912115684},
              {"id":"id-64","name":"name-64","amount":0.04798963894310271},
              {"id":"id-65","name":"name-65","amount":0.5140682197193136},
              {"id":"id-66","name":"name-66","amount":0.3956230040440769},
              {"id":"id-67","name":"name-67","amount":0.30004854435497375},
              {"id":"id-68","name":"name-68","amount":0.9131039071803281},
              {"id":"id-69","name":"name-69","amount":0.5168971606670725},
              {"id":"id-70","name":"name-70","amount":0.48727905351176093},
              {"id":"id-71","name":"name-71","amount":0.16432662014151322},
              {"id":"id-72","name":"name-72","amount":0.7513171560808238},
              {"id":"id-73","name":"name-73","amount":0.9737573593859609},
              {"id":"id-74","name":"name-74","amount":0.5524897016083532},
              {"id":"id-75","name":"name-75","amount":0.9874288112141801},
              {"id":"id-76","name":"name-76","amount":0.3354511604586957},
              {"id":"id-77","name":"name-77","amount":0.5373308402855339},
              {"id":"id-78","name":"name-78","amount":0.3914355458242862},
              {"id":"id-79","name":"name-79","amount":0.9847371177107681},
              {"id":"id-80","name":"name-80","amount":0.954612489243475},
              {"id":"id-81","name":"name-81","amount":0.7339262275341216},
              {"id":"id-82","name":"name-82","amount":0.35304652529506253},
              {"id":"id-83","name":"name-83","amount":0.8569536262937095},
              {"id":"id-84","name":"name-84","amount":0.4536281405146064},
              {"id":"id-85","name":"name-85","amount":0.7469989207550534},
              {"id":"id-86","name":"name-86","amount":0.6039721727986166},
              {"id":"id-87","name":"name-87","amount":0.28339901688259606},
              {"id":"id-88","name":"name-88","amount":0.06120907113795637},
              {"id":"id-89","name":"name-89","amount":0.16015259332172815},
              {"id":"id-90","name":"name-90","amount":0.4150547292920923},
              {"id":"id-91","name":"name-91","amount":0.06023247667993825},
              {"id":"id-92","name":"name-92","amount":0.9333854068623685},
              {"id":"id-93","name":"name-93","amount":0.8998869056172916},
              {"id":"id-94","name":"name-94","amount":0.7712436333609415},
              {"id":"id-95","name":"name-95","amount":0.2102835486336202},
              {"id":"id-96","name":"name-96","amount":0.042859608787927606},
              {"id":"id-97","name":"name-97","amount":0.049020066891146796},
              {"id":"id-98","name":"name-98","amount":0.33061698125174144},
              {"id":"id-99","name":"name-99","amount":0.4624756570219959}
            ]}>
          </slim_table_list.TableListViewPaged>
        </ui_static.Div>
      </ReactNative.View>
    </n.Enclosed>);
}

// melbourne.slim-table-list-test/TableListViewRemotePagedDemo [476] 
function TableListViewRemotePagedDemo(){
  let views = {
    "list":ext_view.makeView({
        "handler":function (showPage,display){
            return new Promise(function (resolve,reject){
              setTimeout(function (){
                try{
                  resolve(          (function (){
                              return k.arr_map(k.arr_range(display),function (i){
                                return {
                                  "id":"id-" + (((showPage - 2) * display) + display + i),
                                  "name":"name-" + (((showPage - 2) * display) + display + i),
                                  "amount":Math.random()
                                };
                              });
                            })());
                }
                catch(e){
                  reject(e);
                }
              },200);
            });
          },
        "options":{"init":false}
      })
  };
  return (
    <n.Enclosed label="melbourne.slim-table-list/TableListViewRemotePaged">
      <ReactNative.View>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_table_list.TableListViewRemotePaged
            design={{"type":"light"}}
            control={{}}
            views={views}
            impl={{
              "page":{"display":5,"total":100},
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              }
            }}
            display={{
              "brief":{
                "type":"v",
                "body":[{"template":["name"]},{"template":["amount"]}]
              }
            }}>
          </slim_table_list.TableListViewRemotePaged>
        </ui_static.Div>
      </ReactNative.View>
    </n.Enclosed>);
}

// melbourne.slim-table-list-test/TableListViewDemo [553] 
function TableListViewDemo(){
  return (
    <n.Enclosed label="melbourne.slim-table-list/TableListView">
      <ReactNative.View>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_table_list.TableListView
            design={{"type":"light"}}
            impl={{
              "groups":{"split":["currency_id"]},
              "items":{
                "sort":function (arr){
                  return k.sort_by(arr,[["name",true],"balance"]);
                }
              },
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              }
            }}
            display={{
              "brief":{
                "type":"v",
                "body":[
                  {"template":["name"]},
                  {"template":["balance"]},
                  {"template":["escrow"],"style":{"textAlign":"right"}}
                ]
              }
            }}
            entries={[
              {"currency_id":"DOGE","name":"KLM","balance":100,"escrow":0.5},
              {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5},
              {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
              {"currency_id":"DOGE","name":"QRS","balance":490,"escrow":34.0},
              {
              "currency_id":"STATS",
              "name":"HIJ",
              "balance":130400,
              "escrow":1250.5
            },
              {"currency_id":"DOGE","name":"WXY","balance":456,"escrow":63},
              {
              "currency_id":"STATS",
              "name":"NOP",
              "balance":1000,
              "escrow":50.5
            },
              {
              "currency_id":"DOGE",
              "name":"EFG",
              "balance":34050,
              "escrow":50.5
            }
            ]}>
          </slim_table_list.TableListView>
        </ui_static.Div>
      </ReactNative.View>
    </n.Enclosed>);
}

// melbourne.slim-table-list-test/TableListDemo [579] 
function TableListDemo(){
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
  let components = {"entry_brief":EntryBrief,"entry_detail":EntryDetail};
  let [type,setType] = React.useState("fold");
  let [swipe,setSwipe] = React.useState("left");
  return (
    <n.Isolation>
      <n.Enclosed label="melbourne.slim-table-list/TableList">
        <n.Row>
          <ui_text.TabsAccent
            value={type}
            setValue={setType}
            data={["fold","swipe","mini"]}>
          </ui_text.TabsAccent>
          <ui_text.TabsAccent value={swipe} setValue={setSwipe} data={["left","right"]}></ui_text.TabsAccent>
        </n.Row>
        <n.Row>
          <slim_table_list.TableList
            mini={true}
            design={{"type":"light"}}
            style={{"width":200}}
            display={{
              "brief":{"card":{"component":type}},
              "swipe":{"direction":swipe,"showDelete":false}
            }}
            views={views}
            components={components}
            control={control}>
          </slim_table_list.TableList>
          <slim_table_list.TableList
            mini={true}
            design={{"type":"dark"}}
            style={{"width":200}}
            display={{
              "brief":{"card":{"component":type}},
              "swipe":{"direction":swipe,"showDelete":false}
            }}
            views={views}
            components={components}
            control={control}>
          </slim_table_list.TableList>
        </n.Row>
      </n.Enclosed>
    </n.Isolation>);
}

var MODULE = {
  "TableListCardBriefDemo":TableListCardBriefDemo,
  "TableListCardNavDemo":TableListCardNavDemo,
  "TableListCardSwipeDemo":TableListCardSwipeDemo,
  "TableListCardFoldDemo":TableListCardFoldDemo,
  "TableListCardDemo":TableListCardDemo,
  "TableListViewEntriesDemo":TableListViewEntriesDemo,
  "TableListViewGroupDemo":TableListViewGroupDemo,
  "TableListViewPagedDemo":TableListViewPagedDemo,
  "TableListViewRemotePagedDemo":TableListViewRemotePagedDemo,
  "TableListViewDemo":TableListViewDemo,
  "TableListDemo":TableListDemo
};

export default MODULE