import React from 'react'

import * as ReactNative from 'react-native'

import n from '../react-native'

// js.react-native.physical-modal-test/GetPositionDemo [22] 
function GetPositionDemo(){
  let boxRef = React.useRef();
  let [display,setDisplay] = React.useState();
  let [width,setWidth] = React.useState(100);
  let [height,setHeight] = React.useState(50);
  React.useEffect(function (){
    n.measureRef(boxRef,setDisplay);
  },[]);
  return (
    <n.Enclosed label="js.react-native.physical-modal-test/GetPositionDemo">
      <n.Row style={{"marginBottom":10}}>
        <ReactNative.Button
          title="RAND"
          onPress={function (){
            setWidth(Math.floor(100 * Math.random()));
            setHeight(Math.floor(50 * Math.random()));
            new Promise(function (resolve,reject){
              setTimeout(function (){
                try{
                  resolve(        (function (){
                            n.measureRef(boxRef,setDisplay);
                          })());
                }
                catch(e){
                  reject(e);
                }
              },100);
            });
          }}>
        </ReactNative.Button>
        <ReactNative.Text> </ReactNative.Text>
        <ReactNative.Button
          title="MEASURE"
          onPress={function (){
            return n.measureRef(boxRef,setDisplay);
          }}>
        </ReactNative.Button>
      </n.Row>
      <n.Row style={{"height":height,"backgroundColor":"green"}}></n.Row>
      <n.Row>
        <ReactNative.View style={{"width":width,"backgroundColor":"green"}}></ReactNative.View>
        <ReactNative.View
          ref={boxRef}
          style={{"height":100,"width":100,"backgroundColor":"red"}}>
        </ReactNative.View>
        <n.TextDisplay content={n.format_obj(display)}></n.TextDisplay>
      </n.Row>
    </n.Enclosed>);
}

// js.react-native.physical-modal-test/DisplayModalDemo [70] 
function DisplayModalDemo(){
  let boxRef = React.useRef();
  let [showModal,setShowModal] = React.useState();
  let [display,setDisplay] = React.useState({"width":100,"height":100,"px":0,"py":0});
  React.useEffect(function (){
    n.measureRef(boxRef,setDisplay);
    setShowModal(false);
  },[]);
  return (
    <n.Enclosed
      label="js.react-native.physical-modal-test/displayModalDemo">
      <n.Row style={{"marginBottom":10}}>
        <ReactNative.Button
          title="DISPLAY"
          onPress={function (){
            n.measureRef(boxRef,setDisplay);
            setShowModal(true);
          }}>
        </ReactNative.Button>
        <ReactNative.Text> </ReactNative.Text>
        <ReactNative.Button
          title="MEASURE"
          onPress={function (){
            return n.measureRef(boxRef,setDisplay);
          }}>
        </ReactNative.Button>
      </n.Row>
      <ReactNative.View
        ref={boxRef}
        style={{"height":100,"width":100,"backgroundColor":"red"}}>
      </ReactNative.View>
      <n.TextDisplay content={n.format_obj(display)}></n.TextDisplay>
      <ReactNative.Modal
        visible={showModal}
        animationType="fade"
        transparent={true}
        onRequestClose={function (){
          return setShowModal(false);
        }}>
        <ReactNative.TouchableWithoutFeedback
          style={{"flex":1}}
          onPress={function (){
            return setShowModal(false);
          }}>
          <ReactNative.View style={{"flex":1}}>
            <ReactNative.View
              style={{
                "position":"absolute",
                "top":display.py,
                "left":display.px + display.width
              }}>
              <ReactNative.Button
                title="MODAL"
                onPress={function (){
                  return null;
                }}>
              </ReactNative.Button>
            </ReactNative.View>
          </ReactNative.View>
        </ReactNative.TouchableWithoutFeedback>
      </ReactNative.Modal>
    </n.Enclosed>);
}

var MODULE = {
  "GetPositionDemo":GetPositionDemo,
  "DisplayModalDemo":DisplayModalDemo
};

export default MODULE