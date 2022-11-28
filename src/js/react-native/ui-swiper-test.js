import React from 'react'

import * as ReactNative from 'react-native'

import n from '../react-native'

import physical_addon from './physical-addon'

import ui_swiper from './ui-swiper'

// js.react-native.ui-swiper-test/SwiperDemo [31] 
function SwiperDemo(){
  let [first,setFirst] = React.useState(5);
  let [highlighted,setHighlighted] = React.useState();
  let [disabled,setDisabled] = React.useState();
  return (
    <n.Enclosed label="js.react-native.ui-swiper/Swiper">
      <n.Row>
        <ReactNative.Text
          style={{"width":80,"fontSize":12,"color":"#333","fontWeight":"700"}}>Swiper
        </ReactNative.Text>
        <ui_swiper.Swiper
          negView={(
            <ReactNative.View
              key="neg"
              style={{"backgroundColor":"blue","height":100,"width":200}}>
            </ReactNative.View>)}
          disabled={disabled}
          highlighted={highlighted}
          style={{"width":300,"height":100,"cursor":"grab"}}
          theme={{
            "bgNormal":"red",
            "fgNormal":"blue",
            "bgHovered":0.7,
            "fgHovered":0.7,
            "bgPressed":-0.2,
            "fgPressed":0.1
          }}
          posEnabled={true}
          styleContainer={{"height":300,"overflow":"hidden"}}
          negEnabled={true}
          addons={[
            physical_addon.tagAll({
            "style":{"paddingHorizontal":20,"height":300,"width":200,"flex":1}
          })
          ]}
          posView={(
            <ReactNative.View
              key="pos"
              style={{"backgroundColor":"green","height":100,"width":200}}>
            </ReactNative.View>)}>
        </ui_swiper.Swiper>
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