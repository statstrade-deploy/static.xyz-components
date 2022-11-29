import React from 'react'

import * as ReactNative from 'react-native'

import r from '../react'

import n from '../react-native'

import ext_form from '../react/ext-form'

import k from '../../xt/lang/base-lib'

import event_form from '../../xt/lang/event-form'

// js.react-native.ext-form-test/RegistraionValidation [25] 
var RegistraionValidation = {
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
  ],
  "email":[
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

// js.react-native.ext-form-test/RegistrationFormDemo [42] 
function RegistrationFormDemo(){
  let form = ext_form.makeForm(function (){
    return {"first_name":"hello","last_name":"world","email":""};
  },RegistraionValidation);
  let {email,first_name,last_name} = ext_form.listenFormData(form);
  let result = ext_form.listenFormResult(form);
  let {fields} = result;
  let getCount = r.useGetCount();
  return (
    <n.Enclosed label="js.react-native.ext-form-test/RegistrationForm">
      <ReactNative.View>
        <n.Row>
          <ReactNative.TextInput
            value={first_name}
            onChangeText={event_form.field_fn(form,"first_name")}
            style={{"margin":5,"padding":5,"backgroundColor":"#eee"}}>
          </ReactNative.TextInput>
          <ReactNative.Text>
            {("errored" == fields["first_name"]["status"]) ? fields["first_name"]["message"] : null}
          </ReactNative.Text>
        </n.Row>
        <n.Row>
          <ReactNative.TextInput
            value={last_name}
            onChangeText={event_form.field_fn(form,"last_name")}
            style={{"margin":5,"padding":5,"backgroundColor":"#eee"}}>
          </ReactNative.TextInput>
          <ReactNative.Text>
            {("errored" == fields["last_name"]["status"]) ? fields["last_name"]["message"] : null}
          </ReactNative.Text>
        </n.Row>
        <n.Row>
          <ReactNative.TextInput
            value={email}
            onChangeText={event_form.field_fn(form,"email")}
            style={{"margin":5,"padding":5,"backgroundColor":"#eee"}}>
          </ReactNative.TextInput>
          <ReactNative.Text>
            {("errored" == fields["email"]["status"]) ? fields["email"]["message"] : null}
          </ReactNative.Text>
        </n.Row>
      </ReactNative.View>
      <n.Row>
        <ReactNative.Button
          title="Validate"
          onPress={function (){
            return event_form.validate_all(form);
          }}>
        </ReactNative.Button>
        <ReactNative.Button
          title="Clear"
          onPress={function (){
            return event_form.reset_all_validators(form);
          }}>
        </ReactNative.Button>
        <ReactNative.Button
          title="Reset"
          onPress={function (){
            return event_form.reset_all_data(form);
          }}>
        </ReactNative.Button>
      </n.Row>
      <n.Caption
        text={n.format_entry(
          {fields,"count":getCount(),"data":{email,first_name,last_name}}
        )}
        style={{"marginTop":10}}>
      </n.Caption>
    </n.Enclosed>);
}

var MODULE = // bcc0d744-289c-4511-8af8-59a7beb531dc
{
  "RegistraionValidation":RegistraionValidation,
  "RegistrationFormDemo":RegistrationFormDemo
};;

export default MODULE