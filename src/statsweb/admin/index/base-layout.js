import React from 'react'

import * as ReactNative from 'react-native'

import n from '../../../js/react-native'

import ui_frame from '../../../js/react-native/ui-frame'

import base_palette from '../../../melbourne/base-palette'

// statsweb.admin.index.base-layout/LayoutMain [20] 
function LayoutMain({
  design,
  mini,
  isAuth,
  isGuest,
  header,
  headerProps,
  consoleView,
  consoleProps,
  consoleShow,
  body,
  bodyProps,
  menu,
  menuProps,
  ...rprops
}){
  let palette = base_palette.designPalette(design);
  let bodyView = React.createElement(body || ReactNative.View,Object.assign({design},bodyProps));
  let headerVisible = isGuest && (!mini || !isAuth);
  let menuVisible = !isGuest;
  let miniProps = {
    "bottomSize":45,
    "bottomComponent":menu,
    "bottomProps":Object.assign({design,mini},menuProps),
    "bottomVisible":menuVisible,
    "bottomFade":true,
    "bottomStyle":{
        "backgroundColor":base_palette.getColor(palette,{"key":"background","tone":"sharpen"})
      }
  };
  let normalProps = {
    "leftFade":true,
    "bottomProps":Object.assign({design},consoleProps),
    "bottomComponent":consoleView,
    "leftStyle":{
        "backgroundColor":base_palette.getColor(palette,{"key":"background"})
      },
    "leftProps":Object.assign({design,mini},menuProps),
    "leftVisible":menuVisible,
    "leftComponent":menu,
    "bottomStyle":{
        "backgroundColor":base_palette.getColor(palette,{"key":"neutral"})
      },
    "bottomSize":400,
    "bottomVisible":mini ? menuVisible : consoleShow
  };
  let frameProps = mini ? Object.assign(miniProps,rprops) : Object.assign(normalProps,rprops);
  return (
    <ui_frame.Frame
      topComponent={header}
      topProps={Object.assign({design},headerProps)}
      topStyle={{
        "backgroundColor":base_palette.getColor(palette,{"key":"primary"})
      }}
      topSize={60}
      topVisible={headerVisible}
      {...frameProps}>{bodyView}
    </ui_frame.Frame>);
}

var MODULE = {"LayoutMain":LayoutMain};

export default MODULE