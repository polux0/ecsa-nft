import fs from 'fs';

export class StorageHandler {

  constructor() {
  }

  saveStorageDeploymentAddresses(array: any[], filePath: string): void {
    const jsonData = JSON.stringify(array, null, 2);

    fs.writeFile(filePath, jsonData, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        // console.log('Array converted to JSON and written to file successfully!');
      }
    });
  }

  loadStorageDeploymentAddresses(filePath: string): any[] {
    try {
      const jsonData = fs.readFileSync(filePath, 'utf8');
      const arrayData = JSON.parse(jsonData);
      return arrayData;
    } catch (err) {
      console.error('Error reading file or parsing JSON:', err);
      return [];
    }
  }
}
