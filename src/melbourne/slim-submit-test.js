import React from 'react'

import * as ReactNative from 'react-native'

import r from '../js/react'

import n from '../js/react-native'

import ext_form from '../js/react/ext-form'

import slim_submit from './slim-submit'

import validators from './base-validators'

import event_form from '../xt/lang/event-form'

// melbourne.slim-submit-test/UseSubmitDemo [25] 
function UseSubmitDemo(){
  let onSubmit = function (){
    return new Promise(function (resolve,reject){
      setTimeout(function (){
        try{
          resolve(          (function (){
                      return {
                        "status":"error",
                        "body":{"tag":"user.account/incorrect_password"}
                      };
                    })());
        }
        catch(e){
          reject(e);
        }
      },200);
    });
  };
  let [result,setResult] = React.useState(function (){
    return null;
  });
  let {onAction,setWaiting,waiting} = r.useSubmit({onSubmit,setResult});
  return (
    <n.Enclosed label="melbourne.slim-submit/useSubmit">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","padding":10,"flex":1}}>
          <n.Row>
            <ReactNative.Button title="Action" onPress={onAction}></ReactNative.Button>
            <ReactNative.Text> </ReactNative.Text>
            <ReactNative.Button
              title="Clear"
              onPress={function (){
                return setResult(null);
              }}>
            </ReactNative.Button>
            <ReactNative.Text> </ReactNative.Text>
          </n.Row>
        </ReactNative.View>
      </n.Row>
      <n.TextDisplay content={n.format_entry({result,waiting})}></n.TextDisplay>
    </n.Enclosed>);
}

// melbourne.slim-submit-test/SubmitButtonDemo [61] 
function SubmitButtonDemo(){
  let [errored,setErrored] = React.useState(true);
  return (
    <n.Isolation>
      <n.Enclosed label="melbourne.slim-submit/SubmitButton">
        <n.Row>
          <ReactNative.View style={{"backgroundColor":"#eee","padding":10}}>
            <slim_submit.SubmitButton design={{"type":"light"}} text="HELLO"></slim_submit.SubmitButton>
            <ReactNative.View style={{"height":10}}></ReactNative.View>
            <slim_submit.SubmitButton design={{"type":"light"}} waiting={true} text="HELLO"></slim_submit.SubmitButton>
            <ReactNative.View style={{"height":10}}></ReactNative.View>
            <slim_submit.SubmitButton
              design={{"type":"light"}}
              style={{"width":150,"textAlign":"center"}}
              text="CHANGE PASSWORD"
              errored={errored}
              onPress={function (){
                return setErrored(!errored);
              }}>
            </slim_submit.SubmitButton>
          </ReactNative.View>
          <ReactNative.View style={{"backgroundColor":"#333","padding":10}}>
            <slim_submit.SubmitButton design={{"type":"dark"}} text="HELLO"></slim_submit.SubmitButton>
            <ReactNative.View style={{"height":10}}></ReactNative.View>
            <slim_submit.SubmitButton
              design={{"type":"dark"}}
              style={{"width":150}}
              waiting={true}
              text="HELLO">
            </slim_submit.SubmitButton>
            <ReactNative.View style={{"height":10}}></ReactNative.View>
            <slim_submit.SubmitButton
              design={{"type":"dark"}}
              style={{"width":150}}
              errored={errored}
              text="CHANGE PASSWORD"
              onPress={function (){
                return setErrored(!errored);
              }}>
            </slim_submit.SubmitButton>
          </ReactNative.View>
        </n.Row>
      </n.Enclosed>
    </n.Isolation>);
}

// melbourne.slim-submit-test/SubmitLineDemo [112] 
function SubmitLineDemo(){
  let [errored,setErrored] = React.useState(true);
  return (
    <n.Isolation>
      <n.Enclosed label="melbourne.slim-submit/SubmitLine">
        <n.Row>
          <ReactNative.View style={{"backgroundColor":"#eee","padding":10}}>
            <slim_submit.SubmitLine
              design={{"type":"light"}}
              errored={errored}
              onActionPress={function (){
                return setErrored(!errored);
              }}
              onActionReset={function (){
                return setErrored(false);
              }}>
            </slim_submit.SubmitLine>
          </ReactNative.View>
        </n.Row>
      </n.Enclosed>
    </n.Isolation>);
}

// melbourne.slim-submit-test/SubmitLineActionsDemo [136] 
function SubmitLineActionsDemo(){
  let [errored,setErrored] = React.useState();
  return (
    <n.Isolation>
      <n.Enclosed label="melbourne.slim-submit/SubmitLineActions">
        <n.Row>
          <ReactNative.View style={{"backgroundColor":"#eee","padding":10}}>
            <slim_submit.SubmitLineActions
              design={{"type":"light"}}
              errored={errored}
              clearShow={true}
              cancelShow={true}
              onActionPress={function (){
                return setErrored(!errored);
              }}
              onActionReset={function (){
                return setErrored(false);
              }}>
            </slim_submit.SubmitLineActions>
          </ReactNative.View>
        </n.Row>
      </n.Enclosed>
    </n.Isolation>);
}

