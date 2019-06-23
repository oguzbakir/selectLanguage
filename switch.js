window.onload=function(){
    chrome.storage.sync.get("androidDevelopers", function(items){
        if (items){
            window.location.hash = items["androidDevelopers"]
        }
    });
}
  