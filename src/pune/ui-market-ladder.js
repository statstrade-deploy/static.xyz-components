import React from 'react'

import * as ReactNative from 'react-native'

import r from '../js/react'

import n from '../js/react-native'

import ui_static from '../melbourne/ui-static'

import ui_section from '../melbourne/ui-section'

import base_market from '../statslink/impl/base-market'

// pune.ui-market-ladder/MarketLadderText [15] 
function MarketLadderText({market,allotment,decimal,prediction}){
  let frac = Math.pow(10,-decimal);
  let offers = base_market.live_offers_rate(market,allotment,prediction,6);
  return (
    <ui_static.ScrollView>
      <n.Row>
        <n.TextDisplay market={market}></n.TextDisplay>
        <n.TextDisplay offers={offers}></n.TextDisplay>
      </n.Row>
    </ui_static.ScrollView>);
}

// pune.ui-market-ladder/MarketLadderRow [34] 
function MarketLadderRow({amount,decimal,design,fraction,prediction,rate}){
  let [prevAmount,setPrevAmount] = React.useState(amount);
  let isMounted = r.useIsMounted();
  React.useEffect(function (){
    setTimeout(function (){
      new Promise(function (){
        if(isMounted()){
          setPrevAmount(amount);
        }
      });
    },1000);
  },[amount]);
  return (
    <n.Row style={{"marginHorizontal":5}}>
      <ui_static.Text
        design={design}
        variant={(amount != prevAmount) ? {
          "font":"h6",
          "fg":{"key":"background"},
          "bg":{"key":("no" == prediction) ? "error" : "primary"}
        } : {"font":"h6"}}>{(rate * fraction).toFixed(decimal)}
      </ui_static.Text>
      <n.Fill></n.Fill>
      <ui_static.Text design={design}>{amount}</ui_static.Text>
    </n.Row>);
}

// pune.ui-market-ladder/MarketLadder [67] 
function MarketLadder({
  design,
  market,
  allotment = 100,
  decimal = 0,
  trade = "buy",
  prediction = "yes",
  rate,
  setRate
}){
  let fraction = Math.pow(10,-decimal);
  let offers = base_market.live_offers_rate(market,allotment,prediction,15);
  let segment = base_market.segment_price(rate,offers);
  let lineFn = function ([rate,amount],i){
    return (
      <MarketLadderRow
        key={rate}
        amount={amount}
        prediction={prediction}
        fraction={fraction}
        rate={rate}
        decimal={decimal}
        design={design}>
      </MarketLadderRow>);
  };
  return (
    <ReactNative.View style={{"padding":3,"flex":1}}>
      <ReactNative.View
        style={{
          "minHeight":60,
          "flex":1,
          "flexDirection":"column-reverse",
          "overflow":"hidden"
        }}>{[...offers.buy].reverse().map(lineFn)}
      </ReactNative.View>
      <ui_section.SectionSeparator
        design={design}
        variant={{"fg":{"key":"neutral"}}}
        style={{"marginVertical":3}}>
      </ui_section.SectionSeparator>
      <ReactNative.View
        style={{
          "minHeight":60,
          "flex":1,
          "flexDirection":"column",
          "overflow":"hidden"
        }}>{offers.sell.map(lineFn)}
      </ReactNative.View>
    </ReactNative.View>);
}

var MODULE = {
  "MarketLadderText":MarketLadderText,
  "MarketLadderRow":MarketLadderRow,
  "MarketLadder":MarketLadder
};

export default MODULE