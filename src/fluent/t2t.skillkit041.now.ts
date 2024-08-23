import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api/now/core/r_sys_ui_page/ui_page'

Test({
  $id: Now.ID['test_str_id'],
  name: 'ATF Test for Catalog Item in Service Portal',
  description: 'This test opens the catalog item "mouse", sets the quantity to 2, and submits the order.',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.catalog_SP.openOrderGuide_SP({
    portal: 'sp_service_portal',
    orderGuide: 'sc_cat_item_guide_for_mouse',
    page: 'catalog', // EDIT: add prop
    queryParameters: {} // EDIT: add prop
  });

  atf.catalog.setCatalogItemQuantity({
    quantity: 2,
  });

  atf.catalog.addItemToShoppingCart({
    assert: 'form_submitted_to_server',
  });

  atf.catalog_SP.addOrderGuidetoShoppingCart_SP({
    assert: 'form_submitted_to_server',
  });

  atf.catalog_SP.submitOrderGuide_SP({
    assert: 'form_submitted_to_server',
  });
});