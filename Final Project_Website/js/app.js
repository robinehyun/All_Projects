var fetchJSON = new xhrHandler();

var posts = [];

fetchJSON.request("GET", "posts/").then(function(res) {
  posts = res.posts;
  console.log(posts);
  var myPosts = "";

 for (var i = 0; i < posts.length; i++) {
     var d = new Date(posts[i].date);
     var day = d.getDate();
     var month = d.getMonth() + 1;
     var year = d.getFullYear();
     var date = month + "/" + day + "/" + year;

     myPosts += "<div class='wp'>" + "<img src="+posts[i].featured_image+">" + "<h3><a class ='postTitle' href='article.html?"+posts[i].ID+"'>" + posts[i].title + "</a></h3>" + "<span class='date'>" + date + "</span>" + posts[i].excerpt + "</div>";
 }

 document.getElementById('homecontent').innerHTML = myPosts;
});

//   var whatever = 'hi'
//
// $(document).ready(function(){
//   var whatever = 'not defindeddddd'
//
//   $('nav').on('click', function(){
//
//     $(this).hide();
//
//   })
//
//   $.ajax({
//     url: "https://public-api.wordpress.com/rest/v1/sites/102477355/posts/"
//   }).done(function(posts) {
//   console.log(posts)
//   })
//
// });
