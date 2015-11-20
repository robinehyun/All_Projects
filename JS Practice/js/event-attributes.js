// function checkUsername() {
//   var elMsg = document.getElementById('feedback');
//   if (this.value.length < 5) {
//       elMsg.textContent = 'Username must be 5 characters or more';
//     } else {
//       elMsg.textContent = '';
//     }
//   }
//
// var elUsername = document.getElementById('username');
// // elUsername.onblur = checkUsername;
// elUsername.addEventListener('blur', checkUsername, false);

// var elUsername = document.getElementById('username');
// var elMsg = document.getElementById('feedback');
//
// function checkUsername(minLength) {
//   if (elUsername.value.length < minLength) {
//     elMsg.textContent = 'Username must be ' + minLength + ' characters or more';
//   } else {
//     elMsg.innerHTML = '';
//   }
// }
//
// if (elUsername.addEventListener) {
// elUsername.addEventListener('blur', function(){
//   checkUsername(5);
// }, false);
// } else {
//   //IE5-8 Fallback
//   elUsername.attachEvent('blur',function(){
//     checkUsername(5);
//   }, false);
// }

//declare function
function checkLength(e, minLength) {
  //declare variables
  var el, elMsg;
  //If event object doesnt exist
  if (!e) {
    //Use IE fallback
    e = window.event;
  }
  //Get target of event. srcElement is target property for IE5-8 equivalent
  el = e.target || e.srcElement;
  //Get its next sibling
  elMsg = el.nextSibling;
  //If length is too short set msg
  if (el.value.length < minLength) {
    elMsg.innerHTML = 'Username must be ' + minLength + ' characters of more';
  } else {
    elMsg.innerHTML = '';
  }
}
//Get username input
var elUsername = document.getElementById('username');
//If event listener supported
if (elUsername.addEventListener) {
  //on blur event
  elUsername.addEventListener('blur', function(e){
    //call checklength
    checkLength(e, 5);
    //capture in bubble phase
  }, false);
  //Otherwise
} else {
  //IE fallback on blur
  elUsername.attachEvent('blur', function(e){
    checkLength(e,5);
  }, false);
}

var elPassword = document.getElementById('password');
var elMsg2 = document.getElementById('feedback2');

function checkPassword(minLength) {
//   if (str.length < 6) {
//     elMsg2.textContent = 'Password must be 6 characters or more';
// } else if (str.length > 50) {
//     elMsg2.textContent = 'Password must be 50 characters or less';
// } else if (str.search(/\d/) == -1) {
//     elMsg2.textContent = 'Password must contain 1 number';
// } else if (str.search(/[a-zA-Z]/) == -1) {
//     elMsg2.textContent = 'Password must contain 1 letter';
// } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
//     elMsg2.textContent = 'Password must must contain a special character: !@#$%^&*()_+';
// }
// return("ok");
  if (elPassword.value.length < minLength) {
    elMsg2.textContent = 'Password must be ' + minLength + ' characters or more';
  } else {
    elMsg2.innerHTML = '';
  }
}

elPassword.addEventListener('blur',function() {
  checkPassword(6);
}, false);
