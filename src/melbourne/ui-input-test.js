import * as ReactNative from 'react-native'

import event_form from '../xt/lang/event-form'

import ui_input from './ui-input'

import n from '../js/react-native'

import ext_form from '../js/react/ext-form'

import ui_button from './ui-button'

import k from '../xt/lang/base-lib'

import base_palette from './base-palette'

// melbourne.ui-input-test/RegistraionValidators [28] 
var RegistraionValidators = {
  "first_name":[
    [
    "is-not-empty",
    {
    "message":"Must not be empty",
    "check":function (v,rec){
      return (null != v) && (0 < (v).length);
    }
  }
  ]
  ],
  "last_name":[
    [
    "is-not-empty",
    {
    "message":"Must not be empty",
    "check":function (v,rec){
      return new Promise(function (resolve,reject){
        setTimeout(function (){
          try{
            resolve(        (function (){
                      return (null != v) && (0 < (v).length);
                    })());
          }
          catch(e){
            reject(e);
          }
        },100);
      });
    }
  }
  ]
  ]
};

// melbourne.ui-input-test/inputAsterix [40] 
function inputAsterix(design){
  let {mainColor} = base_palette.designPalette(design);
  return {
    "component":ReactNative.Text,
    "children":["*"],
    "style":{
        "position":"absolute",
        "right":-5,
        "color":mainColor,
        "fontSize":16,
        "fontWeight":"800"
      },
    "transformations":function ({focusing,highlighted}){
        return {"style":{"opacity":highlighted * (1 - focusing)}};
      }
  };
}

// melbourne.ui-input-test/styleInputLabel [57] 
function styleInputLabel({mainNeutral},m){
  return Object.assign({
    "fontFamily":"Helvetica",
    "fontSize":12,
    "fontWeight":"800",
    "padding":8,
    "color":mainNeutral,
    "width":80
  },m);
}

// melbourne.ui-input-test/InputLightExamples [69] 
function InputLightExamples(){
  let form = ext_form.makeForm(function (){
    return {"first_name":"","last_name":""};
  },RegistraionValidators);
  let {data,result} = ext_form.listenForm(form);
  return (
    <n.Enclosed label="melbourne.ui-input/Input.Light">
      <ReactNative.View style={{"borderRadius":10,"width":350,"overflow":"hidden"}}>
        <n.Row style={{"backgroundColor":"#eee","width":350,"padding":10}}></n.Row>
        <n.Row>
          <ReactNative.View style={{"backgroundColor":"#eee","width":350,"padding":10}}>
            <n.Row style={{"padding":5}}>
              <ReactNative.Text style={styleInputLabel({"mainNeutral":"#333"})}>First Name</ReactNative.Text>
              <ui_input.Input
                design={{"type":"light"}}
                highlighted={event_form.check_field_errored(form,"first_name")}
                value={data["first_name"]}
                onBlur={function (){
                  event_form.validate_field(form,"first_name");
                }}
                onChangeText={function (v){
                  event_form.set_field(form,"first_name",v);
                  event_form.validate_field(form,"first_name");
                }}
                addons={[inputAsterix({"type":"light"})]}>
              </ui_input.Input>
            </n.Row>
            <n.Row style={{"padding":5}}>
              <ReactNative.Text style={styleInputLabel({"mainNeutral":"#333"})}>Last Name</ReactNative.Text>
              <ui_input.Input
                design={{"type":"light"}}
                highlighted={event_form.check_field_errored(form,"last_name")}
                value={data["last_name"]}
                onBlur={function (){
                  event_form.validate_field(form,"last_name");
                }}
                onChangeText={function (v){
                  event_form.set_field(form,"last_name",v);
                  event_form.validate_field(form,"last_name");
                }}
                addons={[inputAsterix({"type":"light"})]}>
              </ui_input.Input>
            </n.Row>
            <n.Row
              style={{"marginTop":10,"padding":5,"flexDirection":"row-reverse"}}>
              <ui_button.Button
                disabled={!event_form.check_all_passed(form)}
                design={{"type":"light"}}
                style={{"fontSize":12,"fontWeight":"800"}}
                text="Register">
              </ui_button.Button>
              <ui_button.Button
                design={{"type":"light","theme":{"bg":{"key":"neutral"}}}}
                style={{"fontSize":12,"fontWeight":"800","marginHorizontal":10}}
                onPress={function (){
                  return event_form.reset_all(form);
                }}
                text="Cancel">
              </ui_button.Button>
            </n.Row>
          </ReactNative.View>
        </n.Row>
      </ReactNative.View>
    </n.Enclosed>);
}

// melbourne.ui-input-test/InputDarkExamples [147] 
function InputDarkExamples(){
  let form = ext_form.makeForm(function (){
    return {"first_name":"","last_name":""};
  },RegistraionValidators);
  let {data,result} = ext_form.listenForm(form);
  return (
    <n.Enclosed label="melbourne.ui-input/Input.Dark">
      <ReactNative.View style={{"borderRadius":10,"width":350,"overflow":"hidden"}}>
        <n.Row style={{"backgroundColor":"#333","width":350,"padding":10}}></n.Row>
        <n.Row>
          <ReactNative.View style={{"backgroundColor":"#333","width":350,"padding":10}}>
            <n.Row style={{"padding":5}}>
              <ReactNative.Text style={styleInputLabel({"mainNeutral":"#eee"})}>First Name</ReactNative.Text>
              <ui_input.Input
                design={{"type":"dark"}}
                highlighted={event_form.check_field_errored(form,"first_name")}
                value={data["first_name"]}
                onBlur={function (){
                  event_form.validate_field(form,"first_name");
                }}
                onChangeText={function (v){
                  event_form.set_field(form,"first_name",v);
                  event_form.validate_field(form,"first_name");
                }}
                addons={[inputAsterix({"type":"dark"})]}>
              </ui_input.Input>
            </n.Row>
            <n.Row style={{"padding":5}}>
              <ReactNative.Text style={styleInputLabel({"mainNeutral":"#eee"})}>Last Name</ReactNative.Text>
              <ui_input.Input
                design={{"type":"dark"}}
                highlighted={event_form.check_field_errored(form,"last_name")}
                value={data["last_name"]}
                onBlur={function (){
                  event_form.validate_field(form,"last_name");
                }}
                onChangeText={function (v){
                  event_form.set_field(form,"last_name",v);
                  event_form.validate_field(form,"last_name");
                }}
                addons={[inputAsterix({"type":"dark"})]}>
              </ui_input.Input>
            </n.Row>
            <n.Row
              style={{"marginTop":10,"padding":5,"flexDirection":"row-reverse"}}>
              <ui_button.Button
                disabled={!event_form.check_all_passed(form)}
                design={{"type":"dark"}}
                style={{"fontSize":12,"fontWeight":"800"}}
                text="Register">
              </ui_button.Button>
              <ui_button.Button
                design={{"type":"dark","theme":{"bg":{"key":"neutral"}}}}
                style={{"fontSize":12,"fontWeight":"800","marginHorizontal":10}}
                onPress={function (){
                  return event_form.reset_all(form);
                }}
                text="Cancel">
              </ui_button.Button>
            </n.Row>
          </ReactNative.View>
        </n.Row>
      </ReactNative.View>
    </n.Enclosed>);
}

var MODULE = {
  "RegistraionValidators":RegistraionValidators,
  "inputAsterix":inputAsterix,
  "styleInputLabel":styleInputLabel,
  "InputLightExamples":InputLightExamples,
  "InputDarkExamples":InputDarkExamples
};

export default MODULE