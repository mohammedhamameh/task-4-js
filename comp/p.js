/*==============sign up==================*/ 

let nameInput=document.getElementById("name");
 let emailInput=document.getElementById("email");
 let passwordInput=document.getElementById("password");
let signMessage=document.querySelector(".message");
let btnSave=document.querySelector(".save");
let messageEmail=document.getElementById("messageEmail");
let btnl=document.querySelector(".btnl");
let listData=[];

if(btnSave!=null){
if(localStorage.getItem("user")!=null){
    listData=JSON.parse(localStorage.getItem("user"));
}
let newData;
function createUser(){
    newData={
        nameUser:nameInput.value,
        emailUser:emailInput.value,
        passwordUser:passwordInput.value
    };
    listData.push(newData);
    localStorage.setItem("user",JSON.stringify(listData))
    clear();
    document.location.href="./index.html";
}
function clear(){
nameInput.value="";
passwordInput.value="";
emailInput.value=""
}

let regexEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
emailInput.addEventListener("blur",function(){
    if(regexEmail.test(emailInput.value)){
        emailInput.classList.add("correct");
        messageEmail.innerHTML="";
    }else{
        emailInput.classList.remove("correct");
        messageEmail.classList.add("not-correct");
        messageEmail.innerHTML="The email must contain @gmail.com";
    }
});
btnSave.addEventListener("click",function(){
    if(nameInput.value==""|| emailInput.value=="" || passwordInput.value==""){
        signMessage.innerHTML="Must fill all inputs";
        signMessage.classList.add("not-correct");
    }else if(listData.length==0 && regexEmail.test(emailInput.value)) {
        createUser();
    } else if(listData.length>0){
        for(let i=0;i<listData.length;i++){
            if(emailInput.value==listData[i].emailUser){
                messageEmail.classList.add("not-correct");
                messageEmail.innerHTML="This email  used before";
                 
                clear();
            }
        }
    }
    if(regexEmail.test(emailInput.value)==true )

        createUser();
   
    }
);
btnl.addEventListener('click',function(){
document.location.href="./index.html"
});
}
/*=============log in================*/

let emailInputLogin=document.getElementById("emailLogin");
let passwordInputLogin=document.getElementById("passwordLogin");
let loginMessage=document.querySelector(".messageLogin");
let btnLogin=document.getElementById("btn-login");
let btns=document.querySelector(".btns");
let listDatalogin=[];

if(btnLogin!=null){
    if(localStorage.getItem("user")!=null){
        listData=JSON.parse(localStorage.getItem("user"));
    }
    let regexEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    emailInputLogin.addEventListener("blur",function(){
        if(regexEmail.test(emailInputLogin.value)){
            loginMessage.innerHTML="";
            emailInputLogin.classList.add("correct");
        }else{
            emailInputLogin.classList.remove("correct");
           loginMessage.classList.add("not-correct");
            loginMessage.innerHTML="The email must contain @gmail.com";
        }
    });

btnLogin.addEventListener("click",function (){
if(emailInputLogin.value ==""|| passwordInputLogin.value==""){
loginMessage.innerHTML="Must fill all inputs"
loginMessage.classList.add("not-correct");

}else if(regexEmail.test(emailInputLogin.value)==true) {
for(let i=0;i<listData.length;i++){ 
if(emailInputLogin.value==listData[i].emailUser && passwordInputLogin.value==listData[i].passwordUser){
listDatalogin.push(listData[i].nameUser)
localStorage.setItem("pass",JSON.stringify(listDatalogin));

document.location.href="./home.html";
}else{
    loginMessage.innerHTML="Email or Password doesnt match";
    loginMessage.classList.add("not-correct");
    
}

}
clear2();
}
});
function clear2(){
    emailInputLogin.value="";
    passwordInputLogin.value=""
}
btns.addEventListener('click',function(){
    document.location.href="./sign-up.html"
})
}
/*================home================*/
let namePass=document.getElementById("name-user");
let btnlogout=document.getElementById("log-out");
let listDatahome=[];
listDatahome=JSON.parse(localStorage.getItem("pass"));
if(btnlogout!=null){
namePass.innerHTML=`Hi ${listDatahome[0]}`;
namePass.classList.add("correct");

btnlogout.addEventListener('click',function(){
    localStorage.removeItem("pass");
    document.location.href="./index.html";
})
};