import { promises as fs } from 'fs'; // Using promises API
import path from 'path';

export class StorageHandler {
  constructor() {}

  async saveStorageDeploymentAddresses(array: any[], filePath: string): Promise<void> {
    const jsonData = JSON.stringify(array, null, 2);
    try {
      await fs.writeFile(filePath, jsonData, 'utf8');
      // console.log('Array converted to JSON and written to file successfully!');
    } catch (err) {
      console.error('Error writing to file:', err);
    }
  }

  async loadStorageDeploymentAddresses(filePath: string): Promise<any[]> {
    try {
      const jsonData = await fs.readFile(filePath, 'utf8');
      const arrayData = JSON.parse(jsonData);
      return arrayData;
    } catch (err) {
      console.error('Error reading file or parsing JSON:', err);
      return [];
    }
  }

  async ensureDirectoryExistence(directory: string, fileName: string): Promise<void> {
    try {
        // Ensure the directory exists
        await fs.mkdir(directory, { recursive: true });

        const filePath = path.join(directory, fileName);

        // Check if file doesn't exist and then create it
        try {
            await fs.access(filePath);
        } catch (error) {
            await fs.writeFile(filePath, '', 'utf8');
        }

    } catch (err) {
        console.error('Error ensuring directory and file existence:', err);
    }
  }
}
