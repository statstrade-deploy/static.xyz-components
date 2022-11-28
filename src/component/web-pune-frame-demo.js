import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import base_layout from '../statsweb/admin/index/base-layout'

import ui_console from '../pune/ui-console'

import ui_tooltip from '../js/react-native/ui-tooltip'

import ui_menu_vert from '../pune/ui-menu-vert'

import ui_toggle_button from '../melbourne/ui-toggle-button'

import r from '../js/react'

import slim_submit from '../melbourne/slim-submit'

import n from '../js/react-native'

import ui_topnotify from '../pune/ui-notify-base'

import ui_button from '../melbourne/ui-button'

import k from '../xt/lang/base-lib'

import ui_notify_events from '../js/react-native/ui-notify'

import slim_dialog from '../melbourne/slim-dialog'

import ui_static from '../melbourne/ui-static'

import ui_sidemenu from '../pune/ui-sidemenu'

// component.web-pune-frame-demo/SampleText [30] 
var SampleText = "Lorem ipsum dolor sit amet. Aut aliquam perspiciatis est atque temporibus At esse esse rem saepe temporibus est voluptatibus molestiae. Est tempora quasi 33 officiis totam est officia inventore. Est nihil quia qui internos nostrum est odit repellendus ea perspiciatis necessitatibus. Aut internos eaque ea omnis quibusdam id esse reprehenderit.\n\nEum dicta ipsam ut natus autem et recusandae ullam et laudantium deserunt. Ad provident officiis qui aperiam sequi qui laudantium nulla aut minima beatae! Qui nulla sunt ab consequatur galisum qui odit dolores et aliquid similique ut iure molestiae. Ut magnam consequuntur ut facere quam est obcaecati veritatis.\n\nSit eaque similique et vitae consequatur qui iure aliquid eum eveniet numquam qui internos nulla aut inventore repellendus et dolores laboriosam. Et consectetur dolorem ab unde voluptatem in Quis totam id deleniti provident. Et fuga quia in laboriosam autem qui repudiandae laborum ut quam assumenda. Et assumenda commodi qui nihil unde nam corrupti quasi.";

// component.web-pune-frame-demo/FrameHeader [38] 
function FrameHeader({design,setIsGuest}){
  return (
    <ui_static.Div design={design} style={{"flex":1}}>
      <ReactNative.Text>HEADER</ReactNative.Text>
      <ReactNative.View style={{"flex":1}}></ReactNative.View>
      <ui_button.Button
        text="BACK"
        onPress={function (){
          return setIsGuest(false);
        }}>
      </ui_button.Button>
    </ui_static.Div>);
}

// component.web-pune-frame-demo/FrameConsole [51] 
function FrameConsole({design,routeKey,setRouteKey,...rprops}){
  let [current,setCurrent] = [routeKey,setRouteKey];
  return (
    <ui_console.Console
      design={Object.assign({},design,{"invert":true})}
      screens={{
        "one":function (){
              return (
                <ReactNative.Text>ONE</ReactNative.Text>);
            },
        "two":function (){
              return (
                <ReactNative.Text>TWO</ReactNative.Text>);
            },
        "three":function (){
              return (
                <ReactNative.Text>THREE</ReactNative.Text>);
            },
        "four":function (){
              return (
                <ReactNative.Text>FOUR</ReactNative.Text>);
            }
      }}
      current={current}
      setCurrent={setCurrent}
      {...rprops}>
    </ui_console.Console>);
}

// component.web-pune-frame-demo/FrameMenu [66] 
function FrameMenu({
  design,
  setDesign,
  mini,
  route,
  frameConsole,
  setFrameConsole,
  isGuest,
  setIsGuest,
  routeKey,
  setRouteKey,
  showNotify,
  setShowNotify,
  inbox,
  setInbox
}){
  return (
    <ui_menu_vert.MainMenu
      items={[
        {"key":"one","icon":"home","label":"HOME"},
        {"key":"two","icon":"user","label":"ACCOUNT"},
        {"key":"three","icon":"line-graph","label":"MARKET"},
        {"key":"four","icon":"wallet","label":"MARKET"},
        {"component":ui_menu_vert.MainMenuSeperator},
        {
            "component":ui_menu_vert.MainMenuToggle,
            "key":"h3",
            "icon":"browser",
            "label":"CONSOLE",
            "design":design,
            "selected":null != frameConsole,
            "onPress":function (){
                  return setFrameConsole((null == frameConsole) ? true : null);
                }
          },
        {
            "component":ui_menu_vert.MainMenuToggle,
            "key":"h3",
            "icon":"user",
            "label":"IS GUEST",
            "design":design,
            "selected":isGuest,
            "onPress":function (){
                  return setIsGuest(true);
                }
          },
        {"component":ui_menu_vert.MainMenuSeperator},
        {
            "component":ui_menu_vert.MainMenuToggle,
            "key":"h3",
            "icon":"tag",
            "label":"DARK MODE",
            "design":design,
            "selected":"dark" == k.get_in(design,["type"]),
            "onPress":function (){
                  return setDesign({
                    "type":("dark" == k.get_in(design,["type"])) ? "light" : "dark"
                  });
                }
          },
        {
            "component":ui_menu_vert.MainMenuToggle,
            "key":"h3",
            "icon":"inbox",
            "label":"SHOW MESSAGES",
            "design":design,
            "selected":showNotify,
            "onPress":function (){
                  return setShowNotify(!showNotify);
                }
          },
        {
            "component":ui_menu_vert.MainMenuButton,
            "key":"h3",
            "icon":"sound",
            "label":"NOTIFY",
            "onPress":function (){
                  let id = Math.random().toString(36).substr(2,6 || 4);
                  let msg = {
                    "id":id,
                    "topic":"user.account/notify",
                    "title":id,
                    "message":"Notify: " + id,
                    "time":Date.now()
                  };
                  setInbox(Object.assign({[id]:msg},inbox));
                  setShowNotify(true);
                }
          }
      ]}
      routeKey={routeKey}
      mini={mini}
      setRouteKey={setRouteKey}
      design={design}>
    </ui_menu_vert.MainMenu>);
}

