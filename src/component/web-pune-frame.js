import * as ReactNative from 'react-native'

import ui_sidemenu_test from '../pune/ui-sidemenu-test'

import ui_metamask_user_test from '../pune/ui-metamask-user-test'

import ui_submenu_test from '../pune/ui-submenu-test'

import ui_market_delta_test from '../pune/ui-market-delta-test'

import ui_market_ladder_test from '../pune/ui-market-ladder-test'

import web_pune_frame_graph from './web-pune-frame-graph'

import n from '../js/react-native'

import ui_topnotify_test from '../pune/ui-topnotify-test'

import ui_sidebar_test from '../pune/ui-sidebar-test'

import ui_page_test from '../pune/ui-page-test'

import k from '../xt/lang/base-lib'

import ui_depthchart_test from '../pune/ui-depthchart-test'

import ui_metamask_contract_test from '../pune/ui-metamask-contract-test'

import ui_breadcrumb_test from '../pune/ui-breadcrumb-test'

import web_pune_frame_demo from './web-pune-frame-demo'

import ui_sparkline_test from '../pune/ui-sparkline-test'

import ui_console_test from '../pune/ui-console-test'

import ui_mainmenu_test from '../pune/ui-mainmenu-test'

import ui_market_live_test from '../pune/ui-market-live-test'

// component.web-pune-frame/BreadcrumbExamples [33] 
function BreadcrumbExamples(){
  return (
    <>
      <ui_breadcrumb_test.BreadcrumbDemo></ui_breadcrumb_test.BreadcrumbDemo>
    </>);
}

// component.web-pune-frame/ConsoleExamples [39] 
function ConsoleExamples(){
  return (
    <><ui_console_test.ConsoleDemo></ui_console_test.ConsoleDemo></>);
}

// component.web-pune-frame/DepthchartExamples [45] 
function DepthchartExamples(){
  return (
    <>
      <ui_depthchart_test.MarketDepthChartDemo></ui_depthchart_test.MarketDepthChartDemo>
    </>);
}

// component.web-pune-frame/MainMenuExamples [52] 
function MainMenuExamples(){
  return (
    <>
      <ui_mainmenu_test.MainMenuSeperatorDemo></ui_mainmenu_test.MainMenuSeperatorDemo>
      <ui_mainmenu_test.MainMenuButtonDemo></ui_mainmenu_test.MainMenuButtonDemo>
      <ui_mainmenu_test.MainMenuToggleDemo></ui_mainmenu_test.MainMenuToggleDemo>
      <ui_mainmenu_test.MainMenuRouteDemo></ui_mainmenu_test.MainMenuRouteDemo>
      <ui_mainmenu_test.MainMenuMiniContextDemo></ui_mainmenu_test.MainMenuMiniContextDemo>
      <ui_mainmenu_test.MainMenuDemo></ui_mainmenu_test.MainMenuDemo>
    </>);
}

// component.web-pune-frame/SubMenuExamples [63] 
function SubMenuExamples(){
  return (
    <>
      <ui_submenu_test.SubMenuToggleDemo></ui_submenu_test.SubMenuToggleDemo>
      <ui_submenu_test.SubMenuRouteDemo></ui_submenu_test.SubMenuRouteDemo>
      <ui_submenu_test.SubMenuDemo></ui_submenu_test.SubMenuDemo>
    </>);
}

// component.web-pune-frame/SideMenuExamples [71] 
function SideMenuExamples(){
  return (
    <>
      <ui_sidemenu_test.SideMenuTitleDemo></ui_sidemenu_test.SideMenuTitleDemo>
      <ui_sidemenu_test.SideMenuListDemo></ui_sidemenu_test.SideMenuListDemo>
      <ui_sidemenu_test.SideMenuFloatingDemo></ui_sidemenu_test.SideMenuFloatingDemo>
    </>);
}

// component.web-pune-frame/SideBarExamples [79] 
function SideBarExamples(){
  return (
    <>
      <ui_sidebar_test.SidebarMenuDemo></ui_sidebar_test.SidebarMenuDemo>
      <ui_sidebar_test.SidebarDemo></ui_sidebar_test.SidebarDemo>
    </>);
}

// component.web-pune-frame/TopNotifyExamples [86] 
function TopNotifyExamples(){
  return (
    <>
      <ui_topnotify_test.TopNotifyInnerDemo></ui_topnotify_test.TopNotifyInnerDemo>
      <ui_topnotify_test.TopNotifyDemo></ui_topnotify_test.TopNotifyDemo>
    </>);
}

