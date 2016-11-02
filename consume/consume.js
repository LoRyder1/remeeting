// result contains all meetings from user
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

// can not find meeting data for key: 9 which is the oldest meeting
// default = d
// audios = "https://api-dev.remeeting.com/v0.3/meeting/data/" + min_data[0] + "/"

var audioPaths = [];
var audios = "https://api-dev.remeeting.com/v0.3/meeting/data/d/"



function getAudioPaths() {
  $.ajax({
    url: audios,
    dataType: 'json',
    headers: {
      'Authorization': 'Bearer nGVhDpbr2wjs8FgsecMXHpdJ'
    },
    contentType: 'application/json',
    success: function(result) {
      audioPaths = result["path"]
      console.log(audioPaths);
    },
    error: function(error) {
      console.log("FAIL")
    }
  });
  conLog();
}

function conLog() {
  console.log(audioPaths);
}

getAudioPaths();

// var path = ""
// var s3Url = ""

// $(document).ajaxComplete(function() {
//   if (audioPaths.length != 0) {
//     for(var i = 0; i < audioPaths.length; ++i) {
//       if (audioPaths[i].endsWith('.m4a')){
//         path = audioPaths[i]
//       }
//     }
//     console.log(audioPaths);
//     console.log(path)
//     path = path.substring(1);
//     s3Url = audios + path;

//     // can't do another ajax call inside of ajaxComplete
//     $.ajax({
//       url: s3Url,
//       headers: {
//         'Authorization': 'Bearer nGVhDpbr2wjs8FgsecMXHpdJ'
//       },
//       success: function(result) {
//         console.log(result)
//       },
//       error: function(error) {
//         console.log("FAIL")
//       }
//     })


//     console.log(audios + path)
//   }
// })