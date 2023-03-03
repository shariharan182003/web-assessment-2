let pdata;

$.ajax({
    url: 'data.json',
    dataType: 'json',
    success: function (data) {
        // code to handle successful AJAX call
        // will log the JSON data to the console
        pdata = data;
        console.log(pdata.name);
        $("#table").append("<tr><th>Name</th><th>DOB</th><th>FatherName</th><th>MotherName</th><th>Blood Group</th><th>E-mail</th><th>Phone</th><th>Address</th><th>Degree</th></tr>");
        for (let index = 0; index < pdata.length; index++) {
            $("#table").append("<tr>" + "<td>" + pdata[index].name + "</td>" +
                "<td>" + pdata[index].dob + "</td>"
                + "<td>" + pdata[index].fathername + "</td>"
                + "<td>" + pdata[index].mothername + "</td>"
                + "<td>" + pdata[index].bloodgrp + "</td>"
                + "<td>" + pdata[index].email + "</td>"
                + "<td>" + pdata[index].phone + "</td>"
                + "<td>" + pdata[index].address + "</td>"
                + "<td>" + pdata[index].degree + "</td>"
                + "</tr>");
        }
    },
    error: function (xhr, textStatus, errorThrown) {
        // code to handle failed AJAX call
        console.log('Error:', errorThrown);
    }
});
