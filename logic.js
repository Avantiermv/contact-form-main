const inputsname = [
    {element: document.getElementById('firstname'), name: 'First Name'},
    {element: document.getElementById('lastname'), name: 'Last Name'}
];
const emailaddress = document.getElementById('emailaddress');
const query1 = document.getElementById('generalenquiry');
const query2 = document.getElementById('supportrequest');
const msg = document.getElementById('messagebox');
const consent = document.getElementById('consent');
const boxconfirmation = document.getElementById('confirmation');

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
 let spantextemail = document.getElementById('spanemail')
  if(emailaddress.value.trim() === '' || !validateEmail(emailaddress.value)){
    emailaddress.style.borderColor="red";
    spane.style.color="red";
    spantextemail.style.color="red";
    spantextemail.style.display="block"
    hasError = true;
  }else{
    emailaddress.style.borderColor="";
    spane.style.color="";
    spantextemail.style.color="";
    spantextemail.style.display=""
  }

  let spanq = document.getElementById('queryspan');
  let spantextq = document.getElementById('spantextquery');
  if(!query1.checked && !query2.checked){
    spanq.style.color="red";
    spantextq.style.color="red";
    spantextq.style.display="block";
    hasError = true;
  }else{
    spanq.style.color="";
    spantextq.style.color="";
    spantextq.style.display="";
  }

  let spanmsg = document.getElementById('msgspan');
  let spantextmsg = document.getElementById('spantextmsg');
  if(msg.value === ''){
    msg.style.borderColor="red";
    spanmsg.style.color="red";
    spantextmsg.style.color="red";
    spantextmsg.style.display="block";
    hasError = true;
  }else{
    msg.style.borderColor="";
    spanmsg.style.color="";
    spantextmsg.style.color="";
    spantextmsg.style.display="";
  }

  let spanconsent = document.getElementById('consentspan');
  let spantextconsent = document.getElementById('spantextconsent');
  if(!consent.checked){
    spanconsent.style.color="red";
    spantextconsent.style.color="red";
    spantextconsent.style.display="block";
    hasError = true;
  }else{
    spanconsent.style.color="";
    spantextconsent.style.color="";
    spantextconsent.style.display="";
  }

  if(hasError == false){
    boxconfirmation.style.display="block";
    setTimeout(() => {
      boxconfirmation.style.opacity = "1"; 
    }, 10);
  }
}