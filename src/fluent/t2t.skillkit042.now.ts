import { Test } from '@servicenow/sdk/core'
import 'https://developer.servicenow.com/app.do#/api/now/core/r_Record'

Test({
  $id: Now.ID['test_str_id'],
  name: 'ATF Test for HR Request',
  description: 'Opens the record producer for HR Request in service portal, sets the priority variable to 1, and submits',
  active: true,
  failOnServerError: true,
}, (atf) => {
  const hrRequestPortal = 'your_hr_request_portal_id';
  const hrRequestPage = 'your_hr_request_page_id';

  atf.form_SP.openServicePortalPage({
    portal: hrRequestPortal,
    page: hrRequestPage,
    queryParams: {} // EDIT: add prop
  });

  atf.form_SP.setFieldValues_SP({
    table: 'your_hr_request_table_name',
    fieldValues: {
      priority: 1,
    },
  });

  atf.form_SP.submitForm_SP({
    assert: 'form_submitted_to_server',
  });
});