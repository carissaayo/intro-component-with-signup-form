let inputs = document.querySelectorAll('input');

let patterns ={
    FirstName: /^[a-z]{4,}$/i,
    LastName: /^[a-z]{4,}$/i,
    EmailAddress: /^([a-z\d-\.]+)@([a-z\d-]+)\.([a-z]{2,5})(\.{2,5})?$/i,
    password: /^[a-z\d@%-&*]{7,15}$/,
}
inputs.forEach((input)=>{
   input.addEventListener('keyup',(e)=>{
       validate(e.target,patterns[e.target.attributes.name.value])
   })
}
)
function validate(field,regex){
    if(regex.test(field.value)){
    field.className = 'valid'     
    }else{
        field.className ='invalid'
    }

}


