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
              {
              "currency_id":"STATS",
              "name":"HIJ",
              "balance":130400,
              "escrow":1250.5
            },
              {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5},
              {
              "currency_id":"STATS",
              "name":"NOP",
              "balance":1000,
              "escrow":50.5
            },
              {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37}
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
              {
              "currency_id":"STATS",
              "name":"HIJ",
              "balance":130400,
              "escrow":1250.5
            },
              {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5},
              {
              "currency_id":"STATS",
              "name":"NOP",
              "balance":1000,
              "escrow":50.5
            },
              {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37}
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
              {"id":"id-0","name":"name-0","amount":0.08312366408619676},
              {"id":"id-1","name":"name-1","amount":0.32680240375636893},
              {"id":"id-2","name":"name-2","amount":0.5067831957115161},
              {"id":"id-3","name":"name-3","amount":0.2622959756748571},
              {"id":"id-4","name":"name-4","amount":0.13915006468492697},
              {"id":"id-5","name":"name-5","amount":0.37948236589968176},
              {"id":"id-6","name":"name-6","amount":0.7647281479057656},
              {"id":"id-7","name":"name-7","amount":0.8476492811236181},
              {"id":"id-8","name":"name-8","amount":0.5525661426582875},
              {"id":"id-9","name":"name-9","amount":0.518943987434072},
              {"id":"id-10","name":"name-10","amount":0.6320368059703076},
              {"id":"id-11","name":"name-11","amount":0.34690840845420723},
              {"id":"id-12","name":"name-12","amount":0.0024592617600239786},
              {"id":"id-13","name":"name-13","amount":0.4655384722318615},
              {"id":"id-14","name":"name-14","amount":0.45879375251216314},
              {"id":"id-15","name":"name-15","amount":0.5699003847819119},
              {"id":"id-16","name":"name-16","amount":0.3849074020916504},
              {"id":"id-17","name":"name-17","amount":0.3427180139054118},
              {"id":"id-18","name":"name-18","amount":0.7792349720475401},
              {"id":"id-19","name":"name-19","amount":0.6817720285131939},
              {"id":"id-20","name":"name-20","amount":0.6617954776790168},
              {"id":"id-21","name":"name-21","amount":0.20998973757847017},
              {"id":"id-22","name":"name-22","amount":0.5713598617058627},
              {"id":"id-23","name":"name-23","amount":0.5064539611577442},
              {"id":"id-24","name":"name-24","amount":0.5301015318633945},
              {"id":"id-25","name":"name-25","amount":0.14803645416013655},
              {"id":"id-26","name":"name-26","amount":0.04143513394282372},
              {"id":"id-27","name":"name-27","amount":0.6669139157684489},
              {"id":"id-28","name":"name-28","amount":0.13421741641259488},
              {"id":"id-29","name":"name-29","amount":0.030922793027440276},
              {"id":"id-30","name":"name-30","amount":0.49042772749864794},
              {"id":"id-31","name":"name-31","amount":0.06674609949887589},
              {"id":"id-32","name":"name-32","amount":0.43937660537000855},
              {"id":"id-33","name":"name-33","amount":0.14862466149506504},
              {"id":"id-34","name":"name-34","amount":0.2930373724706894},
              {"id":"id-35","name":"name-35","amount":0.44908936166131774},
              {"id":"id-36","name":"name-36","amount":0.6860192926197952},
              {"id":"id-37","name":"name-37","amount":0.5276915603102423},
              {"id":"id-38","name":"name-38","amount":0.399881297911575},
              {"id":"id-39","name":"name-39","amount":0.15656181034159156},
              {"id":"id-40","name":"name-40","amount":0.5529331842569892},
              {"id":"id-41","name":"name-41","amount":0.1386703697914783},
              {"id":"id-42","name":"name-42","amount":0.05951716798359086},
              {"id":"id-43","name":"name-43","amount":0.7598449194051022},
              {"id":"id-44","name":"name-44","amount":0.27126553066450254},
              {"id":"id-45","name":"name-45","amount":0.17599026657878014},
              {"id":"id-46","name":"name-46","amount":0.6493727796704448},
              {"id":"id-47","name":"name-47","amount":0.9227452689494176},
              {"id":"id-48","name":"name-48","amount":0.9520105862204709},
              {"id":"id-49","name":"name-49","amount":0.24932870936791562},
              {"id":"id-50","name":"name-50","amount":0.6032838116827436},
              {"id":"id-51","name":"name-51","amount":0.7280081325204858},
              {"id":"id-52","name":"name-52","amount":0.8163337671498697},
              {"id":"id-53","name":"name-53","amount":0.6350481967816947},
              {"id":"id-54","name":"name-54","amount":0.42822414440624035},
              {"id":"id-55","name":"name-55","amount":0.7008514218989869},
              {"id":"id-56","name":"name-56","amount":0.8511019973040151},
              {"id":"id-57","name":"name-57","amount":0.7021145398266762},
              {"id":"id-58","name":"name-58","amount":0.7139454248114092},
              {"id":"id-59","name":"name-59","amount":0.9361344224449017},
              {"id":"id-60","name":"name-60","amount":0.6512474782750416},
              {"id":"id-61","name":"name-61","amount":0.248977246502448},
              {"id":"id-62","name":"name-62","amount":0.8566260719595885},
              {"id":"id-63","name":"name-63","amount":0.06027115309499398},
              {"id":"id-64","name":"name-64","amount":0.8560998263633993},
              {"id":"id-65","name":"name-65","amount":0.7662129858051095},
              {"id":"id-66","name":"name-66","amount":0.9412621258958173},
              {"id":"id-67","name":"name-67","amount":0.24044293102908154},
              {"id":"id-68","name":"name-68","amount":0.6385793782299242},
              {"id":"id-69","name":"name-69","amount":0.5743035355619427},
              {"id":"id-70","name":"name-70","amount":0.8574155002880536},
              {"id":"id-71","name":"name-71","amount":0.09136062969838799},
              {"id":"id-72","name":"name-72","amount":0.16415243487662345},
              {"id":"id-73","name":"name-73","amount":0.37673986993076924},
              {"id":"id-74","name":"name-74","amount":0.25906818956962774},
              {"id":"id-75","name":"name-75","amount":0.12377228299428245},
              {"id":"id-76","name":"name-76","amount":0.8007067981736736},
              {"id":"id-77","name":"name-77","amount":0.015714331512560964},
              {"id":"id-78","name":"name-78","amount":0.42171295520035557},
              {"id":"id-79","name":"name-79","amount":0.32910639095039596},
              {"id":"id-80","name":"name-80","amount":0.13101366212371868},
              {"id":"id-81","name":"name-81","amount":0.12098307045254242},
              {"id":"id-82","name":"name-82","amount":0.3984450128186059},
              {"id":"id-83","name":"name-83","amount":0.6010878331954328},
              {"id":"id-84","name":"name-84","amount":0.4962004825852905},
              {"id":"id-85","name":"name-85","amount":0.9020516103816066},
              {"id":"id-86","name":"name-86","amount":0.13170111998896228},
              {"id":"id-87","name":"name-87","amount":0.957857225059618},
              {"id":"id-88","name":"name-88","amount":0.881666047945579},
              {"id":"id-89","name":"name-89","amount":0.5496560582625764},
              {"id":"id-90","name":"name-90","amount":0.33842557571922016},
              {"id":"id-91","name":"name-91","amount":0.9470710582898895},
              {"id":"id-92","name":"name-92","amount":0.446127900773284},
              {"id":"id-93","name":"name-93","amount":0.5845834814392911},
              {"id":"id-94","name":"name-94","amount":0.053825706426442244},
              {"id":"id-95","name":"name-95","amount":0.19165425557375604},
              {"id":"id-96","name":"name-96","amount":0.8899994785802002},
              {"id":"id-97","name":"name-97","amount":0.02019490155143422},
              {"id":"id-98","name":"name-98","amount":0.6925119070340322},
              {"id":"id-99","name":"name-99","amount":0.7653230823401412}
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
              {"currency_id":"DOGE","name":"WXY","balance":456,"escrow":63},
              {
              "currency_id":"STATS",
              "name":"NOP",
              "balance":1000,
              "escrow":50.5
            },
              {"currency_id":"DOGE","name":"QRS","balance":490,"escrow":34.0},
              {
              "currency_id":"DOGE",
              "name":"EFG",
              "balance":34050,
              "escrow":50.5
            },
              {
              "currency_id":"STATS",
              "name":"HIJ",
              "balance":130400,
              "escrow":1250.5
            },
              {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
              {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5}
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