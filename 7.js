// Convert JSON text to JavaScript object
function convertJsonToObject() {
    const jsonInput = document.getElementById('jsonInput').value;
    try {
      const jsonObject = JSON.parse(jsonInput);
      document.getElementById('objectOutput').textContent = JSON.stringify(jsonObject, null, 2);
    } catch (error) {
      document.getElementById('objectOutput').textContent = 'Invalid JSON!';
    }
  }
  
  // Convert JSON date text to JavaScript Date object
  function convertJsonToDate() {
    const dateInput = document.getElementById('dateInput').value;
    try {
      const jsonDate = JSON.parse(dateInput);
      const dateObject = new Date(jsonDate.date);
      document.getElementById('dateOutput').textContent = `Date Object: ${dateObject}`;
    } catch (error) {
      document.getElementById('dateOutput').textContent = 'Invalid JSON or date format!';
    }
  }
  
  // Convert JSON to CSV
  function convertJsonToCsv() {
    const jsonCsvInput = document.getElementById('jsonCsvInput').value;
    try {
      const jsonArray = JSON.parse(jsonCsvInput);
      if (!Array.isArray(jsonArray) || jsonArray.length === 0) {
        document.getElementById('csvOutput').textContent = 'Invalid JSON: Must be a non-empty array of objects!';
        return;
      }
      const headers = Object.keys(jsonArray[0]);
      const csvRows = [
        headers.join(','),
        ...jsonArray.map(row => headers.map(header => row[header]).join(','))
      ];
      document.getElementById('csvOutput').textContent = csvRows.join('\n');
    } catch (error) {
      document.getElementById('csvOutput').textContent = 'Invalid JSON format!';
    }
  }
  
  // Convert CSV to JSON
  function convertCsvToJson() {
    const csvToJsonInput = document.getElementById('csvToJsonInput').value;
    try {
      const lines = csvToJsonInput.split('\n').filter(line => line.trim() !== '');
      if (lines.length < 2) {
        document.getElementById('jsonOutput').textContent = 'Invalid CSV: Must have at least header and one data row!';
        return;
      }
      const headers = lines[0].split(',');
      const jsonArray = lines.slice(1).map(line => {
        const values = line.split(',');
        if (values.length !== headers.length) {
          throw new Error('CSV row length mismatch');
        }
        return headers.reduce((object, header, index) => {
          object[header.trim()] = values[index].trim();
          return object;
        }, {});
      });
      document.getElementById('jsonOutput').textContent = JSON.stringify(jsonArray, null, 2);
    } catch (error) {
      document.getElementById('jsonOutput').textContent = 'Invalid CSV format!';
    }
  }
  
  // Create a hash using crypto module
  // Create a hash using the Web Crypto API (SHA-256)
async function createHash() {
    const hashInput = document.getElementById('hashInput').value;
    const encoder = new TextEncoder();
    const data = encoder.encode(hashInput);
    
    // Use the Web Crypto API to generate a hash
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    
    // Convert hash buffer to hex string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
    document.getElementById('hashOutput').textContent = `Hash: ${hashHex}`;
  }
  
  