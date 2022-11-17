import * as ReactNative from 'react-native'

import React from 'react'

import n from '../js/react-native'

import ui_static from './ui-static'

import base_palette from './base-palette'

import ui_chip from './ui-chip'

// melbourne.ui-chip-test/ChipDemo [23] 
function ChipDemo(){
  return (
    <n.Enclosed label="melbourne.ui-chip/Chip">
      <n.Row>
        <ui_chip.Chip
          text="hello"
          onClose={function (){
            return null;
          }}>
        </ui_chip.Chip>
        <ui_chip.Chip text="world" variant={{"bg":{"key":"neutral"}}}></ui_chip.Chip>
      </n.Row>
      <ui_static.Div design={{"type":"dark"}} style={{"flexDirection":"row"}}>
        <ui_chip.Chip
          design={{"type":"dark"}}
          text="hello"
          onClose={function (){
            return null;
          }}>
        </ui_chip.Chip>
        <ui_chip.Chip
          design={{"type":"dark"}}
          variant={{"bg":{"key":"neutral"}}}
          text="world">
        </ui_chip.Chip>
      </ui_static.Div>
    </n.Enclosed>);
}

var MODULE = {"ChipDemo":ChipDemo};

export default MODULE