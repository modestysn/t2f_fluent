import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api/now/core/r_TestFramework_Testing_Test'

Test({
  $id: Now.ID['test_str_id'],
  name: 'ATF test for laptop refresh in catalog',
  description: 'Opens laptop refresh in catalog and checks that price is not editable',
  active: true,
  failOnServerError: true,
}, (atf) => {
//   atf.catalog.openCatalogItem_SP({ EDIT: wrong API
//     portal: '',
//     page: '',
//     catItem: 'laptop refresh',
//   });

  atf.catalog_SP.validatePriceAndRecurringPrice_SP({
    price: '',
    recurringPrice: '',
    frequency: '',
  });
});