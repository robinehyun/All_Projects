var fetchJSON = new xhrHandler();

var posts = [];

//Return the querystring part of a URL
var q =  window.location.search;
console.log(q);
//extracts the characters from a string, between two specified indices, and returns the new sub string.
var id = q.substr(1);
console.log(id);


fetchJSON.request("GET", "posts/"+id).then(function(res) {
console.log(res);
  var myArticle = "";

  var d = new Date(res.date);
  var day = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();
  var date = month + "/" + day + "/" + year;
  console.log(date);

  myArticle += "<div class='artTitle'>" + res.title + "</div>" + "<div class='date'>" + date + "</div>" + "<div class='artContent'>" +res.content + "</div>";


 document.getElementById('article').innerHTML = myArticle;
});
