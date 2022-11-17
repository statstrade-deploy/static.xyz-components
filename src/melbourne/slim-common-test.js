import React from 'react'

import * as ReactNative from 'react-native'

import n from '../js/react-native'

import ext_form from '../js/react/ext-form'

import event_form from '../xt/lang/event-form'

import slim_common from './slim-common'

import validators from './base-validators'

// melbourne.slim-common-test/FormEnclosedDemo [23] 
function FormEnclosedDemo(){
  return (
    <n.Enclosed label="melbourne.slim-common/FormEnclosed">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":8}}>
          <slim_common.FormEnclosed
            designNeutral="#333"
            label="HELLO"
            styleLabel={{}}
            minWidth={150}>
            <ReactNative.View style={{"paddingTop":10}}><ReactNative.Text>WORLD</ReactNative.Text></ReactNative.View>
          </slim_common.FormEnclosed>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_common.FormEnclosed
            designNeutral="#eee"
            label="HELLO"
            styleLabel={{}}
            minWidth={150}>
            <ReactNative.View style={{"paddingTop":10}}><ReactNative.Text>WORLD</ReactNative.Text></ReactNative.View>
          </slim_common.FormEnclosed>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-common-test/FormReadOnlyDemo [60] 
function FormReadOnlyDemo(){
  let entry = {"name":"abc"};
  return (
    <n.Enclosed label="melbourne.slim-common/FormReadOnly">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_common.FormReadOnly
            design={{"type":"light"}}
            label="Name"
            entry={entry}
            fieldProps={{"outlined":true}}
            template={["name"]}>
          </slim_common.FormReadOnly>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_common.FormReadOnly
            design={{"type":"dark"}}
            label="Name"
            entry={entry}
            fieldProps={{"outlined":true}}
            template={["name"]}>
          </slim_common.FormReadOnly>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-common-test/FormInputDemo [93] 
function FormInputDemo(){
  let form = ext_form.makeForm(function (){
    return {"name":"abc"};
  },{"name":[validators.is_not_empty()]});
  React.useEffect(function (){
    event_form.validate_all(form);
  },[]);
  return (
    <n.Enclosed label="melbourne.slim-common/FormInput">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_common.FormInput
            design={{"type":"light"}}
            label="Name"
            form={form}
            fieldProps={{"outlined":true}}
            field="name">
          </slim_common.FormInput>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_common.FormInput
            design={{"type":"dark"}}
            label="Name"
            form={form}
            fieldProps={{"outlined":true}}
            field="name"
            hideValidation={true}>
          </slim_common.FormInput>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-common-test/FormInputXLDemo [138] 
function FormInputXLDemo(){
  let form = ext_form.makeForm(function (){
    return {"name":"abc"};
  },{"name":[validators.is_not_empty()]});
  React.useEffect(function (){
    event_form.validate_all(form);
  },[]);
  return (
    <n.Enclosed label="melbourne.slim-common/FormInputXL">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_common.FormInputXL
            design={{"type":"light"}}
            label="Name"
            form={form}
            fieldProps={{"outlined":true}}
            field="name">
          </slim_common.FormInputXL>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_common.FormInputXL
            design={{"type":"dark"}}
            label="Name"
            form={form}
            fieldProps={{"outlined":true}}
            field="name"
            hideValidation={true}>
          </slim_common.FormInputXL>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-common-test/FormTextAreaDemo [175] 
function FormTextAreaDemo(){
  let form = ext_form.makeForm(function (){
    return {"name":"abc"};
  },{"name":[validators.is_not_empty()]});
  React.useEffect(function (){
    event_form.validate_all(form);
  },[]);
  return (
    <n.Enclosed label="melbourne.slim-common/FormTextArea">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_common.FormTextArea
            design={{"type":"light"}}
            label="Name"
            form={form}
            fieldProps={{"outlined":true}}
            field="name">
          </slim_common.FormTextArea>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_common.FormTextArea
            design={{"type":"dark"}}
            label="Name"
            form={form}
            fieldProps={{"outlined":true}}
            field="name">
          </slim_common.FormTextArea>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-common-test/FormCheckBoxDemo [211] 
function FormCheckBoxDemo(){
  let form = ext_form.makeForm(function (){
    return {"agree":false};
  },{"agree":[]});
  return (
    <n.Enclosed label="melbourne.slim-common/FormCheckBox">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_common.FormCheckBox
            design={{"type":"light"}}
            label="I AGREE TO TERMS AND CONDITIONS"
            form={form}
            field="agree">
          </slim_common.FormCheckBox>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_common.FormCheckBox
            design={{"type":"dark"}}
            label="I AGREE TO TERMS AND CONDITIONS"
            form={form}
            field="agree">
          </slim_common.FormCheckBox>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-common-test/FormToggleButtonDemo [245] 
function FormToggleButtonDemo(){
  let form = ext_form.makeForm(function (){
    return {"agree":false};
  },{"agree":[]});
  return (
    <n.Enclosed label="melbourne.slim-common/FormToggleButton">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_common.FormToggleButton
            design={{"type":"light"}}
            label="Agree"
            form={form}
            field="agree"
            text="I AGREE TO TERMS AND CONDITIONS">
          </slim_common.FormToggleButton>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_common.FormToggleButton
            design={{"type":"dark"}}
            label="Agree"
            form={form}
            field="agree"
            text="I AGREE TO TERMS AND CONDITIONS">
          </slim_common.FormToggleButton>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-common-test/FormToggleSwitchDemo [281] 
function FormToggleSwitchDemo(){
  let form = ext_form.makeForm(function (){
    return {"agree":false};
  },{"agree":[]});
  return (
    <n.Enclosed label="melbourne.slim-common/FormToggleSwitch">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_common.FormToggleSwitch
            design={{"type":"light"}}
            label="Agree"
            form={form}
            field="agree">
          </slim_common.FormToggleSwitch>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_common.FormToggleSwitch
            design={{"type":"dark"}}
            label="Agree"
            form={form}
            field="agree">
          </slim_common.FormToggleSwitch>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-common-test/FormEnumSingleDemo [315] 
function FormEnumSingleDemo(){
  let form = ext_form.makeForm(function (){
    return {"currency":"XLM"};
  },{"currency":[]});
  return (
    <n.Enclosed label="melbourne.slim-common/FormEnumSingle">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_common.FormEnumSingle
            design={{"type":"light"}}
            label="Currency"
            form={form}
            field="currency"
            options={["XLM","USD","STATS"]}>
          </slim_common.FormEnumSingle>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_common.FormEnumSingle
            design={{"type":"dark"}}
            label="Currency"
            form={form}
            field="currency"
            options={["XLM","USD","STATS"]}>
          </slim_common.FormEnumSingle>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-common-test/FormEnumMultiDemo [349] 
function FormEnumMultiDemo(){
  let form = ext_form.makeForm(function (){
    return {"currency":["XLM","STATS"]};
  },{"currency":[]});
  return (
    <n.Enclosed label="melbourne.slim-common/FormEnumMulti">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_common.FormEnumMulti
            design={{"type":"light"}}
            label="Currency"
            form={form}
            field="currency"
            options={["XLM","USD","STATS"]}>
          </slim_common.FormEnumMulti>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_common.FormEnumMulti
            design={{"type":"dark"}}
            label="Currency"
            form={form}
            field="currency"
            options={["XLM","USD","STATS"]}>
          </slim_common.FormEnumMulti>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-common-test/FormColorInputDemo [383] 
function FormColorInputDemo(){
  let form = ext_form.makeForm(function (){
    return {"color":"#456789"};
  },{"color":[]});
  return (
    <n.Enclosed label="melbourne.slim-common/FormColorInput">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_common.FormColorInput
            design={{"type":"light"}}
            label="Color"
            form={form}
            field="color">
          </slim_common.FormColorInput>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_common.FormColorInput
            design={{"type":"dark"}}
            label="Color"
            form={form}
            field="color">
          </slim_common.FormColorInput>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-common-test/FormChipInputDemo [415] 
function FormChipInputDemo(){
  let form = ext_form.makeForm(function (){
    return {"tags":["football","sport"]};
  },{"tags":[]});
  return (
    <n.Enclosed label="melbourne.slim-common/FormChipInput">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_common.FormChipInput
            design={{"type":"light"}}
            label="Tags"
            form={form}
            field="tags">
          </slim_common.FormChipInput>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_common.FormChipInput design={{"type":"dark"}} label="Tags" form={form} field="tags"></slim_common.FormChipInput>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-common-test/FormLayoutDemo [447] 
function FormLayoutDemo(){
  let form = ext_form.makeForm(function (){
    return {
      "currency":["XLM","STATS"],
      "currency1":"USD",
      "name":"",
      "about":""
    };
  },{"currency":[],"currency1":[],"name":[],"about":[]});
  return (
    <n.Enclosed label="melbourne.slim-common/FormLayout">
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","padding":20,"flex":1}}>
          <slim_common.FormLayout
            design={{"type":"light"}}
            form={form}
            rows={[
              {
              "component":slim_common.FormEnumMulti,
              "label":"Currency",
              "field":"currency",
              "options":["XLM","USD","STATS"]
            },
              {
              "component":slim_common.FormEnumSingle,
              "label":"Currency1",
              "field":"currency1",
              "options":["USD","STATS"]
            },
              {
              "component":slim_common.FormInput,
              "label":"Name",
              "field":"name"
            },
              {
              "component":slim_common.FormTextArea,
              "label":"About",
              "field":"about"
            }
            ]}>
          </slim_common.FormLayout>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","padding":20,"flex":1}}>
          <slim_common.FormLayout
            design={{"type":"dark"}}
            form={form}
            rows={[
              {
              "component":slim_common.FormEnumMulti,
              "label":"Currency",
              "field":"currency",
              "options":["XLM","USD","STATS"]
            },
              {
              "component":slim_common.FormEnumSingle,
              "label":"Currency1",
              "field":"currency1",
              "options":["USD","STATS"]
            },
              {
              "component":slim_common.FormInput,
              "label":"Name",
              "field":"name"
            },
              {
              "component":slim_common.FormTextArea,
              "label":"About",
              "field":"about"
            }
            ]}>
          </slim_common.FormLayout>
        </ReactNative.View>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {
  "FormEnclosedDemo":FormEnclosedDemo,
  "FormReadOnlyDemo":FormReadOnlyDemo,
  "FormInputDemo":FormInputDemo,
  "FormInputXLDemo":FormInputXLDemo,
  "FormTextAreaDemo":FormTextAreaDemo,
  "FormCheckBoxDemo":FormCheckBoxDemo,
  "FormToggleButtonDemo":FormToggleButtonDemo,
  "FormToggleSwitchDemo":FormToggleSwitchDemo,
  "FormEnumSingleDemo":FormEnumSingleDemo,
  "FormEnumMultiDemo":FormEnumMultiDemo,
  "FormColorInputDemo":FormColorInputDemo,
  "FormChipInputDemo":FormChipInputDemo,
  "FormLayoutDemo":FormLayoutDemo
};

export default MODULE