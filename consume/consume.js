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

$.ajax({
  url: audios,
  dataType: 'json',
  headers: {
    'Authorization': 'Bearer nGVhDpbr2wjs8FgsecMXHpdJ'
  },
  contentType: 'application/json',
  success: function(result) {
    audioPaths = result["path"]
  },
  error: function(error) {
    console.log("FAIL")
  }
});

var path = ""

$(document).ajaxComplete(function() {
  if (audioPaths.length != 0) {
    for(var i = 0; i < audioPaths.length; ++i) {
      if (audioPaths[i].endsWith('.m4a')){
        path = audioPaths[i]
      }
    }
    console.log(audioPaths);
    console.log(path)
    path = path.substring(1);
    console.log(audios + path)
  }
})