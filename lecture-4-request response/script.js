
const sum=document.querySelector('.btn');
const result=document.querySelector('.result');




sum.addEventListener('click',()=>{
  const num1=+document.querySelector('.value1').value;
const num2=+document.querySelector('.value2').value;

  result.textContent=num1+num2;
})

  

 

