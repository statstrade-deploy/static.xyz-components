import * as ethers from 'ethers'

import k from '../../xt/lang/base-lib'

// js.lib.eth-lib/new-rpc-provider [83] 
function new_rpc_provider(url){
  return new ethers.providers.JsonRpcProvider(url);
}

// js.lib.eth-lib/new-web3-provider [90] 
function new_web3_provider(proxy){
  return new ethers.providers.Web3Provider(proxy);
}

// js.lib.eth-lib/new-wallet [97] 
function new_wallet(privateKey,provider){
  return new ethers.Wallet(privateKey,provider);
}

// js.lib.eth-lib/new-wallet-from-mnemonic [103] 
function new_wallet_from_mnemonic(mnemonic,path,wordlist){
  return ethers.Wallet.fromMnemonic(mnemonic,path,wordlist);
}

// js.lib.eth-lib/new-contract [109] 
function new_contract(address,abi,signer){
  return new ethers.Contract(address,abi,signer);
}

// js.lib.eth-lib/new-contract-factory [115] 
function new_contract_factory(abi,bytecode,signer){
  return new ethers.ContractFactory(abi,bytecode,signer);
}

// js.lib.eth-lib/get-signer [121] 
function get_signer(url,private_key){
  let provider = new_rpc_provider(url);
  let wallet = new_wallet(private_key,provider);
  return wallet;
}

// js.lib.eth-lib/get-signer-address [129] 
function get_signer_address(url,private_key){
  let signer = get_signer(url,private_key);
  return signer.getAddress();
}

// js.lib.eth-lib/send-wei [136] 
function send_wei(signer,to_address,amount,gas_limit){
  let tx = {"gasLimit":gas_limit || 21000,"to":to_address,"value":amount};
  return signer.sendTransaction(tx);
}

// js.lib.eth-lib/contract-deploy [145] 
function contract_deploy(signer,abi,bytecode,init_args,overrides){
  let factory = new_contract_factory(abi,bytecode,signer);
  return factory.deploy(...(init_args || []),overrides);
}

// js.lib.eth-lib/contract-run [156] 
function contract_run(signer,address,abi,fn_name,args,overrides){
  let contract = new_contract(address,abi,signer);
  return contract[fn_name](...args,overrides);
}

// js.lib.eth-lib/subscribe-event [165] 
function subscribe_event(url,event_type,listener){
  let provider = new_rpc_provider(url);
  provider.on(event_type,listener);
  return function (){
    provider.off(event_type,listener);
  };
}

// js.lib.eth-lib/subscribe-once [171] 
function subscribe_once(url,event_type,listener){
  let provider = new_rpc_provider(url);
  provider.once(event_type,listener);
  return function (){
    provider.off(event_type,listener);
  };
}

var MODULE = {
  "new_rpc_provider":new_rpc_provider,
  "new_web3_provider":new_web3_provider,
  "new_wallet":new_wallet,
  "new_wallet_from_mnemonic":new_wallet_from_mnemonic,
  "new_contract":new_contract,
  "new_contract_factory":new_contract_factory,
  "get_signer":get_signer,
  "get_signer_address":get_signer_address,
  "send_wei":send_wei,
  "contract_deploy":contract_deploy,
  "contract_run":contract_run,
  "subscribe_event":subscribe_event,
  "subscribe_once":subscribe_once
};

export default MODULE