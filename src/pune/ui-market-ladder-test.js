import React from 'react'

import * as ReactNative from 'react-native'

import a from '../js/react-native/animate'

import market_ladder from './ui-market-ladder'

import n from '../js/react-native'

import k from '../xt/lang/base-lib'

import c from '../js/react-native/helper-color'

import ui from '../js/react-native/physical-base'

// pune.ui-market-ladder-test/CHART [24] 
var CHART = {
  "design":{"type":"light","color":"blue"},
  "control":{
    "allotment":100,
    "fraction":0.01,
    "rate":50,
    "prediction":"yes",
    "trade":"buy",
    "decimal":2
  },
  "market":{
    "last":65,
    "ask":{"total":2,"range":[66,67],"volume":[[66,60],[67,80]]},
    "meta":{
      "key":"BD95893A-2F41-435D-AD1D-DC48EC2926AB",
      "__type__":"TYPE/BOOK",
      "code":"NBA/MVP-2022/J.EMBID/BD95893A-2F41-435D-AD1D-DC48EC2926AB"
    },
    "bid":{"total":4,"range":[63,65],"volume":[[63,100],[64,60],[65,75]]},
    "frame":8,
    "spread":[1,65,66]
  }
};

// pune.ui-market-ladder-test/MarketLadderTextDemo [31] 
function MarketLadderTextDemo(){
  return (
    <n.Enclosed
      label="pune.ui-market-ladder/MarketLadderText"
      style={{"height":150}}>{React.createElement(market_ladder.MarketLadderText,CHART)}
    </n.Enclosed>);
}

// pune.ui-market-ladder-test/MarketLadderRowDemo [43] 
function MarketLadderRowDemo(){
  return (
    <n.Enclosed label="pune.ui-market-ladder/MarketLadderRow">
      {React.createElement(market_ladder.MarketLadderRow,{
        "amount":60,
        "rate":66,
        "design":{"type":"light","color":"blue"},
        "control":{"decimal":2,"fraction":0.01,"prediction":"yes"}
      })}
    </n.Enclosed>);
}

// pune.ui-market-ladder-test/MarketLadderDemo [62] 
function MarketLadderDemo(){
  return (
    <n.Enclosed label="pune.ui-market-ladder/MarketLadder">
      <n.Row>{React.createElement(market_ladder.MarketLadder,CHART)}</n.Row>
      <ReactNative.View style={{"height":330}}>{React.createElement(n.TextDisplay,CHART)}</ReactNative.View>
    </n.Enclosed>);
}

var MODULE = {
  "CHART":CHART,
  "MarketLadderTextDemo":MarketLadderTextDemo,
  "MarketLadderRowDemo":MarketLadderRowDemo,
  "MarketLadderDemo":MarketLadderDemo
};

export default MODULE