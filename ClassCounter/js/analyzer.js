//  analyze css classes
// populate class objects
var classes = [];
var classCnt = {};
var maxCount = 0;
[].forEach.call(document.querySelectorAll("*"), function(element) {
  if (element.className) {
    var tempClassArr = element.className.split(" ");
    for(i in tempClassArr) {
      if (classes.indexOf(tempClassArr[i]) == -1) {
        classes.push(tempClassArr[i]);
      }
      classCnt[tempClassArr[i]] = (classCnt[tempClassArr[i]]||0) + 1;
      if(classCnt[tempClassArr[i]] > maxCount){
        maxCount = classCnt[tempClassArr[i]];
      }
    }
  }
});

// sort classes by frequency
classes.sort(function(a,b){
  return classCnt[b] - classCnt[a];
});

// init
var model = [];
var colorPicker = maxCount;
var darkBlue = false;
var darkYellow = false;

// prepare data for view
for(index in classes){
  if(classes[index] == ""){
    continue;
  }

  var tempObj = {};
  var count = classCnt[classes[index]];
  tempObj.name = classes[index];
  // assign count attribute
  tempObj.count = count;

  // alternate light/dark colors per class
  if((index/classes.length) < 0.33 || (index/classes.length) > 0.66){
    // set to blue
    if(darkBlue){
      tempObj.color = "label-primary dark"
    }
    else{
      tempObj.color = "label-primary"
    }
    darkBlue = !darkBlue;
  }
  else{
    // set to yellow
    if(darkYellow){
      tempObj.color = "label-warning dark"
    }
    else{
      tempObj.color = "label-warning"
    }
    darkYellow = !darkYellow;
  }
  // colorPicker --;

  // set size of text by normalizing count vector
  var normalVal = (tempObj.count)/(maxCount) * 50
  if(normalVal > 12){
    tempObj.size = 'font-size: '+ normalVal.toString() + 'px;';
  }
  // size min threshold of 65
  else{
    tempObj.size = 'font-size: 12px;';
  }
  model.push(tempObj);
}


// write to localstorage
var dataModel = JSON.stringify(model);
dataModel = btoa(dataModel);
localStorage.setItem('_dataModel', dataModel);