// melbourne.slim-submit-test/UseSubmitFieldDemo [159] 
function UseSubmitFieldDemo(){
  let form = ext_form.makeForm(function (){
    return {"email":"a@a.com"};
  },{
    "email":[validators.is_required(),validators.is_valid_email()]
  });
  let email = ext_form.listenFieldValue(form,"email");
  let validation = ext_form.listenFieldResult(form,"email",{"custom":"VALIDATION"});
  let submitProps = slim_submit.useSubmitField({form,"field":"email","onSubmit":function (){
      return new Promise(function (resolve,reject){
        setTimeout(function (){
          try{
            resolve(          (function (){
                        return {"status":"error","tag":"user.account/incorrect_password"};
                      })());
          }
          catch(e){
            reject(e);
          }
        },500);
      });
    },"explicit":false});
  return (
    <n.Isolation>
      <n.Enclosed label="melbourne.slim-submit/useSubmitField">
        <n.Row>
          <ReactNative.View style={{"backgroundColor":"#eee","padding":10}}>
            <ReactNative.TextInput
              value={event_form.get_field(form,"email")}
              onChangeText={function (val){
                event_form.set_field(form,"email",val);
                event_form.validate_all(form);
              }}>
            </ReactNative.TextInput>
            <ReactNative.View style={{"height":10}}></ReactNative.View>
            <slim_submit.SubmitLine
              design={{"type":"light"}}
              errorProps={{"row":true}}
              {...submitProps}>
            </slim_submit.SubmitLine>
          </ReactNative.View>
          <ReactNative.View style={{"backgroundColor":"#333","padding":10}}>
            <ReactNative.View style={{"height":10}}></ReactNative.View>
            <slim_submit.SubmitLine
              design={{"type":"dark"}}
              errorProps={{"row":true}}
              {...submitProps}>
            </slim_submit.SubmitLine>
          </ReactNative.View>
        </n.Row>
        <n.TextDisplay content={n.format_entry({submitProps,validation})}></n.TextDisplay>
      </n.Enclosed>
    </n.Isolation>);
}

// melbourne.slim-submit-test/UseSubmitFormDemo [212] 
function UseSubmitFormDemo(){
  let form = ext_form.makeForm(function (){
    return {"email":"a@a.com"};
  },{
    "email":[validators.is_required(),validators.is_valid_email()]
  });
  let email = ext_form.listenFieldValue(form,"email");
  let validation = ext_form.listenFormResult(form,{"custom":"VALIDATION"});
  let {errored,onAction,onActionCheck,onActionPress,onActionReset,result,setResult,setWaiting,waiting} = slim_submit.useSubmitForm({form,"onSubmit":function (){
      return new Promise(function (resolve,reject){
        setTimeout(function (){
          try{
            resolve(          (function (){
                        return {"status":"error","tag":"user.account/incorrect_password"};
                      })());
          }
          catch(e){
            reject(e);
          }
        },500);
      });
    },"explicit":false});
  return (
    <n.Isolation>
      <n.Enclosed label="melbourne.slim-submit/useSubmitForm">
        <n.Row>
          <ReactNative.View style={{"backgroundColor":"#eee","padding":10}}>
            <ReactNative.TextInput
              value={event_form.get_field(form,"email")}
              onChangeText={function (val){
                event_form.set_field(form,"email",val);
                event_form.validate_all(form);
              }}>
            </ReactNative.TextInput>
            <ReactNative.View style={{"height":10}}></ReactNative.View>
            <slim_submit.SubmitLine
              onActionPress={onActionPress}
              setResult={setResult}
              onActionReset={onActionReset}
              setWaiting={setWaiting}
              onActionCheck={onActionCheck}
              errorProps={{"row":true}}
              onAction={onAction}
              waiting={waiting}
              design={{"type":"light"}}
              result={result}
              errored={errored}>
            </slim_submit.SubmitLine>
          </ReactNative.View>
        </n.Row>
        <n.TextDisplay
          content={n.format_entry({errored,result,validation,waiting})}>
        </n.TextDisplay>
      </n.Enclosed>
    </n.Isolation>);
}

var MODULE = {
  "UseSubmitDemo":UseSubmitDemo,
  "SubmitButtonDemo":SubmitButtonDemo,
  "SubmitLineDemo":SubmitLineDemo,
  "SubmitLineActionsDemo":SubmitLineActionsDemo,
  "UseSubmitFieldDemo":UseSubmitFieldDemo,
  "UseSubmitFormDemo":UseSubmitFormDemo
};

export default MODULE