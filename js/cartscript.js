function apply(){
  if( document.getElementById('coupon').value==""){
    document.getElementById('couponp').innerHTML='Enter Coupon Code'
    document.getElementById('couponp').style.color='red'
  }
  else{
    document.getElementById('coponbtn').type='submit'
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
function productcountchange(){
  let a

  a=document.getElementById('productcount').value
  document.getElementById('subtotal').innerHTML=a*1637
}
function productcountchange2(){
  let a
  a=document.getElementById('productcount2').value
  document.getElementById('subtotal2').innerHTML=a*1200
}
function updatecart(){
  let a
let b  
let x
let y



 a= document.getElementById('subtotal').innerHTML
 x=parseInt(a)
 b=document.getElementById('subtotal2').innerHTML
 y=parseInt(b)
 z=x+y
 p=z
 document.getElementById('mainsubtotal').innerHTML='₹'+p

 document.getElementById('total').innerHTML=z+200
 document.getElementById('total').innerHTML='₹'+document.getElementById('total').innerHTML
 









}
