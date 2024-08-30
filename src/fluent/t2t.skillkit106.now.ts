import { Test } from '@servicenow/sdk/core'
import 'https://github.com/servicenow/now-sdk-core/global'

Test({
  $id: Now.ID['test_str_id'],
  name: 'a new ATF test, impersonate admin, create a user of \'abel.tuter\', then log a message \'user created\'',
  description: '',
  active: true,
  failOnServerError: true,
}, (atf) => {
  atf.server.impersonate({
    user: '', // sys_id | Record<'sys_user'>
  })
  atf.server.createAUser({
    fieldValues: {}, // object, field name and value pairs, example: { department: 'PALE', city: 'San Diego' }
    groups: [''], // array of string | Record<'sys_user_group'>;
    roles: [''], // string[]  | Role[];
    impersonate: false, // boolean;
    firstName: '', // string;
    lastName: 'tuter', // string;
  }); // : { user: string; }; EDIT: commented out return type
  atf.server.log({
    log: 'user created'
  }); // : void; EDIT: commented out return type
})