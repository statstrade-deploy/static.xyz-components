import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import n from '../js/react-native'

import ui_notify_alerts from './ui-notify-alerts'

import ui_text from '../melbourne/ui-text'

import event_box from '../xt/lang/event-box'

import k from '../xt/lang/base-lib'

// pune.ui-notify-alerts-test/NotifySource [24] 
globalThis["pune_ui_notify_alerts_test$$NotifySource"] = event_box.make_box({"alert":[]});

// pune.ui-notify-alerts-test/NotifyAlertsDemo [27] 
function NotifyAlertsDemo(){
  let [current,setCurrent] = React.useState(true);
  return (
    <n.Enclosed label="pune.ui-notify-alerts/NotifyAlerts">
      <n.Row style={{"marginTop":30}}>
        <ui_text.ButtonAccent
          text="Make Alert"
          onPress={function (){
            event_box.append_data(
              globalThis["pune_ui_notify_alerts_test$$NotifySource"],
              ["alert"],
              {"title":"Hello","body":"Hello World"}
            );
          }}>
        </ui_text.ButtonAccent>
        <ui_notify_alerts.NotifyAlerts
          notify={{
            "source":globalThis["pune_ui_notify_alerts_test$$NotifySource"]
          }}>
        </ui_notify_alerts.NotifyAlerts>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {"NotifyAlertsDemo":NotifyAlertsDemo};

export default MODULE