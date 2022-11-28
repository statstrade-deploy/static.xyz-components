import React from 'react'

import * as ReactNative from 'react-native'

import n from './react-native'

import k from '../xt/lang/base-lib'

// js.react-native-test/nest-tree [19] 
function nest_tree(obj,prefix){
  return k.walk(obj,k.identity,function (x){
    if(k.objp(x)){
      let out = {};
      for(let [k,v] of Object.entries(x)){
        out[prefix + k] = v;
      };
      return out;
    }
    return x;
  });
}

// js.react-native-test/TREEDATA [31] 
var TREEDATA = {
  "a":{
    "aa":{"aaa":"1","aab":"2","aac":"3","aad":"4"},
    "ab":{"aba":"1","abb":"2","abc":"3","abd":"4"},
    "ac":{"aca":"1","acb":"2","acc":"3","acd":"4"},
    "ad":{"ada":"1","adb":"2","adc":"3","add":"4"}
  },
  "b":{
    "ba":{"baa":"1","bab":"2","bac":"3","bad":"4"},
    "bb":{"bba":"1","bbb":"2","bbc":"3","bbd":"4"},
    "bc":{"bca":"1","bcb":"2","bcc":"3","bcd":"4"},
    "bd":{"bda":"1","bdb":"2","bdc":"3","bdd":"4"}
  },
  "c":{
    "ca":{"caa":"1","cab":"2","cac":"3","cad":"4"},
    "cb":{"cba":"1","cbb":"2","cbc":"3","cbd":"4"},
    "cc":{"cca":"1","ccb":"2","ccc":"3","ccd":"4"},
    "cd":{"cda":"1","cdb":"2","cdc":"3","cdd":"4"}
  },
  "d":{
    "da":{"daa":"1","dab":"2","dac":"3","dad":"4"},
    "db":{"dba":"1","dbb":"2","dbc":"3","dbd":"4"},
    "dc":{"dca":"1","dcb":"2","dcc":"3","dcd":"4"},
    "dd":{"dda":"1","ddb":"2","ddc":"3","ddd":"4"}
  }
};

// js.react-native-test/EnclosedDemo [117] 
function EnclosedDemo(){
  return (
    <n.Enclosed label="js.react-native/Enclosed"><n.Row><ReactNative.Text>HELLO</ReactNative.Text></n.Row></n.Enclosed>);
}

// js.react-native-test/RowDemo [129] 
function RowDemo(){
  return (
    <n.Enclosed label="js.react-native/Row">
      <n.Row style={{"backgroundColor":"orange"}}>
        <ReactNative.Text>HELLO</ReactNative.Text>
        <ReactNative.Text>WORLD</ReactNative.Text>
      </n.Row>
      <n.Row style={{"backgroundColor":"blue"}}>
        <ReactNative.Text>HELLO</ReactNative.Text>
        <ReactNative.Text>WORLD</ReactNative.Text>
      </n.Row>
    </n.Enclosed>);
}

// js.react-native-test/FillDemo [147] 
function FillDemo(){
  return (
    <n.Enclosed label="js.react-native/Fill">
      <n.Row style={{"backgroundColor":"orange"}}>
        <ReactNative.Text>HELLO</ReactNative.Text>
        <n.Fill style={{"backgroundColor":"red"}}></n.Fill>
        <ReactNative.Text>WORLD</ReactNative.Text>
      </n.Row>
    </n.Enclosed>);
}

// js.react-native-test/H1Demo [162] 
function H1Demo(){
  return (
    <n.Enclosed text="js.react-native/H1">
      <n.Row style={{"backgroundColor":"orange"}}><n.H1 text="HELLO WORLD"></n.H1></n.Row>
    </n.Enclosed>);
}

// js.react-native-test/H2Demo [175] 
function H2Demo(){
  return (
    <n.Enclosed text="js.react-native/H2">
      <n.Row style={{"backgroundColor":"orange"}}><n.H2 text="HELLO WORLD"></n.H2></n.Row>
    </n.Enclosed>);
}

