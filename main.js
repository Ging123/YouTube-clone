const youtubeVideo = {
  videoImageSrc: ["https://i.ytimg.com/vi/PeCbEGzy6i8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCSBUZX_FyuRAm_bl_86J8tl_i2ew"
  ],
  videoTitle:["Sonic chill musics"],
  channelName:["Zequinha games"],
  channelImage:["https://yt3.ggpht.com/ytc/AAUvwnh8ofZQlcMov1-2sGtvlnINYkG7yA127u77nBXs-Q=s68-c-k-c0x00ffffff-no-rj"
  ]
}

//FUNCTION TO CREATE ARRAYS
function combineArray(array1, array2) {
  let arrayCombined = new Array(array1.length);
  for(let i = 0; i < array1.length; i++) {
    arrayCombined[i] = `${array1[i]}${array2}`;
  }
  return arrayCombined;
}


function returnArrayOfTimeOfVideo(len = 0) {
  const arrayOfTime = new Array(len);
  const duration = ["short", "medium", "long"];
  let durationIndex = 0, seconds = 0, minutes = 0, hours = 0;
  for (let i = 0; i < len; i++) {
    durationIndex = Math.floor(Math.random() * 3);
    if (duration[durationIndex] === "short") {
      arrayOfTime[i] = createARandomTime();
    } 
    else if(duration[durationIndex] === "medium") {
      arrayOfTime[i] = createARandomTime(true);
    } 
    else if(duration[durationIndex] === "long") {
      arrayOfTime[i] = createARandomTime(true, true);
    }
  }
  return arrayOfTime;
}


function createARandomTime(hasMinutes = false, hasHours = false) {
  let time = 0;
  let seconds = Math.floor(Math.random() * 59 + 1);
  let minutes = Math.floor(Math.random() * 60);
  let hours = Math.floor(Math.random() * 24);
  [seconds, minutes, hours] = putAZeroInFrontOfAllIntThatIsLessThanNine(seconds, minutes, hours);
  if (hasMinutes === false) {
    time = `0:${seconds}`;
  } else if (hasMinutes === true && hasHours === false) {
    time = `${minutes}:${seconds}`;
  }
  if (hasHours === true) {
    time = `${hours}:${minutes}:${seconds}`;
  }
  return time;
}


function putAZeroInFrontOfAllIntThatIsLessThanNine(...value) {
  const newValue = new Array(value.length);
  for(let i = 0; i < value.length; i++) {
    newValue[i] = value[i];
    if(value[i] <= 9) {
      newValue[i] = `0${value[i]}`;
    }
  }
  return newValue;
}


function returnArrayOfViews(len = 0) {
  const arrayOfViews = new Array(len);
  const howMuchViews = ["fewViews", "mediumViews", "aLotOfViews"];
  let index = 0;
  for(let i = 0; i < len; i++) {
    index = Math.floor(Math.random() * 3);
    if (howMuchViews[index] === "fewViews") {
      arrayOfViews[i] = `${Math.floor(Math.random() * 999 + 1)}views • `;
    } 
    else if(howMuchViews[index] === "mediumViews") {
      arrayOfViews[i] = `${Math.floor(Math.random() * 999 + 1)}K views • `;
    } 
    else if(howMuchViews[index] === "aLotOfViews") {
      arrayOfViews[i] = `${Math.floor(Math.random() * 999 + 1)}M views • `;
    }
  }
  return arrayOfViews;
}


function returnArrayOfDataOfTheVideoRelease(len = 0) {
  const arrayOfTheData = new Array(len);
  const howMuchTimePassSinceTheRelease = ["few", "medium", "much"];
  let index = 0;
  for(let i = 0; i < len; i++) {
    index = Math.floor(Math.random() * 3);
    if (howMuchTimePassSinceTheRelease[index] === "few") {
      arrayOfTheData[i] = `${Math.floor(Math.random() * 3 + 1)} week ago`;
    } 
    else if(howMuchTimePassSinceTheRelease[index] === "medium") {
      arrayOfTheData[i] = `${Math.floor(Math.random() * 11 + 1)} month ago`;
    } 
    else if(howMuchTimePassSinceTheRelease[index] === "much") {
      arrayOfTheData[i] = `${Math.floor(Math.random() * 99 + 1)} year Ago`;
    }
  }
  return arrayOfTheData;
}


//FUNCTIONS TO MANIPULATE AND CREATE HMTL ELEMENTS
function createANewHtmlElement(tag = "", className = "", len = 0, ...text) {
  const newElement = new Array(len);
  for (let i = 0; i < len; i++) {
    newElement[i] = document.createElement(tag);
    newElement[i].classList = className;
    if (text.length <= 1) {
      newElement[i].textContent = text;
    } else {
      newElement[i].textContent = text[i];
    }
  }
  return newElement;
}


