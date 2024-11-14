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
 
  if(inputsname === '' || !validateName(inputsname)){
    inputsname.style.color="red";
  }
  
}