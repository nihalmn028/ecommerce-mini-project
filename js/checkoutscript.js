function check(){
  if(document.getElementById('fname').value=='')
  {
  document.getElementById('fnamep').innerHTML='Enter Your First Name'
  document.getElementById('fnamep').style.color='red'
  }
  else if(document.getElementById('lname').value=='')
  {
  document.getElementById('lnamep').innerHTML='Enter Your Last Name'
  document.getElementById('lnamep').style.color='red'
  }
  // if(document.getElementById('company').value=='')
  // {
  // document.getElementById('companyp').innerHTML='Enter Your Company Name'
  // document.getElementById('companyp').style.color='red'
  // }
  else if(document.getElementById('countryy').value == "Select")
  {
  document.getElementById('countrypp').innerHTML='Enter Your Country '
  document.getElementById('countrypp').style.color='red'
  }
  else if(document.getElementById('address').value=='')
  {
  document.getElementById('addressp').innerHTML='Enter Your Address'
  document.getElementById('addressp').style.color='red'
  }
  else if(document.getElementById('post').value=='')
  {
  document.getElementById('postp').innerHTML='Enter Your Post code'
  document.getElementById('postp').style.color='red'
  }
  else if(document.getElementById('city').value=='')
  {
  document.getElementById('cityp').innerHTML='Enter Your City '
  document.getElementById('cityp').style.color='red'
  }
  else if(document.getElementById('phone').value=='')
  {
  document.getElementById('phonep').innerHTML='Enter Your Phone Number'
  document.getElementById('phonep').style.color='red'
  }
  else if(document.getElementById('email').value=='')
  {
  document.getElementById('emailp').innerHTML='Enter Your Email'
  document.getElementById('emailp').style.color='red'
  }
  else{
    document.getElementById('orderplacesection').style.display='block'
    document.getElementById('mainsection').style.opacity='.5'
    document.getElementById('orderplacesection').style.opacity='1'
    document.getElementById('orderplacesection').style.transition='4s'

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
function couponboxshow()
{
  document.getElementById('couponenter').style.display='inline'
  document.getElementById('coponbtn').style.display='inline'

  
}
function apply(){
  if( document.getElementById('couponenter').value==""){
    document.getElementById('couponp').innerHTML='Enter Coupon Code'
    document.getElementById('couponp').style.color='red'
  }
  else{
    document.getElementById('couponenter').style.display='none'
    document.getElementById('coponbtn').style.display='none'
    document.getElementById('couponp').style.display='none'
    document.getElementById('coponsubmited').style.display='inline'
  }
}
