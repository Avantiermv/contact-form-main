const inputsname = [
    {element: document.getElementById('firstname'), name: 'First Name'},
    {element: document.getElementById('lastname'), name: 'Last Name'}
];
const emailaddress = document.getElementById('emailaddress');
const query1 = document.getElementById('generalenquiry');
const query2 = document.getElementById('supportrequest');
const queryspanerror = document.getElementById('queryspanerror');
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

  for(let i=0;i<inputsname.length;i++){

    let span = document.getElementsByClassName('namespan');
    if(input.element.value === '' || !validateName(input.element.value)){
        input.element.style.borderColor="red";
        span.style.color="red";
        hasError = true;
    }else{
      input.element.style.borderColor="";
      span.style.color="";
    }

    let emailSpan = document.getElementById('emailspan');
    if(emailaddress.value === '' || !validateEmail(emailaddress.value)){
      emailaddress.style.borderColor="red"; 
      emailSpan.style.color="red";
      emailSpan.style.display="block";
      hasError = true;
    }else{
      emailaddress.style.borderColor=""; 
      emailSpan.style.color="";
    }
 
    let querySpan = document.getElementById('queryspan');
    if(!query1.checked || !query2.checked){
      querySpan.style.color="red";
      queryerror.style.display="block";
      hasError = true;
    }else{
      querySpan.style.color="";
    } 

    let msgspan = document.getElementById('msgspan');
    if(msg.value === ''){
      msgspan.style.color="red";
      hasError = true;
    }else{
      msg.style.borderColor="";
      msgspan.style.color="";
    }

    let consentSpan = document.getElementById('consentspan');
    if(!consent.checked){
      consent.style.borderColor="red";
      consentSpan.style.color="red";
      consentSpan.style.display="block";
      hasError = true;
    }else{
      consent.style.borderColor="";
      consentSpan.style.color="";
    }
  }

  if(!hasError){
    window.alert("Tudo certo");
  }
 
  
}