const inputsname = [
    {element: document.getElementById('firstname'), name: 'First Name'},
    {element: document.getElementById('lastname'), name: 'Last Name'}
];
const emailaddress = document.getElementById('emailaddress');
const spans = document.getElementsByTagName('span');
const spanError = document.getElementsByClassName('spanError');
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
    let input = inputsname[i];

    let span = input.element.nextElementSibling;
    if(input.element.value === '' || !validateName(input.element.value)){
        input.element.style.borderColor="red";
        span.style.color="red";
        span.style.display="Block";
        hasError = true;
    }else{
      input.element.style.borderColor="";
      span.style.color="";
    }

    let emailSpan = emailaddress.nextElementSibling;
    if(emailaddress.value === '' || !validateEmail(emailaddress.value)){
      emailaddress.style.borderColor="red"; 
      emailSpan.style.color="red";
      emailSpan.style.display="block";
      hasError = true;
    }else{
      emailaddress.style.borderColor=""; 
      emailSpan.style.color="";
    }
 
    let querySpan = spans[inputsname.length];
    let queryerror = queryspanerror;
    if(!query1.checked || !query2.checked){
      querySpan.style.color="red";
      queryerror.style.display="block";
      hasError = true;
    }else{
      querySpan.style.color="";
    } 

    let msgSpan = document.getElementById('messagebox').nextElementSibling;
    if(msg.value === ''){
      msg.style.borderColor="red";
      msgSpan.style.color="red";
      msgSpan.style.display="block";
      hasError = true;
    }else{
      msg.style.borderColor="";
      msgSpan.style.color="";
    }

    let consentSpan = consent.nextElementSibling.nextElementSibling;
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


 
  
}