// js.react-native-test/H3Demo [188] 
function H3Demo(){
  return (
    <n.Enclosed text="js.react-native/H3">
      <n.Row style={{"backgroundColor":"orange"}}><n.H3 text="HELLO WORLD"></n.H3></n.Row>
    </n.Enclosed>);
}

// js.react-native-test/H4Demo [201] 
function H4Demo(){
  return (
    <n.Enclosed text="js.react-native/H4">
      <n.Row style={{"backgroundColor":"orange"}}><n.H4 text="HELLO WORLD"></n.H4></n.Row>
    </n.Enclosed>);
}

// js.react-native-test/H5Demo [214] 
function H5Demo(){
  return (
    <n.Enclosed text="js.react-native/H5">
      <n.Row style={{"backgroundColor":"orange"}}><n.H5 text="HELLO WORLD"></n.H5></n.Row>
    </n.Enclosed>);
}

// js.react-native-test/CaptionDemo [227] 
function CaptionDemo(){
  return (
    <n.Enclosed text="js.react-native/Caption">
      <n.Row style={{"backgroundColor":"orange"}}><n.Caption text="HELLO WORLD"></n.Caption></n.Row>
    </n.Enclosed>);
}

// js.react-native-test/TabsIndexedDemo [243] 
function TabsIndexedDemo(){
  let [index,setIndex] = React.useState(3);
  let styleNormal = {"padding":2};
  let styleSelected = {
    "backgroundColor":"#666",
    "borderRadius":3,
    "color":"white",
    "padding":2
  };
  return (
    <n.Enclosed label="js.react-native/TabsIndexed">
      <n.TabsIndexed
        items={["A","B","C","D"]}
        checkIndex={function (){
          return true;
        }}
        setIndex={setIndex}
        styleNormal={styleNormal}
        styleSelected={styleSelected}
        index={index}
        format={function (s){
          return " " + s + " ";
        }}>
      </n.TabsIndexed>
      <n.Caption text={JSON.stringify({index})} style={{"marginTop":10}}></n.Caption>
    </n.Enclosed>);
}

// js.react-native-test/TabsDemo [270] 
function TabsDemo(){
  let [value,setValue] = React.useState("A");
  return (
    <n.Enclosed label="js.react-native/Tabs">
      <n.Tabs
        data={["A","B","C","D"]}
        value={value}
        setValue={setValue}
        format={function (s){
          return " " + s + " ";
        }}>
      </n.Tabs>
      <n.Caption text={JSON.stringify({value})} style={{"marginTop":10}}></n.Caption>
    </n.Enclosed>);
}

// js.react-native-test/TabsPaneDemo [289] 
function TabsPaneDemo(){
  let [initial,setInitial] = React.useState("a");
  return (
    <n.Enclosed label="js.react-native/TabsPane">
      <n.TabsPane
        tree={{"a":"1","b":"2","c":"3","d":"4"}}
        initial={initial}
        setInitial={setInitial}
        tabsFormat={function (s){
          return " " + s.toUpperCase() + " ";
        }}
        formatFn={k.identity}>
      </n.TabsPane>
      <n.Caption text={JSON.stringify({initial})} style={{"marginTop":10}}></n.Caption>
    </n.Enclosed>);
}

// js.react-native-test/ListIndexedDemo [312] 
function ListIndexedDemo(){
  let [index,setIndex] = React.useState(3);
  return (
    <n.Enclosed label="js.react-native/ListIndexed">
      <n.ListIndexed
        items={["A","B","C","D"]}
        checkIndex={function (){
          return true;
        }}
        setIndex={setIndex}
        index={index}
        format={function (s){
          return " " + s + " ";
        }}>
      </n.ListIndexed>
      <n.Caption text={JSON.stringify({index})} style={{"marginTop":10}}></n.Caption>
    </n.Enclosed>);
}

