import * as ReactNative from 'react-native'

import n from '../js/react-native'

import ext_form from '../js/react/ext-form'

import slim_number from './slim-number'

// melbourne.slim-number-test/FormSpinnerDemo [20] 
function FormSpinnerDemo(){
  let form = ext_form.makeForm(function (){
    return {"price":50};
  },{"price":[]});
  let [max,min,step,decimal] = [1000,0,2,2];
  return (
    <n.Enclosed label="melbourne.slim-number/FormSpinner">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_number.FormSpinner
            brand={{"type":"light"}}
            label="Price"
            field="price"
            form={form}
            step={step}
            min={min}
            max={max}
            decimal={decimal}>
          </slim_number.FormSpinner>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_number.FormSpinner
            brand={{"type":"dark"}}
            label="Price"
            field="price"
            form={form}
            step={step}
            min={min}
            max={max}
            decimal={decimal}>
          </slim_number.FormSpinner>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-number-test/FormSliderDemo [53] 
function FormSliderDemo(){
  let form = ext_form.makeForm(function (){
    return {"price":50};
  },{"price":[]});
  let [max,min,step,decimal] = [100,0,1];
  return (
    <n.Enclosed label="melbourne.slim-number/FormSlider">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_number.FormSlider
            form={form}
            step={step}
            fieldProps={{"addons":[]}}
            min={min}
            field="price"
            brand={{"type":"light"}}
            label="Price"
            length={150}
            max={max}>
          </slim_number.FormSlider>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_number.FormSlider
            length={150}
            brand={{"type":"dark"}}
            label="Price"
            field="price"
            form={form}
            step={step}
            min={min}
            max={max}>
          </slim_number.FormSlider>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {
  "FormSpinnerDemo":FormSpinnerDemo,
  "FormSliderDemo":FormSliderDemo
};

export default MODULE