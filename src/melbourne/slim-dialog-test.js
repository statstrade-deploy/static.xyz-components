import React from 'react'

import * as ReactNative from 'react-native'

import n from '../js/react-native'

import slim_dialog from './slim-dialog'

// melbourne.slim-dialog-test/DialogDemo [20] 
function DialogDemo(){
  let [current,setCurrent] = React.useState(true);
  let [visible,setVisible] = React.useState();
  let buttonRef = React.useRef();
  return (
    <n.Enclosed label="melbourne.slim-dialog/Dialog">
      <n.Row style={{"marginTop":30}}>
        <ReactNative.Button
          ref={buttonRef}
          title="ON"
          onPress={function (){
            return setVisible(true);
          }}>
        </ReactNative.Button>
      </n.Row>
      <slim_dialog.Dialog
        design={{"type":"light"}}
        title="Confirm Delete"
        body={(
          <>Are you sure you wish to delete?</>)}
        modalProps={{}}
        onSubmit={function (){
          return setVisible(false);
        }}
        onCancel={function (){
          return setVisible(false);
        }}
        visible={visible}>
      </slim_dialog.Dialog>
    </n.Enclosed>);
}

var MODULE = {"DialogDemo":DialogDemo};

export default MODULE