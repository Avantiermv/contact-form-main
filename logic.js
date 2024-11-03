const inputsname = [
    {element: document.getElementById('firstname'), name: 'First Name'},
    {element: document.getElementById('lastname'), name: 'Last Name'}
];
const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
const emailadress = document.getElementById('emailadress');



function start(){

  function validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  for(let i=0;i<inputsname.length;i++){
    let input = inputsname[i];
    if(input.element.value === ''){
        window.alert(`${input.name} não está preenchido`);
    }
  }

  if(validateEmail(emailadress.value) == ''){
    window.alert("Volte lá e faça de novo o email");
  }else if(validateEmail(emailadress.value) == false){
    window.alert("Email digitado erradamente");
  }

 
  
}