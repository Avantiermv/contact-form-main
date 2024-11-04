const inputsname = [
    {element: document.getElementById('firstname'), name: 'First Name'},
    {element: document.getElementById('lastname'), name: 'Last Name'}
];
const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
const emailadress = document.getElementById('emailadress');
const span = document.getElementsByTagName('span');



function start(){

  function validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  for(let i=0;i<inputsname.length;i++){
    let input = inputsname[i];
    if(input.element.value === ''){
        input.element.style.borderColor="red";
    }
  }

  if(validateEmail(emailadress.value) == ''){
    emailadress.style.borderColor="red";
  }else if(validateEmail(emailadress.value) == false){
    window.alert("Email digitado erradamente");
  }

 
  
}