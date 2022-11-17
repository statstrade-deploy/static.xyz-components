import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import n from '../js/react-native'

import ui_toolbar from './ui-toolbar'

import ui_text from './ui-text'

// melbourne.ui-toolbar-test/ToolbarOverlayTooltipDemo [42] 
function ToolbarOverlayTooltipDemo(){
  let [visible,setVisible] = React.useState();
  let hostRef = React.useRef();
  return (
    <n.Isolation>
      <n.Enclosed
        label="melbourne.ui-toolbar/ToolbarOverlayTooltip"
        style={{"height":100}}>
        <ui_toolbar.Toolbar design={{"type":"dark"}}>
          <ui_text.ToggleAccent
            design={{"type":"dark"}}
            variant={ui_toolbar.accentStandard()}
            text="OVERLAY"
            selected={visible}
            onPress={function (){
              return setVisible(!visible);
            }}>
          </ui_text.ToggleAccent>
        </ui_toolbar.Toolbar>
        <ReactNative.View ref={hostRef}></ReactNative.View>
        <ui_toolbar.ToolbarOverlayTooltip
          design={{"type":"dark"}}
          visible={visible}
          setVisible={setVisible}
          hostRef={hostRef}>
          <ReactNative.View style={{"height":50,"width":300,"backgroundColor":"red"}}></ReactNative.View>
        </ui_toolbar.ToolbarOverlayTooltip>
      </n.Enclosed>
    </n.Isolation>);
}

// melbourne.ui-toolbar-test/ToolbarOverlayDemo [75] 
function ToolbarOverlayDemo(){
  let [visible,setVisible] = React.useState();
  return (
    <n.Isolation>
      <n.Enclosed
        label="melbourne.ui-toolbar/ToolbarOverlay"
        style={{"height":100}}>
        <ui_toolbar.Toolbar design={{"type":"dark"}}>
          <ui_text.ToggleMinor
            design={{"type":"dark"}}
            variant={ui_toolbar.minorStandard()}
            text="OVERLAY"
            selected={visible}
            onPress={function (){
              return setVisible(!visible);
            }}>
          </ui_text.ToggleMinor>
        </ui_toolbar.Toolbar>
        <ui_toolbar.ToolbarOverlay
          design={{"type":"dark"}}
          visible={visible}
          setVisible={setVisible}>
          <ReactNative.View style={{"height":50,"width":300,"backgroundColor":"red"}}></ReactNative.View>
        </ui_toolbar.ToolbarOverlay>
      </n.Enclosed>
    </n.Isolation>);
}

// melbourne.ui-toolbar-test/ToolbarDemo [104] 
function ToolbarDemo(){
  let [value,setValue] = React.useState();
  return (
    <n.Enclosed label="melbourne.ui-toolbar/Toolbar">
      <ui_toolbar.Toolbar design={{"type":"dark"}}>
        <ReactNative.View style={{"padding":10}}>
          <ui_text.TabsMinor
            design={{"type":"dark"}}
            variant={ui_toolbar.minorStandard()}
            data={["ABC","EFG","HIJ"]}
            value={value}
            setValue={setValue}>
          </ui_text.TabsMinor>
        </ReactNative.View>
        <ReactNative.View style={{"padding":10}}>
          <ui_text.TabsAccent
            design={{"type":"dark"}}
            variant={ui_toolbar.accentStandard()}
            data={["ABC","EFG","HIJ"]}
            value={value}
            setValue={setValue}>
          </ui_text.TabsAccent>
        </ReactNative.View>
      </ui_toolbar.Toolbar>
      <ui_toolbar.Toolbar design={{"type":"dark"}} noBanner={true}>
        <ReactNative.View style={{"padding":10}}>
          <ui_text.TabsMinor
            design={{"type":"dark"}}
            variant={ui_toolbar.minorNoBanner()}
            data={["ABC","EFG","HIJ"]}
            value={value}
            setValue={setValue}>
          </ui_text.TabsMinor>
        </ReactNative.View>
        <ReactNative.View style={{"padding":10}}>
          <ui_text.TabsAccent
            design={{"type":"dark"}}
            variant={ui_toolbar.accentNoBanner()}
            data={["ABC","EFG","HIJ"]}
            value={value}
            setValue={setValue}>
          </ui_text.TabsAccent>
        </ReactNative.View>
      </ui_toolbar.Toolbar>
      <n.TextDisplay value={value}></n.TextDisplay>
    </n.Enclosed>);
}

// melbourne.ui-toolbar-test/ToolbarAnnexDemo [150] 
function ToolbarAnnexDemo(){
  let [visible,setVisible] = React.useState();
  let [mini,setMini] = React.useState(true);
  return (
    <n.Isolation>
      <n.Enclosed
        label="melbourne.ui-toolbar/ToolbarAnnex"
        style={{"height":100}}>
        <n.Row>
          <ReactNative.Button
            title="Open"
            onPress={function (){
              return setVisible(true);
            }}>
          </ReactNative.Button>
          <ReactNative.Button
            title={"Mini " + mini}
            onPress={function (){
              return setMini(!mini);
            }}>
          </ReactNative.Button>
        </n.Row>
        <ui_toolbar.ToolbarAnnex
          component={function ({onClose}){
            return (
              <n.Row>
                <ReactNative.View style={{"height":50,"width":300,"backgroundColor":"red"}}>
                  <ReactNative.Button title="Close" onPress={onClose}></ReactNative.Button>
                </ReactNative.View>
              </n.Row>);
          }}
          mini={mini}
          design={{"type":"dark"}}
          visible={visible}
          setVisible={setVisible}>
        </ui_toolbar.ToolbarAnnex>
      </n.Enclosed>
    </n.Isolation>);
}

var MODULE = {
  "ToolbarOverlayTooltipDemo":ToolbarOverlayTooltipDemo,
  "ToolbarOverlayDemo":ToolbarOverlayDemo,
  "ToolbarDemo":ToolbarDemo,
  "ToolbarAnnexDemo":ToolbarAnnexDemo
};

export default MODULE