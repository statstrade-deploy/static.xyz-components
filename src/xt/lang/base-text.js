import k from './base-lib'

// xt.lang.base-text/tag-string [9] 
function tag_string(tag){
  let [ns,name] = k.sym_pair(tag);
  let desc = ns ? ((ns.split("."))[ns.split(".").length + -1] + " ") : "";
  return desc + (name || "").replace(new RegExp("_","g")," ").replace(new RegExp("-","g")," ").replace(new RegExp(desc.trim(),"g"),"");
}

var MODULE = {"tag_string":tag_string};

export default MODULE