// js.react-native-test/ListDemo [332] 
function ListDemo(){
  let [value,setValue] = React.useState("A");
  return (
    <n.Enclosed label="js.react-native/List">
      <n.List
        data={["A","B","C","D"]}
        value={value}
        setValue={setValue}
        format={function (s){
          return " " + s + " ";
        }}>
      </n.List>
      <n.Caption text={JSON.stringify({value})} style={{"marginTop":10}}></n.Caption>
    </n.Enclosed>);
}

// js.react-native-test/ListPaneDemo [351] 
function ListPaneDemo(){
  let [initial,setInitial] = React.useState("a");
  return (
    <n.Enclosed label="js.react-native/ListPane">
      <n.ListPane
        tree={{"a":"1","b":"2","c":"3","d":"4"}}
        initial={initial}
        setInitial={setInitial}
        listWidth={30}
        listFormat={function (s){
          return s.toUpperCase();
        }}
        formatFn={k.identity}>
      </n.ListPane>
      <n.Caption text={JSON.stringify({initial})} style={{"marginTop":10}}></n.Caption>
    </n.Enclosed>);
}

// js.react-native-test/TabsMultiIndexedDemo [375] 
function TabsMultiIndexedDemo(){
  let [indices,setIndices] = React.useState([true,false,false,true]);
  let styleNormal = {"padding":2};
  let styleSelected = {
    "backgroundColor":"#666",
    "borderRadius":3,
    "color":"white",
    "padding":2
  };
  return (
    <n.Enclosed label="js.react-native/TabsMultiIndexed">
      <n.TabsMultiIndexed
        items={["A","B","C","D"]}
        setIndices={setIndices}
        styleNormal={styleNormal}
        styleSelected={styleSelected}
        indices={indices}
        format={function (s){
          return " " + s + " ";
        }}>
      </n.TabsMultiIndexed>
      <n.Caption text={JSON.stringify({indices})} style={{"marginTop":10}}></n.Caption>
    </n.Enclosed>);
}

// js.react-native-test/TabsMultiDemo [402] 
function TabsMultiDemo(){
  let [values,setValues] = React.useState(["A","C"]);
  return (
    <n.Enclosed label="js.react-native/TabsMulti">
      <n.TabsMulti
        data={["A","B","C","D"]}
        values={values}
        setValues={setValues}
        format={function (s){
          return " " + s + " ";
        }}>
      </n.TabsMulti>
      <n.Caption text={JSON.stringify({values})} style={{"marginTop":10}}></n.Caption>
    </n.Enclosed>);
}

// js.react-native-test/TreePaneDemo [419] 
function TreePaneDemo(){
  let [initial,setInitial] = React.useState("a");
  let [l1,setL1] = React.useState();
  let [l2,setL2] = React.useState();
  let [l3,setL3] = React.useState();
  return (
    <n.Enclosed label="js.react-native/TreePane">
      <n.TreePane
        tree={{
          "x":nest_tree(TREEDATA,"x"),
          "y":nest_tree(TREEDATA,"y"),
          "z":nest_tree(TREEDATA,"z"),
          "w":nest_tree(TREEDATA,"w")
        }}
        levels={[
          {
          "type":"list",
          "initial":initial,
          "setInitial":setInitial,
          "listWidth":30,
          "listFormat":function (s){
            return s.toUpperCase();
          },
          "formatFn":function (obj){
            return JSON.stringify(obj);
          }
        },
          {
          "type":"tabs",
          "initial":l1,
          "setInitial":setL1,
          "listWidth":30,
          "tabsFormat":function (s){
            return s.toUpperCase();
          },
          "formatFn":function (obj){
            return JSON.stringify(obj);
          }
        },
          {
          "type":"list",
          "listWidth":30,
          "initial":l2,
          "setInitial":setL2,
          "listFormat":function (s){
            return s.toUpperCase();
          },
          "formatFn":function (obj){
            return JSON.stringify(obj);
          }
        },
          {
          "type":"tabs",
          "listWidth":30,
          "initial":l3,
          "setInitial":setL3,
          "tabsFormat":function (s){
            return s.toUpperCase();
          },
          "formatFn":function (obj){
            return JSON.stringify(obj);
          }
        }
        ]}>
      </n.TreePane>
      <n.Caption
        text={JSON.stringify({initial,l1,l2,l3})}
        style={{"marginTop":10}}>
      </n.Caption>
    </n.Enclosed>);
}

