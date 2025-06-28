import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    console.log(PATH_DB);
    const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    console.log('Вміст файлу:', data);
    return data;
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
};

// readContacts();
