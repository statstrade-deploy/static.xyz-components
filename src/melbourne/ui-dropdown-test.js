import React from 'react'

import * as ReactNative from 'react-native'

import n from '../js/react-native'

import ui_dropdown from './ui-dropdown'

// melbourne.ui-dropdown-test/DropdownIndexedDemo [23] 
function DropdownIndexedDemo(){
  let [active,setActive] = React.useState();
  let [index,setIndex] = React.useState(2);
  return (
    <n.Isolation>
      <n.Enclosed label="melbourne.ui-dropdown/DropdownIndexed">
        <n.TextDisplay content={n.format_entry({index})}></n.TextDisplay>
        <n.Row>
          <n.Row
            style={{
              "backgroundColor":"#eee",
              "flex":1,
              "flexDirection":"row-reverese",
              "padding":30
            }}>
            <ui_dropdown.DropdownIndexed
              design={{"type":"light"}}
              items={["A","B","C","D"]}
              active={active}
              setActive={setActive}
              index={index}
              setIndex={setIndex}>
            </ui_dropdown.DropdownIndexed>
          </n.Row>
          <n.Row
            style={{
              "backgroundColor":"#333",
              "flex":1,
              "flexDirection":"row-reverese",
              "padding":30
            }}>
            <ui_dropdown.DropdownIndexed
              design={{"type":"dark"}}
              items={["A","B","C","D"]}
              active={active}
              setActive={setActive}
              index={index}
              setIndex={setIndex}>
            </ui_dropdown.DropdownIndexed>
          </n.Row>
        </n.Row>
      </n.Enclosed>
    </n.Isolation>);
}

// melbourne.ui-dropdown-test/DropdownDemo [59] 
function DropdownDemo(){
  let [active,setActive] = React.useState();
  let [value,setValue] = React.useState("C");
  let [display,setDisplay] = React.useState("screen");
  return (
    <n.Isolation>
      <n.Enclosed label="melbourne.ui-dropdown/Dropdown">
        <n.Tabs
          data={["screen","dropdown"]}
          value={display}
          setValue={setDisplay}>
        </n.Tabs>
        <n.TextDisplay content={n.format_entry({value})}></n.TextDisplay>
        <n.Row>
          <n.Row
            style={{
              "backgroundColor":"#eee",
              "flex":1,
              "flexDirection":"row-reverese",
              "padding":30
            }}>
            <ui_dropdown.Dropdown
              design={{"type":"light"}}
              displayType={display}
              data={["A","B","C","D"]}
              active={active}
              setActive={setActive}
              value={value}
              setValue={setValue}>
            </ui_dropdown.Dropdown>
          </n.Row>
          <n.Row
            style={{
              "backgroundColor":"#333",
              "flex":1,
              "flexDirection":"row-reverese",
              "padding":30
            }}>
            <ui_dropdown.Dropdown
              design={{"type":"dark"}}
              displayType={display}
              data={["A","B","C","D"]}
              active={active}
              setActive={setActive}
              value={value}
              setValue={setValue}>
            </ui_dropdown.Dropdown>
          </n.Row>
        </n.Row>
      </n.Enclosed>
    </n.Isolation>);
}

var MODULE = {
  "DropdownIndexedDemo":DropdownIndexedDemo,
  "DropdownDemo":DropdownDemo
};

export default MODULE