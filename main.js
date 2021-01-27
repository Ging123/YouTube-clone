var bigHoverIsVisible = true;

var SmallLeftHoverOptions = {
  classes: ["fas fa-home", "fas fa-fire", "fas fa-tv", "fas fa-book-open"],
  iconesName: ["Home", "Trending", "Subscriptions", "Library"]
};

//FUNCTIONS FOR MANIPULATE OR CREATE ELEMENTS
function createNewElement(tag = "", text = "", elementClass = "", id = "") {
  const newElement = document.createElement(tag);
  newElement.textContent = text;
  newElement.classList = elementClass;
  newElement.id = id;
  return newElement;
}


function editElementClass(elementQuery = "", index = 0, newClass = "", removeSomeClass = "") {
  const element = document.querySelectorAll(elementQuery);
  element[index].classList += ` ${newClass}`;
  if (removeSomeClass !== "") {
    const stringOfTheClass = returnStringOfTheElementClass(elementQuery, index);
    const classEdited = stringOfTheClass.replace(removeSomeClass, "");
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
  if (endAnimation === false) {
    editElementClass(elementQuery, index, "darkRippleAnimation");
  } else {
    setTimeout(() => { editElementClass(elementQuery, index, "", "darkRippleAnimation"); }, 220);
  }
}

//FUNCTIONS EXECUTED WHEN THE SITE IS OPEN
function putRippleEfectsInTheIcones() {
  const icones = document.getElementsByClassName("circularIconeBorder");
  const len = icones.length;
  for (let i = 0; i < len; i++) {
    icones[i].addEventListener("mousedown", () => { executeRippleAnimation(".circularIconeBorder", i) });
    icones[i].addEventListener("mouseup", () => { executeRippleAnimation(".circularIconeBorder", i, true) });
    icones[i].addEventListener("mouseout", () => { executeRippleAnimation(".circularIconeBorder", i, true) })
  }
}


function putIconesAndSpanInTheDivInTheSmallHover() {
  const div = document.querySelectorAll("#smallLeftHover div");
  const divLength = div.length;
  const icone = new Array(divLength), span = new Array(divLength);
  for (let i = 0; i < divLength; i++) {
    icone[i] = createNewElement("i", "", SmallLeftHoverOptions.classes[i]);
    span[i] = createNewElement("span", SmallLeftHoverOptions.iconesName[i]);
    div[i].appendChild(icone[i]);
    div[i].appendChild(span[i]);
  }
}

//FUNCTION OF INTERATIONS
function manipulateTheLeftHoverByClick() {
  const screenWidth = window.innerWidth;
  if (screenWidth > 1301) {
    if (bigHoverIsVisible === true) {
      editElementClass("#leftHover", 0, "noVisibleElement");
      editElementClass("#smallLeftHover", 0, "", "noVisibleElement");
      bigHoverIsVisible = false;
    } else {
      editElementClass("#smallLeftHover", 0, "noVisibleElement");
      editElementClass("#leftHover", 0, "", "noVisibleElement");
      bigHoverIsVisible = true;
    }
  } else {
    openOrCloseTheLeftHoverModel();
  }
}


function openOrCloseTheLeftHoverModel(openHover = true) {
  if(openHover === true) {
    editElementClass("#model", 0, "", "noVisibleElement");
    editElementClass("#leftHover", 0, "leftHoverMoveAnimation", "noVisibleElement");
    document.querySelectorAll("#leftHover")[0].id = "leftHoverFromModel";
  } else {
    editElementClass("#model", 0, "noVisibleElement");
    editElementClass("#leftHoverFromModel", 0, "", "leftHoverMoveAnimation");
    document.querySelectorAll("#leftHoverFromModel")[0].id = "leftHover";
  }
}

putRippleEfectsInTheIcones();
putIconesAndSpanInTheDivInTheSmallHover();