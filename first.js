const { error } = require('console');
const fs= require('fs');


fs.writeFile("output.txt","writing file",(err)=>{
  if(err)
  {
    console.log("error occured");
  }
  else
  {
    console.log("file written succesfully");
  }
});
// fs.writeFile() is an asynchronous function that writes data to a file.

// Arguments:

// "output.txt" – The name of the file to write to. If it doesn't exist, it will be created.

// "writing file" – The content to be written to the file.

// (err) => { ... } – A callback function that runs when the operation finishes.
