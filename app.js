getName();
 // capturar el nombre ingresado por el usuario
function capturar(){
    const name=document.getElementById("nombre").value;
 // Saludar a el usuario
    document.getElementById("bienvenida").innerHTML = "<h1> Bienvenida Super" +name+ "</h1>";
  document.getElementById("categoria").style.display = "block";
  
}

/*function getName(){
  var name = prompt("¿Cuál es tu supernombre?");
  document.getElementById("name").innerHTML = name;
}

*/
function marvel(){
var questions= [
     {
           prompt: "Quien fue el primer Avenger?\n(a) Hulk\n\ (b)Capitan America\n(c) Black Widow",
           answer: "b"
     },
     {
          prompt: "¿Quién mató al Capitán América en el comic Capitan America, Civil War?\n(a) Iron Man\n\ (b) Winter Soiler\n(c) Crossbones",
          answer: "c"
     },
     {
          prompt: "¿De qué país viene Black Panter?\n(a) Wakanda\n\ (b) New York\n(c) San Salvador",
          answer: "a"
     }
];
var score = 0;

for(var i = 0; i < questions.length; i++){
     var response = window.prompt(questions[i].prompt);
     if(response == questions[i].answer){
          score++;
          alert("¡Correcto!");
     } else {
          alert("¡Incorrecto!");
     }
}
alert("Obtuviste " + score + "/" + questions.length);
}
function dccomics(){
var questions= [
     {
           prompt: "¿De qué planeta viene Superman?\n(a)Starlag \n\ (b)Krypton \n\ (c) Portworld",
          answer: "b"
     },
     {
         prompt: "¿Cuántos son en la Liga de la Justicia de América original? \n(a) 10\n\ (b)5\n(c) 6",
           answer: "c" 
     },
     {
       prompt: "¿Quién mata a Superman?\n  (a) Lex Luthor\n\ (b) Doomsday\n(c) Batman",
          answer: "a"
     }
];
var score = 0;

for(var i = 0; i < questions.length; i++){
     var response = window.prompt(questions[i].prompt);
     if(response == questions[i].answer){
          score++;
          alert("¡Correcto!");
     } else {
          alert("¡Incorrecto!");
     }
}
alert("Obtuviste " + score + "/" + questions.length);
}

function playAgain(){
  var question = alert ("Da clic en una de las opciones de arriba");
}
