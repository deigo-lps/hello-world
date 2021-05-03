const form=document.getElementsByTagName("form")[0];
const input=form.getElementsByTagName("input");

const regPhone=/^[(][0-9]{2}[)][0-9]{4}[-][0-9]{4}$/;
const regEmail=/^([a-z0-9.-_]+)([@])([a-z]+)([.])([a-z]+)$/;
const regZip=/^[0-9]{2}[.][0-9]{3}[-][0-9]{3}$/;
form.addEventListener("submit",function(){
  event.preventDefault();
  if(regPhone.test(input[1].value)&&regEmail.test(input[2].value)&&regZip.test(input[3].value))
    alert("Obrigado por se cadastrar, "+input[0].value+"!");
  else {
    alert("Preencha os campos corretamente.")
  }
})
