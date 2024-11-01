const inputsname = [
    {element: document.getElementById('firstname'), name: 'First Name'},
    {element: document.getElementById('lastname'), name: 'Last Name'}
]
const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;


function start(){
  for(let i=0;i<inputsname.length;i++){
    let input = inputsname[i];
    if(input.element.value === ''){
        window.alert(`${input.name} não está preenchido`);
    }
  }
}