import * as ReactNative from 'react-native'

import ui_static from './ui-static'

// melbourne.addon-tooltip/addonTooltip [17] 
function addonTooltip(hostRef,visible,{design,variant,tooltip = {}}){
  let {text} = tooltip;
  return {
    "component":ReactNative.View,
    "children":[
        (
          <ui_static.TextTooltip
            key="tooltip"
            hostRef={hostRef}
            visible={visible}
            design={design}
            variant={variant}
            text={text}
            {...tooltip}>
          </ui_static.TextTooltip>)
      ]
  };
}

var MODULE = {"addonTooltip":addonTooltip};

export default MODULE