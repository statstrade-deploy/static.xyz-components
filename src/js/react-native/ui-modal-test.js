import React from 'react'

import * as ReactNative from 'react-native'

import n from '../react-native'

import ui_modal from './ui-modal'

// js.react-native.ui-modal-test/ModalDemo [33] 
function ModalDemo(){
  let [visible,setVisible] = React.useState();
  let [position,setPosition] = React.useState("centered");
  let [transition,setTransition] = React.useState("from_top");
  React.useEffect(function (){
    if(false == visible){
      setVisible(true);
    }
  },[transition]);
  React.useEffect(function (){
    setVisible(false);
  },[]);
  return (
    <n.Enclosed label="js.react-native.ui-modal/Modal">
      <n.Row>
        <ReactNative.Button
          title="T"
          onPress={function (){
            return setVisible(true);
          }}>
        </ReactNative.Button>
      </n.Row>
      <n.Tabs
        data={[
          "centered",
          "top",
          "left",
          "bottom",
          "right",
          "top_right",
          "top_left",
          "bottom_right",
          "bottom_left"
        ]}
        value={position}
        setValue={setPosition}>
      </n.Tabs>
      <n.Tabs
        data={["from_top","from_bottom","from_left","from_right"]}
        value={transition}
        setValue={setTransition}>
      </n.Tabs>
      <ui_modal.Modal
        visible={visible}
        position={position}
        transition={transition}
        onClose={function (){
          return setVisible(false);
        }}
        styleBackdrop={{"backgroundColor":"#222"}}>
        <ReactNative.View style={{"width":420,"height":200}}>
          <ReactNative.Text style={{"flex":1,"backgroundColor":"yellow"}}>HELLO</ReactNative.Text>
        </ReactNative.View>
      </ui_modal.Modal>
      <n.Caption text={n.format_obj({visible})} style={{"marginTop":10}}></n.Caption>
    </n.Enclosed>);
}

var MODULE = {"ModalDemo":ModalDemo};

export default MODULE