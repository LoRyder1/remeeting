
$.ajax({
  url: "https://api-dev.remeeting.com/v0.3/meeting/",
  dataType: 'json',
  headers: {
    'Authorization': 'Bearer nGVhDpbr2wjs8FgsecMXHpdJ'
  },
  contentType: 'application/json',
  success: function(result) {
    console.log(result)
  },
  error: function(error) {
    console.log("FAIL")
  }
});

// curl -H "Content-Type: application/json" -H "Authorization: Bearer nGVhDpbr2wjs8FgsecMXHpdJ" https://api-dev.remeeting.com/v0.3/meeting/


// $.getJSON("http://api.themoviedb.org/2.1/Movie.search/en/json/23afca60ebf72f8d88cdcae2c4f31866/" + film + "?callback=?", function(json) {

//                //TMDb is nice enough to return a message if nothing was found, so we can base our if statement on this information

//                if (json != "Nothing found."){

//                   //Display the poster and a message announcing the result

//                      $('#poster').html('<h2 class="loading">Well, gee whiz! We found you a poster, skip!</h2><img id="thePoster" src=' + json[0].posters[0].image.url + ' />');








// $.get("www.google.com", function(data){
//   alert("Data: " + data);
// });

// function httpGet(theUrl)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
//     xmlHttp.send( null );
//     return xmlHttp.responseText;
// }

// httpGet("www.google.com")

// function httpRequest()
// {
//     var ajax = null,
//         response = null,
//         self = this;

//     this.method = null;
//     this.url = null;
//     this.async = true;
//     this.data = null;

//     this.send = function()
//     {
//         ajax.open(this.method, this.url, this.asnyc);
//         ajax.send(this.data);
//     };

//     if(window.XMLHttpRequest)
//     {
//         ajax = new XMLHttpRequest();
//     }
//     else if(window.ActiveXObject)
//     {
//         try
//         {
//             ajax = new ActiveXObject("Msxml2.XMLHTTP.6.0");
//         }
//         catch(e)
//         {
//             try
//             {
//                 ajax = new ActiveXObject("Msxml2.XMLHTTP.3.0");
//             }
//             catch(ee)
//             {
//                 self.fail("not supported");
//             }
//         }
//     }

//     if(ajax == null)
//     {
//         return false;
//     }

//     ajax.onreadystatechange = function()
//     {
//         if(this.readyState == 4)
//         {
//             if(this.status == 200)
//             {
//                 self.success(this.responseText);
//             }
//             else
//             {
//                 self.fail(this.status + " - " + this.statusText);
//             }
//         }
//     };
// }

// //create request with its porperties
// var request = new httpRequest();
// request.method = "GET";
// request.url = "https://example.com/api?parameter=value";

// //create callback for success containing the response
// request.success = function(response)
// {
//     console.log(response);
// };

// //and a fail callback containing the error
// request.fail = function(error)
// {
//     console.log(error);
// };

// //and finally send it away
// request.send();
