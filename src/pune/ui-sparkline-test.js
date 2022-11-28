import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import n from '../js/react-native'

import ui_sparkline from './ui-sparkline'

// pune.ui-sparkline-test/SparklineDemo [23] 
function SparklineDemo(){
  return (
    <n.Enclosed label="pune.ui-sparkline/Sparkline">
      <n.Row>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#eee"}}>
          <ui_sparkline.Sparkline
            design={{"type":"light"}}
            height={30}
            width={150}
            values={[45,42,42,45,62,59,59,58,57,59,53,53,41,41,59]}>
          </ui_sparkline.Sparkline>
        </ReactNative.View>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#333"}}>
          <ui_sparkline.Sparkline
            design={{"type":"dark"}}
            height={30}
            width={100}
            values={[45,42,42,45,62,59,59,58,57,59,53,53,41,41,59]}>
          </ui_sparkline.Sparkline>
        </ReactNative.View>
      </n.Row>
      {React.createElement(
        n.TextDisplay,
        {"data":[45,42,42,45,62,59,59,58,57,59,53,53,41,41,59]}
      )}
    </n.Enclosed>);
}

var MODULE = {"SparklineDemo":SparklineDemo};

export default MODULE