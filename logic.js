const inputsname = [
    {element: document.getElementById('firstname'), name: 'First Name'},
    {element: document.getElementById('lastname'), name: 'Last Name'}
];
const emailadress = document.getElementById('emailaddress');
const spans = document.getElementsByTagName('span');
const query1 = document.getElementById('generalenquiry');
const query2 = document.getElementById('supportrequest');

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
        span.style.color="red"
    }

    if(emailadress.value === '' || !validateEmail(emailadress.value)){
      emailadress.style.borderColor="red"; 
      span.style.color="red";
    }
 
   if(!query1.checked || !query2.checked){
     span.style.color="red";
     window.alert("Bolinha nãp preenchdia");
   }


  }


 
  
}