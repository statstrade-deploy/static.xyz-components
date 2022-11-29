import * as ReactNative from 'react-native'

import slim_entry from './slim-entry'

import event_form from '../xt/lang/event-form'

import n from '../js/react-native'

import ext_form from '../js/react/ext-form'

import k from '../xt/lang/base-lib'

import validators from './base-validators'

import ext_route from '../js/react/ext-route'

import event_route from '../xt/lang/event-route'

import ui_static from './ui-static'

// melbourne.slim-entry-test/EntryFreeDemo [29] 
function EntryFreeDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryFree">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryFree
            design={{"type":"light"}}
            entry={entry}
            impl={{
              "key":"title",
              "component":slim_entry.EntryContentTitle,
              "template":["currency_id"]
            }}
            custom={{"title":{"style":{"padding":10}}}}>
          </slim_entry.EntryFree>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{
              "type":"free",
              "key":"title",
              "component":slim_entry.EntryContentParagraph,
              "template":["currency_id"]
            }}
            custom={{"title":{"style":{"padding":10}}}}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryContentRawDemo [64] 
function EntryContentRawDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryContentRaw">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentRaw design={{"type":"light"}} entry={entry}></slim_entry.EntryContentRaw>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry design={{"type":"dark"}} impl={{"type":"raw"}} entry={entry}></slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryContentRawFormDemo [91] 
function EntryContentRawFormDemo(){
  let form = ext_form.makeForm(function (){
    return {"currency_id":"STATS","balance":1000,"escrow":50.5};
  },{});
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryContentRawForm">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentRawForm design={{"type":"light"}} form={form}></slim_entry.EntryContentRawForm>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            impl={{"type":"raw_form"}}
            form={form}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryContentFillDemo [120] 
function EntryContentFillDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryContentFill">
      <n.Row style={{"height":30}}>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentFill design={{"type":"light"}} entry={entry}></slim_entry.EntryContentFill>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry design={{"type":"dark"}} impl={{"type":"fill"}} entry={entry}></slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryLayoutHorizontalDemo [151] 
function EntryLayoutHorizontalDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryLayoutHorizontal">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryLayoutHorizontal
            design={{"type":"light"}}
            impl={{
              "body":[
                (
                <slim_entry.EntryContentTitle
                  key="title"
                  design={{"type":"light"}}
                  entry={entry}
                  impl={{"key":"title","template":["currency_id"]}}
                  custom={{"title":{"style":{"padding":10}}}}>
                </slim_entry.EntryContentTitle>),
                (
                <slim_entry.EntryContentParagraph
                  key="body"
                  design={{"type":"light"}}
                  entry={entry}
                  impl={{"key":"body","template":["balance"]}}
                  custom={{"body":{"style":{"padding":10}}}}>
                </slim_entry.EntryContentParagraph>)
              ]
            }}>
          </slim_entry.EntryLayoutHorizontal>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            custom={{
              "title":{"style":{"padding":10}},
              "body":{"style":{"padding":10}}
            }}
            entry={entry}
            impl={{
              "type":"h",
              "body":[
                {"type":"title","key":"title","template":["currency_id"]},
                {"type":"p","key":"body","template":["balance"]}
              ]
            }}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryLayoutVerticalDemo [199] 
function EntryLayoutVerticalDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryLayoutVertical">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryLayoutVertical
            design={{"type":"light"}}
            impl={{
              "body":[
                (
                <slim_entry.EntryContentTitle
                  key="title"
                  design={{"type":"light"}}
                  entry={entry}
                  impl={{"key":"title","template":["currency_id"]}}
                  custom={{"title":{"style":{"padding":10}}}}>
                </slim_entry.EntryContentTitle>),
                (
                <slim_entry.EntryContentParagraph
                  key="body"
                  design={{"type":"light"}}
                  entry={entry}
                  impl={{"key":"body","template":["balance"]}}
                  custom={{"body":{"style":{"padding":10}}}}>
                </slim_entry.EntryContentParagraph>)
              ]
            }}>
          </slim_entry.EntryLayoutVertical>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            custom={{
              "title":{"style":{"padding":10}},
              "body":{"style":{"padding":10}}
            }}
            entry={entry}
            impl={{
              "type":"v",
              "body":[
                {"type":"title","key":"title","template":["currency_id"]},
                {"type":"p","key":"body","template":["balance"]}
              ]
            }}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryLayoutEnclosedDemo [247] 
function EntryLayoutEnclosedDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryLayoutEnclosed">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryLayoutEnclosed
            design={{"type":"light"}}
            impl={{
              "label":"ENCLOSED",
              "body":[
                (
                <slim_entry.EntryContentTitle
                  key="title"
                  design={{"type":"light"}}
                  entry={entry}
                  impl={{"key":"title","template":["currency_id"]}}
                  custom={{"title":{"style":{"padding":10}}}}>
                </slim_entry.EntryContentTitle>),
                (
                <slim_entry.EntryContentParagraph
                  key="body"
                  design={{"type":"light"}}
                  entry={entry}
                  impl={{"key":"body","template":["balance"]}}
                  custom={{"body":{"style":{"padding":10}}}}>
                </slim_entry.EntryContentParagraph>)
              ]
            }}>
          </slim_entry.EntryLayoutEnclosed>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            custom={{
              "title":{"style":{"padding":10}},
              "body":{"style":{"padding":10}}
            }}
            entry={entry}
            impl={{
              "type":"enclosed",
              "label":"ENCLOSED",
              "body":[
                {"type":"title","key":"title","template":["currency_id"]},
                {"type":"p","key":"body","template":["balance"]}
              ]
            }}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryLayoutPortalDemo [298] 
function EntryLayoutPortalDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryLayoutPortal">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <n.PortalSink name="light"></n.PortalSink>
          <slim_entry.EntryLayoutPortal
            design={{"type":"light"}}
            impl={{
              "target":"light",
              "body":[
                (
                <slim_entry.EntryContentTitle
                  key="title"
                  design={{"type":"light"}}
                  entry={entry}
                  impl={{"key":"title","template":["currency_id"]}}
                  custom={{"title":{"style":{"padding":10}}}}>
                </slim_entry.EntryContentTitle>),
                (
                <slim_entry.EntryContentParagraph
                  key="body"
                  design={{"type":"light"}}
                  entry={entry}
                  impl={{"key":"body","template":["balance"]}}
                  custom={{"body":{"style":{"padding":10}}}}>
                </slim_entry.EntryContentParagraph>)
              ]
            }}>
          </slim_entry.EntryLayoutPortal>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <n.PortalSink name="dark"></n.PortalSink>
          <slim_entry.Entry
            design={{"type":"dark"}}
            custom={{
              "title":{"style":{"padding":10}},
              "body":{"style":{"padding":10}}
            }}
            entry={entry}
            impl={{
              "type":"portal",
              "target":"dark",
              "body":[
                {"type":"title","key":"title","template":["currency_id"]},
                {"type":"p","key":"body","template":["balance"]}
              ]
            }}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryLayoutPortalSinkDemo [353] 
function EntryLayoutPortalSinkDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryLayoutPortalSink">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryLayoutPortalSink design={{"type":"light"}} impl={{"name":"hello_light"}}></slim_entry.EntryLayoutPortalSink>
          <slim_entry.EntryLayoutPortal
            design={{"type":"light"}}
            impl={{
              "target":"hello_light",
              "body":[
                (
                <slim_entry.EntryContentTitle
                  key="title"
                  design={{"type":"light"}}
                  entry={entry}
                  impl={{"key":"title","template":["currency_id"]}}
                  custom={{"title":{"style":{"padding":10}}}}>
                </slim_entry.EntryContentTitle>),
                (
                <slim_entry.EntryContentParagraph
                  key="body"
                  design={{"type":"light"}}
                  entry={entry}
                  impl={{"key":"body","template":["balance"]}}
                  custom={{"body":{"style":{"padding":10}}}}>
                </slim_entry.EntryContentParagraph>)
              ]
            }}>
          </slim_entry.EntryLayoutPortal>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            custom={{
              "title":{"style":{"padding":10}},
              "body":{"style":{"padding":10}}
            }}
            entry={entry}
            impl={{"type":"portal_sink","name":"hello_dark"}}>
          </slim_entry.Entry>
          <slim_entry.Entry
            design={{"type":"dark"}}
            custom={{
              "title":{"style":{"padding":10}},
              "body":{"style":{"padding":10}}
            }}
            entry={entry}
            impl={{
              "type":"portal",
              "target":"hello_dark",
              "body":[
                {"type":"title","key":"title","template":["currency_id"]},
                {"type":"p","key":"body","template":["balance"]}
              ]
            }}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryContentScrollDemo [414] 
function EntryContentScrollDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryContentScroll">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":10}}>
          <slim_entry.EntryLayoutScroll design={{"type":"light"}} entry={entry} impl={{"key":"body"}}></slim_entry.EntryLayoutScroll>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1,"padding":10}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"scroll"}}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryLayoutPopupDemo [444] 
function EntryLayoutPopupDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Isolation>
      <n.Enclosed label="melbourne.slim-entry/EntryLayoutPopup">
        <n.Row>
          <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":10}}></ui_static.Div>
          <ui_static.Div design={{"type":"dark"}} style={{"flex":1,"padding":10}}>
            <slim_entry.Entry
              design={{"type":"dark"}}
              entry={entry}
              actions={{
                "hello":function (){
                  return alert("HELLO");
                }
              }}
              impl={{
                "type":"popup",
                "text":"HELLO",
                "body":[
                  {
                  "type":"v",
                  "style":{"height":100,"width":100},
                  "body":[
                    {"template":"hello world"},
                    {"type":"action","text":"HELLO","submit":"hello"}
                  ]
                }
                ]
              }}>
            </slim_entry.Entry>
          </ui_static.Div>
        </n.Row>
      </n.Enclosed>
    </n.Isolation>);
}

// melbourne.slim-entry-test/EntryLayoutDebugDemo [485] 
function EntryLayoutDebugDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryLayoutDebug">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":10}}>
          <slim_entry.EntryLayoutDebug
            design={{"type":"light"}}
            entry={entry}
            impl={{
              "key":"body",
              "body":[
                (
                <ReactNative.Text key="name">Hello World</ReactNative.Text>)
              ]
            }}>
          </slim_entry.EntryLayoutDebug>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1,"padding":10}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"debug","body":[{"template":"hellp world"}]}}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryContentSeparatorDemo [519] 
function EntryContentSeparatorDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryContentSeparator">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":10}}>
          <slim_entry.EntryContentSeparator design={{"type":"light"}} entry={entry} impl={{"key":"body"}}></slim_entry.EntryContentSeparator>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1,"padding":10}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"separator"}}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryContentTitleH1Demo [552] 
function EntryContentTitleH1Demo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryContentTitleH1">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentTitleH1
            design={{"type":"light"}}
            entry={entry}
            impl={{"key":"title_h1","template":["currency_id"]}}
            custom={{"title":{"style":{"padding":10}}}}>
          </slim_entry.EntryContentTitleH1>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"title_h1","key":"title","template":["currency_id"]}}
            custom={{"title":{"style":{"padding":10}}}}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryContentTitleH2Demo [585] 
function EntryContentTitleH2Demo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryContentTitleH2">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentTitleH2
            design={{"type":"light"}}
            entry={entry}
            impl={{"key":"title_h2","template":["currency_id"]}}
            custom={{"title":{"style":{"padding":10}}}}>
          </slim_entry.EntryContentTitleH2>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"title_h2","key":"title","template":["currency_id"]}}
            custom={{"title":{"style":{"padding":10}}}}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryContentTitleH3Demo [618] 
function EntryContentTitleH3Demo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryContentTitleH3">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentTitleH3
            design={{"type":"light"}}
            entry={entry}
            impl={{"key":"title_h3","template":["currency_id"]}}
            custom={{"title":{"style":{"padding":10}}}}>
          </slim_entry.EntryContentTitleH3>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"title_h3","key":"title","template":["currency_id"]}}
            custom={{"title":{"style":{"padding":10}}}}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryContentTitleH4Demo [651] 
