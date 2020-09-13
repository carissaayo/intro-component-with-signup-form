let inputs = document.querySelectorAll('input');
let FirstName = document.getElementById('FirstName')
let LastName = document.getElementById('LastName')
let EmailAddress = document.getElementById('EmailAddress')
let password = document.getElementById('password')
let button = document.querySelector('button');
let group = [FirstName,LastName,password,EmailAddress];
let pattern = /^([a-z\d-\.]+)@([a-z\d-]+)\.([a-z]{2,5})(\.{2,5})?$/i; 

function overAll(group,inputs){
    // FirstName
    if (inputs[0].value == '') {

        FirstName.style.display = 'block'
    }
    //LAstName
    if (inputs[1].value == '') {

        LastName.style.display = 'block'
    }
    //Email
    if (!pattern.test(inputs[2].value)) {

        EmailAddress.style.display = 'block'
    }
    //Password
    if (inputs[3].value == '') {

        password.style.display = 'block'
    }
}

button.addEventListener('click',()=>{
    overAll(group,inputs)
})
 

