const check1 = document.getElementById("check");
check1.addEventListener("change",func())
function func(){
    if(check1.checked){
        clear()
    }
}
function clear(){
    document.getElementById("temp_add").style.display="none"
    document.getElementById("temp").innerHTML="";
}
function validate(){
    let name=document.getElementById("name").value;
    let regno=document.getElementById("regno").value;
    let dob=document.getElementById("dob").value;
    let program=document.getElementById("program").value;
    let email=document.getElementById("email").value;
    let temp_add=document.getElementById("temp_add").value;
    let per_add=document.getElementById("per_add").value;
    let phone=document.getElementById("phone").value;
    if(!phone_no(phone)){
        document.write("phone number is invalid<br>")
    }
    else{
        document.write("phone number is valid<br>")
    }
    if(!reg_no(regno)){
        document.write("register number is invalid<br>")
    }
    else{
        document.write("register number is valid<br>")
    }
    if(!name_check(name)){
        document.write("name is invalid<br>")
    }
    else{
        document.write("name is valid<br>")
    }
    if(!email_valid(email)){
        document.write("email is invalid<br>")
    }
    else{
        document.write("email is valid<br>")
    }
}
function phone_no(phone){
    const pattern_regex=/^\d{10}$/;
    return pattern_regex.test(phone);
}
function reg_no(regno){
    const pattern_regex=/^[a-zA-Z0-9]{9}$/;
    return pattern_regex.test(regno);
}
function name_check(name){
    const pattern_regex = /^[a-zA-Z]{1,30}$/;
    return pattern_regex.test(name);
}
function email_valid(email){
    const pattern_regex = /@gmail\.com$/;
    return pattern_regex.test(email);
}
