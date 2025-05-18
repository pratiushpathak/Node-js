const fs =require('fs');
console.log('1.start of the script');
//synchronous blocking operations 
console.log('2.reading file synchronously');
const dataSync=fs.readFileSync('userdetails.txt','utf8');
console.log('3.Synchrounous read complete');


//asynchrnous (non-blocking) operation
console.log('4.Reading file asynchronously');
fs.readFile('userdetails.txt','utf8',(err, dataAsync)=>{if(err) throw err;
  console.log('6.asynchrnous read complete');

});
console.log('5.end of script');