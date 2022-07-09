function toggleOn(source) {
    checkboxes = document.getElementsByName("charabox");
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = true;
    }
}

function toggleOff(source) {
    checkboxes = document.getElementsByName("charabox");
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = false;
    }
}