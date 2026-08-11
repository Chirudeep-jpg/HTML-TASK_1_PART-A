// 1. Import all required predefined core modules at the top
const fs = require('fs');
const path = require('path');

// 2. Create a safe, cross-platform file path using the path module
// This creates a path to a file named 'log.txt' inside your current directory
const targetFilePath = path.join(__dirname, 'log.txt');

console.log('The file will be saved at:', targetFilePath);
console.log('The file extension is:', path.extname(targetFilePath));

// 3. Create and write to the file using our new dynamic path variable
fs.writeFile(targetFilePath, 'Hello World from Node.js!', (err) => {
    if (err) throw err;
    console.log('File written successfully!');

    // 4. Read the file ONLY after we are sure it has finished writing
    // Nesting it here prevents the file-not-found timing bug
    fs.readFile(targetFilePath, 'utf8', (err, data) => {
        if (err) throw err;
        console.log('--- File Content Start ---');
        console.log(data); 
        console.log('--- File Content End ---');
    });
});
