import { readContacts } from '../utils/readContacts.js';
export const getAllContacts = async () => {
  try {
    const contactsParsed = await readContacts();
    console.log('Old contacts:', contactsParsed);
    return contactsParsed;
  } catch (error) {
    console.error(error);
  }
  // readContacts()
  //   .then((oldContactsParsed) => {
  // const oldContactsParsed = JSON.parse(oldContacts);

  // .catch((error) => console.error(error));
};

console.log('All contacts:', await getAllContacts());
