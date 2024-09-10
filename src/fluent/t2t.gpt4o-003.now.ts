import { Test } from '@servicenow/sdk/core'  
import '@servicenow/sdk-core/global'  
  
Test({  
  $id: Now.ID['test_str_id'],   
  name: 'Validate Category Field in Incident Form',  
  description: "Open a new incident form, set the category field value to 'Hardware', then submit the form, and validate the category field value",  
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
      category: 'Hardware'  
    }  
  });  
  
  const outputOfSubmit = atf.form.submitForm({  
    assertType: 'form_submitted_to_server',  
    formUI: 'standard_ui'  
  });  
  
  atf.form.fieldValueValidation({  
    table: 'incident',  
    conditions: 'sys_id=' + outputOfSubmit.record_id + '^category=Hardware',  
    formUI: 'standard_ui'  
  });  
});  
