import { Test } from '@servicenow/sdk/core'
import ' @servicenow/sdk-core/global'

Test({
$id: Now.ID['test_str_id'],
name: '',
description: '',
active: true,
failOnServerError: true,
}, (atf) => {
const catalogItem = atf.server.searchForACatalogItem({
search_in_portal: true,
search_term: 'iPad',
catalog: '', // replace with catalog sys_id or Record<'sc_catalog'>
category: '', // replace with category sys_id or Record<'sc_category'>
assert_item: '', // replace with sys_id or Record<'sc_cat_item'>
assert_type: 'assert_item_present'
})

atf.server.log({
log: `Found catalog item: ${catalogItem.catalog_item}`
})
})