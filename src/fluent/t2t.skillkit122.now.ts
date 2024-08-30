import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api/now/core/global'

Test({
  $id: 'test_str_id', // replace with a unique string or number
  name: '', // replace with a test name
  description: '', // replace with a test description
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.form_SP.openServicePortalPage({
    portal: 'customer_portal',
    page: '',
    queryParams: {},
  })

  atf.form_SP.openAForm_SP({
    portal: 'customer_portal',
    page: '',
    table: 'problem',
    paramID: 'abcdef1234567890',
    view: 'default view',
    queryParameters: {},
  })

  atf.form_SP.setFieldValues_SP({
    table: 'problem',
    fieldValues: {
      'short_description': 't2t short description of problem',
    },
  })

  atf.form_SP.fieldValuesValidation_SP({
    table: 'problem',
    conditions: '',
  })

  atf.form_SP.uiActionVisibilityValidation_SP({
    table: 'problem',
    visible: ['Update'],
    notVisible: ['Submit'],
  })
})