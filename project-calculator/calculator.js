
const requestListener=(req,res)=>
{
  if(req.url==='/'){
   
  res.write(`
    
    <a href="/calculator" target="_blank">click to go to the calculator page </a>
    
    
    `)
     res.end();
  }


  
   else if (req.url === '/calculator') {
  
  res.write(`

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Calculator</title>
    </head>
    <body>

      <br>
      <input class="value1" type="text" placeholder="Enter first number">
      <br>
      <input class="value2" type="text" placeholder="Enter second number">
      <br>
      <button class="btn">Sum</button>
      <p class="result">Result: </p>

      <script>
        const sum = document.querySelector('.btn');
        const result = document.querySelector('.result');

        sum.addEventListener('click', () => {
          const num1 = +document.querySelector('.value1').value;
          const num2 = +document.querySelector('.value2').value;
          result.textContent = 'Result: ' + (num1 + num2);
        });
      </script>

    </body>
    </html>
  `);
  res.end();
}







    else if(req.url==='/calculate-result')
    {
         res.write(`

        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<p class="result">sum</p>
</body>

`)


    }
}


 
module.exports=requestListener;