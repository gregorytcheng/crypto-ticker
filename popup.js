document.addEventListener('DOMContentLoaded', function() {

  var cryptos = ["BTC", "ETH", "XRP"]

  $.getJSON("https://api.coinmarketcap.com/v1/ticker/", function(data){



          for (x = 0; x < 1170; x++){
          $("#values").append("<tr>")

          $("#values").append("<th>" + data[x].name + "</th>")
          $("#values").append("<th>" + data[x].symbol + "</th>")
          $("#values").append("<th>" + data[x].price_usd + "</th>")


          $("#values").append("</tr>")
          }


          //$("#values").append("eeee" + data[0].name)




    });











}, false);
