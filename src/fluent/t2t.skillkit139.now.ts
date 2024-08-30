import { Test } from '@servicenow/sdk/core'
import ' @servicenow/sdk-core/global'

Test({
$id: Now.ID['test_str_id'],
name: '',
description: '',
active: true,
failOnServerError: true,
}, (atf) => {
// const outputOfOpenCatalogItem = EDIT: unused variables
atf.catalog_SP.openCatalogItem_SP({
portal: '', // string of sys_id | Record<'sp_portal'>
page: '', // string of sys_id | Record<'sp_page'>
catItem: '', // string of sys_id | Record<'sc_cat_item'>
queryParameters: {} // object, query parameter name and value pairs, example: { field1: 'value1', field2: 'value2' }
})
atf.catalog_SP.setCatalogItemQuantity_SP({
quantity: '2'
})

// const outputOfAddItemToShoppingCart = 
atf.catalog_SP.addItemToShoppingCart_SP({
assert: 'form_submitted_to_server' // 'form_submitted_to_server' | 'form_submission_cancelled_in_browser'
})
// const outputOfSubmitOrderGuide = // EDIT: unused variables
atf.catalog_SP.submitOrderGuide_SP({
assert: 'form_submitted_to_server' // 'form_submitted_to_server' | 'form_submission_cancelled_in_browser'
})
})