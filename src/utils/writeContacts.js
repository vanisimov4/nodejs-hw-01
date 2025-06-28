import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const updatedContacts = 'Це дані, які ми записуємо у файл1.';

export const writeContacts = async (updatedContacts) => {
  //   const data = 'Це дані, які ми записуємо у файл.';
  try {
    await fs.writeFile(PATH_DB, updatedContacts, 'utf8');
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

writeContacts(updatedContacts);
