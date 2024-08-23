import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api/now/core/r_TestFrameworkAPI'

Test({
  $id: Now.ID['test_str_id'],
  name: 'Test laptop refresh catalog item',
  description: 'Test to open laptop refresh catalog item, set quantity and add to cart',
  active: true,
  failOnServerError: true,
}, (atf) => {
    // EDIT: strucutre is wrong, should never has .then()
//   atf.catalog_SP.openOrderGuide_SP({
//     portal: '',
//     page: '',
//     orderGuide: 'laptop refresh',
//   }).then((result) => {
//     atf.catalog.openACatalogItem({
//       catalogItem: result.record_id,
//     })
//     atf.catalog.setCatalogItemQuantity({
//       quantity: 2,
//     })
//     atf.catalog.addItemToShoppingCart({
//       assert: 'form_submitted_to_server',
//     })
//   })
})