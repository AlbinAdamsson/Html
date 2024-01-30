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

// let input = document.getElementById("textInput");
// let charcount = document.getElementById("charcount");

// input.addEventListener("keyup", function(){
//     let text = input.value;
//     let count = text.length;
//     charcount.textContent = 'Charcrhter count: ' + count;
// })


// //TASK 1
// let count = 0;

// document.getElementById('myButton').addEventListener('click', function() {
//   count++;
//   document.getElementById('displayCount').textContent = count;
// });

//TASK 2
// document.getElementById('myInput').addEventListener('keyup', function() {
//     document.getElementById('displayDiv').textContent = this.value;
//   });

//TASK3
// document.getElementById("formen"). addEventListener('submit', function(event){
//     event.preventDefault();
//     document.getElementById('messageDiv').textContent = 'Form Submitted!';
// });

//TAsk 4
document.getElementById('hoverDiv'). addEventListener('mouseover', function(){
this.style.color = 'red';
})
