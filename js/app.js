let inputs = document.querySelectorAll('input');
let FirstName = document.getElementById('FirstName')
let LastName = document.getElementById('LastName')
let EmailAddress = document.getElementById('EmailAddress')
let password = document.getElementById('password')
let button = document.querySelector('button');
let group = [FirstName,LastName,password,EmailAddress];
let pattern = /(\w-_){5,20}@(\w{2,10}\.())/; 

function overAll(group,inputs){
    if (inputs[0].value == '') {

        FirstName.style.display = 'block'
    }
    if (inputs[1].value == '') {

        LastName.style.display = 'block'
    }
    if (inputs[2].value == '') {

        EmailAddress.style.display = 'block'
    }
    if (inputs[3].value == '') {

        password.style.display = 'block'
    }
}
function email(EmailAddress){

}

button.addEventListener('click',()=>{
    overAll(group,inputs)
})
 

