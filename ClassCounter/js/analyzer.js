//  analyze css classes
// populate class objects
var classes = {};
var maxCount = 0;
[].forEach.call(document.querySelectorAll("*"), function(element) {
  if (element.className) {
    var tempClassArr = element.className.split(" ");
    for(i in tempClassArr) {
      if (tempClassArr[i] in classes) {
        classes[tempClassArr[i]] ++;
        if(classes[tempClassArr[i]] > maxCount){
          maxCount = classes[tempClassArr[i]];
        }
      }else{
        classes[tempClassArr[i]] = 1;
      }
    }
  }
});
//group by frequency
var model = [];
var colorPicker = maxCount;
var darkBlue = false;
var darkYellow = false;
for(className in classes){
  // console.log(className);
  if(className == ""){
    continue;
  }
  // i will be equal to the count of each class - 1
  var tempObj = {};
  var count = classes[className];
  tempObj.name = className;
  // assign count attribute
  tempObj.count = count;

  // alternate colors per line
  if(tempObj.count % 2 == 0){
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
