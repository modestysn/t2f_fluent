import { Test } from '@servicenow/sdk/core'                                                        
import '@servicenow/sdk-core/global'         
                                                                                                            
Test ({                                                                                            
    $id: Now.ID['validate_text_field'],                                                              
    name: 'Validate text field in incident form',                                                    
    description: 'Open a new incident form, fill in short description field with "test description from text2fluent", submit the form, then validate the short description field value',
    active: true,                                                                                    
    failOnServerError: true                                                                          
}, (atf) => {                                                                                      
    atf.form.openNewForm({
        table: 'incident',
        formUI: 'standard_ui',
        view: ""
    })                                                                                               
                                                                                                    
    atf.form.setFieldValues({                                                                        
        table: 'incident',                                                                             
        formUI: 'standard_ui',                                                                         
        fieldValues: { short_description: 'test description from text2fluent' }                        
    })                                                                                               
                                                                                                    
    const outputOfSubmit = atf.form.submitForm({                                                     
        assertType: "form_submitted_to_server",                                                        
        formUI: "standard_ui"                                                                          
    })                                                                                               
                                                                                                    
    atf.form.openExistingRecord({                                                                    
        table: "incident",                                                                             
        recordId: outputOfSubmit.record_id,                                                            
        formUI: "service_operations_workspace",                                                        
        selectedTabIndex: 0,
        view:""                                                                        
    })                                                                                               
                                                                                                    
    atf.form.fieldValueValidation({                                                                  
        table: 'incident',                                                                             
        conditions: `short_description='test description from text2fluent'`,                           
        formUI: 'standard_ui'                                                                          
    })                                                                                               
})  