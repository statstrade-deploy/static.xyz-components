import React from 'react'

import * as ReactNative from 'react-native'

import r from '../js/react'

import n from '../js/react-native'

import ext_form from '../js/react/ext-form'

import ui_breadcrumb from './ui-breadcrumb'

import k from '../xt/lang/base-lib'

import validators from '../melbourne/base-validators'

import ui_page from './ui-page'

import ui_static from '../melbourne/ui-static'

// pune.ui-breadcrumb-test/BreadcrumbDemo [26] 
function BreadcrumbDemo(){
  return (
    <n.Enclosed label="pune.ui-breadcrumb/Breadcrumb">
      <n.Row>
        <ReactNative.View style={{"width":300}}>
          <ui_page.PageLayoutHeader design={{"type":"light"}} noBreadcrumb={true}>
            <ui_breadcrumb.Breadcrumb root={["HOME"]} path={["A","B"]} design={{"type":"light"}}></ui_breadcrumb.Breadcrumb>
          </ui_page.PageLayoutHeader>
          <ui_page.PageLayoutHeader design={{"type":"light"}} noBanner={true} noBreadcrumb={true}>
            <ui_breadcrumb.Breadcrumb
              root={["HOME"]}
              path={["A","B"]}
              noBanner={true}
              design={{"type":"light"}}>
            </ui_breadcrumb.Breadcrumb>
          </ui_page.PageLayoutHeader>
        </ReactNative.View>
        <ReactNative.View style={{"width":300}}>
          <ui_page.PageLayoutHeader design={{"type":"dark"}} noBreadcrumb={true}>
            <ui_breadcrumb.Breadcrumb root={["HOME"]} path={["A","B"]} design={{"type":"dark"}}></ui_breadcrumb.Breadcrumb>
          </ui_page.PageLayoutHeader>
          <ui_page.PageLayoutHeader design={{"type":"dark"}} noBanner={true} noBreadcrumb={true}>
            <ui_breadcrumb.Breadcrumb
              root={["HOME"]}
              path={["A","B"]}
              noBanner={true}
              design={{"type":"dark"}}>
            </ui_breadcrumb.Breadcrumb>
          </ui_page.PageLayoutHeader>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {"BreadcrumbDemo":BreadcrumbDemo};

export default MODULE