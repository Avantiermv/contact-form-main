const inputsname = [
    {element: document.getElementById('firstname'), name: 'First Name'},
    {element: document.getElementById('lastname'), name: 'Last Name'}
];
const emailaddress = document.getElementById('emailaddress');
const spans = document.getElementsByTagName('span');
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

  for(let i=0;i<inputsname.length;i++){
    let input = inputsname[i];
    let span = spans[i];

    if(input.element.value === '' || !validateName(input.element.value)){
        input.element.style.borderColor="red";
        span.style.color="red";
        hasError = true;
    }else{
      input.element.style.borderColor="";
      span.style.color="";
    }

    let emailSpan = spans[inputsname.length];
    if(emailaddress.value === '' || !validateEmail(emailaddress.value)){
      emailaddress.style.borderColor="red"; 
      emailSpan.style.color="red";
      window.alert("Tem npumero no teu nome");
      hasError = true;
    }else{
      emailaddress.style.borderColor=""; 
      emailSpan.style.color="";
    }
 
    let querySpan = spans[inputsname.length + 1];
    if(!query1.checked || !query2.checked){
     querySpan.style.color="red";
     hasError = true;
    }else{
      querySpan.style.color="";
    } 

    let msgSpan = spans[inputsname.length + 2];
    if(msg.value === ''){
      msg.style.borderColor="red";
      msgSpan.style.color="red";
      hasError = true;
    }else{
      msg.style.borderColor="";
      msgSpan.style.color="";
    }

    let consentSpan = spans[inputsname.length + 3];
    if(!consent.checked){
      consent.style.borderColor="red";
      consentSpan.style.color="red";
      hasError = true;
    }else{
      consent.style.borderColor="";
      consentSpan.style.color="";
    }
  }


 
  
}