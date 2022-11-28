import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import n from '../js/react-native'

import ui_topnotify from './ui-notify-base'

import k from '../xt/lang/base-lib'

// pune.ui-notify-base-test/TopNotifyInnerDemo [27] 
function TopNotifyInnerDemo(){
  let [index,setIndex] = React.useState(0);
  let [data,setData] = React.useState([
    {
      "id":"02",
      "topic":"user.account/place",
      "title":"Order Placed",
      "message":"NBA-MVP-2022/S.CURRY @ Y 1.34",
      "detail":{"id":"001-order"},
      "time":Date.now()
    },
    {
      "id":"01",
      "topic":"user.account/password-changed",
      "title":"Password Changed",
      "message":"user: test00001",
      "time":Date.now()
    }
  ]);
  return (
    <n.Enclosed
      label="pune.ui-notify-base/TopNotifyInner"
      style={{"backgroundColor":"#eee","padding":20}}>
      <ReactNative.View>
        <ui_topnotify.TopNotifyInner data={[]} design={{"type":"light"}}></ui_topnotify.TopNotifyInner>
      </ReactNative.View>
      <ReactNative.View>
        <n.Row style={{"marginVertical":5}}></n.Row>
        <ui_topnotify.TopNotifyInner
          data={[
            {
            "id":"01",
            "topic":"user.account/password-changed",
            "title":"Password Changed",
            "message":"user: test00001",
            "time":Date.now()
          }
          ]}
          design={{"type":"light"}}>
        </ui_topnotify.TopNotifyInner>
      </ReactNative.View>
      <ReactNative.View>
        <n.Row style={{"marginVertical":5}}></n.Row>
        <ui_topnotify.TopNotifyInner
          data={data}
          design={{"type":"light"}}
          index={index}
          setIndex={setIndex}>
        </ui_topnotify.TopNotifyInner>
      </ReactNative.View>
    </n.Enclosed>);
}

// pune.ui-notify-base-test/TopNotifyDemo [74] 
function TopNotifyDemo(){
  let [index,setIndex] = React.useState(0);
  let [data,setData] = React.useState([
    {
      "id":"02",
      "topic":"user.account/place",
      "title":"Order Placed",
      "message":"NBA-MVP-2022/S.CURRY @ Y 1.34",
      "detail":{"id":"001-order"},
      "time":Date.now()
    },
    {
      "id":"01",
      "topic":"user.account/password-changed",
      "title":"Password Changed",
      "message":"user: test00001",
      "time":Date.now()
    }
  ]);
  return (
    <n.Enclosed
      label="pune.ui-notify-base/TopNotify"
      style={{"backgroundColor":"#333","padding":20}}>
      <n.Isolation>
        <n.Row style={{"marginVertical":5,"width":300,"height":80}}>
          <ui_topnotify.TopNotify
            mini={true}
            data={[
              {
              "id":"01",
              "topic":"user.account/password-changed",
              "title":"Password Changed",
              "message":"user: test00001",
              "time":Date.now()
            }
            ]}
            design={{"type":"dark"}}>
          </ui_topnotify.TopNotify>
        </n.Row>
      </n.Isolation>
      <n.Isolation>
        <n.Row style={{"marginVertical":5,"width":300,"height":80}}>
          <ui_topnotify.TopNotify
            mini={true}
            data={data}
            design={{"type":"dark"}}
            index={index}
            setIndex={setIndex}>
          </ui_topnotify.TopNotify>
        </n.Row>
      </n.Isolation>
    </n.Enclosed>);
}

var MODULE = {
  "TopNotifyInnerDemo":TopNotifyInnerDemo,
  "TopNotifyDemo":TopNotifyDemo
};

export default MODULE