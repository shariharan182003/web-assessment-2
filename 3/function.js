function manipulate() {

    let phrase = document.getElementById("phrase").value;
    let filter = document.getElementById("filter").value;
    let phArr = phrase.split(" ");
    let word = document.getElementById("words");
    word.innerHTML = "";
    console.log(phArr.length);
    console.log(filter);
    let count = 0;
    for (let index = phArr.length - 1; index >= 0; index--) {
        let src = phArr[index].toLowerCase();
        let srch = filter.toLowerCase();
        if (filter != null && src.search(srch) != -1) {
            count++;
            continue;
        }
        const span = document.createElement("span");
        span.className = "word";
        span.innerHTML = phArr[index];
        span.style.margin = "2px";
        word.appendChild(span);
    }
    if (count > 0) {
        console.log(count);
        const p = document.createElement("p");
        p.innerHTML = count + " word(s) has been filtered";
        word.appendChild(p);
    }
    // word.style.nth
}