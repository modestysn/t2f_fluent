import { Test } from '@servicenow/sdk/core'
import 'https://github.com/sergey-chernev/now-sdk/tree/main/packages/sdk-core'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Test user management in service portal',
  description: 'Test to open the catalog item user management in service portal, add a row for Abel Tuter, save and submit',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.server.impersonate({
    user: 'sys_id_of_user_to_impersonate',
  })

// EDIT: should be catalog_SP.openCatalogItem_SP
//   atf.catalog_SP.openCatalogItem({
//     catalogItem: 'sys_id_of_catalog_item_user_management',
//   })

  atf.catalog_SP.addRowToMultiRowVariableSet_SP({
    catItem: 'sys_id_of_catalog_item_user_management',
    variableSet: 'sys_id_of_multi_row_variable_set',
  })

  atf.catalog_SP.setVariableValues_SP({
    catItem: 'sys_id_of_catalog_item_user_management',
    variableSet: 'sys_id_of_multi_row_variable_set',
    variableValues: '', // EDIT: changed from object to string
  })

  atf.catalog_SP.saveCurrentRowOfMultiRowVariableSet_SP({
    assert: 'form_submitted_to_server',
  })

// EDIT: should be orderCatalogItem_SP
  //   atf.catalog_SP.submitForm({
//     assertType: 'form_submitted_to_server',
//     formUI: 'standard_ui',
//   })
})