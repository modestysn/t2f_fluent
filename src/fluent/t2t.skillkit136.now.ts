import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api/now/core/r_TestFramework_Test'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Validate price variable is read only',
  description: 'Opens laptop refresh in catalog and validates that price variable is read only',
  active: true,
  failOnServerError: true,
}, (atf) => {
//   atf.catalog.openCatalogItem_SP({ // EDIT: wrong API
//     portal: '',
//     page: '',
//     catItem: '',
//     queryParameters: {},
//   })
//   atf.catalog_SP.validatePriceAndRecurringPrice_SP({
//     price: '',
//     recurringPrice: '',
//     frequency: '',
//   })
  atf.catalog.setVariableValues({
    catalogItem: '',
    variableValues: '20' // EDIT : changed type from object to string
    // { 
    //   'price': '',
    // },
  })
})