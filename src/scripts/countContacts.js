import { readContacts } from '../utils/readContacts.js';
export const countContacts = async () => {
  try {
    const contactsParsed = await readContacts();
    // console.log('Count contacts:', contactsParsed.length);
    return contactsParsed.length;
  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());
