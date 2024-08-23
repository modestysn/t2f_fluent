import { Test } from '@servicenow/sdk/core'
import 'https://github.com/serivcenow/sn_devstudio_scaffolding/blob/main/src/test/ATFTest.ts'

Test({
  $id: Now.ID['test_str_id'],
  name: 'a new ATF test',
  description: '',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.server.impersonate({
    user: '', // sys_id | Record<'sys_user'>
  });

  atf.server.createAUser({
    fieldValues: {}, // object, field name and value pairs, example: { field1: 'value1', field2: 'value2' }
    groups: [],
    roles: [],
    impersonate: true,
    firstName: 'abel',
    lastName: 'tuter',
  });

  atf.server.log({
    log: 'user created',
  });
});