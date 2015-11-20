// var el = document.getElementById('one');
//
// el.className = 'cool';

// var elements = document.getElementsByClassName('hot');
//
// if(elements.length > 2) {
//   var el = elements[2];
//   el.className = 'cool';
// }

// var hotItems = document.querySelectorAll('li.hot');
//
// if (hotItems.length > 0) {
//   for(var i = 0; i < hotItems.length; i++) {
//     hotItems[i].className = 'cool';
//   }
// };

// var startItem = document.getElementById('two');
// var prevItem = startItem.previousSibling;
// var nextItem = startItem.nextSibling;
// console.log(prevItem);
// prevItem.className = 'complete';
// nextItem.className = 'cool';
//
// var startItem = document.getElementsByTagName('ul')[0];
// var firstItem = startItem.firstChild;
// var lastItem = startItem.lastChild;
//
// firstItem.setAttribute('class', 'complete');
// lastItem.setAttribute('class', 'cool');

// var itemTwo = document.getElementById('two');
// var elText = itemTwo.firstChild.nodeValue;
// elText = elText.replace('pine nuts', 'kale');
// itemTwo.firstChild.nodeValue = elText;

// var listItem = document.createElement('li');
// var textItem = document.createTextNode('quinoa');
//
// listItem.appendChild(textItem);
//
// var position = document.getElementsByTagName('ul')[0];
//
// position.appendChild(listItem);
//
// listItem.setAttribute('id', 'four');

function getTarget(e) {
  if (!e) {
    e = window.event;
  }
  return e.target || e.srcElement;
}

function itemDone(e) {
  var target, elParent, elGrandparent;
  target = getTarget(e);
  elParent = target.parentNode;
  elGrandparent = target.parentNode.parentNode;
  elGrandparent.removeChild(elParent);

  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
}

var el = document.getElementById('shoppingList');
if (el.addEventListener) {
  el.addEventListener('click', function(e) {
    itemDone(e);
  }, false);
} else {
  el.attachEvent('click', function(e) {
    itemDone(e);
  }, false);
}
