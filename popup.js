'use strict';

let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
  chrome.storage.sync.set({ "androidDevelopers": "java" }, function(){
    //  A data saved callback omg so fancy
});
};

