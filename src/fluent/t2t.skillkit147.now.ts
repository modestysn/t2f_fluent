import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api_doc/version/latest/index.html'

Test({
  $id: Now.ID['test_str_id'],
  name: 'ATF test for user management in service portal',
  description: 'This test opens the catalog item user management in service portal, adds a row for Abel Tuter, saves, and submits',
  active: true,
  failOnServerError: true,
}, (atf) => {
//   atf.catalog_SP.openACatalogItem({ // EDIT: non-exist API
//     catalogItem: 'user_management',
//   });

  atf.catalog_SP.setVariableValues_SP({ // EDIT: added _SP
    catItem: 'user_management', // EDIT: shanged from catalogItem
    variableValues: '', // EDIT: change data type from object to string
    // {
    //   'first_name': 'Abel',
    //   'last_name': 'Tuter',
    //   'email': 'abel.tuter@example.com',
    //   'user_name': 'abel.tuter',
    //   'active': 'true',
    // },
    variableSet: '' // EDIT: add prop
  });

//   atf.catalog_SP.submitForm({ // EDIT: wrong API
//     assertType: 'form_submitted_to_server',
//     formUI: 'standard_ui',
//   });
});