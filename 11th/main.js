// // //.setItem - Veri kaydetmek için kullanılır.

// // // sessionStorage.setItem('1','Numan')
// localStorage.setItem('2','Numan');
// localStorage.setItem('3','Kaplan');
// localStorage.setItem('4','22');


// // localStorage.removeItem('3')// Tek silme işlemi için. !!!! (Clear DEĞİL.)

// let keys = ['2','3','4'];
// let values = keys.map(key => localStorage.getItem(key)).join(' '); // mapleme yapıp id namelerini yan yana getirdim, aralarına da join ile boşluk koydum.


// document.getElementById('name').innerText = values;

// -------------------------------------------------------------------------------------------------

class Users {
    constructor(name,password)
    {
        this.name = name;
        this.password = password;
    }
}

let miniData = 
[

]



let login = document.getElementById('login');
let sign = document.getElementById('sign');

let nameUser = document.getElementById('nameUser');
let passUser = document.getElementById('passUser');

let loginName = document.getElementById('loginName');
let loginPass = document.getElementById('loginPass');

sign.addEventListener('submit',(sign)=>{
sign.preventDefault()// Formun varsayılan çalışmasını durdurur.
localStorage.setItem('1',nameUser.value)
localStorage.setItem('2',passUser.value)
window.location.href="index.html"
});

login.addEventListener('submit',(login)=>{
login.preventDefault();

let userGet = localStorage.getItem('1')
let passGet = localStorage.getItem('2')

if(loginName.value == userGet && loginPass.value == passGet)
{
    alert('Hoşgeldiniz '+ loginName.value);
    
}
else{
    alert('Doğru değil :(')
}
window.location.href="index.html";
});

let student = {ad : 'Numan'};

localStorage.setItem("student",JSON.stringify(student))
 