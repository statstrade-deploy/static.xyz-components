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
              {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
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
            },
              {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5}
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
              {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
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
            },
              {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5}
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
                {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5},
                {
                "currency_id":"STATS",
                "name":"HIJ",
                "balance":130400,
                "escrow":1250.5
              },
                {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
                {
                "currency_id":"STATS",
                "name":"NOP",
                "balance":1000,
                "escrow":50.5
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
                {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5},
                {
                "currency_id":"STATS",
                "name":"HIJ",
                "balance":130400,
                "escrow":1250.5
              },
                {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
                {
                "currency_id":"STATS",
                "name":"NOP",
                "balance":1000,
                "escrow":50.5
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
              {"id":"id-0","name":"name-0","amount":0.5583505677862406},
              {"id":"id-1","name":"name-1","amount":0.7389683751081799},
              {"id":"id-2","name":"name-2","amount":0.7183514002439145},
              {"id":"id-3","name":"name-3","amount":0.3619531374720888},
              {"id":"id-4","name":"name-4","amount":0.4335471885454263},
              {"id":"id-5","name":"name-5","amount":0.1064438300644277},
              {"id":"id-6","name":"name-6","amount":0.14759956535713026},
              {"id":"id-7","name":"name-7","amount":0.06628840401871994},
              {"id":"id-8","name":"name-8","amount":0.5513868489112246},
              {"id":"id-9","name":"name-9","amount":0.667304822601958},
              {"id":"id-10","name":"name-10","amount":0.9094037133883557},
              {"id":"id-11","name":"name-11","amount":0.6687469791478889},
              {"id":"id-12","name":"name-12","amount":0.3472114422111201},
              {"id":"id-13","name":"name-13","amount":0.20848826796229203},
              {"id":"id-14","name":"name-14","amount":0.24014254812427183},
              {"id":"id-15","name":"name-15","amount":0.034821504037126916},
              {"id":"id-16","name":"name-16","amount":0.028556402112086765},
              {"id":"id-17","name":"name-17","amount":0.34042197193881873},
              {"id":"id-18","name":"name-18","amount":0.39148313693030357},
              {"id":"id-19","name":"name-19","amount":0.044932254075066624},
              {"id":"id-20","name":"name-20","amount":0.09102079503771043},
              {"id":"id-21","name":"name-21","amount":0.4784052845020831},
              {"id":"id-22","name":"name-22","amount":0.6975286658556016},
              {"id":"id-23","name":"name-23","amount":0.7307118600103704},
              {"id":"id-24","name":"name-24","amount":0.20427854623914332},
              {"id":"id-25","name":"name-25","amount":0.2498332279445582},
              {"id":"id-26","name":"name-26","amount":0.5141976754106493},
              {"id":"id-27","name":"name-27","amount":0.9081931891036721},
              {"id":"id-28","name":"name-28","amount":0.3457024430767628},
              {"id":"id-29","name":"name-29","amount":0.7899405330733833},
              {"id":"id-30","name":"name-30","amount":0.06504495267755794},
              {"id":"id-31","name":"name-31","amount":0.4780974816065908},
              {"id":"id-32","name":"name-32","amount":0.7553622682128666},
              {"id":"id-33","name":"name-33","amount":0.9990947421921362},
              {"id":"id-34","name":"name-34","amount":0.8146485037847273},
              {"id":"id-35","name":"name-35","amount":0.6893952415501027},
              {"id":"id-36","name":"name-36","amount":0.013696759705956074},
              {"id":"id-37","name":"name-37","amount":0.726268186441601},
              {"id":"id-38","name":"name-38","amount":0.10885066680457145},
              {"id":"id-39","name":"name-39","amount":0.5695401709968849},
              {"id":"id-40","name":"name-40","amount":0.301948801346654},
              {"id":"id-41","name":"name-41","amount":0.01617045106669246},
              {"id":"id-42","name":"name-42","amount":0.47055601343735776},
              {"id":"id-43","name":"name-43","amount":0.41325163661083664},
              {"id":"id-44","name":"name-44","amount":0.6954918562924571},
              {"id":"id-45","name":"name-45","amount":0.011624951667878691},
              {"id":"id-46","name":"name-46","amount":0.12045226147261945},
              {"id":"id-47","name":"name-47","amount":0.6914492353479792},
              {"id":"id-48","name":"name-48","amount":0.16146476456759706},
              {"id":"id-49","name":"name-49","amount":0.838123937562163},
              {"id":"id-50","name":"name-50","amount":0.003935020431146241},
              {"id":"id-51","name":"name-51","amount":0.992918111218855},
              {"id":"id-52","name":"name-52","amount":0.7846716153941166},
              {"id":"id-53","name":"name-53","amount":0.8140987889682829},
              {"id":"id-54","name":"name-54","amount":0.8486805848110638},
              {"id":"id-55","name":"name-55","amount":0.6435114298546103},
              {"id":"id-56","name":"name-56","amount":0.6294915116575679},
              {"id":"id-57","name":"name-57","amount":0.6282931426517957},
              {"id":"id-58","name":"name-58","amount":0.5517256465837364},
              {"id":"id-59","name":"name-59","amount":0.46117222266720803},
              {"id":"id-60","name":"name-60","amount":0.5605831976607322},
              {"id":"id-61","name":"name-61","amount":0.7047286676910255},
              {"id":"id-62","name":"name-62","amount":0.5005767689570514},
              {"id":"id-63","name":"name-63","amount":0.699783573455103},
              {"id":"id-64","name":"name-64","amount":0.2914574609493198},
              {"id":"id-65","name":"name-65","amount":0.8361042687245371},
              {"id":"id-66","name":"name-66","amount":0.2697859108578454},
              {"id":"id-67","name":"name-67","amount":0.6108331817181221},
              {"id":"id-68","name":"name-68","amount":0.9075305339624048},
              {"id":"id-69","name":"name-69","amount":0.30807163671110627},
              {"id":"id-70","name":"name-70","amount":0.5025933469478511},
              {"id":"id-71","name":"name-71","amount":0.20910383606408733},
              {"id":"id-72","name":"name-72","amount":0.11905931537023906},
              {"id":"id-73","name":"name-73","amount":0.15968102758945857},
              {"id":"id-74","name":"name-74","amount":0.6866525193080409},
              {"id":"id-75","name":"name-75","amount":0.7670789336005525},
              {"id":"id-76","name":"name-76","amount":0.5393999007647794},
              {"id":"id-77","name":"name-77","amount":0.9293933859589354},
              {"id":"id-78","name":"name-78","amount":0.9635160965705108},
              {"id":"id-79","name":"name-79","amount":0.2824783555326801},
              {"id":"id-80","name":"name-80","amount":0.3553184887830271},
              {"id":"id-81","name":"name-81","amount":0.22140564259542073},
              {"id":"id-82","name":"name-82","amount":0.07347582401286068},
              {"id":"id-83","name":"name-83","amount":0.6643162007454178},
              {"id":"id-84","name":"name-84","amount":0.8586239040136813},
              {"id":"id-85","name":"name-85","amount":0.6936386732398729},
              {"id":"id-86","name":"name-86","amount":0.030513768102397365},
              {"id":"id-87","name":"name-87","amount":0.6650991310160131},
              {"id":"id-88","name":"name-88","amount":0.4421792371118183},
              {"id":"id-89","name":"name-89","amount":0.6165876754117582},
              {"id":"id-90","name":"name-90","amount":0.14653552119261914},
              {"id":"id-91","name":"name-91","amount":0.6502601585073572},
              {"id":"id-92","name":"name-92","amount":0.828390006801844},
              {"id":"id-93","name":"name-93","amount":0.981337681302534},
              {"id":"id-94","name":"name-94","amount":0.5797212174737445},
              {"id":"id-95","name":"name-95","amount":0.1406493666706916},
              {"id":"id-96","name":"name-96","amount":0.49455428121179},
              {"id":"id-97","name":"name-97","amount":0.2453970348631166},
              {"id":"id-98","name":"name-98","amount":0.6687429620839593},
              {"id":"id-99","name":"name-99","amount":0.6898797631960522}
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
              {
              "currency_id":"DOGE",
              "name":"EFG",
              "balance":34050,
              "escrow":50.5
            },
              {"currency_id":"DOGE","name":"KLM","balance":100,"escrow":0.5},
              {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
              {
              "currency_id":"STATS",
              "name":"NOP",
              "balance":1000,
              "escrow":50.5
            },
              {"currency_id":"DOGE","name":"WXY","balance":456,"escrow":63},
              {
              "currency_id":"STATS",
              "name":"HIJ",
              "balance":130400,
              "escrow":1250.5
            },
              {"currency_id":"DOGE","name":"QRS","balance":490,"escrow":34.0},
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