import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const oldContacts = readContacts();
  //   console.log(process.cwd());
  //   const newContacts = faker.helpers.multiple(createFakeContact, {
  //     count: number,
  //   });
  //   const contacts = oldContacts.
  console.log(oldContacts);
  //   console.log(newContacts);
  //   console.log(JSON.stringify(newContacts));
  //   writeContacts(JSON.stringify(newContacts));
};

generateContacts(5);
