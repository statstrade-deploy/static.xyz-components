import React from 'react'

import * as ReactNative from 'react-native'

import n from '../js/react-native'

import ui_swiper from './ui-swiper'

// melbourne.ui-swiper-test/SwiperDemo [21] 
function SwiperDemo(){
  let [first,setFirst] = React.useState(5);
  let [highlighted,setHighlighted] = React.useState();
  let [disabled,setDisabled] = React.useState();
  return (
    <n.Enclosed label="melbourne.ui-swiper/Swiper">
      <n.Row>
        <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":30}}>
          <ui_swiper.Swiper
            highlighted={highlighted}
            disabled={disabled}
            posEnabled={true}
            posView={(
              <ReactNative.View
                key="pos"
                style={{"backgroundColor":"red","height":100,"width":200}}>
              </ReactNative.View>)}
            negEnabled={true}
            negView={(
              <ReactNative.View
                key="neg"
                style={{"backgroundColor":"black","height":100,"width":200}}>
              </ReactNative.View>)}
            styleContainer={{"height":300,"overflow":"hidden"}}
            style={{"width":300,"height":100,"cursor":"grab"}}>
          </ui_swiper.Swiper>
        </n.Row>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":30}}>
          <ui_swiper.Swiper
            design={{"type":"dark"}}
            highlighted={highlighted}
            disabled={disabled}
            posView={(
              <ReactNative.View
                key="pos"
                style={{"backgroundColor":"red","height":100,"width":200}}>
              </ReactNative.View>)}
            negView={(
              <ReactNative.View
                key="neg"
                style={{"backgroundColor":"black","height":100,"width":200}}>
              </ReactNative.View>)}
            styleContainer={{"height":300,"overflow":"hidden"}}
            style={{"width":300,"height":100,"cursor":"grab"}}>
          </ui_swiper.Swiper>
        </n.Row>
      </n.Row>
      <n.Row>
        <ReactNative.Button
          title="+1"
          onPress={function (){
            return setFirst(first + 1);
          }}>
        </ReactNative.Button>
        <ReactNative.Button
          title="-1"
          onPress={function (){
            return setFirst(first - 1);
          }}>
        </ReactNative.Button>
        <ReactNative.Button
          title="H"
          onPress={function (){
            return setHighlighted(!highlighted);
          }}>
        </ReactNative.Button>
        <ReactNative.Text> </ReactNative.Text>
        <ReactNative.Button
          title="D"
          onPress={function (){
            return setDisabled(!disabled);
          }}>
        </ReactNative.Button>
        <ReactNative.Text>{n.format_entry({disabled,first,highlighted})}</ReactNative.Text>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {"SwiperDemo":SwiperDemo};

export default MODULE