// component.web-pune-frame-demo/FrameNotify [152] 
function FrameNotify({design,showNotify,setShowNotify,inbox,setInbox}){
  let isMounted = r.useIsMounted();
  let refresh = r.useRefresh();
  let [index,setIndex] = React.useState(0);
  let data = k.arr_sort(Object.values(inbox),k.key_fn("time"),function (a,b){
    return a > b;
  });
  React.useEffect(function (){
    if(k.not_emptyp(inbox)){
      new Promise(function (resolve,reject){
        setTimeout(function (){
          try{
            resolve(            (function (){
                          if(isMounted()){
                            refresh();
                          }
                        })());
          }
          catch(e){
            reject(e);
          }
        },500);
      });
    }
    let outdated = Object.values(inbox).filter(function (e){
      return !e.sticky && ((5000 + e.time) < Date.now());
    }).map(k.id_fn);
    if(k.not_emptyp(outdated)){
      let out = k.obj_omit(inbox,outdated);
      if(k.is_emptyp(out)){
        setShowNotify(false);
        new Promise(function (resolve,reject){
          setTimeout(function (){
            try{
              resolve(              (function (){
                              if(isMounted()){
                                setInbox(out);
                              }
                            })());
            }
            catch(e){
              reject(e);
            }
          },500);
        });
      }
      else{
        setInbox(out);
      }
    }
  },[inbox,refresh]);
  return (
    <ui_notify_events.Notify position="bottom_right" visible={showNotify} margin={10}>
      <ui_topnotify.TopNotifyInner
        onClose={function (){
          let entry = data[index];
          if(null == entry){
            setShowNotify(false);
          }
          let out = k.obj_omit(inbox,[entry && entry.id]);
          if(k.is_emptyp(out)){
            setShowNotify(false);
            new Promise(function (resolve,reject){
              setTimeout(function (){
                try{
                  resolve(          (function (){
                              if(isMounted()){
                                setInbox(out);
                              }
                            })());
                }
                catch(e){
                  reject(e);
                }
              },200);
            });
          }
          else{
            setInbox(out);
          }
        }}
        data={data}
        index={index}
        design={design}
        setIndex={setIndex}>
      </ui_topnotify.TopNotifyInner>
    </ui_notify_events.Notify>);
}

// component.web-pune-frame-demo/FrameDeleteTooltip [211] 
function FrameDeleteTooltip({design}){
  let [visible,setVisible] = React.useState(function (){
    return false;
  });
  let [waiting,setWaiting] = React.useState();
  let buttonRef = React.useRef();
  return (
    <>
      <n.Row style={{"marginVertical":3}}>
        <ui_toggle_button.ToggleButton
          refLink={buttonRef}
          design={design}
          text={waiting ? [
            (
            <ReactNative.ActivityIndicator size={14}></ReactNative.ActivityIndicator>),
            "DELETE"
          ] : null}
          selected={visible}
          style={{
            "width":100,
            "alignItems":"center",
            "justifyContent":"center",
            "textAlign":"center"
          }}
          styleText={{}}
          onPress={function (){
            return setVisible(!visible);
          }}>
        </ui_toggle_button.ToggleButton>
      </n.Row>
    </>);
}

