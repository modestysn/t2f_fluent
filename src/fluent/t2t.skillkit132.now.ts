import { Test } from '@servicenow/sdk/core'
import 'https://github.com/sergey-chernev/now-sdk/tree/main/packages/sdk-core'

Test({
  $id: Now.ID['test_str_id'],
  name: '',
  description: '',
  active: true,
  failOnServerError: true,
}, (atf) => {
//   const openOrderGuide = atf.catalog_SP.openOrderGuide_SP({ // EDIT: uses incorrect APIs
//     portal: '',
//     page: '',
//     orderGuide: '',
//     queryParameters: {},
//   })

//   atf.catalog_SP.navigatewithinOrderGuide_SP({
//     guideStep: '',
//     assert: '',
//   })

  atf.catalog_SP.validateOrderGuideItems_SP({
    items: [''],
  })

  atf.catalog_SP.reviewOrderGuideSummary_SP({
    items: [''],
    price: '',
  })

  atf.catalog_SP.reviewIteminOrderGuide_SP({
    item: '',
    included: true,
  })

//   atf.catalog_SP.addOrderGuidetoShoppingCart_SP({ // EDIT: uses incorrect APIs
//     assert: '',
//   })

//   atf.catalog_SP.submitOrderGuide_SP({
//     assert: '',
//   })

  atf.catalog_SP.setCatalogItemQuantity_SP({
    quantity: '2',
  })

  atf.catalog_SP.addItemtoShoppingCart_SP({
    assert: 'form_submitted_to_server',
  })
})