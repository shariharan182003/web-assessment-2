function validate(){
    let name=document.getElementById("name").value;
    let regno=document.getElementById("regno").value;
    let dob=document.getElementById("dob").value;
    let program=document.getElementById("program").value;
    let email=document.getElementById("email").value;
    let temp_add=document.getElementById("temp_add").value;
    let per_add=document.getElementById("per_add").value;
    let phone=document.getElementById("phone").value;
    if(name_check(name)){
        document.write("true")
    }
}
function phone_no(phone){
    const pattern_regex=/^\d{10}$/;
    return pattern_regex.test(phone);
}
function reg_no(regno){
    const pattern_regex=/^[a-zA-Z0-9]{9}$/
    return pattern_regex.test(regno);
}
function name_check(name){
    const pattern_regex=/^[a-zA-Z]{1,30}$/
    return pattern_regex.test(name);
}