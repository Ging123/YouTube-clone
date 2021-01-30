var bigHoverIsVisible = true;
var loop, loop1;
var alreadyScrolling = false;
var ms = 0;

var KindOfVideosName = ["Beats", "Animes", "Movies", "Cars", "Lo-fi music", "Rapping", "Live", "Podcast", "Nintendo", "Sonic", "Games",
  "Mobile Legends", "Hunter x Hunter", "One piece", "Javascript", "Css", "Html", "Tutorial", "Education", "Cats"];

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


function createNewImage(imageClasse = "", imageSrc = "") {
  const newImage = document.createElement("img");
  newImage.src = imageSrc;
  newImage.classList = imageClasse;
  newImage.alt = "it wasn´t possible to load the image";
  return newImage;
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


function putVideoTagsOnTheBarOfKindOfVideos() {
  const length = KindOfVideosName.length;
  const tags = new Array(length);
  const bar = document.getElementById("videoKindBar");
  for (let i = 0; i < length; i++) {
    tags[i] = createNewElement("div", KindOfVideosName[i], "kindOfVideos");
    bar.appendChild(tags[i]);
  }
}

//FUNCTION OF INTERATIONS
function manipulateTheLeftHoverByClick() {
  if (window.innerWidth > 1301) {
    if (bigHoverIsVisible === true) {
      editElementClass("#leftHover", 0, "noVisibleElement");
      editElementClass("#smallLeftHover", 0, "", "noVisibleElement");
      bigHoverIsVisible = false;
      adjustTheSizeOfTheVideoKindBar();
      adjusteTheSizeOfThePreviousIcone();
      editElementClass("#gridContainerForTheVideos", 0, "gridContainerForTheVideosBig", "gridContainerForTheVideosSmall")
    } else {
      editElementClass("#smallLeftHover", 0, "noVisibleElement");
      editElementClass("#leftHover", 0, "", "noVisibleElement");
      bigHoverIsVisible = true;
      adjustTheSizeOfTheVideoKindBar(false);
      adjusteTheSizeOfThePreviousIcone(false);
      editElementClass("#gridContainerForTheVideos", 0, "gridContainerForTheVideosSmall", "gridContainerForTheVideosBig");
    }
  } else {
    openOrCloseTheLeftHoverModel();
  }
}


function adjustTheSizeOfTheVideoKindBar(getBig = true) {
  if (getBig === true) {
    editElementClass("#videoKindBar", 0, "videoKindBarSmall", "videoKindaBarBig");
  } else {
    editElementClass("#videoKindBar", 0, "videoKindaBarBig", "videoKindBarSmall");
  }
}


function adjusteTheSizeOfThePreviousIcone(goToLeft = true) {
  if (goToLeft === true) {
    editElementClass("#leftArrow", 0, "adjusteLeftArrow", "normalLeftArrow");
  } else {
    editElementClass("#leftArrow", 0, "normalLeftArrow", "adjusteLeftArrow");

  }
}


function openOrCloseTheLeftHoverModel(openHover = true) {
  clearInterval(loop);
  if (openHover === true) {
    editElementClass("#model", 0, "", "noVisibleElement");
    editElementClass(".youtubeLogo", 1, "", "noVisibleElement");
    editElementClass("#leftHover", 0, "leftHoverMoveAnimation", "noVisibleElement");
    document.querySelectorAll("#leftHover")[0].id = "leftHoverFromModel";
    loop = setInterval(closeTheModelIfTheSizeOfTheScreenBeBig, 1);
  } else {
    editElementClass("#model", 0, "noVisibleElement");
    editElementClass(".youtubeLogo", 1, "noVisibleElement");
    editElementClass("#leftHoverFromModel", 0, "", "leftHoverMoveAnimation");
    document.querySelectorAll("#leftHoverFromModel")[0].id = "leftHover";
  }
}


function closeTheModelIfTheSizeOfTheScreenBeBig() {
  if (window.innerWidth > 1301) {
    openOrCloseTheLeftHoverModel(false);
    if (bigHoverIsVisible === true) {
      bigHoverIsVisible = false;
      manipulateTheLeftHoverByClick();
    } else {
      bigHoverIsVisible = true;
      manipulateTheLeftHoverByClick();
    }
  }
}


function scrollTheBarOfTheVideosTags(scrollForRight = true) {
  const bar = document.getElementById("videoKindBar");
  if (alreadyScrolling === false) {
    loop1 = setInterval(() => {
      alreadyScrolling = true;
      if (ms < 200) {
        if (scrollForRight === true) {
          bar.scrollLeft += 10;
        } else {
          bar.scrollLeft -= 10;
        }
        ms += 10;
      } else {
        clearInterval(loop1);
        showLeftArrowIfNeed(bar);
        showRightArrowIfNeed(bar);
        ms = 0, alreadyScrolling = false;
      }
    }, 1);
  }
}


function showLeftArrowIfNeed(bar) {
  if (bar.scrollLeft > 0) {
    editElementClass("#leftArrow", 0, "", "noVisibleElement");
  } else {
    editElementClass("#leftArrow", 0, "noVisibleElement");
  }
}


function showRightArrowIfNeed(bar) {
  if (bar.offsetWidth + bar.scrollLeft >= bar.scrollWidth) {
    editElementClass("#rightArrow", 0, "noVisibleElement");
    bar.scrollLeft = bar.offsetWidth + bar.scrollLeft;
  } else {
    editElementClass("#rightArrow", 0, "", "noVisibleElement");
  }
}


putRippleEfectsInTheIcones();
putIconesAndSpanInTheDivInTheSmallHover();
putVideoTagsOnTheBarOfKindOfVideos();