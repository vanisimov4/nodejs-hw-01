import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const oldContactsParsed = await readContacts();
    const fakerContact = createFakeContact();
    // console.log(fakerContact);
    const newContacts = oldContactsParsed.concat(fakerContact);
    // console.log(newContacts);
    await writeContacts(newContacts);
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
