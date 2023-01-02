document.getElementById("submit").addEventListener( "submit",function(event){
    let user=document.getElementById("user").value
    let reg=/^[A-Za-z]{3,29}$/
    let test=reg.test(user)
    if(test==false){
      document.getElementById("user").style.border="red 3px solid"
        event.preventDefault()
    }
})

document.getElementById("submit").addEventListener("submit",function(e){
    let email=document.getElementById("email").value 
    let reg2=/^[A-Za-z1-9]{3,}@(hotmail|gmail)\.(com|fr|ma)$/
    let test2=reg2.test(email)
    if(test2==false){
        document.getElementById("email").style.border="3px red solid"
        e.preventDefault()
    }
})

function validate() {
    var a = document.getElementById("pass").value;
    var b = document.getElementById("pass1").value;
    if (a!=b) alert("Les mots de passe ne correspondent pas.");
    else {
      alert("Les mots de passe correspondent.");
      document.f.submit();
 }
}
document.getElementById("submit").addEventListener("submit",function(e){

    let y=document.getElementById("pass").value
    let z=document.getElementById("pass1").value
    if(y=!z){
      e.preventDefault()
      document.getElementById("pass1").style.border="3px red solid"
    }
})