// js.react-native-test/BaseIndicatorDemo [468] 
function BaseIndicatorDemo(){
  return (
    <n.Enclosed label="js.react-native/BaseIndicator">
      <n.BaseIndicator color="black" label="TEST" content="Hello World"></n.BaseIndicator>
    </n.Enclosed>);
}

// js.react-native-test/ToggleIndicatorDemo [482] 
function ToggleIndicatorDemo(){
  let [active,setActive] = React.useState(true);
  return (
    <n.Enclosed label="js.react-native/ToggleIndicator">
      <n.ToggleIndicator
        active={active}
        onPress={function (){
          return setActive(!active);
        }}
        label="TEST">
      </n.ToggleIndicator>
    </n.Enclosed>);
}

// js.react-native-test/RecordListDemo [497] 
function RecordListDemo(){
  let [active,setActive] = React.useState(true);
  return (
    <n.Enclosed label="js.react-native/RecordList">
      <n.RecordList
        entry={{"first":"John","last":"Smith"}}
        columns={[["First Name","first"],["Last Name","last"]]}>
      </n.RecordList>
    </n.Enclosed>);
}

// js.react-native-test/TextDisplayDemo [513] 
function TextDisplayDemo(){
  let [active,setActive] = React.useState(true);
  return (
    <n.Enclosed label="js.react-native/TextDisplay"><n.TextDisplay content="ABC"></n.TextDisplay></n.Enclosed>);
}

// js.react-native-test/PortalView [547] 
function PortalView(){
  let [code,setCode] = React.useState(Math.random().toString(36).substr(2,5 || 4));
  return (
    <ReactNative.View style={{"marginTop":10}}>
      <n.Row>
        <ReactNative.Button
          title="CHANGE"
          onPress={function (){
            return setCode(Math.random().toString(36).substr(2,5 || 4));
          }}>
        </ReactNative.Button>
      </n.Row>
      <n.Row>
        <n.Portal>
          <ReactNative.Text style={{"color":"green"}}>{"HELLO - " + code}</ReactNative.Text>
        </n.Portal>
        <n.Portal target="world">
          <ReactNative.Text style={{"color":"white"}}>{"HELLO - " + code}</ReactNative.Text>
        </n.Portal>
      </n.Row>
    </ReactNative.View>);
}

// js.react-native-test/PortalDemo [571] 
function PortalDemo(){
  return (
    <n.Enclosed label="js.react-native/Portal">
      <n.PortalProvider>
        <n.Row>
          <ReactNative.View style={{"backgroundColor":"red","height":50,"width":200}}><n.PortalSink></n.PortalSink></ReactNative.View>
          <ReactNative.View style={{"flex":1}}></ReactNative.View>
          <ReactNative.View
            style={{
              "backgroundColor":"blue",
              "color":"white",
              "height":50,
              "width":200
            }}><n.PortalSink name="world"></n.PortalSink>
          </ReactNative.View>
        </n.Row>
        <PortalView></PortalView>
        <n.Portal target="world">
          <ReactNative.Text style={{"color":"yellow"}}>{"WORLD"}</ReactNative.Text>
        </n.Portal>
        <n.Portal>
          <ReactNative.Text style={{"color":"yellow"}}>{"DEFAULT"}</ReactNative.Text>
        </n.Portal>
      </n.PortalProvider>
    </n.Enclosed>);
}

