// const button = document.getElementById('MyButton');
// button.addEventListener('click', function(){
//     alert('The button was pressed');
// });

// const form = document.getElementById("myForm");
// const emailInPut = document.getElementById('email');
// const errorPara = document.getElementById("error");

// form.addEventListener("submit", function(event){
//     event.preventDefault();

//     if(emailInPut.value.includes('@')){
//         form.submit()
//     } else{
//         errorPara.textContent = "Please enter a valid emailadress"
//     }
// });

let input = document.getElementById("textInput");
let charcount = document.getElementById("charcount");

input.addEventListener("keyup", function(){
    let text = input.value;
    let count = text.length;
    charcount.textContent = 'Charcrhter count: ' + count;
})