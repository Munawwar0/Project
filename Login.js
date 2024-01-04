let username = document.getElementById("un");
let password = document.getElementById("pass");

function Login(){
    username = username.value;
    password = password.value;

     let userData = JSON.parse(localStorage.getItem("userdetails"));
     
     if((username === userData.un)&&(password === userData.pass) ){
        open("index.html","_self");
     }
     else{
        alert("INAVLID CREDENTIALS");
     }
}