// js.react-native-test/UsePortalLayoutsView [606] 
function UsePortalLayoutsView({layouts,offset,setLayouts,setOffset}){
  let hostRef = React.useRef();
  let {contentRef,getLayouts,setSinkRef,sinkRef} = n.usePortalLayouts(hostRef,setLayouts);
  React.useEffect(function (){
    getLayouts();
  },[offset]);
  return (
    <ReactNative.View style={{"marginTop":10}}>
      <ReactNative.View ref={hostRef}></ReactNative.View>
      <n.Row>
        <n.Portal onSink={setSinkRef}>
          <ReactNative.View ref={contentRef}>
            <ReactNative.Text style={{"color":"green"}}>{n.format_entry({offset})}</ReactNative.Text>
          </ReactNative.View>
        </n.Portal>
      </n.Row>
    </ReactNative.View>);
}

// js.react-native-test/UsePortalLayoutsDemo [634] 
function UsePortalLayoutsDemo(){
  let [offset,setOffset] = React.useState(Math.floor(100 * Math.random(100)));
  let [layouts,setLayouts] = React.useState({});
  return (
    <n.Enclosed label="js.react-native/usePortalLayouts">
      <n.PortalProvider>
        <n.Row>
          <n.Row style={{"backgroundColor":"red","height":300,"width":300}}>
            <ReactNative.View
              style={{
                "position":"absolute",
                "backgroundColor":"blue",
                "height":200,
                "width":200,
                "transform":[{"translateX":offset},{"translateY":offset}]
              }}>
              <n.PortalSink>
                <ReactNative.Button
                  title="CHANGE"
                  onPress={function (){
                    return setOffset(Math.floor(100 * Math.random()));
                  }}>
                </ReactNative.Button>
                <UsePortalLayoutsView
                  setOffset={setOffset}
                  offset={offset}
                  layouts={layouts}
                  setLayouts={setLayouts}>
                </UsePortalLayoutsView>
              </n.PortalSink>
            </ReactNative.View>
          </n.Row>
          <n.TextDisplay content={n.format_entry({layouts,offset})}></n.TextDisplay>
        </n.Row>
      </n.PortalProvider>
    </n.Enclosed>);
}

var MODULE = // c7243227-5dc9-4618-baa4-5efcb7cf32bc
{
  "nest_tree":nest_tree,
  "TREEDATA":TREEDATA,
  "EnclosedDemo":EnclosedDemo,
  "RowDemo":RowDemo,
  "FillDemo":FillDemo,
  "H1Demo":H1Demo,
  "H2Demo":H2Demo,
  "H3Demo":H3Demo,
  "H4Demo":H4Demo,
  "H5Demo":H5Demo,
  "CaptionDemo":CaptionDemo,
  "TabsIndexedDemo":TabsIndexedDemo,
  "TabsDemo":TabsDemo,
  "TabsPaneDemo":TabsPaneDemo,
  "ListIndexedDemo":ListIndexedDemo,
  "ListDemo":ListDemo,
  "ListPaneDemo":ListPaneDemo,
  "TabsMultiIndexedDemo":TabsMultiIndexedDemo,
  "TabsMultiDemo":TabsMultiDemo,
  "TreePaneDemo":TreePaneDemo,
  "BaseIndicatorDemo":BaseIndicatorDemo,
  "ToggleIndicatorDemo":ToggleIndicatorDemo,
  "RecordListDemo":RecordListDemo,
  "TextDisplayDemo":TextDisplayDemo,
  "PortalView":PortalView,
  "PortalDemo":PortalDemo,
  "UsePortalLayoutsView":UsePortalLayoutsView,
  "UsePortalLayoutsDemo":UsePortalLayoutsDemo
};;

export default MODULE