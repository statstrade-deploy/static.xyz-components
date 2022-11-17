import React from 'react'

import * as ReactNative from 'react-native'

import n from '../js/react-native'

import ui_stepper from './ui-stepper'

// melbourne.ui-stepper-test/StepperTabsDemo [21] 
function StepperTabsDemo(){
  let [index,setIndex] = React.useState(0);
  return (
    <n.Enclosed label="melbourne.ui-stepper/StepperTabs">
      <n.Row>
        <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":30}}>
          <ui_stepper.StepperTabs
            brand={{"type":"light"}}
            total={5}
            itemProps={[{},{}]}
            index={index}
            setIndex={setIndex}>
          </ui_stepper.StepperTabs>
        </n.Row>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":30}}>
          <ui_stepper.StepperTabs
            brand={{"type":"dark"}}
            total={5}
            itemProps={[{},{}]}
            index={index}
            setIndex={setIndex}>
          </ui_stepper.StepperTabs>
        </n.Row>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.ui-stepper-test/StepperDemo [58] 
function StepperDemo(){
  let [index,setIndex] = React.useState(function (){
    return 0;
  });
  return (
    <n.Enclosed label="melbourne.ui-stepper/Stepper">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":30}}>
          <ui_stepper.StepperTabs
            brand={{"type":"light"}}
            total={4}
            itemProps={[{},{}]}
            index={index}
            setIndex={setIndex}>
          </ui_stepper.StepperTabs>
          <ui_stepper.Stepper
            style={{"height":200,"width":200}}
            pageStyle={{"height":200,"width":200}}
            pages={[
              (
              <ReactNative.View style={{"flex":1,"backgroundColor":"blue"}}>
                <ReactNative.Button
                  title="PRESS 1"
                  onPress={function (){
                    return alert("1");
                  }}>
                </ReactNative.Button>
              </ReactNative.View>),
              (
              <ReactNative.View style={{"flex":1,"backgroundColor":"red"}}>
                <ReactNative.Button
                  title="PRESS 2"
                  onPress={function (){
                    return alert("2");
                  }}>
                </ReactNative.Button>
              </ReactNative.View>),
              (
              <ReactNative.View style={{"flex":1,"backgroundColor":"yellow"}}>
                <ReactNative.Button
                  title="PRESS 3"
                  onPress={function (){
                    return alert("3");
                  }}>
                </ReactNative.Button>
              </ReactNative.View>),
              (
              <ReactNative.View style={{"flex":1,"backgroundColor":"green"}}>
                <ReactNative.Button
                  title="PRESS 4"
                  onPress={function (){
                    return alert("4");
                  }}>
                </ReactNative.Button>
              </ReactNative.View>)
            ]}
            index={index}
            setIndex={setIndex}>
          </ui_stepper.Stepper>
        </ReactNative.View>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":30}}></n.Row>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {"StepperTabsDemo":StepperTabsDemo,"StepperDemo":StepperDemo};

export default MODULE