let count = 0;

function add() {
    var data = $("#txtbox").val();
    $("#list").append("<li>" + data + "</li>");

    $("li:even").css('background-color', 'yellow');
    $("li:odd").css('background-color', 'white');
    $("#txtbox").val("");
}

function remove() {
    var data = $("#txtbox").val().toLowerCase();
    var listData = $("#list li");
    for (let index = 0; index < listData.length; index++) {
        var lidata = $(listData[index]).text().toLowerCase();
        if (data==lidata) {
            $(listData[index]).remove();
            break;
        }   
    }
    $("li:even").css('background-color', 'yellow');
    $("li:odd").css('background-color', 'white');
    $("#txtbox").val("");
}