// component.web-pune-frame-demo/FrameDeleteModal [270] 
function FrameDeleteModal({design}){
  let [visible,setVisible] = React.useState(function (){
    return false;
  });
  let buttonRef = React.useRef();
  return (
    <>
      <n.Row style={{"marginVertical":3}}>
        <ui_button.Button
          refLink={buttonRef}
          design={Object.assign({},design,{"mode":["primary"]})}
          text="DELETE MODAL"
          onPress={function (){
            return setVisible(true);
          }}>
        </ui_button.Button>
      </n.Row>
      <slim_dialog.Dialog
        design={{"type":"light"}}
        title="Confirm Delete"
        body={(
          <>Are you sure you wish to delete?</>)}
        modalProps={{"transition":"none","effect":{"fade":0.1,"zoom":0.1}}}
        onSubmit={function (){
          return setVisible(false);
        }}
        onCancel={function (){
          return setVisible(false);
        }}
        visible={visible}>
      </slim_dialog.Dialog>
    </>);
}

// component.web-pune-frame-demo/FrameBody [296] 
function FrameBody({
  design,
  routeKey,
  setRouteKey,
  showNotify,
  setShowNotify,
  inbox,
  setInbox,
  mini,
  setMini
}){
  let dimensions = ReactNative.useWindowDimensions();
  return (
    <n.Isolation
      style={{
        "position":"absolute",
        "top":0,
        "bottom":0,
        "left":0,
        "right":0,
        "overflow":"hidden"
      }}>
      <ui_static.Div
        design={design}
        style={{"flexDirection":"row-reverse","flex":1}}>
        <ui_sidemenu.SideMenu
          data={["one","two","three","four"]}
          narrowed={dimensions.width < 800}
          routeKey={routeKey}
          setRouteKey={setRouteKey}
          design={design}>
        </ui_sidemenu.SideMenu>
        <ReactNative.View style={{"flex":1,"paddingHorizontal":10}}>
          <n.Row style={{"paddingVertical":10}}>
            <ui_static.Text design={design} style={[{"width":500}]}>{SampleText}</ui_static.Text>
          </n.Row>
          <ui_button.Button
            text="MINI"
            onPress={function (){
              return setMini(!mini);
            }}>
          </ui_button.Button>
          <FrameDeleteTooltip design={design}></FrameDeleteTooltip>
          <ReactNative.View style={{"height":20}}></ReactNative.View>
          <FrameDeleteModal design={design}></FrameDeleteModal>
          <FrameNotify
            showNotify={showNotify}
            inbox={inbox}
            setShowNotify={setShowNotify}
            setInbox={setInbox}
            design={design}>
          </FrameNotify>
        </ReactNative.View>
      </ui_static.Div>
    </n.Isolation>);
}

// component.web-pune-frame-demo/FrameMain [355] 
function FrameMain(){
  let [design,setDesign] = React.useState({"type":"dark"});
  let bkey = JSON.stringify(design);
  let [frameConsole,setFrameConsole] = React.useState();
  let [isGuest,setIsGuest] = React.useState();
  let [routeKey,setRouteKey] = React.useState("one");
  let [showNotify,setShowNotify] = React.useState(true);
  let [mini,setMini] = React.useState(true);
  let [inbox,setInbox] = React.useState({
    "02":{
        "id":"02",
        "topic":"user.account/place",
        "title":"Order Placed",
        "message":"NBA-MVP-2022/S.CURRY @ Y 1.34",
        "sticky":true,
        "detail":{"id":"001-order"},
        "time":Date.now()
      },
    "01":{
        "id":"01",
        "topic":"user.account/password-changed",
        "title":"Password Changed",
        "message":"user: test00001",
        "time":Date.now()
      }
  });
  return (
    <ReactNative.View
      style={{
        "position":"absolute",
        "top":0,
        "bottom":0,
        "left":0,
        "right":0,
        "backgroundColor":"white",
        "padding":20,
        "overflow":"hidden"
      }}>
      <n.Isolation style={{"flex":1}}>
        <>
          <base_layout.LayoutMain
            consoleProps={{design,routeKey,setRouteKey}}
            consoleShow={frameConsole}
            mini={mini}
            header={FrameHeader}
            consoleView={FrameConsole}
            menuProps={{design,frameConsole,inbox,isGuest,mini,routeKey,setDesign,setFrameConsole,setInbox,setIsGuest,setMini,setRouteKey,setShowNotify,showNotify,"key":bkey}}
            design={design}
            headerProps={{setIsGuest,"key":bkey}}
            body={FrameBody}
            menu={FrameMenu}
            isGuest={isGuest}
            bodyProps={{inbox,mini,routeKey,setInbox,setMini,setRouteKey,setShowNotify,showNotify,"key":bkey}}>
          </base_layout.LayoutMain>
        </>
      </n.Isolation>
    </ReactNative.View>);
}

var MODULE = {
  "SampleText":SampleText,
  "FrameHeader":FrameHeader,
  "FrameConsole":FrameConsole,
  "FrameMenu":FrameMenu,
  "FrameNotify":FrameNotify,
  "FrameDeleteTooltip":FrameDeleteTooltip,
  "FrameDeleteModal":FrameDeleteModal,
  "FrameBody":FrameBody,
  "FrameMain":FrameMain
};

export default MODULE