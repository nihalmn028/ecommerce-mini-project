function check(){
  if(document.getElementById('fname').value=='')
  {
  document.getElementById('fnamep').innerHTML='Enter Your First Name'
  document.getElementById('fnamep').style.color='red'
  }
  else if(document.getElementById('email').value=='')
  {
  document.getElementById('emailp').innerHTML='Enter Your Email'
  document.getElementById('emailp').style.color='red'
  }
  else if(document.getElementById('message').value=='')
  {
  document.getElementById('messagep').innerHTML='Enter Your Message'
  document.getElementById('messagep').style.color='red'
  }
  else{
    document.getElementById('contactusbtn').type='submit'
  }
}
function lastvalidate(){
  if(document.getElementById('lastemail').value==""){
    document.getElementById('lastp').innerHTML='Enter Your Email'
    document.getElementById('lastp').style.color='red'
  }
  else{
    document.getElementById('lastbtn').type='submit'
  }
  
}
function searchboxshow()
{
  document.getElementById('searchbox').style.display='block'
  
}
function addtocart1()
{
  document.getElementById('product1').style.display='block'
  
}
function addtocart2()
{
  document.getElementById('product2').style.display='block'
  
}
function addtocart3()
{
  document.getElementById('product3').style.display='block'
  
}