import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import n from '../js/react-native'

import base_palette from './base-palette'

import ui_text_dialog from './ui-text-dialog'

import ui_section from './ui-section'

// melbourne.ui-text-dialog-test/ConfirmDialogDemo [23] 
function ConfirmDialogDemo(){
  return (
    <n.Enclosed label="melbourne.ui-text-dialog/ConfirmDialog">
      <n.Row>
        <ui_section.SectionBase design={{"type":"light"}}>
          <n.Row>
            <ui_text_dialog.ConfirmDialog
              design={{"type":"light"}}
              text="Press"
              onPress={function (){
                return alert("HELLO");
              }}>
            </ui_text_dialog.ConfirmDialog>
            <ui_text_dialog.ConfirmDialog
              design={{"type":"light"}}
              component="accent"
              text="Press"
              onPress={function (){
                return alert("HELLO");
              }}>
            </ui_text_dialog.ConfirmDialog>
          </n.Row>
        </ui_section.SectionBase>
        <ui_section.SectionBase design={{"type":"dark"}}>
          <n.Row>
            <ui_text_dialog.ConfirmDialog
              design={{"type":"dark"}}
              text="Press"
              onPress={function (){
                return alert("HELLO");
              }}>
            </ui_text_dialog.ConfirmDialog>
            <ui_text_dialog.ConfirmDialog
              design={{"type":"dark"}}
              component="accent"
              text="Press"
              onPress={function (){
                return alert("HELLO");
              }}>
            </ui_text_dialog.ConfirmDialog>
          </n.Row>
        </ui_section.SectionBase>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {"ConfirmDialogDemo":ConfirmDialogDemo};

export default MODULE