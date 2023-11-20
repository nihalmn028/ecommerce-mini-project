function changeimg(){
  let a;
 a= document.getElementById('subimg1').src;
 document.getElementById('mainimg').src=a
}
function changeimg1(){
  let a;
 a= document.getElementById('subimg2').src;
 document.getElementById('mainimg').src=a
}
function changeimg2(){
  let a;
 a= document.getElementById('subimg3').src;
 document.getElementById('mainimg').src=a
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
function addtocart4()
{
  if(document.getElementById('small').checked==false && document.getElementById('medium').checked==false && document.getElementById('large').checked==false)
  {
    document.getElementById('size').innerHTML='Enter The Size'
    document.getElementById('size').style.color='red'

  }
  else
  {
    document.getElementById('product4').style.display='block'
    document.getElementById('size').style.display='none'
  }
}