let pdata;

$.ajax({
    url: 'data.json',
    dataType: 'json',
    success: function (data) {
        // code to handle successful AJAX call
        // will log the JSON data to the console
        pdata = data;
        console.log(pdata.collect[0].name);
        $("#table").append("<tr><th>Name</th><th>DOB</th><th>FatherName</th><th>MotherName</th><th>Blood Group</th><th>E-mail</th><th>Phone</th><th>Address</th><th>Degree</th></tr>");
        for (let index = 0; index < pdata.collect.length; index++) {
            $("#table").append("<tr>" + "<td>" + pdata.collect[index].name + "</td>" +
                "<td>" + pdata.collect[index].dob + "</td>"
                + "<td>" + pdata.collect[index].fathername + "</td>"
                + "<td>" + pdata.collect[index].mothername + "</td>"
                + "<td>" + pdata.collect[index].bloodgrp + "</td>"
                + "<td>" + pdata.collect[index].email + "</td>"
                + "<td>" + pdata.collect[index].phone + "</td>"
                + "<td>" + pdata.collect[index].address + "</td>"
                + "<td>" + pdata.collect[index].degree + "</td>"
                + "</tr>");

        }
    },
    error: function (xhr, textStatus, errorThrown) {
        // code to handle failed AJAX call
        console.log('Error:', errorThrown);
    }
});
