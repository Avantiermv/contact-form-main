const inputsname = [
    {element: document.getElementById('firstname'), name: 'First Name'},
    {element: document.getElementById('lastname'), name: 'Last Name'}
];
const emailaddress = document.getElementById('emailaddress');
const query1 = document.getElementById('generalenquiry');
const query2 = document.getElementById('supportrequest');
const msg = document.getElementById('messagebox');
const consent = document.getElementById('consent');

function start(){
  function validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function validateName(name){
    const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/;
    return regex.test(name);
  }

  let hasError = false;
  
 
 for(let input of inputsname){
  let spansn = document.getElementsByClassName('namespan');
  let spanErrorName = document.getElementsByClassName('spanErrorName');
  if(input.element.value.trim() === '' || !validateName(input.element.value)){
    input.element.style.borderColor="red";
    for(let span of spansn){
      span.style.color="red";
    }
    for(let spanN of spanErrorName){
      spanN.style.display="Block"
      spanN.style.color="red";
    }
    hasError = true;
    break;
  }else{
    input.element.style.borderColor="";
    for(let span of spansn){
      span.style.color="";
    }
    for(let spanN of spanErrorName){
      spanN.style.display=""
      spanN.style.color="";
    }
  }
 }

 let spane = document.getElementById('emailspan');
  if(emailaddress.value.trim() === '' || !validateEmail(emailaddress)){
    emailaddress.style.borderColor="red";
    spane.style.color="red";
    hasError = true;
  }else{
    emailaddress.style.borderColor="";
    spane.style.color="";
  }

 let spanq = document.getElementById('queryspan');
  if(!query1.checked || !query2.checked){
    spanq.style.color="red";
    hasError = true;
  }else{
    spanq.style.color="";
  }























  if(hasError == false){
    window.alert("Tudo certo");
  }
}