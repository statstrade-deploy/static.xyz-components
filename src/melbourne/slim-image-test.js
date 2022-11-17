import * as ReactNative from 'react-native'

import n from '../js/react-native'

import ext_form from '../js/react/ext-form'

import slim_image from './slim-image'

// melbourne.slim-image-test/FormImageDemo [21] 
function FormImageDemo(){
  let form = ext_form.makeForm(function (){
    return {"price":null};
  },{"price":[]});
  return (
    <n.Enclosed label="melbourne.slim-image/FormImage">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_image.FormImage
            brand={{"type":"light"}}
            label="Picture"
            form={form}
            field="price">
          </slim_image.FormImage>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_image.FormImage
            brand={{"type":"dark"}}
            label="Picture"
            form={form}
            field="price">
          </slim_image.FormImage>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {"FormImageDemo":FormImageDemo};

export default MODULE