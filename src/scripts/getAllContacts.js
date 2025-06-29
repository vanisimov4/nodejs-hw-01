import { readContacts } from '../utils/readContacts.js';
export const getAllContacts = async () => {
  readContacts()
    .then((oldContacts) => {
      const oldContactsParsed = JSON.parse(oldContacts);
      return oldContactsParsed;
      //   console.log(oldContactsParsed);
    })
    .catch((error) => console.error(error));
};

console.log(await getAllContacts());
