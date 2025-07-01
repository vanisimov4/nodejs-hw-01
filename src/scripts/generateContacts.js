import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const oldContactsParsed = await readContacts();
    console.log('Old cotacts:', oldContactsParsed);
    const fakerContacts = faker.helpers.multiple(createFakeContact, {
      count: number,
    });
    console.log(fakerContacts);
    const newContacts = oldContactsParsed.concat(fakerContacts);
    console.log(newContacts);
    writeContacts(newContacts);
  } catch (error) {
    // readContacts()
    //   .then((oldContactsParsed) => {
    // const oldContactsParsed = JSON.parse(oldContacts);

    console.error(error);
  }
};

generateContacts(1);
