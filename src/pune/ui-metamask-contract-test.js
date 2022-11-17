import GatewaySpec from '@statstrade/interface/StatstradeGateway.json'

import React from 'react'

import * as ReactNative from 'react-native'

import a from '../js/react-native/animate'

import metamask_contract from './ui-metamask-contract'

import n from '../js/react-native'

import event_box from '../xt/lang/event-box'

import k from '../xt/lang/base-lib'

import c from '../js/react-native/helper-color'

import ui from '../js/react-native/physical-base'

// pune.ui-metamask-contract-test/METAMASK [28] 
globalThis["pune_ui_metamask_contract_test$$METAMASK"] = event_box.make_box(function (){
  return {"accounts":[],"exists":false,"chain_id":null,"provider":null};
});

// pune.ui-metamask-contract-test/COIN_ADDRESS [35] 
globalThis["pune_ui_metamask_contract_test$$COIN_ADDRESS"] = {1337:null};

// pune.ui-metamask-contract-test/COIN [38] 
globalThis["pune_ui_metamask_contract_test$$COIN"] = event_box.make_box(function (){
  return {"amount":null};
});

// pune.ui-metamask-contract-test/COUNTER_ADDRESS [42] 
globalThis["pune_ui_metamask_contract_test$$COUNTER_ADDRESS"] = {
  1337:"0x6e1E10d22C7221909eb94Fdb0A3dEEd9933F2e5F",
  5:"0x98E16C00fF8977A0E8Cab7Ea97D1b339673927F7"
};

// pune.ui-metamask-contract-test/COUNTER [48] 
globalThis["pune_ui_metamask_contract_test$$COUNTER"] = event_box.make_box(function (){
  return {"counter0":null,"counter1":null};
});

// pune.ui-metamask-contract-test/MetamaskContractDemo [57] 
function MetamaskContractDemo(){
  return (
    <n.Enclosed label="pune.ui-metamask-contract/MetamaskContract"><n.TextDisplay spec={GatewaySpec}></n.TextDisplay></n.Enclosed>);
}

var MODULE = {"MetamaskContractDemo":MetamaskContractDemo};

export default MODULE