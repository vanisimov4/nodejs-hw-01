import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  readContacts()
    .then((oldContacts) => {
      const oldContactsParsed = JSON.parse(oldContacts);
      // console.log(oldContactsParsed);
      const fakerContacts = faker.helpers.multiple(createFakeContact, {
        count: number,
      });
      // console.log(fakerContacts);
      const newContacts = oldContactsParsed.concat(fakerContacts);
      // console.log(newContacts);
      writeContacts(JSON.stringify(newContacts));
    })
    .catch((error) => console.error(error));
};

generateContacts(5);
