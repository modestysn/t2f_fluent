import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api/now/core/r_TestFramework_Test'

Test({
  $id: Now.ID['test_str_id'],
  name: 'ATF test for catalog',
  description: 'Opens the laptop refresh catalog item in portal, sets the quantity to 2, and adds it to the cart',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.catalog_SP.openCatalogItem_SP({
    portal: '', // replace with the sys_id or Record of the portal
    page: '', // replace with the sys_id or Record of the page
    catItem: 'laptop refresh', // replace with the name or sys_id of the catalog item
    queryParameters: {} // EDIT: add prop
  });

  atf.catalog_SP.setCatalogItemQuantity_SP({
    quantity: 2,
  });

  atf.catalog_SP.addItemtoShoppingCart_SP({
    assert: 'form_submitted_to_server',
  });
});