function EntryContentTitleH4Demo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryContentTitleH4">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentTitleH4
            design={{"type":"light"}}
            entry={entry}
            impl={{"key":"title_h4","template":["currency_id"]}}
            custom={{"title":{"style":{"padding":10}}}}>
          </slim_entry.EntryContentTitleH4>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"title_h4","key":"title","template":["currency_id"]}}
            custom={{"title":{"style":{"padding":10}}}}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryContentTitleH5Demo [684] 
function EntryContentTitleH5Demo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryContentTitleH5">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentTitleH5
            design={{"type":"light"}}
            entry={entry}
            impl={{"key":"title_h5","template":["currency_id"]}}
            custom={{"title":{"style":{"padding":10}}}}>
          </slim_entry.EntryContentTitleH5>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"title_h5","key":"title","template":["currency_id"]}}
            custom={{"title":{"style":{"padding":10}}}}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryContentTitleDemo [717] 
function EntryContentTitleDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryContentTitle">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentTitle
            design={{"type":"light"}}
            entry={entry}
            impl={{"key":"title","template":["currency_id"]}}
            custom={{"title":{"style":{"padding":10}}}}>
          </slim_entry.EntryContentTitle>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"title","key":"title","template":["currency_id"]}}
            custom={{"title":{"style":{"padding":10}}}}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryContentBoldDemo [750] 
function EntryContentBoldDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryContentBold">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentBold
            design={{"type":"light"}}
            entry={entry}
            impl={{"key":"bold_","template":["currency_id"]}}
            custom={{"bold":{"style":{"padding":10}}}}>
          </slim_entry.EntryContentBold>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"bold_","key":"bold","template":["currency_id"]}}
            custom={{"bold":{"style":{"padding":10}}}}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryContentParagraphDemo [783] 
function EntryContentParagraphDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryContentParagraph">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentParagraph
            design={{"type":"light"}}
            entry={entry}
            impl={{"key":"body","template":["balance"]}}
            custom={{"body":{"style":{"padding":10}}}}>
          </slim_entry.EntryContentParagraph>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"p","key":"body","template":["balance"]}}
            custom={{"body":{"style":{"padding":10}}}}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryContentIconDemo [816] 
function EntryContentIconDemo(){
  let entry = {"name":"home"};
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryContentIcon">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentIcon
            design={{"type":"light"}}
            entry={entry}
            impl={{"key":"body","template":["name"]}}
            custom={{"body":{"style":{"padding":10}}}}>
          </slim_entry.EntryContentIcon>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"icon","key":"body","template":["name"]}}
            custom={{"body":{"style":{"padding":10}}}}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryContentImageDemo [847] 
function EntryContentImageDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryContentImage">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentImage
            design={{"type":"light"}}
            entry={entry}
            impl={{
              "text":{"template":["currency_id"]},
              "format":function (arr){
                return arr[0];
              }
            }}>
          </slim_entry.EntryContentImage>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{
              "type":"image",
              "text":{"template":["currency_id"]},
              "format":function (arr){
                return arr[0];
              }
            }}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryContentPairDemo [878] 
function EntryContentPairDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryContentPair">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentPair
            design={{"type":"light"}}
            entry={entry}
            impl={{
              "title":{"template":"currency: "},
              "text":{"template":["currency_id"]}
            }}>
          </slim_entry.EntryContentPair>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            custom={{"title":{"style":{"fontWeight":"900"}}}}
            impl={{
              "type":"pair",
              "title":{
                "type":"title",
                "key":"title",
                "template":"currency",
                "format":function (s){
                  return s.toUpperCase() + ": ";
                }
              },
              "text":{"template":["currency_id"]}
            }}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryContentFieldDemo [913] 
