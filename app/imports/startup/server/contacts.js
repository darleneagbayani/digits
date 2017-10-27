import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  {
    first: 'Basket',
    last: 'Case',
    address: '121 Puuhale st. Honolulu, HI 96701',
    telephone: '8084889111',
    email: 'hello@hawaii.edu'
  },
  {
    first: 'Carmen',
    last: 'Sanders',
    address: '121 Puuhale st. Honolulu, HI 96701',
    telephone: '8084889111',
    email: 'hello@hawaii.edu'
  },
  {
    first: 'Eva',
    last: 'Chase',
    address: '121 Puuhale st. Honolulu, HI 96701',
    telephone: '8084889111',
    email: 'hello@hawaii.edu'
  },
  {
    first: 'Sam',
    last: 'Adams',
    address: '121 Puuhale st. Honolulu, HI 96701',
    telephone: '8084889111',
    email: 'hello@hawaii.edu'
  },
];

/**
 * Initialize the Contacts collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactSeeds, function seedContacts(stuff) {
    Contacts.insert(stuff);
  });
}
