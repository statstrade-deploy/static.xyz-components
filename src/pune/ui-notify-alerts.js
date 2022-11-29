import React from 'react'

import text from '../xt/lang/base-text'

import ui_text from '../melbourne/ui-text'

import r from '../js/react'

import cl from '../js/cell'

import k from '../xt/lang/base-lib'

import slim_dialog from '../melbourne/slim-dialog'

import ui_static from '../melbourne/ui-static'

import ext_box from '../js/react/ext-box'

// pune.ui-notify-alerts/NotifyAlerts [23] 
function NotifyAlerts(props){
  let {design,notify} = props;
  let [events,setEvents] = ext_box.useBox(notify.source,notify.path || ["alert"],{
    "meta/fn":"pune.ui-notify-alerts/NotifyAlerts",
    "meta/line":33
  });
  let [visible,setVisible] = React.useState();
  let current = events[0] || {};
  React.useEffect(function (){
    if(k.not_emptyp(current)){
      new Promise(function (resolve,reject){
        setTimeout(function (){
          try{
            resolve(            (function (){
                          setVisible(true);
                        })());
          }
          catch(e){
            reject(e);
          }
        },100);
      });
    }
  },[current]);
  let {action,body,cancelText,submitText,title} = current;
  return (
    <slim_dialog.Dialog
      submitProps={{"text":submitText || "OK"}}
      onCancel={function (){
        setVisible(false);
        setEvents(events.splice(1));
      }}
      onSubmit={function (){
        setVisible(false);
        if(action){
          action();
        }
        setEvents(events.splice(1));
      }}
      title={title}
      design={Object.assign({},design,{"invert":true})}
      helperProps={{
        "cancelText":cancelText || "Cancel",
        "cancelShow":null != cancelText
      }}
      visible={visible}
      body={body}
      modalProps={{"transition":"none","effect":{"fade":0.1,"zoom":0.1}}}>
    </slim_dialog.Dialog>);
}

var MODULE = {"NotifyAlerts":NotifyAlerts};

export default MODULE