function createAImgElement(imageClass = "", len = 0, ...src) {
  const img = new Array(len);
  for (let i = 0; i < len; i++) {
    img[i] = document.createElement("img");
    img[i].src = src[i];
    img[i].alt = "it wasn´t possible to load the image";
    img[i].classList = imageClass;
  }
  return img;
}


function appendHtmlElementOnAnother(elementFatherQuery = "", isElementFatherAnId = false,
  ...elementChild) {
  const elementFather = document.querySelectorAll(elementFatherQuery);
  for (let i = 0; i < elementChild.length; i++) {
    if (isElementFatherAnId === true) {
      elementFather[0].appendChild(elementChild[i])
    } else {
      elementFather[i].appendChild(elementChild[i]);
    }
  }
}


//MAIN FUNCTIONS
function createAndPutTheVideosContainerOnHtml() {
  const len = youtubeVideo.videoImageSrc.length;
  const videoContainer = createANewHtmlElement("div", "videoContainer", len, "");
  appendHtmlElementOnAnother("#gridOfYoutubeVideos", true, ...videoContainer);
  
  putImageOfTheVideoInTheContainer(len);
  putTimeOnTheImageOfTheVideo(len);
  putTheVideosInfo(len);
}


function putImageOfTheVideoInTheContainer(len = 0) {
  const videoImageContainer = createANewHtmlElement("div", "videoImageContainer", len, "");
  const videoImgSrc = createAImgElement("videoImage", len, youtubeVideo.videoImageSrc);
  appendHtmlElementOnAnother(".videoContainer", false, ...videoImageContainer);
  appendHtmlElementOnAnother(".videoImageContainer", false, ...videoImgSrc);
  putIconesOnTheVideoImg(len);
}


function putIconesOnTheVideoImg(len = 0) {
  const clockIconeContainer = createANewHtmlElement("div", "videoHover watch", len, "");
  const spanOfTheClock = createANewHtmlElement("span", "", len, "watch later");
  const clockIcone = createANewHtmlElement("i", "fas fa-clock", len, "");

  const bufferIconeContainer = createANewHtmlElement("div", "videoHover add", len, "");
  const spanOfTheBuffer = createANewHtmlElement("span", "", len, "add to queue");
  const bufferIcone = createANewHtmlElement("i", "fab fa-buffer", len, "");

  appendHtmlElementOnAnother(".videoImageContainer", false, ...clockIconeContainer);
  appendHtmlElementOnAnother(".watch", false, ...spanOfTheClock);
  appendHtmlElementOnAnother(".watch", false, ...clockIcone);

  appendHtmlElementOnAnother(".videoImageContainer", false, ...bufferIconeContainer);
  appendHtmlElementOnAnother(".add", false, ...spanOfTheBuffer);
  appendHtmlElementOnAnother(".add", false, ...bufferIcone);
}


function putTimeOnTheImageOfTheVideo(len = 0) {
  const time = returnArrayOfTimeOfVideo(len);
  const div = createANewHtmlElement("div", "videoTime", len, ...time);
  appendHtmlElementOnAnother(".videoImageContainer", false, ...div);
}


function putTheVideosInfo(len = 0) {
  const videoInfosContainer = createANewHtmlElement("div", "videosInfos", len, "");
  const channelImage = createAImgElement("channelImage", len, youtubeVideo.channelImage);
  const i = createANewHtmlElement("i", "fas fa-ellipsis-v addToQueue", len, "");

  const infosOfTheVideo = createANewHtmlElement("div", "infos", len, "");
  const videoTitle = createANewHtmlElement("div", "videoTitle", len, youtubeVideo.videoTitle);
  const channelName = createANewHtmlElement("div", "channelName", len, youtubeVideo.channelName);
  
  appendHtmlElementOnAnother(".videoContainer", false, ...videoInfosContainer);
  appendHtmlElementOnAnother(".videosInfos", false, ...channelImage);
  appendHtmlElementOnAnother(".videosInfos", false, ...infosOfTheVideo);
  appendHtmlElementOnAnother(".infos", false, ...videoTitle);
  appendHtmlElementOnAnother(".infos", false, ...channelName);
  putTheViewsAndDataReleaseOfTheVideo(len);
  appendHtmlElementOnAnother(".videosInfos", false, ...i);
}


function putTheViewsAndDataReleaseOfTheVideo(len = 0) {
  const views = returnArrayOfViews(len);
  const dataRelease = returnArrayOfDataOfTheVideoRelease(len);
  const combinedArrays = combineArray(views, dataRelease);
  const viewsSpan = createANewHtmlElement("span", "viewAndYear", len, ...combinedArrays);
  appendHtmlElementOnAnother(".infos", false, ...viewsSpan);
}

createAndPutTheVideosContainerOnHtml();