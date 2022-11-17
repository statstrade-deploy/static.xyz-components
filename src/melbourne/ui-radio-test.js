import React from 'react'

import * as ReactNative from 'react-native'

import n from '../js/react-native'

import ui_radio from './ui-radio'

import k from '../xt/lang/base-lib'

// melbourne.ui-radio-test/RadioBoxDemo [22] 
function RadioBoxDemo(){
  let [s0,setS0] = React.useState(true);
  let [s1,setS1] = React.useState(true);
  let [s2,setS2] = React.useState(true);
  return (
    <n.Enclosed label=" melbourne.ui-radio/RadioBox">
      <n.Row>
        <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":30}}>
          <ui_radio.RadioBox
            design={{"type":"light"}}
            style={{"margin":2}}
            selected={s0}
            onPress={function (){
              return setS0(!s0);
            }}>
          </ui_radio.RadioBox>
          <ui_radio.RadioBox
            design={{"type":"light","mode":"secondary"}}
            style={{"margin":2}}
            selected={s1}
            onPress={function (){
              return setS1(!s1);
            }}>
          </ui_radio.RadioBox>
        </n.Row>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":30}}>
          <ui_radio.RadioBox
            design={{"type":"dark"}}
            style={{"margin":2}}
            selected={s0}
            onPress={function (){
              return setS0(!s0);
            }}>
          </ui_radio.RadioBox>
          <ui_radio.RadioBox
            design={{"type":"dark","mode":"secondary"}}
            style={{"margin":2}}
            selected={s1}
            onPress={function (){
              return setS1(!s1);
            }}>
          </ui_radio.RadioBox>
        </n.Row>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.ui-radio-test/RadioGroupIndexedDemo [68] 
function RadioGroupIndexedDemo(){
  let [index,setIndex] = React.useState(1);
  return (
    <n.Enclosed label=" melbourne.ui-radio/RadioGroupIndexed">
      <n.Row>
        <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":30}}>
          <ui_radio.RadioGroupIndexed
            design={{"type":"light"}}
            items={[" STATS "," XLM "," USD "]}
            index={index}
            setIndex={setIndex}>
          </ui_radio.RadioGroupIndexed>
        </n.Row>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":30}}>
          <ui_radio.RadioGroupIndexed
            design={{"type":"dark"}}
            items={[" STATS "," XLM "," USD "]}
            index={index}
            setIndex={setIndex}>
          </ui_radio.RadioGroupIndexed>
        </n.Row>
      </n.Row>
      <n.TextDisplay content={JSON.stringify(index)}></n.TextDisplay>
    </n.Enclosed>);
}

// melbourne.ui-radio-test/RadioGroupDemo [102] 
function RadioGroupDemo(){
  let [value,setValue] = React.useState("USD");
  return (
    <n.Enclosed label=" melbourne.ui-radio/RadioGroup">
      <n.Row>
        <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":30}}>
          <ui_radio.RadioGroup
            design={{"type":"light"}}
            data={["STATS","XLM","USD"]}
            value={value}
            setValue={setValue}
            format={function (s){
              return "  " + s;
            }}>
          </ui_radio.RadioGroup>
        </n.Row>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":30}}>
          <ui_radio.RadioGroup
            design={{"type":"dark"}}
            data={["STATS","XLM","USD"]}
            value={value}
            setValue={setValue}
            format={function (s){
              return "  " + s;
            }}>
          </ui_radio.RadioGroup>
        </n.Row>
      </n.Row>
      <n.TextDisplay content={JSON.stringify(value)}></n.TextDisplay>
    </n.Enclosed>);
}

var MODULE = {
  "RadioBoxDemo":RadioBoxDemo,
  "RadioGroupIndexedDemo":RadioGroupIndexedDemo,
  "RadioGroupDemo":RadioGroupDemo
};

export default MODULE