// component.web-pune-frame/PageExamples [93] 
function PageExamples(){
  return (
    <>
      <ui_page_test.PageLayoutHeaderDemo></ui_page_test.PageLayoutHeaderDemo>
      <ui_page_test.PageLayoutMenuDemo></ui_page_test.PageLayoutMenuDemo>
      <ui_page_test.PageLayoutDemo></ui_page_test.PageLayoutDemo>
    </>);
}

// component.web-pune-frame/SparklineExamples [101] 
function SparklineExamples(){
  return (
    <>
      <ui_sparkline_test.SparklineDemo></ui_sparkline_test.SparklineDemo>
    </>);
}

// component.web-pune-frame/DeltaExamples [107] 
function DeltaExamples(){
  return (
    <>
      <ui_market_delta_test.DeltaDemo></ui_market_delta_test.DeltaDemo>
    </>);
}

// component.web-pune-frame/LadderExamples [113] 
function LadderExamples(){
  return (
    <>
      <ui_market_ladder_test.MarketLadderTextDemo></ui_market_ladder_test.MarketLadderTextDemo>
      <ui_market_ladder_test.MarketLadderRowDemo></ui_market_ladder_test.MarketLadderRowDemo>
      <ui_market_ladder_test.MarketLadderDemo></ui_market_ladder_test.MarketLadderDemo>
    </>);
}

// component.web-pune-frame/LiveExamples [121] 
function LiveExamples(){
  return (
    <>
      <ui_market_live_test.MarketLiveRowDemo></ui_market_live_test.MarketLiveRowDemo>
      <ui_market_live_test.MarketLiveDemo></ui_market_live_test.MarketLiveDemo>
    </>);
}

// component.web-pune-frame/MetamaskContractExamples [128] 
function MetamaskContractExamples(){
  return (
    <>
      <ui_metamask_contract_test.MetamaskContractDemo></ui_metamask_contract_test.MetamaskContractDemo>
    </>);
}

// component.web-pune-frame/MetamaskUserExamples [134] 
function MetamaskUserExamples(){
  return (
    <>
      <ui_metamask_user_test.MetamaskUserDemo></ui_metamask_user_test.MetamaskUserDemo>
    </>);
}

// component.web-pune-frame/FrameDemo [140] 
function FrameDemo(){
  return (
    <ReactNative.View style={{"height":700,"maxWidth":650}}>
      <web_pune_frame_demo.FrameMain></web_pune_frame_demo.FrameMain>
    </ReactNative.View>);
}

// component.web-pune-frame/ChartDemo [148] 
function ChartDemo(){
  return (
    <ReactNative.View style={{"height":700,"maxWidth":650}}>
      <web_pune_frame_graph.Demo002LightweightCharts></web_pune_frame_graph.Demo002LightweightCharts>
    </ReactNative.View>);
}

// component.web-pune-frame/pune-frame-controls [156] 
function pune_frame_controls(){
  return {
    "101-sidemenu":SideMenuExamples,
    "102-mainmenu":MainMenuExamples,
    "103-submenu":SubMenuExamples,
    "104-topnotify":TopNotifyExamples,
    "105-console":ConsoleExamples,
    "106-breadcrumb":BreadcrumbExamples,
    "108-sidebar":SideBarExamples,
    "201-page":PageExamples,
    "600-sparkline":SparklineExamples,
    "601-depthchart":DepthchartExamples,
    "602-ladder":LadderExamples,
    "603-live":LiveExamples,
    "605-delta":DeltaExamples,
    "701-mm-contract":MetamaskContractExamples,
    "702-mm-user":MetamaskUserExamples,
    "900-frame":FrameDemo,
    "901-chart":ChartDemo
  };
}

var MODULE = {
  "BreadcrumbExamples":BreadcrumbExamples,
  "ConsoleExamples":ConsoleExamples,
  "DepthchartExamples":DepthchartExamples,
  "MainMenuExamples":MainMenuExamples,
  "SubMenuExamples":SubMenuExamples,
  "SideMenuExamples":SideMenuExamples,
  "SideBarExamples":SideBarExamples,
  "TopNotifyExamples":TopNotifyExamples,
  "PageExamples":PageExamples,
  "SparklineExamples":SparklineExamples,
  "DeltaExamples":DeltaExamples,
  "LadderExamples":LadderExamples,
  "LiveExamples":LiveExamples,
  "MetamaskContractExamples":MetamaskContractExamples,
  "MetamaskUserExamples":MetamaskUserExamples,
  "FrameDemo":FrameDemo,
  "ChartDemo":ChartDemo,
  "pune_frame_controls":pune_frame_controls
};

export default MODULE