import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  readContacts()
    .then((oldContacts) => {
      const oldContactsParsed = JSON.parse(oldContacts);
      console.log(oldContactsParsed);
      const fakerContacts = createFakeContact();
      console.log(fakerContacts);
      const newContacts = oldContactsParsed.concat(fakerContacts);
      console.log(newContacts);
      writeContacts(JSON.stringify(newContacts));
    })
    .catch((error) => console.error(error));
};

addOneContact();
