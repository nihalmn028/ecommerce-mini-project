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