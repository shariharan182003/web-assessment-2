function dateTime() {
    const clock = new Date();
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let sec = clock.getSeconds();
    minutes = checkTime(minutes);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + sec;
    setTimeout(dateTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

var slideindex = 0;
slide();
function slide(){
    var slides = document.getElementsByClassName("image");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideindex++;
    if (slideindex > slides.length)
        slideindex = 1;
    slides[slideindex - 1].style.display = "block";
    setTimeout(slide, 3000);
}

function change() {
    let font_style = document.getElementById("font").value;
    let font_size = document.getElementById("size").value;
    let color = document.getElementById("color-picker").value;
    document.body.style.fontFamily = font_style;
    document.body.style.fontSize = font_size;
    document.body.style.backgroundColor = color;
}