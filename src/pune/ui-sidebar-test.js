import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import n from '../js/react-native'

import ui_sidebar from './ui-sidebar'

import ui_section from '../melbourne/ui-section'

// pune.ui-sidebar-test/SidebarMenuDemo [21] 
function SidebarMenuDemo(){
  let [sectionKey,setSectionKey] = React.useState();
  return (
    <n.Enclosed label="pune.ui-sidebar/SidebarMenu">
      <ui_section.SectionBase design={{"type":"dark"}}>
        <ui_sidebar.SidebarMenu
          design={{"type":"dark"}}
          sections={["A","B","C"]}
          setSectionKey={setSectionKey}
          sectionKey={sectionKey}>
        </ui_sidebar.SidebarMenu>
      </ui_section.SectionBase>
    </n.Enclosed>);
}

// pune.ui-sidebar-test/SidebarDemo [38] 
function SidebarDemo(){
  let [sectionKey,setSectionKey] = React.useState();
  return (
    <n.Enclosed label="pune.ui-sidebar/Sidebar">
      <ui_section.SectionBase design={{"type":"dark"}}>
        <ui_sidebar.Sidebar
          design={{"type":"dark"}}
          sections={["A","B","C"]}
          setSectionKey={setSectionKey}
          sectionKey={sectionKey}>
        </ui_sidebar.Sidebar>
      </ui_section.SectionBase>
    </n.Enclosed>);
}

var MODULE = {"SidebarMenuDemo":SidebarMenuDemo,"SidebarDemo":SidebarDemo};

export default MODULE