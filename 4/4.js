function validate(){
    let name=document.getElementById("name").value;
    let regno=document.getElementById("regno").value;
    let dob=document.getElementById("dob").value;
    let program=document.getElementById("program").value;
    let email=document.getElementById("email").value;
    let temp_add=document.getElementById("temp_add").value;
    let per_add=document.getElementById("per_add").value;
    let phone=document.getElementById("phone").value;
    if(regno(regno)){
        document.write("true")
    }
    else{
        document.write("false")
    }
}
function phone_no(phone){
    const pattern_regex = /^\d{10}$/;
    return pattern_regex.test(phone);
}
function regno(regno){
    const pattern_regex=/^[0-9a-zA-Z]*$/;
    return pattern_regex.test(regno);
}