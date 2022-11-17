import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import slim_entry from './slim-entry'

import ui_text from './ui-text'

import slim_table_common from './slim-table-common'

import n from '../js/react-native'

import ui_group from './ui-group'

import ext_view from '../js/react/ext-view'

import k from '../xt/lang/base-lib'

import base_palette from './base-palette'

import event_route from '../xt/lang/event-route'

import ui_static from './ui-static'

import slim from './slim'

// melbourne.slim-table-common-test/TableDefaultNotFoundDemo [33] 
function TableDefaultNotFoundDemo(){
  return (
    <n.Enclosed label="melbourne.slim-table-common/TableDefaultNotFound">
      <n.Row>
        <slim_table_common.TableDefaultNotFound design={{"type":"light"}}></slim_table_common.TableDefaultNotFound>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-table-common-test/TableDefaultIsLoadingDemo [46] 
function TableDefaultIsLoadingDemo(){
  return (
    <n.Enclosed label="melbourne.slim-table-common/TableDefaultIsLoading">
      <n.Row>
        <slim_table_common.TableDefaultIsLoading design={{"type":"light"}}></slim_table_common.TableDefaultIsLoading>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-table-common-test/TableBackButtonDemo [59] 
function TableBackButtonDemo(){
  let control = slim.useLocalControl();
  return (
    <n.Enclosed label="melbourne.slim-table-common/TableBackButton">
      <n.Row>
        <slim_table_common.TableBackButton design={{"type":"light"}} control={control}></slim_table_common.TableBackButton>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-table-common-test/TablePageViewDemo [77] 
function TablePageViewDemo(){
  let control = slim.useLocalControl();
  return (
    <n.Enclosed label="melbourne.slim-table-common/tablePageView"><n.Row></n.Row></n.Enclosed>);
}

var MODULE = {
  "TableDefaultNotFoundDemo":TableDefaultNotFoundDemo,
  "TableDefaultIsLoadingDemo":TableDefaultIsLoadingDemo,
  "TableBackButtonDemo":TableBackButtonDemo,
  "TablePageViewDemo":TablePageViewDemo
};

export default MODULE