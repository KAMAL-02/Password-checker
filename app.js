let pswd = document.getElementById("Password");
let msg = document.getElementById("message");
let strength = document.getElementById("strength");

pswd.addEventListener("input",()=>{
    if(pswd.value.length > 0){
        msg.style.display = "block" ;
    }else{
        msg.style.display = "none" ;
    }
    if(pswd.value.length < 4){
        strength.innerHTML = "WEAK";
        pswd.style.borderColor = "#ff5925" ;
        msg.style.color = "#ff5925" ;
    }
    else if(pswd.value.length >= 4 && pswd.value.length < 8){
        strength.innerHTML = "MEDIUM" ;
        pswd.style.borderColor = "yellow" ;
        msg.style.color = "yellow" ;
    }
    else{
        strength.innerHTML = "STRONG" ;
        pswd.style.borderColor = "#26d730" ;
        msg.style.color = "#26d730" ;
    }
})
