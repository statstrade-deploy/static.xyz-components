import * as ReactNative from 'react-native'

import n from '../js/react-native'

import ext_form from '../js/react/ext-form'

import slim_select from './slim-select'

// melbourne.slim-select-test/FormPickerDemo [21] 
function FormPickerDemo(){
  let form = ext_form.makeForm(function (){
    return {"price":"Tasmania"};
  },{"price":[]});
  return (
    <n.Enclosed label="melbourne.slim-select/FormPicker">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_select.FormPicker
            brand={{"type":"light"}}
            label="Price"
            field="price"
            data={[
              "Victoria",
              "Queensland",
              "Tasmania",
              "New South Wales",
              "Western Australia",
              "South Australia"
            ]}
            form={form}>
          </slim_select.FormPicker>
          <slim_select.FormPicker
            brand={{"type":"light","mode":"secondary"}}
            label="Price"
            field="price"
            data={[
              "Victoria",
              "Queensland",
              "Tasmania",
              "New South Wales",
              "Western Australia",
              "South Australia"
            ]}
            form={form}>
          </slim_select.FormPicker>
          <slim_select.FormPicker
            brand={{"type":"light"}}
            label="Price"
            field="price"
            data={[
              "Victoria",
              "Queensland",
              "Tasmania",
              "New South Wales",
              "Western Australia",
              "South Australia"
            ]}
            form={form}>
          </slim_select.FormPicker>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_select.FormPicker
            brand={{"type":"dark"}}
            label="Price"
            field="price"
            data={[
              "Victoria",
              "Queensland",
              "Tasmania",
              "New South Wales",
              "Western Australia",
              "South Australia"
            ]}
            form={form}>
          </slim_select.FormPicker>
          <slim_select.FormPicker
            brand={{"type":"dark","mode":"secondary"}}
            label="Price"
            field="price"
            data={[
              "Victoria",
              "Queensland",
              "Tasmania",
              "New South Wales",
              "Western Australia",
              "South Australia"
            ]}
            form={form}>
          </slim_select.FormPicker>
          <slim_select.FormPicker
            brand={{"type":"dark"}}
            label="Price"
            field="price"
            data={[
              "Victoria",
              "Queensland",
              "Tasmania",
              "New South Wales",
              "Western Australia",
              "South Australia"
            ]}
            form={form}>
          </slim_select.FormPicker>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-select-test/FormDropdownDemo [115] 
function FormDropdownDemo(){
  let form = ext_form.makeForm(function (){
    return {"price":"Victoria"};
  },{"price":[]});
  return (
    <n.Isolation>
      <n.Enclosed label="melbourne.slim-select/FormDropdown">
        <n.Row>
          <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
            <slim_select.FormDropdown
              brand={{"type":"light","mode":"secondary"}}
              label="Price"
              field="price"
              data={[
                "Victoria",
                "Queensland",
                "Tasmania",
                "New South Wales",
                "Western Australia",
                "South Australia"
              ]}
              form={form}>
            </slim_select.FormDropdown>
          </ReactNative.View>
          <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
            <slim_select.FormDropdown
              brand={{"type":"dark","mode":"secondary"}}
              label="Price"
              field="price"
              data={[
                "Victoria",
                "Queensland",
                "Tasmania",
                "New South Wales",
                "Western Australia",
                "South Australia"
              ]}
              form={form}>
            </slim_select.FormDropdown>
          </ReactNative.View>
        </n.Row>
      </n.Enclosed>
    </n.Isolation>);
}

var MODULE = {
  "FormPickerDemo":FormPickerDemo,
  "FormDropdownDemo":FormDropdownDemo
};

export default MODULE