function editElementClass(elementQuery = "", index = 0, newClass = "", removeThisClass = "") {
  const element = document.querySelectorAll(elementQuery);
  element[index].classList += ` ${newClass}`;
  if (removeThisClass !== "") {
    const stringOfTheClass = returnStringOfTheElementClass(elementQuery, index);
    const classEdited = stringOfTheClass.replace(removeThisClass, "");
    element[index].classList = classEdited;
  }
}


function returnStringOfTheElementClass(elementQuery = "", index = 0) {
  const element = document.querySelectorAll(elementQuery);
  const len = element[index].classList.length;
  let i, stringClass = "";
  for (i = 0; i < len; i++) {
    stringClass += ` ${element[index].classList[i]}`;
  }
  return stringClass;
}


function executeRippleAnimation(elementQuery = "", index = 0, endAnimation = false) {
  if(endAnimation === false) { 
    editElementClass(elementQuery, index, "darkRippleAnimation"); 
  } else { 
    setTimeout(() => { editElementClass(elementQuery, index, "", "darkRippleAnimation"); }, 300);
  }
}