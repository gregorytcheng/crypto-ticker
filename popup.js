document.addEventListener('DOMContentLoaded', function() {

  var cryptos = ["BTC", "ETH", "LTC"]

  $.getJSON("https://api.coinmarketcap.com/v1/ticker/", function(data){



          for (x = 0; x < 10; x++){

          $("#values").append("<tr>")

          $("#values").append("<td>" + data[x].name + "</td>")
          $("#values").append("<td>" + data[x].symbol + "</td>")
          $("#values").append("<td>" + data[x].price_usd + "</td>")

          $("#values").append("</tr>")
          }



    });











}, false);
