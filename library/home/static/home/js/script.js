const name1 = document.getElementById("validationDefault01");
const number = document.getElementById("validationDefault02");
const address = document.getElementById("validationDefault03");
const description = document.getElementById("validationDefault04");
const myform = document.getElementById("myform");
const error = document.getElementById("error")

const button = document.getElementById("#button")

myform.addEventListener('submit',(e)=>{
        let message = []
    
        if(name1.value ==' ' || number.value ==' ' || address.value == ' ')
        {
            message.push("Check for empty field's")
        }
        
        if(message.length > 0){
            error.innerText = message.join(' , ')
            e.preventDefault();
        }

        e.preventDefault();
        swal("Thank you", "Sucessfully booked", "success");
        
})
$( document ).ready(function( $ ) {
    $( '#my-slider' ).sliderPro();
});


// 