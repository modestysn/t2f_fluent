import { Test } from '@servicenow/sdk/core'  
import '@servicenow/sdk-core/global'  
  
Test({  
  $id: Now.ID['test_str_id'],   
  name: 'Validate Reference Field in Incident Form',  
  description: "Open a new incident form, set caller field to 'abel.tuter', submit it, then open it in the 'cmdb workspace'",  
  active: true,  
  failOnServerError: true  
}, (atf) => {  
  atf.form.openNewForm({  
    table: 'incident',  
    formUI: 'standard_ui',  
    view: 'default view'  
  });  
  
  atf.form.setFieldValues({  
    table: 'incident',  
    formUI: 'standard_ui',  
    fieldValues: {  
      caller_id: 'abel.tuter'  
    }  
  });  
  
  const outputOfSubmit = atf.form.submitForm({  
    assertType: 'form_submitted_to_server',  
    formUI: 'standard_ui'  
  });  
  
  atf.form.openExistingRecord({  
    table: 'incident',  
    recordId: outputOfSubmit.record_id,  
    formUI: 'cmdb_workspace',  
    view: 'default view',  
    selectedTabIndex: 0  
  });  
});  