function EntryContentFieldDemo(){
  let form = ext_form.makeForm(function (){
    return {
      "currency":["XLM","STATS"],
      "currency1":"USD",
      "name":"",
      "about":""
    };
  },{"currency":[],"currency1":[],"name":[],"about":[]});
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryContentField">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentField
            design={{"type":"light"}}
            form={form}
            mini={true}
            impl={{"type":"field","label":"Name","field":"name"}}>
          </slim_entry.EntryContentField>
          <slim_entry.EntryContentField
            design={{"type":"light"}}
            form={form}
            mini={true}
            impl={{
              "type":"field",
              "field":"currency",
              "component":"enum_multi",
              "label":"Currency",
              "options":["XLM","USD","STATS"]
            }}>
          </slim_entry.EntryContentField>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            form={form}
            mini={true}
            impl={{
              "type":"v",
              "body":[
                {"type":"field","label":"Name","field":"name"},
                {
                "type":"field",
                "field":"currency",
                "component":"enum_multi",
                "label":"Currency",
                "options":["XLM","USD","STATS"]
              }
              ]
            }}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryLayoutFormFadeDemo [968] 
function EntryLayoutFormFadeDemo(){
  let form = ext_form.makeForm(function (){
    return {"visible":true};
  },{"visible":true});
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryLayoutFormFade">
      <n.Row>
        <ReactNative.Button
          title="T"
          onPress={function (){
            return event_form.set_field(form,"visible",!event_form.get_field(form,"visible"));
          }}>
        </ReactNative.Button>
      </n.Row>
      <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
        <slim_entry.EntryLayoutFormFade
          design={{"type":"light"}}
          form={form}
          mini={true}
          impl={{
            "template":["visible"],
            "watch":["visible"],
            "body":[
              (
              <ReactNative.View style={{"height":100,"width":100,"backgroundColor":"red"}}></ReactNative.View>)
            ]
          }}>
        </slim_entry.EntryLayoutFormFade>
      </ui_static.Div>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryLayoutFormFoldDemo [1002] 
function EntryLayoutFormFoldDemo(){
  let form = ext_form.makeForm(function (){
    return {"visible":true};
  },{"visible":true});
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryLayoutFormFold">
      <n.Row>
        <ReactNative.Button
          title="T"
          onPress={function (){
            return event_form.set_field(form,"visible",!event_form.get_field(form,"visible"));
          }}>
        </ReactNative.Button>
      </n.Row>
      <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
        <slim_entry.EntryLayoutFormFold
          design={{"type":"light"}}
          form={form}
          mini={true}
          impl={{
            "template":["visible"],
            "watch":["visible"],
            "body":[
              (
              <ReactNative.View style={{"height":100,"width":100,"backgroundColor":"red"}}></ReactNative.View>)
            ]
          }}>
        </slim_entry.EntryLayoutFormFold>
      </ui_static.Div>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryContentControlDemo [1048] 
function EntryContentControlDemo(){
  let entry = {
    "id":"hello",
    "currency_id":"STATS",
    "balance":1000,
    "escrow":50.5
  };
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryContentControl">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentControl
            design={{"type":"light"}}
            entry={entry}
            custom={{"hello":{"text":"Hello"}}}
            control={{
              "setShowDetail":function (e){
                return alert(JSON.stringify(e));
              }
            }}
            impl={{"key":"hello","submit":"detail"}}>
          </slim_entry.EntryContentControl>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            custom={{"hello":{"text":"Hello"}}}
            control={{
              "setShowDetail":function (e){
                return alert(JSON.stringify(e));
              }
            }}
            impl={{"type":"control","key":"hello","submit":"detail"}}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryLayoutControlDemo [1084] 
function EntryLayoutControlDemo(){
  let entry = {
    "id":"hello",
    "currency_id":"STATS",
    "balance":1000,
    "escrow":50.5
  };
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryLayoutControl">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryLayoutControl
            design={{"type":"light"}}
            entry={entry}
            custom={{"hello":{"text":"Hello"}}}
            control={{
              "setShowDetail":function (e){
                return alert(JSON.stringify(e));
              }
            }}
            impl={{
              "key":"hello",
              "submit":"detail",
              "body":[
                (
                <ReactNative.Text>PRESS</ReactNative.Text>)
              ]
            }}>
          </slim_entry.EntryLayoutControl>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            custom={{"hello":{"text":"Hello"}}}
            control={{
              "setShowDetail":function (e){
                return alert(JSON.stringify(e));
              }
            }}
            impl={{
              "type":"control_layout",
              "key":"hello",
              "submit":"detail",
              "body":[{"type":"raw"}]
            }}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryContentLinkDemo [1122] 
function EntryContentLinkDemo(){
  let route = ext_route.makeRoute("hello/world");
  let url = ext_route.listenRouteUrl(route);
  let entry = {"a":1,"b":2};
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryContentLink">
      <ReactNative.Text>{url}</ReactNative.Text>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentLink
            design={{"type":"light"}}
            entry={entry}
            route={route}
            impl={{"template":"hello/world/again","text":"PRESS"}}>
          </slim_entry.EntryContentLink>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            route={route}
            impl={{"type":"link","template":"hello/world","text":"PRESS"}}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryLayoutLinkDemo [1156] 
function EntryLayoutLinkDemo(){
  let route = ext_route.makeRoute("hello/world");
  let url = ext_route.listenRouteUrl(route);
  let entry = {"a":1,"b":2};
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryLayoutLink">
      <ReactNative.Text>{url}</ReactNative.Text>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryLayoutLink
            design={{"type":"light"}}
            entry={entry}
            route={route}
            impl={{
              "template":"hello/world/again",
              "body":[
                (
                <ReactNative.Text>PRESS</ReactNative.Text>)
              ]
            }}>
          </slim_entry.EntryLayoutLink>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            route={route}
            impl={{
              "type":"link_layout",
              "template":"hello/world",
              "body":[{"type":"raw"}]
            }}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryContentRouteDemo [1190] 
function EntryContentRouteDemo(){
  let entry = {
    "id":"hello",
    "currency_id":"STATS",
    "balance":1000,
    "escrow":50.5
  };
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryContentRoute">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}></ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}></ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryContentRouteToggleDemo [1226] 
function EntryContentRouteToggleDemo(){
  let entry = {
    "id":"hello",
    "currency_id":"STATS",
    "balance":1000,
    "escrow":50.5
  };
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryContentRouteToggle">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}></ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}></ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryContentActionDemo [1262] 
function EntryContentActionDemo(){
  let entry = {
    "id":"hello",
    "currency_id":"STATS",
    "balance":1000,
    "escrow":50.5
  };
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryContentAction">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentAction
            design={{"type":"light"}}
            entry={entry}
            actions={{
              "print":function (e){
                return alert(JSON.stringify(e));
              }
            }}
            impl={{"submit":"print","text":"HELLO","submitType":"entry"}}>
          </slim_entry.EntryContentAction>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            actions={{
              "print":function (e){
                return alert(JSON.stringify(e));
              }
            }}
            impl={{
              "type":"action",
              "text":"HELLO",
              "submit":"print",
              "submitType":"entry"
            }}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryContentSubmitDemo [1298] 
function EntryContentSubmitDemo(){
  let form = ext_form.makeForm(function (){
    return {
      "name":"NBA",
      "title":"National Basketball Association",
      "description":""
    };
  },{
    "name":[validators.is_required()],
    "title":[validators.is_required()],
    "description":[]
  });
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryContentSubmit">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentSubmit
            actions={{
              "create":function (data){
                return alert(JSON.stringify(data));
              }
            }}
            form={form}
            impl={{"submit":"create"}}>
          </slim_entry.EntryContentSubmit>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            actions={{
              "create":function (data){
                return alert(JSON.stringify(data));
              }
            }}
            mini={true}
            form={form}
            impl={{"type":"submit","submit":"create"}}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryLayoutCardDemo [1333] 
function EntryLayoutCardDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryLayoutCard">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryLayoutCard
            design={{"type":"light"}}
            entry={entry}
            impl={{
              "body":{
                "title":(
                  <slim_entry.EntryContentTitle
                    design={{"type":"light"}}
                    entry={entry}
                    impl={{"key":"title","template":["currency_id"]}}
                    custom={{"title":{"style":{"padding":10}}}}>
                  </slim_entry.EntryContentTitle>)
              }
            }}>
          </slim_entry.EntryLayoutCard>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            custom={{"title":{"style":{"padding":10}}}}
            impl={{
              "type":"card",
              "body":{
                "title":{"type":"title","key":"title","template":["currency_id"]}
              }
            }}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryLayoutFormDemo [1373] 
function EntryLayoutFormDemo(){
  let form = ext_form.makeForm(function (){
    return {
      "name":"NBA",
      "title":"National Basketball Association",
      "description":""
    };
  },{
    "name":[validators.is_required()],
    "title":[validators.is_required()],
    "description":[]
  });
  return (
    <n.Enclosed label="melbourne.slim-entry/EntryLayoutForm">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryLayoutForm
            actions={{
              "create":function (data){
                return alert(JSON.stringify(data));
              }
            }}
            form={form}
            impl={{
              "submit":"create",
              "body":[
                (
                <slim_entry.EntryContentField
                  key={0}
                  design={{"type":"light"}}
                  form={form}
                  mini={true}
                  impl={{"type":"field","label":"Name","field":"name"}}>
                </slim_entry.EntryContentField>),
                (
                <slim_entry.EntryContentField
                  key={1}
                  design={{"type":"light"}}
                  form={form}
                  mini={true}
                  impl={{"type":"field","label":"Title","field":"title"}}>
                </slim_entry.EntryContentField>)
              ]
            }}>
          </slim_entry.EntryLayoutForm>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            actions={{
              "create":function (data){
                return alert(JSON.stringify(data));
              }
            }}
            mini={true}
            form={form}
            impl={{
              "type":"form",
              "submit":"create",
              "body":[
                {"type":"field","label":"Name","field":"name"},
                {"type":"field","label":"Title","field":"title"}
              ]
            }}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

// melbourne.slim-entry-test/EntryDemo [1436] 
function EntryDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Enclosed label="melbourne.slim-entry/Entry">
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"light"}}
            entry={entry}
            impl={{"type":"title","template":["currency_id"]}}>
          </slim_entry.Entry>
          <slim_entry.Entry
            design={{"type":"light"}}
            entry={entry}
            impl={{"type":"p","template":["currency_id"]}}>
          </slim_entry.Entry>
          <slim_entry.Entry design={{"type":"light"}} impl={{"type":"separator"}}></slim_entry.Entry>
          <slim_entry.Entry
            design={{"type":"light"}}
            entry={entry}
            impl={{
              "type":"image",
              "text":{
                "template":["currency_id"],
                "format":function (arr){
                  return arr[0];
                }
              }
            }}>
          </slim_entry.Entry>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{
              "type":"card",
              "body":{
                "main":{
                  "type":"v",
                  "body":[
                    {"key":"entry","type":"p","template":["currency_id"]},
                    {
                    "type":"h",
                    "body":[
                      {"key":"entry","type":"title","template":["escrow"]},
                      {"type":"p","template":["balance"]}
                    ]
                  }
                  ]
                }
              }
            }}>
          </slim_entry.Entry>
          <slim_entry.Entry
            design={{"type":"light"}}
            entry={entry}
            custom={{
              "row":{"style":{"padding":5}},
              "entry":{"style":{"padding":3}}
            }}
            impl={{
              "key":"row",
              "type":"v",
              "body":[
                {
                "type":"h",
                "body":[
                  {"type":"p","template":["currency_id"]},
                  {"type":"title","template":["escrow"]},
                  {"type":"p","template":["balance"]}
                ]
              },
                {
                "type":"v",
                "body":[
                  {"type":"p","template":["currency_id"]},
                  {"type":"title","template":["balance"]}
                ]
              }
              ]
            }}>
          </slim_entry.Entry>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"title","template":["currency_id"]}}>
          </slim_entry.Entry>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"p","template":["currency_id"]}}>
          </slim_entry.Entry>
          <slim_entry.Entry design={{"type":"dark"}} impl={{"type":"separator"}}></slim_entry.Entry>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{
              "type":"image",
              "text":{
                "template":["currency_id"],
                "format":function (arr){
                  return arr[0];
                }
              }
            }}>
          </slim_entry.Entry>
          <slim_entry.Entry
            design={{"type":"light"}}
            entry={entry}
            impl={{
              "type":"card",
              "body":{
                "main":{
                  "type":"v",
                  "body":[
                    {"key":"entry","type":"p","template":["currency_id"]},
                    {
                    "type":"h",
                    "body":[
                      {"key":"entry","type":"title","template":["escrow"]},
                      {"type":"p","template":["balance"]}
                    ]
                  }
                  ]
                }
              }
            }}>
          </slim_entry.Entry>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            custom={{
              "row":{"style":{"padding":5}},
              "entry":{"style":{"padding":3}}
            }}
            impl={{
              "key":"row",
              "type":"v",
              "body":[
                {
                "type":"h",
                "body":[
                  {"key":"entry","type":"p","template":["currency_id"]},
                  {"type":"title","template":["escrow"]},
                  {"type":"p","template":["balance"]}
                ]
              },
                {
                "type":"v",
                "body":[
                  {"type":"p","template":["currency_id"]},
                  {"type":"title","template":["balance"]}
                ]
              }
              ]
            }}>
          </slim_entry.Entry>
        </ui_static.Div>
      </n.Row>
    </n.Enclosed>);
}

var MODULE = {
  "EntryFreeDemo":EntryFreeDemo,
  "EntryContentRawDemo":EntryContentRawDemo,
  "EntryContentRawFormDemo":EntryContentRawFormDemo,
  "EntryContentFillDemo":EntryContentFillDemo,
  "EntryLayoutHorizontalDemo":EntryLayoutHorizontalDemo,
  "EntryLayoutVerticalDemo":EntryLayoutVerticalDemo,
  "EntryLayoutEnclosedDemo":EntryLayoutEnclosedDemo,
  "EntryLayoutPortalDemo":EntryLayoutPortalDemo,
  "EntryLayoutPortalSinkDemo":EntryLayoutPortalSinkDemo,
  "EntryContentScrollDemo":EntryContentScrollDemo,
  "EntryLayoutPopupDemo":EntryLayoutPopupDemo,
  "EntryLayoutDebugDemo":EntryLayoutDebugDemo,
  "EntryContentSeparatorDemo":EntryContentSeparatorDemo,
  "EntryContentTitleH1Demo":EntryContentTitleH1Demo,
  "EntryContentTitleH2Demo":EntryContentTitleH2Demo,
  "EntryContentTitleH3Demo":EntryContentTitleH3Demo,
  "EntryContentTitleH4Demo":EntryContentTitleH4Demo,
  "EntryContentTitleH5Demo":EntryContentTitleH5Demo,
  "EntryContentTitleDemo":EntryContentTitleDemo,
  "EntryContentBoldDemo":EntryContentBoldDemo,
  "EntryContentParagraphDemo":EntryContentParagraphDemo,
  "EntryContentIconDemo":EntryContentIconDemo,
  "EntryContentImageDemo":EntryContentImageDemo,
  "EntryContentPairDemo":EntryContentPairDemo,
  "EntryContentFieldDemo":EntryContentFieldDemo,
  "EntryLayoutFormFadeDemo":EntryLayoutFormFadeDemo,
  "EntryLayoutFormFoldDemo":EntryLayoutFormFoldDemo,
  "EntryContentControlDemo":EntryContentControlDemo,
  "EntryLayoutControlDemo":EntryLayoutControlDemo,
  "EntryContentLinkDemo":EntryContentLinkDemo,
  "EntryLayoutLinkDemo":EntryLayoutLinkDemo,
  "EntryContentRouteDemo":EntryContentRouteDemo,
  "EntryContentRouteToggleDemo":EntryContentRouteToggleDemo,
  "EntryContentActionDemo":EntryContentActionDemo,
  "EntryContentSubmitDemo":EntryContentSubmitDemo,
  "EntryLayoutCardDemo":EntryLayoutCardDemo,
  "EntryLayoutFormDemo":EntryLayoutFormDemo,
  "EntryDemo":EntryDemo
};

export default MODULE