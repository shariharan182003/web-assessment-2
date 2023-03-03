collection()
function process(obj){
    document.getElementById("table").innerHTML="<tr>"
}
function collection(){
    const jsonFilePath = 'data.json';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', jsonFilePath, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
    const jsonObject = xhr.response;
    process(jsonObject)
    };
    xhr.send();
}
