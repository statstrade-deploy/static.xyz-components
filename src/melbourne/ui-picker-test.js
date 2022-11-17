import React from 'react'

import * as ReactNative from 'react-native'

import n from '../js/react-native'

import ui_picker from './ui-picker'

// melbourne.ui-picker-test/PickerValuesDemo [24] 
function PickerValuesDemo(){
  let [index,setIndex] = React.useState(3);
  return (
    <n.Enclosed label="melbourne.ui-picker/PickerValues">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":20}}>
          <n.Row style={{"margin":5}}>
            <ui_picker.PickerValues
              design={{"type":"light"}}
              items={[
                "Victoria",
                "Queensland",
                "Tasmania",
                "New South Wales",
                "Western Australia",
                "South Australia"
              ]}
              style={{"fontSize":16,"fontWeight":"800"}}
              index={index}
              setIndex={setIndex}>
            </ui_picker.PickerValues>
            <ReactNative.Text>  </ReactNative.Text>
            <ui_picker.PickerControls design={{"type":"light"}} index={index} setIndex={setIndex}></ui_picker.PickerControls>
          </n.Row>
          <n.Row style={{"margin":5}}>
            <ui_picker.PickerValues
              design={{"type":"light","mode":"secondary"}}
              items={[
                "Victoria",
                "Queensland",
                "Tasmania",
                "New South Wales",
                "Western Australia",
                "South Australia"
              ]}
              style={{"fontSize":16,"fontWeight":"800"}}
              index={index}
              setIndex={setIndex}>
            </ui_picker.PickerValues>
            <ReactNative.Text>  </ReactNative.Text>
            <ui_picker.PickerControls
              design={{"type":"light","mode":"secondary"}}
              index={index}
              setIndex={setIndex}>
            </ui_picker.PickerControls>
          </n.Row>
          <n.Row style={{"margin":5}}>
            <ui_picker.PickerValues
              design={{"type":"light","mode":"minor"}}
              items={[
                "Victoria",
                "Queensland",
                "Tasmania",
                "New South Wales",
                "Western Australia",
                "South Australia"
              ]}
              style={{"fontSize":16,"fontWeight":"800"}}
              index={index}
              setIndex={setIndex}>
            </ui_picker.PickerValues>
            <ReactNative.Text>  </ReactNative.Text>
            <ui_picker.PickerControls design={{"type":"light"}} index={index} setIndex={setIndex}></ui_picker.PickerControls>
          </n.Row>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":20}}>
          <n.Row style={{"margin":5}}>
            <ui_picker.PickerValues
              design={{"type":"dark"}}
              items={[
                "Victoria",
                "Queensland",
                "Tasmania",
                "New South Wales",
                "Western Australia",
                "South Australia"
              ]}
              index={index}
              setIndex={setIndex}>
            </ui_picker.PickerValues>
            <ReactNative.Text>  </ReactNative.Text>
            <ui_picker.PickerControls design={{"type":"dark"}} index={index} setIndex={setIndex}></ui_picker.PickerControls>
          </n.Row>
          <n.Row style={{"margin":5}}>
            <ui_picker.PickerValues
              design={{"type":"dark","mode":"secondary"}}
              items={[
                "Victoria",
                "Queensland",
                "Tasmania",
                "New South Wales",
                "Western Australia",
                "South Australia"
              ]}
              style={{"fontSize":16,"fontWeight":"800"}}
              index={index}
              setIndex={setIndex}>
            </ui_picker.PickerValues>
            <ReactNative.Text>  </ReactNative.Text>
            <ui_picker.PickerControls
              design={{"type":"dark","mode":"secondary"}}
              index={index}
              setIndex={setIndex}>
            </ui_picker.PickerControls>
          </n.Row>
          <n.Row style={{"margin":5}}>
            <ui_picker.PickerValues
              design={{"type":"dark"}}
              items={[
                "Victoria",
                "Queensland",
                "Tasmania",
                "New South Wales",
                "Western Australia",
                "South Australia"
              ]}
              style={{"fontSize":16,"fontWeight":"800"}}
              index={index}
              setIndex={setIndex}>
            </ui_picker.PickerValues>
            <ReactNative.Text>  </ReactNative.Text>
            <ui_picker.PickerControls design={{"type":"dark"}} index={index} setIndex={setIndex}></ui_picker.PickerControls>
          </n.Row>
        </ReactNative.View>
      </n.Row>
      <n.Row>
        <ReactNative.Button
          title="+1"
          onPress={function (){
            return setIndex(index + 1);
          }}>
        </ReactNative.Button>
        <ReactNative.Button
          title="-1"
          onPress={function (){
            return setIndex(index - 1);
          }}>
        </ReactNative.Button>
        <ReactNative.Text>{n.format_entry({index})}</ReactNative.Text>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.ui-picker-test/PickerIndexedDemo [179] 
function PickerIndexedDemo(){
  let [index,setIndex] = React.useState(3);
  return (
    <n.Enclosed label="melbourne.ui-picker/PickerIndexed">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":20}}>
          <n.Row style={{"margin":5}}>
            <ui_picker.PickerIndexed
              design={{"type":"light"}}
              items={[
                "Victoria",
                "Queensland",
                "Tasmania",
                "New South Wales",
                "Western Australia",
                "South Australia"
              ]}
              style={{"fontSize":16,"fontWeight":"800"}}
              index={index}
              setIndex={setIndex}>
            </ui_picker.PickerIndexed>
            <ReactNative.Text>  </ReactNative.Text>
            <ui_picker.PickerControls design={{"type":"light"}} index={index} setIndex={setIndex}></ui_picker.PickerControls>
          </n.Row>
          <n.Row style={{"margin":5}}>
            <ui_picker.PickerIndexed
              design={{"type":"light","mode":"secondary"}}
              items={[
                "Victoria",
                "Queensland",
                "Tasmania",
                "New South Wales",
                "Western Australia",
                "South Australia"
              ]}
              style={{"fontSize":16,"fontWeight":"800"}}
              index={index}
              setIndex={setIndex}>
            </ui_picker.PickerIndexed>
            <ReactNative.Text>  </ReactNative.Text>
            <ui_picker.PickerControls
              design={{"type":"light","mode":"secondary"}}
              index={index}
              setIndex={setIndex}>
            </ui_picker.PickerControls>
          </n.Row>
          <n.Row style={{"margin":5}}>
            <ui_picker.PickerIndexed
              design={{"type":"light"}}
              items={[
                "Victoria",
                "Queensland",
                "Tasmania",
                "New South Wales",
                "Western Australia",
                "South Australia"
              ]}
              style={{"fontSize":16,"fontWeight":"800"}}
              index={index}
              setIndex={setIndex}>
            </ui_picker.PickerIndexed>
            <ReactNative.Text>  </ReactNative.Text>
            <ui_picker.PickerControls design={{"type":"light"}} index={index} setIndex={setIndex}></ui_picker.PickerControls>
          </n.Row>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":20}}>
          <n.Row style={{"margin":5}}>
            <ui_picker.PickerIndexed
              design={{"type":"dark"}}
              items={[
                "Victoria",
                "Queensland",
                "Tasmania",
                "New South Wales",
                "Western Australia",
                "South Australia"
              ]}
              index={index}
              setIndex={setIndex}>
            </ui_picker.PickerIndexed>
            <ReactNative.Text>  </ReactNative.Text>
            <ui_picker.PickerControls design={{"type":"dark"}} index={index} setIndex={setIndex}></ui_picker.PickerControls>
          </n.Row>
          <n.Row style={{"margin":5}}>
            <ui_picker.PickerIndexed
              design={{"type":"dark","mode":"secondary"}}
              items={[
                "Victoria",
                "Queensland",
                "Tasmania",
                "New South Wales",
                "Western Australia",
                "South Australia"
              ]}
              style={{"fontSize":16,"fontWeight":"800"}}
              index={index}
              setIndex={setIndex}>
            </ui_picker.PickerIndexed>
            <ReactNative.Text>  </ReactNative.Text>
            <ui_picker.PickerControls
              design={{"type":"dark","mode":"secondary"}}
              index={index}
              setIndex={setIndex}>
            </ui_picker.PickerControls>
          </n.Row>
          <n.Row style={{"margin":5}}>
            <ui_picker.PickerIndexed
              design={{"type":"dark"}}
              items={[
                "Victoria",
                "Queensland",
                "Tasmania",
                "New South Wales",
                "Western Australia",
                "South Australia"
              ]}
              style={{"fontSize":16,"fontWeight":"800"}}
              index={index}
              setIndex={setIndex}>
            </ui_picker.PickerIndexed>
            <ReactNative.Text>  </ReactNative.Text>
            <ui_picker.PickerControls design={{"type":"dark"}} index={index} setIndex={setIndex}></ui_picker.PickerControls>
          </n.Row>
        </ReactNative.View>
      </n.Row>
      <n.Row>
        <ReactNative.Button
          title="+1"
          onPress={function (){
            return setIndex(index + 1);
          }}>
        </ReactNative.Button>
        <ReactNative.Button
          title="-1"
          onPress={function (){
            return setIndex(index - 1);
          }}>
        </ReactNative.Button>
        <ReactNative.Text>{n.format_entry({index})}</ReactNative.Text>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.ui-picker-test/PickerDemo [335] 
function PickerDemo(){
  let [value,setValue] = React.useState("Tasmania");
  let [data,setData] = React.useState([
    "Victoria",
    "Queensland",
    "Tasmania",
    "New South Wales",
    "Western Australia",
    "South Australia"
  ]);
  return (
    <n.Enclosed label="melbourne.ui-picker/Picker">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":20}}>
          <n.Row style={{"margin":5}}>
            <ui_picker.Picker
              key={data}
              design={{"type":"light"}}
              data={data}
              style={{"fontSize":16,"fontWeight":"800"}}
              value={value}
              setValue={setValue}>
            </ui_picker.Picker>
            <ReactNative.Text>  </ReactNative.Text>
          </n.Row>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":20}}>
          <n.Row style={{"margin":5}}>
            <ui_picker.Picker
              key={data}
              design={{"type":"dark"}}
              data={data}
              style={{"fontSize":16,"fontWeight":"800"}}
              value={value}
              setValue={setValue}>
            </ui_picker.Picker>
            <ReactNative.Text>  </ReactNative.Text>
          </n.Row>
        </ReactNative.View>
      </n.Row>
      <n.Row>
        <ReactNative.Button
          title="Aus"
          onPress={function (){
            setData([
              "Victoria",
              "Queensland",
              "Tasmania",
              "New South Wales",
              "Western Australia",
              "South Australia"
            ]);
          }}>
        </ReactNative.Button>
        <ReactNative.Button
          title="Chn"
          onPress={function (){
            setData(["Yunnan","Guangxi","Hubei","Sichuan"]);
          }}>
        </ReactNative.Button>
        <ReactNative.Text>{n.format_entry({value})}</ReactNative.Text>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {
  "PickerValuesDemo":PickerValuesDemo,
  "PickerIndexedDemo":PickerIndexedDemo,
  "PickerDemo":PickerDemo
};

export default MODULE