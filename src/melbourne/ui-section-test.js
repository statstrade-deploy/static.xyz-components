import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import n from '../js/react-native'

import ui_section from './ui-section'

import ui_text from './ui-text'

// melbourne.ui-section-test/SectionBaseDemo [21] 
function SectionBaseDemo(){
  return (
    <n.Enclosed label="melbourne.ui-section/SectionBase">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <ui_section.SectionBase title="Market" design={{"type":"light"}}></ui_section.SectionBase>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <ui_section.SectionBase title="Market" design={{"type":"dark"}}></ui_section.SectionBase>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.ui-section-test/SectionDemo [49] 
function SectionDemo(){
  return (
    <n.Enclosed label="melbourne.ui-section/Section">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <ui_section.Section title="Market" design={{"type":"light"}}></ui_section.Section>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <ui_section.Section title="Market" design={{"type":"dark"}}></ui_section.Section>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.ui-section-test/SectionFoldDemo [74] 
function SectionFoldDemo(){
  return (
    <n.Enclosed label="melbourne.ui-section/SectionFold">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <ui_section.SectionFold title="Market" design={{"type":"light"}}></ui_section.SectionFold>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <ui_section.SectionFold title="Market" design={{"type":"dark"}}></ui_section.SectionFold>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.ui-section-test/CardBoundaryDemo [99] 
function CardBoundaryDemo(){
  return (
    <n.Enclosed label="melbourne.ui-section/CardBoundary">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <ui_section.CardBoundary>
            <ReactNative.View style={{"backgroundColor":"blue"}}></ReactNative.View>
          </ui_section.CardBoundary>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.ui-section-test/EmptyButtonDemo [117] 
function EmptyButtonDemo(){
  return (
    <n.Enclosed label="melbourne.ui-section/EmptyButton">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <ui_section.EmptyButton design={{"type":"light"}}></ui_section.EmptyButton>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {
  "SectionBaseDemo":SectionBaseDemo,
  "SectionDemo":SectionDemo,
  "SectionFoldDemo":SectionFoldDemo,
  "CardBoundaryDemo":CardBoundaryDemo,
  "EmptyButtonDemo":EmptyButtonDemo
};

export default MODULE