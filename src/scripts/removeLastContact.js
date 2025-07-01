import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
export const removeLastContact = async () => {
  try {
    const contactsParsed = await readContacts();
    // console.log('Old contacts:', contactsParsed);
    if (contactsParsed.length > 0) {
      await writeContacts(contactsParsed.slice(0, contactsParsed.length - 1));
    }
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
