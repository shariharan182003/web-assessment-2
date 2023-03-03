let pdata;

$.ajax({
    url: 'products.json',
    dataType: 'json',
    success: function (data) {
        // code to handle successful AJAX call
        // will log the JSON data to the console
        pdata = data;
        console.log(pdata.products.data.items[0].name);
        for (let index = 0; index < pdata.products.data.items.length; index++) {
            $("#ddlist").append("<option value=" + "'pdata.products.data.items[index].name'>" + pdata.products.data.items[index].name + "</option>")
        }
    },
    error: function (xhr, textStatus, errorThrown) {
        // code to handle failed AJAX call
        console.log('Error:', errorThrown);
    }
});

function getDetails() {
    let item = $('#ddlist').find(":selected").text();
    for (let index = 0; index < pdata.products.data.items.length; index++) {
        if (pdata.products.data.items[index].name == item) {
            $("#details-tab").empty();
            $("#details-tab").append("<tr><th>Product id</th>" + "<td>" + pdata.products.data.items[index].id +"</td></tr>");
            $("#details-tab").append("<tr><th>Product name</th>" + "<td>" + pdata.products.data.items[index].name + "</td></tr>");
            $("#details-tab").append("<tr><th>Product price</th>" + "<td>" +"$ "+ pdata.products.data.items[index].price + "</td></tr>");
            $("#details-tab").append("<tr><th>Product category</th>" + "<td>" + pdata.products.data.items[index].category + "</td></tr>");
            break;
        }
    }
}


