import { Test } from '@servicenow/sdk/core'  
import '@servicenow/sdk-core/global'  
  
Test({  
  $id: Now.ID['test_str_id'],   
  name: 'ensure Submit button is visible',  
  description: 'Open a new incident form, check the Submit button is visible while Update button is not visible, then click declarative action Reset',  
  active: true,  
  failOnServerError: true  
}, (atf) => {  
  atf.form.openNewForm({  
    table: 'incident',  
    formUI: 'standard_ui',  
    view: 'default view'  
  });  
  
  atf.form.uiActionVisibility({  
    table: 'incident',  
    formUI: 'standard_ui',  
    visible: ['Submit'],  
    notVisible: ['Update']  
  });  
  
  atf.form.clickADeclarativeAction({  
    table: 'incident',  
    formUI: 'standard_ui',  
    declarativeAction: 'Reset',  
    assertType: 'form_submission_canceled_in_browser'  
  });  
});  
