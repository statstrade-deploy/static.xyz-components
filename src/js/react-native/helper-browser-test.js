import * as ReactNative from 'react-native'

import event_route from '../../xt/lang/event-route'

import n from '../react-native'

import ext_route from '../react/ext-route'

import helper_browser from './helper-browser'

// js.react-native.helper-browser-test/UseHashRouteDemo [21] 
function UseHashRouteDemo(){
  let route = ext_route.makeRoute("hello");
  let url = ext_route.listenRouteUrl(route);
  helper_browser.useHashRoute(route);
  return (
    <n.Enclosed label="js.react-native.helper-browser/useHashRoute">
      <n.Row>
        <ReactNative.Button
          title="A"
          onPress={function (){
            return event_route.set_url(route,"hello/a");
          }}>
        </ReactNative.Button>
        <ReactNative.Text> </ReactNative.Text>
        <ReactNative.Button
          title="B"
          onPress={function (){
            return event_route.set_url(route,"hello/b");
          }}>
        </ReactNative.Button>
        <ReactNative.View style={{"flex":1}}></ReactNative.View>
        <ReactNative.Text>{"route: " + url}</ReactNative.Text>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {"UseHashRouteDemo":UseHashRouteDemo};

export default MODULE